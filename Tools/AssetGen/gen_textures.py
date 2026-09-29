#!/usr/bin/env python3
"""
AMBEDKAR: THE DIGITAL HERITAGE JOURNEY — procedural texture generator.
Pure-Python (no PIL dependency). Writes PNGs directly into the Unity Assets tree.
Everything produced here is an original, procedurally generated asset —
no external imagery is used anywhere in the project.

Run:  python3 Tools/AssetGen/gen_textures.py
"""
import os, math, random, zlib, struct

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, "..", ".."))
TEX  = os.path.join(ROOT, "Assets", "Art", "Textures")
UI   = os.path.join(ROOT, "Assets", "Art", "UI")
IMG  = os.path.join(ROOT, "Assets", "Art", "Images")
for d in (TEX, UI, IMG):
    os.makedirs(d, exist_ok=True)

# ---------------------------------------------------------------- PNG encoder
def png_write(path, w, h, px):
    """px: list of rows, each row list of (r,g,b,a) 0-255 tuples."""
    raw = b"".join(b"\x00" + b"".join(struct.pack("4B", *p) for p in row) for row in px)
    def chunk(tag, data):
        c = tag + data
        return struct.pack(">I", len(data)) + c + struct.pack(">I", zlib.crc32(c) & 0xffffffff)
    out  = b"\x89PNG\r\n\x1a\n"
    out += chunk(b"IHDR", struct.pack(">IIBBBBB", w, h, 8, 6, 0, 0, 0))
    out += chunk(b"IDAT", zlib.compress(raw, 6))
    out += chunk(b"IEND", b"")
    with open(path, "wb") as f:
        f.write(out)
    print("  wrote", os.path.relpath(path, ROOT), f"({w}x{h})")

# ------------------------------------------------------------- value noise
def value_noise(w, h, octaves=4, seed=1):
    rnd = random.Random(seed)
    layers = []
    for o in range(octaves):
        gw, gh = max(2, 2 << o), max(2, 2 << o)
        grid = [[rnd.random() for _ in range(gw + 2)] for _ in range(gh + 2)]
        layers.append((gw, gh, grid))
    def sample(x, y):
        v = 0.0; amp = 0.5; tot = 0.0
        for (gw, gh, grid) in layers:
            fx, fy = x / w * gw, y / h * gh
            x0, y0 = int(fx), int(fy)
            tx, ty = fx - x0, fy - y0
            tx = tx * tx * (3 - 2 * tx); ty = ty * ty * (3 - 2 * ty)
            g = grid
            a = g[y0 % len(g)][x0 % len(g[0])]; b = g[y0 % len(g)][(x0 + 1) % len(g[0])]
            c = g[(y0 + 1) % len(g)][x0 % len(g[0])]; d = g[(y0 + 1) % len(g)][(x0 + 1) % len(g[0])]
            v += ((a * (1 - tx) + b * tx) * (1 - ty) + (c * (1 - tx) + d * tx) * ty) * amp
            tot += amp; amp *= 0.5
        return v / tot
    return sample

def lerp(a, b, t): return a + (b - a) * t
def mix(c1, c2, t): return tuple(int(lerp(c1[i], c2[i], t)) for i in range(3))

# ---------------------------------------------------------------- marble
def marble(path, base, vein, size=512, seed=7, vein_dark=0.55):
    n  = value_noise(size, size, 6, seed)
    n2 = value_noise(size, size, 5, seed + 40)
    px = []
    for y in range(size):
        row = []
        for x in range(size):
            # primary thin diagonal vein family
            t = (x / size * 22.0) + (y / size * 3.0) + n2(x, y) * 14.0
            v = abs(math.sin(t)) ** 22.0
            # secondary faint wide banding
            t2 = (y / size * 6.0) + n2(size - x, y) * 5.0
            v2 = abs(math.sin(t2)) ** 6.0 * 0.16
            grain = n(x, y) * 0.10
            c = base
            c = mix(c, vein, min(1.0, v * vein_dark + v2))
            c = tuple(max(0, min(255, int(cc * (0.95 + grain)))) for cc in c)
            row.append((c[0], c[1], c[2], 255))
        px.append(row)
    png_write(path, size, size, px)

# ---------------------------------------------------------------- wood
def wood(path, dark=(122, 84, 52), light=(166, 122, 76), size=512, seed=3):
    n = value_noise(size, size, 5, seed)
    px = []
    plank = 8
    for y in range(size):
        row = []
        for x in range(size):
            ring = math.sin((x * 0.045) + n(x, y) * 9.0) * 0.5 + 0.5
            c = mix(dark, light, ring * 0.85 + n(x, y) * 0.15)
            pi = (x // (size // plank))
            seam = 1.0 if x % (size // plank) < 2 else 0.0
            jitter = ((pi * 53) % 7) * 0.02
            c = tuple(max(0, min(255, int(cc * (0.92 + jitter) - seam * 60))) for cc in c)
            row.append((c[0], c[1], c[2], 255))
        px.append(row)
    png_write(path, size, size, px)

# ---------------------------------------------------------------- sandstone wall
def sandstone(path, size=512, seed=11):
    n = value_noise(size, size, 6, seed)
    px = []
    for y in range(size):
        row = []
        for x in range(size):
            g = n(x, y)
            c = mix((206, 190, 158), (180, 162, 128), g)
            # block course lines
            by = y % (size // 8); bx = (x + (y // (size // 8)) * 64) % (size // 4)
            if by < 3 or bx < 3:
                c = mix(c, (150, 135, 105), 0.55)
            row.append((c[0], c[1], c[2], 255))
        px.append(row)
    png_write(path, size, size, px)

# ---------------------------------------------------------------- coffer ceiling
def ceiling(path, size=512):
    px = []
    cell = size // 4
    gold = (198, 156, 74); deep = (38, 44, 66); mid = (58, 66, 94)
    for y in range(size):
        row = []
        for x in range(size):
            cx, cy = x % cell, y % cell
            m = min(cx, cy, cell - 1 - cx, cell - 1 - cy)
            if m > cell * 0.44:   c = mid
            elif m > cell * 0.36: c = gold
            elif m > cell * 0.30: c = deep
            elif m > cell * 0.18: c = mix(deep, mid, 0.4)
            else:                 c = mix(deep, (20, 23, 36), 0.6)
            row.append((c[0], c[1], c[2], 255))
        px.append(row)
    png_write(path, size, size, px)

# ---------------------------------------------------------------- paper
def paper(path, size=512, seed=21, aged=True):
    n = value_noise(size, size, 5, seed)
    px = []
    for y in range(size):
        row = []
        for x in range(size):
            g = n(x, y)
            c = mix((232, 220, 192), (214, 198, 164), g)
            if aged:
                edge = min(x, y, size - 1 - x, size - 1 - y) / (size * 0.12)
                edge = min(1.0, edge)
                c = mix((176, 152, 112), c, edge)
            row.append((c[0], c[1], c[2], 255))
        px.append(row)
    png_write(path, size, size, px)

# ---------------------------------------------------------------- carpet
def carpet(path, size=512):
    px = []
    base = (37, 47, 84); gold = (186, 150, 80); accent = (94, 60, 60)
    for y in range(size):
        row = []
        for x in range(size):
            c = base
            e = min(x, y, size - 1 - x, size - 1 - y)
            if e < 6: c = gold
            elif e < 14: c = accent
            elif e < 20: c = gold
            else:
                # diamond lattice
                t = ((x + y) % 64, (x - y) % 64)
                if t[0] < 2 or t[1] < 2:
                    c = mix(base, gold, 0.5)
                else:
                    n = math.sin(x * 0.11) * math.sin(y * 0.13)
                    c = mix(base, (30, 39, 70), (n + 1) * 0.25)
            row.append((c[0], c[1], c[2], 255))
        px.append(row)
    png_write(path, size, size, px)

# ---------------------------------------------------------------- gradient sky
def sky(path, w=1024, h=512):
    top = (16, 22, 46); mid = (52, 66, 108); low = (148, 128, 102)
    px = []
    for y in range(h):
        t = y / (h - 1)
        row = []
        for x in range(w):
            if t < 0.5:  c = mix(top, mid, t / 0.5)
            else:        c = mix(mid, low, (t - 0.5) / 0.5)
            # warm horizon glow on one side
            glow = math.exp(-((x / w - 0.70) ** 2) * 14) * math.exp(-((t - 0.8) ** 2) * 30)
            c = mix(c, (232, 178, 120), min(1.0, glow))
            row.append((c[0], c[1], c[2], 255))
        px.append(row)
    png_write(path, w, h, px)

# ================================================================ UI sprites
def rounded(path, size=32, radius=8, color=(255, 255, 255)):
    px = []
    r = radius
    for y in range(size):
        row = []
        for x in range(size):
            dx = max(r - x, 0, x - (size - 1 - r)); dy = max(r - y, 0, y - (size - 1 - r))
            d = math.hypot(dx, dy)
            a = 255 if d <= r - 1.0 else (int((r - d) * 255) if d < r else 0)
            row.append((color[0], color[1], color[2], max(0, a)))
        px.append(row)
    png_write(path, size, size, px)

def circle(path, size=64, color=(255, 255, 255), ring=None):
    px = []
    c = (size - 1) / 2.0
    for y in range(size):
        row = []
        for x in range(size):
            d = math.hypot(x - c, y - c)
            if ring:
                inr = d < c - ring and d > c - ring - 6
                a = 255 if (d < c - ring - 6) else (255 if inr else 0)
                if inr: row.append((color[0], color[1], color[2], a)); continue
                a = 255 if d < c - 1 else (int((c - d) * 255) if d < c else 0)
                row.append((color[0], color[1], color[2], max(0, a)))
            else:
                a = 255 if d < c - 1 else (int((c - d) * 255) if d < c else 0)
                row.append((color[0], color[1], color[2], max(0, a)))
        px.append(row)
    png_write(path, size, size, px)

def arrow(path, size=48):
    px = []
    for y in range(size):
        row = []
        for x in range(size):
            t = y / size
            half = t * size * 0.5
            inside = abs(x - size / 2) < half and 0 < y
            a = 255 if inside else 0
            row.append((255, 255, 255, a))
        px.append(row)
    png_write(path, size, size, px)

def ring_glow(path, size=128):
    px = []
    c = (size - 1) / 2.0
    for y in range(size):
        row = []
        for x in range(size):
            d = math.hypot(x - c, y - c) / c
            a = max(0.0, 1.0 - d)
            a = a * a
            row.append((255, 255, 255, int(a * 255)))
        px.append(row)
    png_write(path, size, size, px)

# ================================================================ exhibit images
def portrait_art(path, w=512, h=640):
    """Dignified silhouette portrait plate — clearly an artistic visualization,
    NOT a historical photograph. Generated geometrically."""
    cream = (236, 226, 203); navy = (31, 38, 66); gold = (198, 156, 74)
    tie_c = (140, 46, 52); skin = (96, 70, 52)
    n = value_noise(w, h, 4, 99)
    px = []
    cx = w / 2
    for y in range(h):
        row = []
        for x in range(w):
            g = n(x, y) * 0.06
            c = mix(cream, (222, 210, 184), g)
            # gold double frame
            e = min(x, y, w - 1 - x, h - 1 - y)
            if e < 8: c = gold
            elif e < 12: c = mix(gold, cream, 0.6)
            elif e < 20: c = gold
            # bust silhouette (centered, lower half)
            dx = (x - cx) / (w * 0.34); dy = (y - h * 0.86) / (h * 0.30)
            torso = dx * dx + dy * dy < 1.0 and y > h * 0.52
            hdx = (x - cx) / (w * 0.16); hdy = (y - h * 0.415) / (h * 0.17)
            head = hdx * hdx + hdy * hdy < 1.0
            if torso:
                c = navy
                # white shirt V
                vx = abs(x - cx) / (w * 0.045 + (y - h * 0.58) * 0.16)
                if y > h * 0.60 and vx < 1.0:
                    c = (238, 238, 240)
                # red tie
                tx = abs(x - cx) / (w * 0.018 + (y - h * 0.68) * 0.035)
                if y > h * 0.675 and tx < 1.0 and y < h * 0.95:
                    c = tie_c
                # lapels
                lx = abs(x - cx) - (y - h * 0.60) * 0.35
                if y > h * 0.60 and abs(lx) < w * 0.012 and vx < 2.2:
                    c = mix(navy, gold, 0.25)
            if head:
                c = mix(navy, skin, 0.35)
                # hair cap
                if y < h * 0.345 and hdx * hdx + hdy * hdy < 0.92:
                    c = (22, 20, 24)
                # round glasses
                for gx in (-w * 0.062, w * 0.062):
                    gd = math.hypot(x - (cx + gx), y - h * 0.415)
                    if abs(gd - w * 0.052) < 4.2:
                        c = (210, 200, 170)
                gb = abs(y - h * 0.415) < 2.5 and abs(x - cx) < w * 0.02
                if gb: c = (210, 200, 170)
            row.append((c[0], c[1], c[2], 255))
        px.append(row)
    png_write(path, w, h, px)

def manuscript(path, w=512, h=640, seed=5, seal=True):
    """Placeholder scanned-document look — ruled ink strokes on aged paper.
    Deliberately abstract strokes (not real script); labeled in-game as a
    digitization placeholder."""
    rnd = random.Random(seed)
    n = value_noise(w, h, 5, seed)
    px = []
    ink = (58, 48, 40)
    strokes = []
    y0 = 110
    while y0 < h - 80:
        seg = []
        x0 = 70
        while x0 < w - 70:
            wl = rnd.randint(24, 90)
            seg.append((x0, y0 + rnd.randint(-3, 3), wl, rnd.uniform(-1.2, 1.2)))
            x0 += wl + rnd.randint(10, 18)
        strokes.append(seg)
        y0 += rnd.randint(30, 40)
    for y in range(h):
        row = []
        for x in range(w):
            g = n(x, y)
            c = mix((228, 214, 182), (206, 188, 150), g)
            e = min(x, y, w - 1 - x, h - 1 - y) / (w * 0.10)
            c = mix((172, 148, 108), c, min(1.0, e))
            if 60 < x < 64 and 90 < y < h - 60:  # margin rule
                c = mix(c, (152, 64, 52), 0.8)
            for seg in strokes:
                for (sx, sy, wl, slope) in seg:
                    if sx <= x <= sx + wl:
                        yy = sy + (x - sx) * 0.02 * slope
                        d = abs(y - yy)
                        if d < 1.6:
                            wob = math.sin(x * 0.5 + sy) * 1.2
                            d2 = abs(y - yy - wob)
                            if d2 < 1.7:
                                c = mix(c, ink, 0.85)
                            break
            if seal:
                sd = math.hypot(x - (w - 120), y - (h - 120))
                if abs(sd - 42) < 5 or sd < 30:
                    c = mix(c, (150, 60, 48), 0.45 if sd < 30 else 0.8)
            row.append((c[0], c[1], c[2], 255))
        px.append(row)
    png_write(path, w, h, px)

def book_spines(path, w=512, h=256, seed=8):
    rnd = random.Random(seed)
    px = []
    palettes = [(88, 34, 40), (34, 48, 88), (40, 70, 52), (96, 74, 40), (60, 40, 74), (44, 44, 48)]
    x = 0
    cols = []
    while x < w:
        bw = rnd.randint(28, 60)
        cols.append((x, bw, rnd.choice(palettes)))
        x += bw
    for y in range(h):
        row = []
        for x in range(w):
            c = (30, 26, 24)
            for (sx, bw, col) in cols:
                if sx <= x < sx + bw:
                    shade = 1.0 - 0.18 * math.sin((x - sx) / bw * math.pi)
                    c = tuple(max(0, min(255, int(cc * shade))) for cc in col)
                    if x - sx < 2 or sx + bw - x < 2:
                        c = tuple(int(cc * 0.6) for cc in c)
                    if h * 0.28 < y < h * 0.34 or h * 0.7 < y < h * 0.74:
                        c = mix(c, (200, 164, 88), 0.85)   # gold bands
                    if h * 0.42 < y < h * 0.62 and sx + 6 < x < sx + bw - 6:
                        if (x * 7 + y * 13 + sx) % 9 < 2:
                            c = mix(c, (226, 214, 178), 0.9)  # title strokes
            row.append((c[0], c[1], c[2], 255))
        px.append(row)
    png_write(path, w, h, px)

def map_pin(path, size=64, color=(214, 171, 88)):
    px = []
    c = (size - 1) / 2.0
    for y in range(size):
        row = []
        for x in range(size):
            d = math.hypot(x - c, y - c * 0.8)
            inhead = d < c * 0.62
            tip = y > c * 0.8 and abs(x - c) < (size - y) * 0.5 and y < size - 3
            a = 255 if (inhead or tip) else 0
            hole = d < c * 0.24
            row.append((color[0], color[1], color[2], 0 if hole else a))
        px.append(row)
    png_write(path, size, size, px)

# ---------------------------------------------------------------- run
print("Textures:")
marble(os.path.join(TEX, "marble_cream.png"), (236, 230, 218), (168, 154, 130))
marble(os.path.join(TEX, "marble_blue.png"), (52, 60, 92), (24, 28, 46), seed=13, vein_dark=0.8)
wood(os.path.join(TEX, "wood_warm.png"))
wood(os.path.join(TEX, "wood_dark.png"), (74, 50, 30), (112, 80, 50), seed=9)
sandstone(os.path.join(TEX, "sandstone_wall.png"))
ceiling(os.path.join(TEX, "ceiling_coffer.png"))
paper(os.path.join(TEX, "paper_aged.png"))
carpet(os.path.join(TEX, "carpet_heritage.png"))
sky(os.path.join(TEX, "sky_gradient.png"))

print("UI sprites:")
rounded(os.path.join(UI, "ui_rounded.png"), 32, 8)
rounded(os.path.join(UI, "ui_rounded_soft.png"), 48, 18)
rounded(os.path.join(UI, "ui_rounded_gold.png"), 32, 8, (214, 178, 105))
circle(os.path.join(UI, "ui_circle.png"))
circle(os.path.join(UI, "ui_ring.png"), 64, (214, 178, 105), ring=26)
arrow(os.path.join(UI, "ui_arrow.png"))
ring_glow(os.path.join(UI, "ui_glow.png"))
map_pin(os.path.join(UI, "ui_pin.png"))

print("Exhibit images (procedural placeholders / artistic visualizations):")
portrait_art(os.path.join(IMG, "portrait_ambedkar_art.png"))
manuscript(os.path.join(IMG, "manuscript_placeholder_1.png"), seed=5)
manuscript(os.path.join(IMG, "manuscript_placeholder_2.png"), seed=17, seal=False)
manuscript(os.path.join(IMG, "manuscript_placeholder_3.png"), seed=29)
book_spines(os.path.join(IMG, "book_spines.png"))
print("Done.")
