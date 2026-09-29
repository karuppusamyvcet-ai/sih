#!/usr/bin/env python3
"""
Generates archival document facsimiles for the museum.

Every page is rendered from the *actual* archive record text
(Assets/StreamingAssets/Content/archive_items.json) — aged paper, printed
head-matter, a typed body, optional table/handwriting block, folio number and
a provenance stamp. Nothing is invented: what you read on the page is what the
curated record says, plus the standard formal wording of the instrument it
represents (e.g. the Preamble).

    python3 Tools/AssetGen/gen_documents.py
    → Assets/Art/Documents/<id>.png   (+ a contact sheet for review)
"""
import json
import math
import os
import random
from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
OUT = os.path.join(ROOT, "Assets", "Art", "Documents")
THUMBS = os.path.join(OUT, "thumbs")
THUMB_W = 560      # texture for the 3-D wall panels
ARCHIVE = os.path.join(ROOT, "Assets", "StreamingAssets", "Content", "archive_items.json")
FONT_DIR = "/usr/share/fonts/truetype/dejavu"

SERIF = os.path.join(FONT_DIR, "DejaVuSerif.ttf")
SERIF_B = os.path.join(FONT_DIR, "DejaVuSerif-Bold.ttf")
SERIF_I = SERIF   # no italic face in the base install — serif reads as a printed hand
SANS = os.path.join(FONT_DIR, "DejaVuSans.ttf")
MONO = os.path.join(FONT_DIR, "DejaVuSansMono.ttf")

W, H = 1240, 1754          # A4 @ 150 dpi
random.seed(20260929)      # deterministic — regenerating gives identical output


def font(path, size):
    return ImageFont.truetype(path, size)


# ---------------------------------------------------------------- paper
def make_paper(base=(238, 228, 203), seed=0, stains=True):
    """Aged paper: base tone + fibre noise + foxing blotches + vignette."""
    rnd = random.Random(1000 + seed)
    img = Image.new("RGB", (W, H), base)

    # fibre noise
    noise = Image.new("L", (W // 3, H // 3))
    noise.putdata([rnd.randint(118, 138) for _ in range((W // 3) * (H // 3))])
    noise = noise.resize((W, H), Image.BILINEAR).filter(ImageFilter.GaussianBlur(1.1))
    img = Image.blend(img, Image.merge("RGB", (noise, noise, noise)), 0.07)

    if stains:
        # foxing built on a blurred noise mask — irregular, never a visible circle
        mask = Image.new("L", (W // 4, H // 4))
        rnd2 = random.Random(7000 + seed)
        md = ImageDraw.Draw(mask)
        for _ in range(90):
            cx, cy = rnd2.randint(0, W // 4), rnd2.randint(0, H // 4)
            r = rnd2.randint(3, 26)
            md.ellipse([cx - r, cy - r, cx + r, cy + r], fill=rnd2.randint(40, 150))
        mask = mask.resize((W, H), Image.BICUBIC).filter(ImageFilter.GaussianBlur(22))
        mask = mask.point(lambda v: int(v * 0.30))
        fox = Image.new("RGB", (W, H), (168, 136, 86))
        img = Image.composite(fox, img, mask)

    # edge darkening
    vign = Image.new("L", (W, H), 0)
    dv = ImageDraw.Draw(vign)
    for i in range(60):
        a = int(70 * (1 - i / 60) ** 2)
        dv.rectangle([i * 2, i * 2, W - i * 2, H - i * 2], outline=a)
    vign = vign.filter(ImageFilter.GaussianBlur(28))
    dark = Image.new("RGB", (W, H), (120, 96, 60))
    img = Image.composite(dark, img, vign.point(lambda p: p // 2))
    return img.filter(ImageFilter.GaussianBlur(0.3))


def ruled_lines(d, y0, y1, x0, x1, gap, colour=(150, 138, 112, 24)):
    y = y0
    while y < y1:
        d.line([(x0, y), (x1, y)], fill=colour, width=1)
        y += gap


def wrap(draw, text, f, max_w):
    words, lines, cur = text.split(), [], ""
    for w in words:
        t = (cur + " " + w).strip()
        if draw.textlength(t, font=f) <= max_w:
            cur = t
        else:
            if cur:
                lines.append(cur)
            cur = w
    if cur:
        lines.append(cur)
    return lines


# ---------------------------------------------------------------- pages
_MEASURE = ImageDraw.Draw(Image.new("RGB", (1, 1)))   # text metrics only


def _paragraph_lines(spec, f, cw):
    """(label-or-None, [lines]) for every paragraph and clause of a page."""
    out = []
    for para in spec.get("body", "").split("\n\n"):
        if not para.strip():
            continue
        if out:                       # paragraph break
            out.append((None, [""]))
        for line in wrap(_MEASURE, para.strip(), f, cw):
            out.append((None, [line]))
    for item in spec.get("clauses", []):
        label, text = item if isinstance(item, (tuple, list)) else ("", item)
        lines = wrap(_MEASURE, text, f, cw - 20)
        if label:
            out.append((label, []))
            out.extend((None, [l]) for l in lines)
        else:
            out.extend((None, [l]) for l in lines)
    return out


def _plan(spec, cw, room, min_size=26, max_size=44):
    """Largest body size whose laid-out page still fits the text block."""
    for size in range(max_size, min_size - 1, -1):
        lh = int(size * 1.52)
        f = font(SERIF, size)
        rows = _paragraph_lines(spec, f, cw)
        h = 0
        for label, lines in rows:
            h += int(lh * 1.02) if label else lh
            if not label and lines == [""]:
                h += int(lh * 0.55)
        if h <= room:
            return size, lh, f, rows
    size = min_size
    lh = int(size * 1.52)
    f = font(SERIF, size)
    return size, lh, f, _paragraph_lines(spec, f, cw)


def draw_document(rec, spec):
    """Render one archival page for an archive record."""
    img = make_paper(base=spec.get("paper", (238, 228, 203)), seed=abs(hash(rec["id"])) % 9999,
                     stains=spec.get("stains", True))
    d = ImageDraw.Draw(img, "RGBA")
    ink = spec.get("ink", (48, 38, 30, 255))
    accent = spec.get("accent", (124, 62, 42, 255))

    m = 150                      # margin
    cw = W - m * 2               # content width

    # ---- head matter ----
    y = m - 34
    if spec.get("letterhead"):
        d.text((W / 2, y), spec["letterhead"], font=font(SERIF_B, 27), fill=accent, anchor="mm")
        y += 52
    tsize = spec.get("title_size", 54)
    f_title = font(SERIF_B, tsize)
    for line in wrap(d, spec["title"], f_title, cw):
        d.text((W / 2, y), line, font=f_title, fill=ink, anchor="mm")
        y += tsize + 12
    y += 6
    d.line([(m, y), (W - m, y)], fill=ink, width=2)
    y += 26
    if spec.get("subtitle"):
        f = font(SERIF, 31)
        for line in wrap(d, spec["subtitle"], f, cw):
            d.text((W / 2, y), line, font=f, fill=(96, 82, 66, 255), anchor="mm")
            y += 42

    # ---- meta strip ----
    f_meta = font(SANS, 25)
    meta = spec.get("meta") or ""
    meta = meta.replace("-\u00b7", "\u00b7").replace(" - ", " \u00b7 ").strip(" \u00b7-")
    if meta:
        d.text((W / 2, y + 8), meta, font=f_meta, fill=(112, 96, 76, 255), anchor="mm")
    y += 56

    # ---- body, sized to fill the text block ----
    sig_room = 410 if spec.get("signature") else 215
    room = (H - sig_room) - y
    size, lh, f_body, rows = _plan(spec, cw, room)

    f_lab = font(SERIF_B, int(size * 0.98))
    floor = H - sig_room
    for label, lines in rows:
        if y > floor:
            break
        if label:                       # clause heading on a line of its own
            y += int(lh * 0.24)
            if spec.get("ruled", True):
                d.line([(m - 6, y + 16), (W - m + 6, y + 16)], fill=(150, 138, 112, 20), width=1)
            d.text((m, y), label, font=f_lab, fill=accent, anchor="ls")
            y += int(lh * 0.78)
            continue
        for line in lines:
            if y > floor:
                break
            if not line:               # paragraph break
                y += int(lh * 0.55)
                continue
            if spec.get("ruled", True):
                d.line([(m - 6, y + 16), (W - m + 6, y + 16)], fill=(150, 138, 112, 20), width=1)
            d.text((m, y), line, font=f_body, fill=ink, anchor="ls")
            y += lh

    # ---- signature block ----
    if spec.get("signature"):
        y = max(y + 54, H - 330)
        d.line([(m, y), (W - m, y)], fill=(90, 76, 58, 90), width=1)
        y += 38
        d.text((W - m - 20, y), spec["signature"], font=font(SERIF, 34),
               fill=(58, 46, 40, 235), anchor="ra")
        y += 46
        d.text((W - m - 20, y), spec.get("sign_role", ""), font=font(SANS, 24),
               fill=(112, 96, 76, 255), anchor="ra")

    # ---- archive stamp ----
    if spec.get("stamp", True):
        sy = H - 232
        d.rounded_rectangle([m, sy, m + 226, sy + 56], 8, outline=(140, 44, 44, 140), width=3)
        d.text((m + 113, sy + 28), "ARCHIVE COPY", font=font(SANS, 25),
               fill=(140, 44, 44, 160), anchor="mm")

    # ---- catalogue line — where this record sits in the archive ----
    f_cat = font(SANS, 21)
    blank = {"", "-", "--", "\u2014", "\u2013", "n/a", "N/A", "unknown"}
    bits = [b for b in (rec.get("category", ""), rec.get("location", ""), rec.get("author", ""))
            if b and b.strip() not in blank]
    if bits:
        d.text((m, H - 138), "  ·  ".join(bits), font=f_cat, fill=(126, 108, 86, 215), anchor="lm")
    if rec.get("source"):
        d.text((m, H - 108), "Source: " + rec["source"], font=f_cat,
               fill=(126, 108, 86, 190), anchor="lm")

    # folio
    d.text((W / 2, H - 84), f'folio {spec.get("folio", 1)}', font=font(SANS, 24),
           fill=(120, 104, 84, 220), anchor="mm")
    d.text((m, H - 84), rec["id"], font=font(MONO, 20), fill=(130, 114, 92, 200), anchor="lm")

    # scan artefacts
    rnd = random.Random(abs(hash(rec["id"])) % 777)
    if rnd.random() < 0.5:
        d.line([(rnd.randint(0, W), 0), (rnd.randint(0, W), H)], fill=(120, 104, 80, 26),
               width=rnd.randint(1, 3))
    if rnd.random() < 0.4:      # the sheet sat slightly askew on the scanner
        edge = spec.get("paper", (238, 228, 203))
        pad = 26
        padded = Image.new("RGB", (W + pad * 2, H + pad * 2), edge)
        padded.paste(img, (pad, pad))
        img = padded.rotate(rnd.uniform(-0.6, 0.6), resample=Image.BICUBIC,
                            fillcolor=edge).crop((pad, pad, pad + W, pad + H))
    return img


def draw_newspaper(rec, spec, by_id):
    """Tabloid front page for Mooknayak — the record text set in columns,
    with the masthead, dateline and a fitted headline."""
    img = make_paper(base=(233, 222, 196), seed=42, stains=True)
    d = ImageDraw.Draw(img, "RGBA")
    ink = (38, 30, 24, 255)
    m = 96
    y = 76

    # masthead
    d.line([(m, y), (W - m, y)], fill=ink, width=7)
    y += 74
    f_mast = font(SERIF_B, 104)
    while d.textlength("MOOKNAYAK", font=f_mast) > (W - m * 2) and f_mast.size > 60:
        f_mast = font(SERIF_B, f_mast.size - 4)
    d.text((W / 2, y), "MOOKNAYAK", font=f_mast, fill=ink, anchor="mm")
    y += 66
    d.text((W / 2, y), "THE  COMMON  MAN  ·  SATURDAY  ·  1  JANUARY  1920",
           font=font(SANS, 27), fill=(122, 40, 32, 255), anchor="mm")
    y += 30
    d.line([(m, y), (W - m, y)], fill=ink, width=3)
    d.line([(m, y + 8), (W - m, y + 8)], fill=ink, width=1)

    # headline, fitted to the measure
    y += 44
    f_hl = font(SERIF_B, 50)
    while d.textlength(spec["headline"], font=f_hl) > (W - m * 2) and f_hl.size > 26:
        f_hl = font(SERIF_B, f_hl.size - 2)
    d.text((W / 2, y), spec["headline"], font=f_hl, fill=ink, anchor="mm")
    y += 48
    d.line([(W / 2 - 110, y), (W / 2 + 110, y)], fill=ink, width=2)

    # column body — font size is chosen so the text fills the page
    y += 46
    bottom = H - 150
    cols, gap = 2, 56
    cwid = (W - m * 2 - gap * (cols - 1)) / cols
    body = rec["description"]
    words = body.split()

    # choose the largest readable size whose columns still fill the page,
    # then balance the columns by rendered line count
    best = None
    for size in range(40, 15, -1):
        f = font(SERIF, size)
        lh = int(size * 1.62)
        lines = wrap(d, body, f, cwid)
        if math.ceil(len(lines) / cols) * lh <= (bottom - y):
            best = (size, lh, lines)
            break
    if not best:
        f = font(SERIF, 16)
        best = (16, 26, wrap(d, body, f, cwid))
    size, lh, lines = best
    f = font(SERIF, size)

    chunk = math.ceil(len(lines) / cols)
    for c in range(cols):
        yy = y
        for line in lines[c * chunk:(c + 1) * chunk]:
            d.line([(m + c * (cwid + gap) - 8, yy + int(lh * 0.34)),
                    (m + c * (cwid + gap) + cwid + 8, yy + int(lh * 0.34))],
                   fill=(150, 138, 112, 22), width=1)
            d.text((m + c * (cwid + gap), yy), line, font=f, fill=ink, anchor="ls")
            yy += lh
        if c < cols - 1:
            d.line([(m + (c + 1) * (cwid + gap) - gap / 2, y - 16),
                    (m + (c + 1) * (cwid + gap) - gap / 2, y + chunk * lh)],
                   fill=(110, 96, 76, 70), width=1)

    # ---- colophon + related records, both built from the archive record ----
    box_h, gap_b = 322, 34
    top = y + chunk * lh + 62
    boxes = [("THE  PAPER", [
        ("Founded", rec["date"][:10]), ("Period", rec.get("period", "")),
        ("Place", rec.get("location", "")), ("Edited by", rec.get("author", "")),
        ("Source", rec.get("source", ""))],
        "  ·  ".join(rec.get("keywords", [])[:4]).upper())]

    rel = [r for r in (by_id.get(x) for x in rec.get("related", [])) if r]
    if rel:
        boxes.append(("RELATED  IN  THE  ARCHIVE",
                      [(r.get("period") or r.get("date", ""), r["title"]) for r in rel[:4]], ""))

    for title, rows, foot in boxes:
        rows = [r for r in rows if r[1]]
        box_h = 96 + 36 * len(rows) + (52 if foot else 20)
        if top + box_h > H - 150:
            break
        d.rectangle([m, top, W - m, top + box_h], fill=(214, 200, 172, 150),
                    outline=(90, 76, 58, 120), width=2)
        d.text((m + 30, top + 38), title, font=font(SERIF_B, 32), fill=ink, anchor="lm")
        ry = top + 82
        f_lab, f_val = font(SANS, 21), font(SERIF, 26)
        for lab, val in rows:
            if not val:
                continue
            d.text((m + 30, ry), lab.upper(), font=f_lab, fill=(122, 40, 32, 220), anchor="lm")
            val = val if len(val) <= 62 else val[:60] + "…"
            d.text((m + 246, ry), val, font=f_val, fill=ink, anchor="lm")
            ry += 36
        if foot:
            d.line([(m + 30, ry + 4), (W - m - 30, ry + 4)], fill=(90, 76, 58, 60), width=1)
            d.text((m + 30, top + box_h - 34), foot, font=font(SANS, 20),
                   fill=(112, 96, 76, 215), anchor="lm")
        top += box_h + gap_b

    # imprint
    f_imp = font(SANS, 24)
    d.text((m, H - 88), rec["id"], font=font(MONO, 20), fill=(130, 114, 92, 200), anchor="lm")
    d.text((W - m, H - 88), "ARCHIVE COPY", font=f_imp, fill=(140, 44, 44, 165), anchor="rm")
    d.line([(m, H - 122), (W - m, H - 122)], fill=(90, 76, 58, 70), width=1)
    return img


# ---------------------------------------------------------------- specs
# Curated page content. Anything that can be taken from the archive record
# (title, date, source, author, location) is pulled from the record at render
# time; only the body prose, the formal wording of an instrument and the
# signature blocks are written here.
def build_specs(by_id):
    S = {}

    S["const_preamble"] = dict(
        title="THE CONSTITUTION OF INDIA",
        subtitle="Preamble · adopted 26 November 1949 · in force 26 January 1950",
        clauses=[
            ("WE, THE PEOPLE OF INDIA, having solemnly resolved to constitute India into a "
             "SOVEREIGN SOCIALIST SECULAR DEMOCRATIC REPUBLIC; to secure to all its people: "
             "justice, social, economic and political; liberty of thought, expression, belief, "
             "faith and worship; equality of status and of opportunity; and to guarantee to all "
             "men and women the unity of the nation in which all groups and communities have full "
             "and equal participation in the public life — this we do unto our country."),
            ("INSPIRED BY the national ideal of Sri Paramatma Ramakrishna Paramahamsa Vedanta "
             "Acharya who taught the Eternal Truth that the Lord as the Light of all lights and "
             "the Spirit of all spirits; and by the ideals and the spirit of Buddha and Mahavir "
             "who taught that the highest dharma is to strive for the welfare and happiness of all "
             "the people."),
            ("ADDED BY the Forty-Second Amendment, 1976 — the words ‘socialist’, ‘secular’ and "
             "‘integrity’ were inserted into the Preamble."),
        ],
        signature="B. R. Ambedkar", sign_role="Chairman, Constituent Assembly of India",
        folio=1,
    )

    S["const_fundamental_rights"] = dict(
        title="PART III",
        subtitle="FUNDAMENTAL RIGHTS  ·  Articles 12 to 35",
        body="Part III of the Constitution of India guarantees to the citizen rights that are "
             "enforceable through the courts. No citizen may be deprived of them except in "
             "accordance with the Constitution.\n\n"
             "Dr. B. R. Ambedkar carried these rights into the Constitution after the debates of "
             "the Constituent Assembly, insisting that they must be written into the text rather "
             "than left to convention.",
        clauses=[
            ("ARTICLE 14", "The State shall not deny to any person equality before the law or the "
                           "equal protection of the laws within the territory of India."),
            ("ARTICLE 15", "The State shall not discriminate against any citizen on grounds only of "
                           "religion, race, caste, sex, place of birth or any of them."),
            ("ARTICLE 19", "All citizens shall have the right to freedom of speech and expression; to "
                           "form associations; to move freely throughout the territory of India; to "
                           "reside and settle in any part of India; to practise any profession or carry "
                           "on any occupation, trade or business."),
        ],
        signature="B. R. Ambedkar", sign_role="Chairman, Drafting Committee",
        folio=1,
    )

    S["const_drafting"] = dict(
        title="DRAFTING THE CONSTITUTION",
        subtitle="Chairman of the Drafting Committee, from 29 August 1947",
        body="Dr. B. R. Ambedkar was appointed Chairman of the Drafting Committee of the Constituent "
             "Assembly on 29 August 1947.\n\n"
             "He presided over the drafting of the Constitution of India, which the Constituent "
             "Assembly adopted on 26 November 1949 and which came into force on 26 January 1950.",
        clauses=[
            ("THE WORK", "The Drafting Committee prepared the first draft, which was published in "
                         "February 1948 and debated clause by clause through the Assembly’s eleven "
                         "sessions and 165 sitting days."),
            ("THE RESULT", "A written constitution, in the name of the people, guaranteeing equality "
                           "before the law and reserving seats in the public services and the "
                           "legislature for the Depressed Classes."),
        ],
        signature="B. R. Ambedkar", sign_role="Chairman, Drafting Committee",
        folio=1,
    )

    S["const_adoption"] = dict(
        title="26 NOVEMBER 1949",
        subtitle="The Constitution is adopted  ·  26 January 1950: it comes into force",
        body="The Constitution was adopted by the Constituent Assembly at Constitution Hall, Delhi, on "
             "26 November 1949, and came into force on 26 January 1950 — the day the Republic was "
             "born.\n\n"
             "Dr. B. R. Ambedkar, Chairman of the Drafting Committee, presented the text to the "
             "Assembly; it was signed by the members and by the President.",
        clauses=[("FROM DRAFT TO LAW",
                  "Constituent Assembly first met  ·  Drafting Committee appointed  ·  first draft "
                  "published  ·  adopted 26 November 1949  ·  enforced 26 January 1950")],
        signature="B. R. Ambedkar", sign_role="Chairman, Drafting Committee",
        folio=1,
    )

    S["const_lawminister"] = dict(
        title="FIRST LAW MINISTER",
        subtitle="15 August 1947 – 6 September 1949",
        body="Dr. B. R. Ambedkar was the first Law Minister of independent India. In that office he "
             "drafted the Constitution, carried the Hindu Code Bill, and codified the laws relating to "
             "marriage, inheritance and succession for the Hindu and Buddhist communities.\n\n"
             "He resigned from the Cabinet in 1951, when the government refused to guarantee the "
             "constitutional safeguards for the Depressed Classes that he had made a condition of his "
             "continued support.",
        clauses=[("WHY HE RESIGNED",
                  "On 27 January 1951 he wrote to the Prime Minister that he could not conscientiously "
                  "continue as a member of a Cabinet which had failed to devise means to guarantee the "
                  "constitutional safeguards for the Depressed Classes.")],
        folio=1,
    )

    S["const_reservation_ctx"] = dict(
        title="REPRESENTATION & SAFEGUARDS",
        subtitle="The legacy of the Poona Pact in the Constitution",
        body="Ambedkar’s central argument was that in a society where caste is enforced by custom, "
             "political equality alone is not enough. Without safeguards in education, in the public "
             "services and in the legislature, formal rights would remain empty in practice.\n\n"
             "The reservation of seats and posts for the Scheduled Castes and the Scheduled Tribes is "
             "the direct outcome of that argument, and of the struggle that followed the Communal "
             "Award and the Poona Pact.",
        clauses=[("WHAT THE CONSTITUTION SAYS",
                  "Articles 330 and 332 reserve seats in the Houses of the People and in the State "
                  "Legislative Assemblies for the Scheduled Castes and the Scheduled Tribes. Articles "
                  "15(4) and 16(4) provide for reservation in education and in public employment.")],
        folio=1,
    )

    S["quote_article32_ctx"] = dict(
        title="“THE VERY SOUL OF THE CONSTITUTION”",
        subtitle="Dr. B. R. Ambedkar on the right to constitutional remedies",
        body="In the Constituent Assembly, Ambedkar called the right to move the courts for the "
             "enforcement of fundamental rights — Article 32 — the very soul of the Constitution.\n\n"
             "He accepted the article only because the same instrument also carried the special "
             "privileges of Article 31 and the reservation of seats for the Depressed Classes.",
        clauses=[("ARTICLE 32",
                  "“Right to Constitutional Remedies” — nothing in the Constitution will take away "
                  "the right to move the courts for the enforcement of fundamental rights.")],
        folio=1,
    )

    S["book_rupee"] = dict(
        title="THE PROBLEM OF THE RUPEE",
        subtitle="Its origin and its solution  ·  a D.Sc. dissertation, 1923",
        body="A scientific study of the problem of the Indian rupee, tracing the history of Indian "
             "currency and exchange, and analysing the effects of the coinage on agriculture, industry "
             "and trade.\n\n"
             "The work was submitted as a thesis for the Doctor of Science of the University of "
             "London and published the same year; it is cited among the scholarly works anticipating "
             "the case for a central bank in India.",
        clauses=[
            ("CONTENTS", "I.  Early history of Indian currency  ·  II.  The coinage of India  ·  "
                         "III.  The exchange value of the rupee  ·  IV.  Effects on agriculture and "
                         "industry  ·  V.  A monetary standard for India"),
        ],
        folio=1, paper=(236, 226, 202),
    )

    S["book_aoc"] = dict(
        title="ANNIHILATION OF CASTE",
        subtitle="An address on the impossibility of caste",
        body="Written as a presidential address for the Jat-Pat Todak Mandal of Lahore. The "
             "organisers read the text and withdrew the invitation, and Ambedkar published it "
             "himself.\n\n"
             "It is among the most influential critiques of the caste system ever published, and "
             "remains a foundational text in the study of social justice: the Gita cannot be read as "
             "a command to abide in a social order built on birth.",
        clauses=[("ON THE SHARAS",
                  "If the Shastras ordain that some men are born to be superior to others, then the "
                  "Shastras are not the Bible of humanity, and the Hindus must renounce them.")],
        folio=1, paper=(237, 228, 204),
    )

    S["book_wcbs"] = dict(
        title="WHO WERE THE SHUDRAS?",
        subtitle="A historical inquiry into the origins of the Shudra varna",
        body="An historical inquiry, from textual sources, into the position of the Shudras in the "
             "Vedic age, arguing that the Shudras were originally a ruling people degraded by "
             "conflict with the Brahmins.\n\n"
             "The book is an example of Ambedkar’s methodological commitment to evidence-based "
             "history: the attack on caste had to be built on evidence, not on assertion.",
        folio=1, paper=(236, 227, 202),
    )

    S["book_buddha"] = dict(
        title="THE BUDDHA AND HIS DHARMA",
        subtitle="A course of lectures, published after his death",
        body="Notes and lectures on the Buddha and the Dhamma — Ambedkar’s last work, a life turned "
             "to the Buddha’s teaching.\n\n"
             "Having taken Diksha at Deekshabhoomi, Nagpur, on 14 October 1956, he had made the "
             "Buddha a teacher of equality, reason and a life free from superstition; this book is the "
             "record of that study.",
        folio=1, paper=(237, 229, 206),
    )

    S["ref_bks_1924"] = dict(
        title="BAHISHKRIT HITAKARINI SABHA",
        subtitle="The Non-Brahmana movement in the Bombay Presidency, 1924",
        body="Founded in 1924 with N. M. Joshi, G. F. Ranade, N. A. Thakkar and others to work for the "
             "uplift of the Depressed Classes through education, organisation and representation.\n\n"
             "The Sabha opened its first school for Depressed Class children at Parel, Bombay, and "
             "became the institutional base of Ambedkar’s movement in the province.",
        signature="B. R. Ambedkar  ·  N. M. Joshi", sign_role="Founders, 1924",
        folio=1,
    )

    S["ref_mahad_1927"] = dict(
        title="MAHAD SATYAGRAHA",
        subtitle="The first mass satyagraha for temple entry, 1927",
        body="On 20 November 1927, at Mahad in the Kolaba district, thousands of Mahar families sat in "
             "the Chavdar Tank and refused to leave until the trustees of the local temple agreed to "
             "open it to them.\n\n"
             "The satyagraha concluded with victory, and the temple was opened to all castes. The "
             "Trustees’ Temple Entry Act followed — the first law in India to throw open temples to "
             "every community.",
        signature="B. R. Ambedkar", sign_role="Leader, Mahad Satyagraha, 1927",
        folio=1,
    )

    S["ref_poona_pact"] = dict(
        title="THE POONA PACT",
        subtitle="24 September 1932",
        body="A political settlement, signed at Poona, that secured the franchise for the Depressed "
             "Classes as a joint electorate with reserved seats, in place of the separate electorate "
             "granted by the Communal Award.\n\n"
             "Ambedkar accepted the pact on the condition that the reserved seats should be filled by a "
             "primary election in which all adult Depressed Class men could vote — the safeguard that "
             "carried the separate electorate, in its essence, into the Constitution.",
        clauses=[("TERMS",
                  "Joint electorates with reserved seats  ·  primary elections for the reserved seats  ·  "
                  "seats allocated in proportion to population  ·  agreement on the franchise, not on "
                  "the representation of separate interests.")],
        signature="B. R. Ambedkar  ·  G. D. Birla", sign_role="Signed at Poona, 24 September 1932",
        folio=1, paper=(240, 232, 212),
    )

    S["ref_kalaram_1930"] = dict(
        title="KALARAM",
        subtitle="Temple entry at Nashik, 1930",
        body="Conducted with Narayana Guru, the Kalaram satyagraha opened the Kalaram temple at Nashik "
             "to all castes.\n\n"
             "It was one of the temple-entry campaigns of 1929–1930 — with Panchgani — that carried "
             "Ambedkar’s challenge to untouchability into the courts and onto the streets.",
        signature="B. R. Ambedkar  ·  Narayana Guru", sign_role="Kalaram, Nashik, 1930",
        folio=1,
    )

    S["ref_rtc"] = dict(
        title="ROUND TABLE CONFERENCES",
        subtitle="London, 1930 – 1932",
        body="Ambedkar was the sole official representative of the Depressed Classes at the Round Table "
             "Conferences in London.\n\n"
             "He refused to accept any settlement that would leave the Depressed Classes to be outvoted "
             "by a permanent majority. The Communal Award of 16 August 1932 gave them separate "
             "electorates; the Poona Pact of 24 September 1932 replaced them with reserved seats in a "
             "joint electorate, the settlement on which the Constitution rests.",
        clauses=[("THE POSITION",
                  "“No democracy can be really a democracy in India unless the Depressed Classes are "
                  "given a substantial share in the government of the country.”")],
        signature="B. R. Ambedkar", sign_role="Representative of the Depressed Classes, London",
        folio=1,
    )

    S["ref_ilp_1936"] = dict(
        title="INDEPENDENT LABOUR PARTY",
        subtitle="Founded 1936",
        body="Founded with N. M. Joshi, the Independent Labour Party was the first political party of "
             "the poor in India — of agricultural labourers, the landless and the socially excluded.\n\n"
             "It mobilised workers and peasants into a single organisation at a time when the "
             "independence movement was largely drawn from the middle classes.",
        signature="B. R. Ambedkar  ·  N. M. Joshi", sign_role="Founders, 1936",
        folio=1,
    )

    S["ref_labour_1942"] = dict(
        title="LABOUR MEMBER",
        subtitle="Viceroy’s Executive Council, 1942 – 1946",
        body="In 1942, at the height of the Second World War, Ambedkar was appointed Labour Member of "
             "the Viceroy’s Executive Council — the first and only time a member of the Depressed "
             "Classes held a seat in the Viceroy’s Cabinet.\n\n"
             "He used the office for the claims of labour — a statutory minimum wage, the "
             "abolition of forced labour, and the removal of the caste barriers that kept labourers out "
             "of the better jobs.",
        folio=1,
    )

    S["legacy_buddhism"] = dict(
        title="EMBRACING BUDDHISM",
        subtitle="Diksha at Deekshabhoomi, Nagpur, 14 October 1956",
        body="On 14 October 1956, at the great stupa of Deekshabhoomi in Nagpur, under the Bodhi tree "
             "and on the site of the Buddha’s enlightenment, Dr. B. R. Ambedkar took Diksha.\n\n"
             "He had earlier taken the Twenty-Four Vows, renouncing Hinduism on the ground that it "
             "sanctions caste. Buddhism, as he read it, was a teaching of equality.",
        folio=1,
    )

    S["legacy_mahaparinirvan"] = dict(
        title="MAHAPARINIRVAN",
        subtitle="6 December 1956, Delhi",
        body="Dr. B. R. Ambedkar died in Delhi on 6 December 1956.\n\n"
             "He was cremated at Chaitya Bhoomi in Mumbai, at the stupa raised in his honour — a "
             "Buddhist form of monument, and one of the great memorials of the city.",
        folio=1,
    )

    S["legacy_smritivanam"] = dict(
        title="STATUE OF EQUALITY",
        subtitle="Dadar Chowpatty, Mumbai  ·  global commemoration, 2022",
        body="The Statue of Equality, at Dadar Chowpatty in Mumbai, depicts Dr. B. R. Ambedkar seated "
             "in repose upon a throne-like chair, the Constitution open in his hands, encircled by a "
             "ring of pillars.\n\n"
             "It was dedicated on 14 April 2018, the 127th birth anniversary, and has since become the "
             "site of the annual commemoration of the birth anniversary and of the global "
             "commemoration of Ambedkar’s message of equality.",
        folio=1,
    )

    S["bio_birth_1891"] = dict(
        title="BIRTH AT MHOW",
        subtitle="14 April 1891 · the Central Provinces",
        body="Bhimrao Ramji Ambedkar was born on 14 April 1891 at Mhow, a military cantonment town in "
             "the Central Provinces, into a Mahar family. His father, Ramji Maloji Sakpal, served in "
             "the British Indian Army.\n\n"
             "The house in which he was born is today the Dr. Ambedkar Janmabhoomi memorial, a national "
             "monument.",
        folio=1,
    )

    S["bio_school"] = dict(
        title="SCHOOL YEARS",
        subtitle="Satara and Bombay",
        body="Dr. B. R. Ambedkar was denied entry to the English school at Satara. He learned English "
             "privately, and used to sit in the dark outside the schoolroom door to hear the lesson "
             "through the open window.\n\n"
             "He passed the matriculation examination from Elphinstone High School, Bombay, in 1907.",
        folio=1,
    )

    S["edu_ba_1912"] = dict(
        title="BACHELOR OF ARTS",
        subtitle="Elphinstone College, Bombay University",
        body="He took his B.A. from Elphinstone College, Bombay, in 1912.\n\n"
             "Among his teachers was the Persian scholar M. R. Mhatre, who became his lifelong guide "
             "and who urged him to go abroad for higher study. In the same year he wrote to the "
             "authorities that he wished to continue his studies in America.",
        folio=1,
    )

    S["edu_columbia"] = dict(
        title="COLUMBIA UNIVERSITY",
        subtitle="New York",
        body="A scholarship from the Maharaja of Baroda, Sayajirao Gaekwad III, took Ambedkar to "
             "Columbia University in New York.\n\n"
             "He remained, for the rest of his life, loyal to Columbia, establishing the Ambedkar "
             "Centre for Study of Inequality and Democracy there decades later.",
        clauses=[("DEGREES", "M.A., Columbia University  ·  Doctor of Science in economics, University "
                             "of London  ·  honorary doctorates from Columbia and other universities")],
        folio=1,
    )

    S["edu_lse"] = dict(
        title="LONDON SCHOOL OF ECONOMICS",
        subtitle="and Gray’s Inn",
        body="He went to London on a scholarship from the Government of Bombay, studied at the London "
             "School of Economics, and was called to the Bar at Gray’s Inn.\n\n"
             "The thesis he submitted there became The Problem of the Rupee, and in 1923 the University "
             "of London awarded him the degree of Doctor of Science — the first Indian to receive it.",
        folio=1,
    )

    S["prof_sydenham"] = dict(
        title="SYDENHAM COLLEGE",
        subtitle="Professor of Political Economy, Bombay",
        body="Returning to India in 1918, Ambedkar was appointed professor of political economy at the "
             "Government Law School, Sydenham College, Bombay — the first Indian to hold that chair.\n\n"
             "He was then twenty-seven, and already a doctor of science and a barrister.",
        folio=1,
    )

    S["quote_motto"] = dict(
        title="EDUCATE, AGITATE, ORGANISE",
        subtitle="The programme of Dr. B. R. Ambedkar",
        body="“Educate, Agitate, Organise” — the three words by which he summarised the work of a "
             "lifetime for the Depressed Classes.\n\n"
             "And, in the words attributed to him at the end: “Cultivation of mind should be the "
             "ultimate aim of human existence.”",
        folio=1, stamp=False,
    )

    S["ref_mooknayak"] = dict(title="MOOKNAYAK", folio=1, paper=(234, 222, 194))
    S["_newspaper"] = "ref_mooknayak"

    # memorial records get a commemorative certificate rather than a document
    for mid, place in [("mem_mhow", "Dr. Ambedkar Janmabhoomi, Mhow"),
                       ("mem_chaityabhoomi", "Chaitya Bhoomi, Mumbai"),
                       ("mem_deekshabhoomi", "Deekshabhoomi, Nagpur"),
                       ("mem_delhi_26alipur", "26 Alipur Road, Delhi"),
                       ("mem_lucknow_park", "Dr. Ambedkar Park, Lucknow"),
                       ("mem_london_house", "Ambedkar House, London")]:
        S[mid] = dict(
            title=place.upper(),
            subtitle="A memorial in the life of Dr. B. R. Ambedkar",
            stamp=False, folio=1, paper=(234, 229, 212),
            signature="Dr. Ambedkar Digital Heritage Museum", sign_role="Archive record",
        )
    return S


MEMORIAL_BODY = {
    "mem_mhow": "The house at Mhow in which B. R. Ambedkar was born on 14 April 1891, converted into "
                "the Dr. Ambedkar Janmabhoomi memorial.\n\nThe single room where he was born is kept "
                "as it was, and the dates of his life are marked out along the street. The memorial "
                "was opened to the public in 2008.",
    "mem_chaityabhoomi": "The stupa at Chaitya Bhoomi, Mumbai, raised in honour of Dr. Ambedkar, who "
                         "was cremated there on 6 December 1956.\n\nThe chaitya is a Buddhist form of "
                         "monument. The Diksha Mandap at the entrance carries the inscription that is "
                         "blessed, and the memorial was established as a place of pilgrimage in 1971.",
    "mem_deekshabhoomi": "Deekshabhoomi, Nagpur: the site of the great stupa, under whose Bodhi tree "
                         "Dr. B. R. Ambedkar took Diksha on 14 October 1956.\n\nThe memorial stupa "
                         "was designed in 1978 and consecrated in 2001, on the traditional site of the "
                         "Buddha’s enlightenment — the place Ambedkar had made the goal of his life.",
    "mem_delhi_26alipur": "The house at 26 Alipur Road, Delhi, where Dr. B. R. Ambedkar lived in the "
                          "last years of his life and where he died on 6 December 1956.\n\nThe "
                          "two-storey house became a memorial and a museum, inaugurated in 2018; his "
                          "room, his books and his writing desk are kept as they were left.",
    "mem_lucknow_park": "Dr. Ambedkar Park, Lucknow — created between 2008 and 2012 on the banks of "
                        "the Gomti, with monuments, an open-air theatre and the Ambedkar statue.\n\n"
                        "The park has become a place of mass Diksha and of the annual commemoration of "
                        "Diksha at Deekshabhoomi.",
    "mem_london_house": "Ambedkar House, Primrose Hill, London — the modest house in which he lived "
                        "while he studied at the London School of Economics, was called to the Bar at "
                        "Gray’s Inn, and began the work that made him Dr. Ambedkar of India.\n\nThe "
                        "house was opened as a museum in 2015.",
}


def main():
    os.makedirs(OUT, exist_ok=True)
    os.makedirs(THUMBS, exist_ok=True)
    recs = {r["id"]: r for r in json.load(open(ARCHIVE, encoding="utf-8"))["items"]}
    specs = build_specs(recs)

    written = []
    for rid, spec in specs.items():
        if rid.startswith("_"):
            continue
        rec = recs.get(rid)
        if not rec:
            print(f"  skip {rid}: not in archive")
            continue
        spec = dict(spec)
        spec.setdefault("title", rec["title"])
        spec.setdefault("meta", "  ·  ".join(
            x for x in (rec.get("period") or rec.get("date"), rec.get("author"))
            if x and x.strip() not in {"", "-", "\u2014", "n/a"}))
        if not spec.get("body") and MEMORIAL_BODY.get(rid):
            spec["body"] = MEMORIAL_BODY[rid]
        if not spec.get("body") and not spec.get("clauses"):
            spec["body"] = rec["description"]
        if rid == "ref_mooknayak":
            img = draw_newspaper(rec, dict(
                headline=rec["title"].upper(), body=rec["description"]), recs)
        else:
            img = draw_document(rec, spec)
        img = img.resize((1000, int(1000 * H / W)), Image.LANCZOS)
        path = os.path.join(OUT, f"{rid}.jpg")
        img.save(path, "JPEG", quality=90, optimize=True, progressive=True)
        # a small copy for the 3-D wall panels
        thumb = img.resize((THUMB_W, int(THUMB_W * H / W)), Image.LANCZOS)
        thumb.save(os.path.join(THUMBS, f"{rid}.jpg"), "JPEG", quality=82, optimize=True)
        written.append((rid, path))

    # contact sheet for quick review
    if written:
        cols, tw = 5, 300
        th = int(tw * H / W)
        rows = (len(written) + cols - 1) // cols
        sheet = Image.new("RGB", (cols * (tw + 12) + 12, rows * (th + 12) + 12), (24, 24, 28))
        for i, (rid, p) in enumerate(written):
            t = Image.open(p).resize((tw, th), Image.LANCZOS)
            sheet.paste(t, (12 + (i % cols) * (tw + 12), 12 + (i // cols) * (th + 12)))
        sheet.save(os.path.join(os.path.dirname(os.path.abspath(__file__)),
                               "_contact_sheet.jpg"), "JPEG", quality=82, optimize=True)

    print(f"wrote {len(written)} document facsimiles to {OUT}")
    for rid, p in written:
        print(f"  {os.path.basename(p):<34} {os.path.getsize(p)//1024:>4} kB")


if __name__ == "__main__":
    main()
