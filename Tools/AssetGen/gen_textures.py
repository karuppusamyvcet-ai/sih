#!/usr/bin/env python3
"""
AMBEDKAR: THE DIGITAL HERITAGE JOURNEY — procedural PBR texture & artwork generator.
Pure-Python (no PIL/numpy dependency). Writes albedo PNGs, tangent-space normal maps (*_n.png),
UI sprites, and museum exhibit plates directly into the Unity Assets tree.

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
    raw = bytearray()
    for row in px:
        raw.append(0)
        for r, g, b, a in row:
            raw.extend((
                0 if r < 0 else (255 if r > 255 else int(r)),
                0 if g < 0 else (255 if g > 255 else int(g)),
                0 if b < 0 else (255 if b > 255 else int(b)),
                0 if a < 0 else (255 if a > 255 else int(a)),
            ))
    def chunk(tag, data):
        c = tag + data
        return struct.pack(">I", len(data)) + c + struct.pack(">I", zlib.crc32(c) & 0xffffffff)
    out  = b"\x89PNG\r\n\x1a\n"
    out += chunk(b"IHDR", struct.pack(">IIBBBBB", w, h, 8, 6, 0, 0, 0))
    out += chunk(b"IDAT", zlib.compress(bytes(raw), 6))
    out += chunk(b"IEND", b"")
    with open(path, "wb") as f:
        f.write(out)
    print("  wrote", os.path.relpath(path, ROOT), f"({w}x{h})")

def write_normal_map(path, hmap, strength=3.0):
    """Convert 2D height grid [0..1] into tangent-space normal map PNG."""
    h = len(hmap)
    w = len(hmap[0])
    px = []
    for y in range(h):
        ym = (y - 1) % h
        yp = (y + 1) % h
        row_m = hmap[ym]
        row_0 = hmap[y]
        row_p = hmap[yp]
        out_row = []
        for x in range(w):
            xm = (x - 1) % w
            xp = (x + 1) % w
            # Sobel X and Y
            dx = ((row_m[xp] + 2.0 * row_0[xp] + row_p[xp]) -
                  (row_m[xm] + 2.0 * row_0[xm] + row_p[xm])) * strength
            dy = ((row_p[xm] + 2.0 * row_p[x] + row_p[xp]) -
                  (row_m[xm] + 2.0 * row_m[x] + row_m[xp])) * strength
            inv = 1.0 / math.sqrt(dx * dx + dy * dy + 1.0)
            nx = int((-dx * inv * 0.5 + 0.5) * 255.0)
            ny = int((-dy * inv * 0.5 + 0.5) * 255.0)
            nz = int((1.0 * inv * 0.5 + 0.5) * 255.0)
            out_row.append((nx, ny, nz, 255))
        px.append(out_row)
    png_write(path, w, h, px)

# ------------------------------------------------------------- value noise
def value_noise(w, h, octaves=4, seed=1):
    rnd = random.Random(seed)
    layers = []
    for o in range(octaves):
        gw, gh = max(2, 2 << o), max(2, 2 << o)
        grid = [[rnd.random() for _ in range(gw)] for _ in range(gh)]
        layers.append((gw, gh, grid))
    def sample(x, y):
        v = 0.0; amp = 0.5; tot = 0.0
        for (gw, gh, grid) in layers:
            fx, fy = (x / w) * gw, (y / h) * gh
            x0, y0 = int(fx), int(fy)
            tx, ty = fx - x0, fy - y0
            tx = tx * tx * (3.0 - 2.0 * tx)
            ty = ty * ty * (3.0 - 2.0 * ty)
            x0m = x0 % gw; x1m = (x0 + 1) % gw
            y0m = y0 % gh; y1m = (y0 + 1) % gh
            r0 = grid[y0m]; r1 = grid[y1m]
            a = r0[x0m]; b = r0[x1m]
            c = r1[x0m]; d = r1[x1m]
            v += ((a * (1.0 - tx) + b * tx) * (1.0 - ty) + (c * (1.0 - tx) + d * tx) * ty) * amp
            tot += amp; amp *= 0.5
        return v / tot
    return sample

def lerp(a, b, t): return a + (b - a) * t
def mix(c1, c2, t):
    t = 0.0 if t < 0.0 else (1.0 if t > 1.0 else t)
    return (int(c1[0] + (c2[0] - c1[0]) * t),
            int(c1[1] + (c2[1] - c1[1]) * t),
            int(c1[2] + (c2[2] - c1[2]) * t))

# ---------------------------------------------------------------- marble (PBR)
def marble(path, base, vein, size=512, seed=7, vein_dark=0.55):
    n  = value_noise(size, size, 6, seed)
    n2 = value_noise(size, size, 5, seed + 40)
    px = []
    hmap = []
    tile = size // 2
    for y in range(size):
        row = []
        hrow = []
        ty_grout = min(y % tile, tile - 1 - (y % tile))
        for x in range(size):
            tx_grout = min(x % tile, tile - 1 - (x % tile))
            grout = 1.0 if (tx_grout < 2 or ty_grout < 2) else 0.0
            n_val = n(x, y)
            n2_val = n2(x, y)
            # primary diagonal vein family
            t = (x / size * 18.0) + (y / size * 4.5) + n2_val * 12.0 + n_val * 3.0
            v = abs(math.sin(t)) ** 24.0
            # secondary fine breccia fissure
            t2 = (y / size * 9.0) - (x / size * 3.0) + n_val * 8.0
            v2 = abs(math.sin(t2)) ** 14.0 * 0.32
            # broad clouding
            cloud = n2_val * 0.14
            c = mix(base, vein, min(1.0, v * vein_dark + v2 + cloud * 0.35))
            grain = (n_val - 0.5) * 0.08
            if grout > 0.0:
                c = mix(c, vein, 0.45)
            c = tuple(max(0, min(255, int(cc * (1.0 + grain)))) for cc in c)
            row.append((c[0], c[1], c[2], 255))
            # height map: polished flat with slight dip along veins and tile bevel
            bevel = min(1.0, min(tx_grout, ty_grout) / 5.0)
            h_val = 0.85 * bevel - v * 0.12 - v2 * 0.08 + n_val * 0.04
            hrow.append(h_val)
        px.append(row)
        hmap.append(hrow)
    png_write(path, size, size, px)
    npath = path[:-4] + "_n.png"
    write_normal_map(npath, hmap, strength=2.2)

# ---------------------------------------------------------------- wood (PBR)
def wood(path, dark=(116, 78, 46), light=(168, 122, 74), size=512, seed=3):
    n = value_noise(size, size, 5, seed)
    n_fine = value_noise(size, size, 6, seed + 19)
    px = []
    hmap = []
    plank = 8
    pw = size // plank
    for y in range(size):
        row = []
        hrow = []
        for x in range(size):
            pi = x // pw
            px_in = x % pw
            nv = n(x, (y + pi * 67) % size)
            nf = n_fine(x * 2, y)
            ring = math.sin((x * 0.055) + nv * 10.0 + math.sin(y * 0.02) * 1.5) * 0.5 + 0.5
            pores = ((x * 7 + y * 3) % 11 == 0) and (nf > 0.62)
            c = mix(dark, light, ring * 0.82 + nv * 0.18)
            seam = 1.0 if (px_in < 2 or px_in >= pw - 1) else 0.0
            bevel = min(1.0, min(px_in, pw - 1 - px_in) / 6.0)
            jitter = ((pi * 53) % 7 - 3) * 0.022
            pore_dip = 0.08 if pores else 0.0
            c = tuple(max(0, min(255, int(cc * (0.94 + jitter - pore_dip) - seam * 55))) for cc in c)
            row.append((c[0], c[1], c[2], 255))
            hrow.append(0.75 * bevel + ring * 0.08 - pore_dip * 0.9 + nf * 0.04)
        px.append(row)
        hmap.append(hrow)
    png_write(path, size, size, px)
    write_normal_map(path[:-4] + "_n.png", hmap, strength=2.8)

# ---------------------------------------------------------------- sandstone wall (PBR)
def sandstone(path, size=512, seed=11):
    n = value_noise(size, size, 6, seed)
    n2 = value_noise(size, size, 4, seed + 31)
    px = []
    hmap = []
    course_h = size // 8
    block_w = size // 4
    for y in range(size):
        row = []
        hrow = []
        cy = y // course_h
        by = y % course_h
        for x in range(size):
            bx = (x + (cy % 2) * (block_w // 2)) % block_w
            g = n(x, y)
            g2 = n2(x, y)
            # subtle per-block colour variation like real Dholpur/Agra sandstone
            block_id = ((x + (cy % 2) * (block_w // 2)) // block_w) + cy * 7
            b_tint = ((block_id * 37) % 11 - 5) * 0.012
            strata = math.sin(y * 0.14 + g2 * 6.0) * 0.5 + 0.5
            c = mix((210, 192, 160), (178, 158, 124), g * 0.7 + strata * 0.3)
            c = tuple(max(0, min(255, int(cc * (1.0 + b_tint)))) for cc in c)
            dy_edge = min(by, course_h - 1 - by)
            dx_edge = min(bx, block_w - 1 - bx)
            d_edge = min(dx_edge, dy_edge)
            if d_edge < 3:
                c = mix(c, (132, 118, 92), 0.65)
            elif d_edge < 6:
                c = mix(c, (222, 206, 176), 0.22)  # chiselled highlight margin
            row.append((c[0], c[1], c[2], 255))
            bevel = min(1.0, d_edge / 6.0)
            hrow.append(bevel * 0.75 + g * 0.18 + strata * 0.07)
        px.append(row)
        hmap.append(hrow)
    png_write(path, size, size, px)
    write_normal_map(path[:-4] + "_n.png", hmap, strength=3.6)

# ---------------------------------------------------------------- coffer ceiling (PBR)
def ceiling(path, size=512):
    px = []
    hmap = []
    cell = size // 4
    gold = (198, 158, 78); deep = (34, 40, 62); mid = (56, 64, 92); light_beam = (76, 84, 114)
    for y in range(size):
        row = []
        hrow = []
        for x in range(size):
            cx, cy = x % cell, y % cell
            m = min(cx, cy, cell - 1 - cx, cell - 1 - cy)
            # central rosette distance
            rc = math.hypot(cx - cell * 0.5, cy - cell * 0.5)
            if m < cell * 0.08:
                c = light_beam; h = 1.0
            elif m < cell * 0.14:
                c = mid; h = 0.82
            elif m < cell * 0.20:
                c = gold; h = 0.68
            elif m < cell * 0.27:
                c = mix(deep, mid, 0.35); h = 0.42
            else:
                # recessed panel with subtle circular brass boss in center
                if rc < cell * 0.10:
                    c = mix(gold, deep, rc / (cell * 0.10) * 0.5)
                    h = 0.38 + math.cos(rc / (cell * 0.10) * math.pi * 0.5) * 0.18
                else:
                    c = mix(deep, (20, 24, 38), 0.55)
                    h = 0.20
            row.append((c[0], c[1], c[2], 255))
            hrow.append(h)
        px.append(row)
        hmap.append(hrow)
    png_write(path, size, size, px)
    write_normal_map(path[:-4] + "_n.png", hmap, strength=4.2)

# ---------------------------------------------------------------- paper & parchment
def paper(path, size=512, seed=21, aged=True, tone_shift=(0, 0, 0)):
    n = value_noise(size, size, 6, seed)
    n2 = value_noise(size, size, 4, seed + 15)
    px = []
    c_hi = (234 + tone_shift[0], 222 + tone_shift[1], 194 + tone_shift[2])
    c_lo = (212 + tone_shift[0], 195 + tone_shift[1], 160 + tone_shift[2])
    for y in range(size):
        row = []
        laid = 0.02 if (y % 6 == 0) else 0.0  # subtle antique laid-paper wire lines
        for x in range(size):
            g = n(x, y) * 0.75 + n2(x, y) * 0.25
            c = mix(c_hi, c_lo, min(1.0, g + laid))
            if aged:
                edge = min(x, y, size - 1 - x, size - 1 - y) / (size * 0.14)
                edge = min(1.0, edge)
                c = mix((172, 146, 106), c, edge)
            row.append((c[0], c[1], c[2], 255))
        px.append(row)
    png_write(path, size, size, px)

# ---------------------------------------------------------------- carpet (PBR)
def carpet(path, size=512):
    n = value_noise(size, size, 5, 33)
    px = []
    hmap = []
    base = (34, 44, 80); gold = (192, 154, 82); accent = (108, 42, 46); cream = (216, 202, 170)
    for y in range(size):
        row = []
        hrow = []
        for x in range(size):
            c = base
            e = min(x, y, size - 1 - x, size - 1 - y)
            weave = ((x & 1) ^ (y & 1)) * 0.06
            if e < 8:
                c = gold; h = 0.65
            elif e < 14:
                c = base; h = 0.55
            elif e < 28:
                # ornamental guard border
                pat = ((x // 8) + (y // 8)) % 2
                c = gold if pat == 0 else accent
                h = 0.62
            elif e < 34:
                c = cream; h = 0.60
            elif e < 40:
                c = gold; h = 0.64
            else:
                # diamond trellis & floral medallion lattice
                t0, t1 = (x + y) % 64, (x - y) % 64
                cx, cy = (x % 64) - 32, (y % 64) - 32
                md = abs(cx) + abs(cy)
                if t0 < 3 or t1 < 3:
                    c = mix(base, gold, 0.62); h = 0.62
                elif 10 <= md <= 13:
                    c = mix(base, accent, 0.70); h = 0.58
                elif md < 6:
                    c = mix(base, gold, 0.75); h = 0.64
                else:
                    w = math.sin(x * 0.12) * math.sin(y * 0.12)
                    c = mix(base, (26, 34, 64), (w + 1.0) * 0.25 + n(x, y) * 0.15)
                    h = 0.48
            c = tuple(max(0, min(255, int(cc * (0.96 + weave)))) for cc in c)
            row.append((c[0], c[1], c[2], 255))
            hrow.append(h + weave * 2.2)
        px.append(row)
        hmap.append(hrow)
    png_write(path, size, size, px)
    write_normal_map(path[:-4] + "_n.png", hmap, strength=3.0)

# ---------------------------------------------------------------- rotunda floor medallion (PBR)
def floor_medallion(path, size=512):
    """Inlaid marble & brass 24-spoke Ashoka Chakra architectural floor medallion."""
    n = value_noise(size, size, 5, 77)
    px = []
    hmap = []
    cx = cy = (size - 1) * 0.5
    max_r = size * 0.48
    cream = (232, 224, 208)
    lapis = (36, 48, 84)
    brass = (204, 166, 86)
    slate = (58, 68, 98)
    for y in range(size):
        row = []
        hrow = []
        dy = y - cy
        for x in range(size):
            dx = x - cx
            r = math.hypot(dx, dy) / max_r
            ang = math.atan2(dy, dx)
            gv = n(x, y) * 0.08
            if r > 1.0:
                c = cream; h = 0.55
            elif r > 0.94:
                c = brass; h = 0.75
            elif r > 0.84:
                # outer lotus / geometric key border
                pet = abs(math.sin(ang * 24.0))
                c = brass if pet > 0.82 else lapis
                h = 0.68 if pet > 0.82 else 0.52
            elif r > 0.79:
                c = brass; h = 0.75
            elif r > 0.24:
                # 24 spokes of the Chakra
                spoke_a = (ang % (math.pi * 2.0 / 24.0)) - (math.pi / 24.0)
                arc_dist = abs(spoke_a) * r
                if arc_dist < 0.016:
                    c = brass; h = 0.74
                elif arc_dist < 0.030 and 0.42 < r < 0.70:
                    c = mix(brass, slate, 0.4); h = 0.64
                else:
                    c = lapis if ((int(r * 10) % 2) == 0) else slate
                    h = 0.50
            elif r > 0.19:
                c = brass; h = 0.76
            else:
                # central hub
                c = brass if r < 0.09 else lapis
                h = 0.78 if r < 0.09 else 0.54
            c = tuple(max(0, min(255, int(cc * (0.96 + gv)))) for cc in c)
            row.append((c[0], c[1], c[2], 255))
            hrow.append(h + gv * 0.3)
        px.append(row)
        hmap.append(hrow)
    png_write(path, size, size, px)
    write_normal_map(path[:-4] + "_n.png", hmap, strength=3.2)

# ---------------------------------------------------------------- suit worsted wool fabric & leather (PBR)
def suit_fabric(path, size=256):
    """Fine navy worsted wool herringbone/twill weave for realistic character clothing."""
    n = value_noise(size, size, 4, 51)
    px = []
    hmap = []
    base = (28, 36, 66)
    hi   = (38, 48, 84)
    for y in range(size):
        row = []
        hrow = []
        for x in range(size):
            hb = 1 if ((x // 8) % 2 == 0) else -1
            twill = ((x + y * hb) % 4) / 3.0
            nv = n(x, y) * 0.15
            t = twill * 0.65 + nv
            c = mix(base, hi, t)
            row.append((c[0], c[1], c[2], 255))
            hrow.append(0.4 + twill * 0.35 + nv * 0.2)
        px.append(row)
        hmap.append(hrow)
    png_write(path, size, size, px)
    write_normal_map(path[:-4] + "_n.png", hmap, strength=2.4)

def leather_dark(path, size=256):
    """Full-grain dark leather for museum benches, shoes, and archival bindings."""
    n1 = value_noise(size, size, 6, 63)
    n2 = value_noise(size, size, 5, 64)
    px = []
    hmap = []
    base = (48, 34, 26)
    hi   = (76, 54, 42)
    for y in range(size):
        row = []
        hrow = []
        for x in range(size):
            g = n1(x, y)
            g2 = n2(x, y)
            pebble = abs(math.sin(x * 0.35 + g * 5.0) * math.cos(y * 0.35 + g2 * 5.0))
            c = mix(base, hi, pebble * 0.7 + g * 0.3)
            row.append((c[0], c[1], c[2], 255))
            hrow.append(0.35 + pebble * 0.45 + g * 0.15)
        px.append(row)
        hmap.append(hrow)
    png_write(path, size, size, px)
    write_normal_map(path[:-4] + "_n.png", hmap, strength=2.6)

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
            glow = math.exp(-((x / w - 0.70) ** 2) * 14) * math.exp(-((t - 0.8) ** 2) * 30)
            c = mix(c, (232, 178, 120), min(1.0, glow))
            row.append((c[0], c[1], c[2], 255))
        px.append(row)
    png_write(path, w, h, px)

# ================================================================ UI sprites
def rounded(path, size=32, radius=8, color=(255, 255, 255), border_highlight=False):
    px = []
    r = radius
    for y in range(size):
        row = []
        for x in range(size):
            dx = max(r - x, 0, x - (size - 1 - r)); dy = max(r - y, 0, y - (size - 1 - r))
            d = math.hypot(dx, dy)
            a = 255 if d <= r - 1.0 else (int((r - d) * 255) if d < r else 0)
            c = color
            if border_highlight and a > 0:
                edge = min(x, y, size - 1 - x, size - 1 - y)
                if edge <= 1 or abs(d - (r - 1.5)) < 1.2:
                    c = tuple(min(255, int(cc * 1.12)) for cc in color)
            row.append((c[0], c[1], c[2], max(0, a)))
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

# ================================================================ exhibit images
def portrait_art(path, w=512, h=640):
    """Dignified museum oil-portrait visualization of Dr. B. R. Ambedkar on canvas weave.
    Clearly labelled in-game as an artistic visualization, rendered with realistic chiaroscuro
    lighting, facial anatomy, round spectacles, white shirt, patterned red tie, and navy suit."""
    n = value_noise(w, h, 5, 99)
    px = []
    cx = w * 0.5
    # Palette
    bg_top = (28, 36, 58)
    bg_bot = (54, 48, 44)
    gold_hi = (224, 188, 108)
    gold_lo = (142, 108, 48)
    navy = (24, 34, 64)
    navy_hi = (44, 58, 98)
    navy_sh = (14, 18, 36)
    shirt_c = (238, 236, 230)
    tie_base = (144, 36, 42)
    tie_hi = (182, 58, 62)
    skin_base = (146, 102, 74)
    skin_hi = (178, 132, 98)
    skin_sh = (96, 64, 46)
    hair_c = (22, 20, 24)

    for y in range(h):
        row = []
        ny = y / h
        for x in range(w):
            nx = x / w
            # Subtle canvas weave
            weave = (((x % 3 == 0) + (y % 3 == 0)) - 0.66) * 0.025
            g = n(x, y) * 0.06 + weave

            # Museum backdrop with warm halo behind the subject
            radial = math.hypot((nx - 0.5) * 1.1, (ny - 0.42) * 1.0)
            halo = max(0.0, 1.0 - radial * 1.45) ** 1.8
            c = mix(bg_top, bg_bot, ny)
            c = mix(c, (118, 98, 76), halo * 0.55)

            # Ornate bevelled museum gilt frame
            e = min(x, y, w - 1 - x, h - 1 - y)
            if e < 26:
                bevel = math.sin(e / 26.0 * math.pi * 3.0) * 0.5 + 0.5
                c = mix(gold_lo, gold_hi, bevel)
                if 10 <= e <= 13:
                    c = (48, 36, 24)
                c = tuple(max(0, min(255, int(cc * (1.0 + g * 0.5)))) for cc in c)
                row.append((c[0], c[1], c[2], 255))
                continue

            # --- Torso & Tailored Navy Suit (ny: 0.54 .. 0.96) ---
            shoulder_curve = 0.555 + ((nx - 0.5) * 1.45) ** 2 * 0.14 + max(0.0, abs(nx - 0.5) - 0.22) ** 2 * 2.8
            arm_edge = 0.37 - max(0.0, 0.72 - ny) * 0.18
            if ny > shoulder_curve and abs(nx - 0.5) < arm_edge:
                # Directional chiaroscuro lighting from upper-left + sleeve cylinder roll-off
                edge_roll = max(0.0, (abs(nx - 0.5) - 0.24) / 0.14) ** 2 * 0.35
                shade = 0.58 - (nx - 0.5) * 0.42 - (ny - 0.64) * 0.22 - edge_roll
                c = mix(navy_sh, navy_hi, max(0.0, min(1.0, shade)))

                # Sleeve seam creases
                if abs(abs(nx - 0.5) - 0.255) < 0.004 and ny > 0.65:
                    c = mix(c, navy_sh, 0.55)

                # Notched lapels
                v_open = max(0.0, (0.86 - ny) * 0.31)
                lapel_dist = abs(abs(nx - 0.5) - v_open)
                if ny < 0.86 and lapel_dist < 0.042 and abs(nx - 0.5) >= v_open * 0.88:
                    lap_shade = 0.72 if (nx < 0.5) else 0.46
                    c = mix(navy, navy_hi, lap_shade)
                    if abs(lapel_dist - 0.039) < 0.004:
                        c = navy_sh

                # Breast pocket & fountain pen on viewer's right (subject's left chest)
                if 0.73 < ny < 0.752 and 0.575 < nx < 0.675:
                    c = navy_sh
                if 0.715 < ny <= 0.732 and 0.59 < nx < 0.66:
                    c = (232, 230, 224)  # white pocket kerchief edge
                if 0.708 < ny < 0.748 and abs(nx - 0.612) < 0.0045:
                    c = gold_hi  # fountain pen clip

                # Crisp white shirt V-front & collar
                if ny < 0.86 and abs(nx - 0.5) < v_open:
                    s_shade = 0.94 - abs(nx - 0.5) * 1.35
                    c = tuple(int(sc * max(0.72, min(1.0, s_shade))) for sc in shirt_c)
                    # Collar points
                    if ny < 0.645:
                        col_line = abs(abs(nx - 0.5) - (ny - 0.545) * 0.72)
                        if col_line < 0.005:
                            c = (176, 172, 166)

                    # Red tie (knot + blade with subtle diagonal rep stripe)
                    tie_w = 0.021 if ny < 0.632 else (0.017 + (ny - 0.632) * 0.058)
                    if ny > 0.590 and abs(nx - 0.5) < tie_w:
                        stripe = 1.0 if ((int((x + y) * 0.35) % 6) == 0) else 0.0
                        tc = mix(tie_base, tie_hi, 0.55 - (nx - 0.5) * 8.0)
                        if stripe > 0.0:
                            tc = mix(tc, (210, 178, 118), 0.30)
                        if abs(ny - 0.632) < 0.005:
                            tc = tuple(int(v * 0.7) for v in tc)
                        c = tc

            # --- Neck (ny: 0.48 .. 0.60) ---
            if 0.48 < ny < 0.595 and abs(nx - 0.5) < 0.074:
                n_shade = 0.42 - (nx - 0.5) * 2.2 - max(0.0, (0.545 - ny) * 4.2)
                c = mix(skin_sh, skin_base, max(0.08, min(0.85, n_shade)))

            # --- Head & Facial Anatomy (center ~(0.5, 0.375)) ---
            hx = (nx - 0.5) / 0.142
            hy = (ny - 0.375) / 0.168
            # Realistic cranial vault & jaw contour
            jaw_taper = 1.0 - max(0.0, hy - 0.05) * 0.22 + max(0.0, -hy - 0.15) * 0.06
            r2 = (hx / jaw_taper) ** 2 + hy ** 2

            # Ears
            for side in (-1.0, 1.0):
                ex = (nx - (0.5 + side * 0.138)) / 0.021
                ey = (ny - 0.392) / 0.042
                if ex * ex + ey * ey < 1.0 and r2 >= 0.88:
                    c = mix(skin_sh, skin_base, 0.52 if side < 0 else 0.30)

            if r2 < 1.0:
                # 3D sphere normal approximation for realistic facial chiaroscuro
                nz = math.sqrt(max(0.02, 1.0 - r2 * 0.88))
                dot = max(0.0, -hx * 0.30 - hy * 0.26 + nz * 0.88)
                cheek = math.exp(-((abs(hx) - 0.42) ** 2) * 14.0 - ((hy - 0.08) ** 2) * 20.0) * 0.12
                chin_hl = math.exp(-(hx ** 2) * 18.0 - ((hy - 0.72) ** 2) * 35.0) * 0.08
                eye_socket = math.exp(-((abs(hx) - 0.35) ** 2) * 22.0 - ((hy + 0.05) ** 2) * 45.0) * 0.18
                tone = max(0.05, min(1.0, dot + cheek + chin_hl - eye_socket))
                if tone < 0.55:
                    c = mix(skin_sh, skin_base, tone / 0.55)
                else:
                    c = mix(skin_base, skin_hi, (tone - 0.55) / 0.45)

                # Nose bridge, tip & soft alar base shading
                if -0.08 < hy < 0.33 and abs(hx) < 0.15:
                    nw = 0.060 + max(0.0, hy - 0.08) * 0.22
                    if abs(hx) < nw:
                        n_light = 0.70 - hx * 1.9 - max(0.0, hy - 0.25) * 2.5
                        c = mix(skin_sh, skin_hi, max(0.18, min(0.92, n_light)))
                        if 0.28 < hy < 0.32 and 0.035 < abs(hx) < 0.095:
                            c = mix(c, skin_sh, 0.65)

                # Eyebrows (softly arched)
                if -0.22 < hy < -0.13 and 0.14 < abs(hx) < 0.56:
                    brow_y = -0.175 + (abs(hx) - 0.34) ** 2 * 0.26
                    if abs(hy - brow_y) < 0.022:
                        c = mix(c, hair_c, 0.78)

                # Eyes (natural almond shape with calm upper/lower eyelids)
                for side in (-1.0, 1.0):
                    ex = (hx - side * 0.34) / 0.135
                    ey = (hy + 0.045) / 0.044
                    almond = 1.0 - (ex ** 2) * 0.35
                    if abs(ex) < 1.0 and abs(ey) < almond:
                        c = (218, 210, 198)
                        ir = math.hypot((hx - side * 0.34) / 0.058, (hy + 0.045) / 0.046)
                        if ir < 1.0:
                            c = (48, 30, 22) if ir > 0.46 else (14, 12, 14)
                            if math.hypot(hx - (side * 0.34 - 0.018), hy + 0.056) < 0.014:
                                c = (238, 234, 226)
                        # Soft upper eyelid shadow
                        if ey < -0.35:
                            c = mix(c, skin_sh, 0.65)
                    if abs(ex) < 1.05 and -1.25 < ey < -0.82:
                        c = mix(c, (42, 26, 20), 0.72)

                # Mustache (neat, softly tapered above upper lip)
                if 0.35 < hy < 0.45 and abs(hx) < 0.28:
                    m_arch = 0.395 + (hx ** 2) * 0.38
                    taper = 1.0 - (abs(hx) / 0.28) ** 2 * 0.45
                    if abs(hy - m_arch) < 0.036 * taper:
                        c = mix(c, hair_c, 0.84)

                # Lips (calm, composed expression)
                if 0.46 <= hy < 0.57 and abs(hx) < 0.24:
                    lip_w = 1.0 - (abs(hx) / 0.24) ** 2
                    if abs(hy - 0.505) < 0.010 * lip_w:
                        c = mix(c, (64, 36, 30), 0.75)
                    elif hy < 0.505 and abs(hy - 0.485) < 0.022 * lip_w:
                        c = mix(c, (112, 68, 56), 0.55)
                    elif hy >= 0.505 and abs(hy - 0.530) < 0.026 * lip_w:
                        c = mix(c, (132, 84, 70), 0.48)

                # Combed dark hair with neat side part (single unified contour)
                part_dip = 0.055 * math.exp(-((hx + 0.36) ** 2) * 35.0)
                hair_line = -0.45 + (hx * 0.25) ** 2 - part_dip
                side_temple = abs(hx) > (0.76 + max(0.0, hy + 0.2) * 0.45) and hy < 0.04
                if hy < hair_line or side_temple:
                    h_shine = math.exp(-((hx + 0.18) ** 2) * 7.0 - ((hy + 0.68) ** 2) * 18.0) * 0.24
                    c = mix(hair_c, (62, 68, 84), h_shine)

            # --- Signature Round Spectacles ---
            for side in (-1.0, 1.0):
                gx = nx - (0.5 + side * 0.050)
                gy = ny - 0.366
                gr = math.hypot(gx, gy)
                if abs(gr - 0.036) < 0.0042:
                    c = mix((46, 36, 28), gold_hi, 0.45)  # rim
                elif gr < 0.034:
                    # Subtle diagonal glass reflection glint
                    glint = math.exp(-((gx * 18.0 + gy * 14.0 + 0.15) ** 2) * 18.0) * 0.18
                    c = mix(c, (220, 232, 245), glint)
            # Bridge & temples
            if abs(ny - 0.364) < 0.0035 and abs(nx - 0.5) < 0.016:
                c = mix((46, 36, 28), gold_hi, 0.55)
            if abs(ny - 0.366) < 0.0032 and 0.085 < abs(nx - 0.5) < 0.142:
                c = (46, 36, 28)

            c = tuple(max(0, min(255, int(cc * (1.0 + g)))) for cc in c)
            row.append((c[0], c[1], c[2], 255))
        px.append(row)
    png_write(path, w, h, px)

def manuscript(path, w=512, h=640, seed=5, seal=True, ornate_border=False):
    """High-detail archival document plate — ruled ink lines, header typography blocks,
    wax/ink museum seal, and aged rag-paper fiber texture."""
    rnd = random.Random(seed)
    n = value_noise(w, h, 5, seed)
    px = []
    ink = (52, 42, 34)
    red_ink = (146, 54, 44)
    gold_ink = (184, 144, 68)
    strokes = []
    y0 = 138 if ornate_border else 115
    margin_x = 76 if ornate_border else 66
    while y0 < h - 90:
        seg = []
        x0 = margin_x + (18 if rnd.random() < 0.25 else 0)
        while x0 < w - margin_x - 20:
            wl = rnd.randint(22, 84)
            if x0 + wl > w - margin_x:
                wl = (w - margin_x) - x0
            if wl > 10:
                seg.append((x0, y0 + rnd.randint(-2, 2), wl, rnd.uniform(-0.8, 0.8)))
            x0 += wl + rnd.randint(9, 16)
        strokes.append(seg)
        y0 += rnd.randint(24, 32)

    for y in range(h):
        row = []
        for x in range(w):
            g = n(x, y)
            c = mix((230, 216, 184), (204, 186, 148), g)
            e = min(x, y, w - 1 - x, h - 1 - y) / (w * 0.10)
            c = mix((168, 142, 102), c, min(1.0, e))

            # Ornate constitutional illuminated border (for manuscript 3)
            if ornate_border:
                be = min(x, y, w - 1 - x, h - 1 - y)
                if 28 <= be <= 52:
                    if be in (28, 29, 51, 52):
                        c = mix(c, red_ink, 0.75)
                    elif (x // 10 + y // 10) % 2 == 0:
                        c = mix(c, gold_ink, 0.55)
            else:
                if 56 < x < 60 and 80 < y < h - 60:
                    c = mix(c, red_ink, 0.75)

            # Document header bar / title block
            if 74 < y < 92 and margin_x + 30 < x < w - margin_x - 30:
                if (x // 6) % 3 != 0:
                    c = mix(c, ink, 0.82)
            if 98 < y < 101 and margin_x + 10 < x < w - margin_x - 10:
                c = mix(c, red_ink, 0.70)

            for seg in strokes:
                for (sx, sy, wl, slope) in seg:
                    if sx <= x <= sx + wl:
                        yy = sy + (x - sx) * 0.015 * slope
                        if abs(y - yy) < 2.2:
                            wob = math.sin(x * 0.55 + sy) * 1.1
                            if abs(y - yy - wob) < 1.65:
                                c = mix(c, ink, 0.85)
                            break

            if seal:
                sd = math.hypot(x - (w - 118), y - (h - 118))
                if abs(sd - 40) < 4 or abs(sd - 32) < 2 or sd < 26:
                    c = mix(c, red_ink, 0.52 if sd < 26 else 0.82)
            row.append((c[0], c[1], c[2], 255))
        px.append(row)
    png_write(path, w, h, px)

def book_spines(path, w=512, h=256, seed=8):
    rnd = random.Random(seed)
    px = []
    palettes = [(88, 34, 40), (32, 46, 84), (38, 66, 48), (94, 68, 38), (58, 38, 70), (42, 42, 46)]
    x = 0
    cols = []
    while x < w:
        bw = rnd.randint(28, 56)
        bh = rnd.randint(int(h * 0.86), h - 4)
        cols.append((x, bw, bh, rnd.choice(palettes)))
        x += bw
    for y in range(h):
        row = []
        for x in range(w):
            c = (24, 20, 18)
            for (sx, bw, bh, col) in cols:
                if sx <= x < sx + bw and y >= (h - bh):
                    shade = 1.0 - 0.22 * math.sin((x - sx) / bw * math.pi)
                    c = tuple(max(0, min(255, int(cc * shade))) for cc in col)
                    if x - sx < 2 or sx + bw - x < 2:
                        c = tuple(int(cc * 0.55) for cc in c)
                    # raised spine hubs & gilt bands
                    if h * 0.26 < y < h * 0.31 or h * 0.68 < y < h * 0.72 or h * 0.85 < y < h * 0.88:
                        c = mix(c, (204, 168, 90), 0.85)
                    if h * 0.40 < y < h * 0.60 and sx + 6 < x < sx + bw - 6:
                        if (x * 7 + y * 13 + sx) % 9 < 2:
                            c = mix(c, (228, 214, 178), 0.9)
                    break
            row.append((c[0], c[1], c[2], 255))
        px.append(row)
    png_write(path, w, h, px)

# ---------------------------------------------------------------- run
if __name__ == "__main__":
    print("Textures (Albedo + Normal Maps):")
    marble(os.path.join(TEX, "marble_cream.png"), (236, 230, 218), (168, 154, 130))
    marble(os.path.join(TEX, "marble_blue.png"), (52, 60, 92), (24, 28, 46), seed=13, vein_dark=0.8)
    wood(os.path.join(TEX, "wood_warm.png"))
    wood(os.path.join(TEX, "wood_dark.png"), (74, 50, 30), (112, 80, 50), seed=9)
    sandstone(os.path.join(TEX, "sandstone_wall.png"))
    ceiling(os.path.join(TEX, "ceiling_coffer.png"))
    paper(os.path.join(TEX, "paper_aged.png"), seed=21, aged=True)
    paper(os.path.join(TEX, "parchment.png"), seed=27, aged=True, tone_shift=(-6, -8, -12))
    carpet(os.path.join(TEX, "carpet_heritage.png"))
    floor_medallion(os.path.join(TEX, "floor_medallion.png"))
    suit_fabric(os.path.join(TEX, "suit_fabric.png"))
    leather_dark(os.path.join(TEX, "leather_dark.png"))
    sky(os.path.join(TEX, "sky_gradient.png"))

    print("UI sprites:")
    rounded(os.path.join(UI, "ui_rounded.png"), 32, 8, border_highlight=True)
    rounded(os.path.join(UI, "ui_rounded_soft.png"), 48, 18, border_highlight=True)
    rounded(os.path.join(UI, "ui_rounded_gold.png"), 32, 8, (214, 178, 105), border_highlight=True)
    circle(os.path.join(UI, "ui_circle.png"))
    circle(os.path.join(UI, "ui_ring.png"), 64, (214, 178, 105), ring=26)
    arrow(os.path.join(UI, "ui_arrow.png"))
    ring_glow(os.path.join(UI, "ui_glow.png"))
    map_pin(os.path.join(UI, "ui_pin.png"))

    print("Exhibit images (artistic visualizations & archival plates):")
    portrait_art(os.path.join(IMG, "portrait_ambedkar_art.png"))
    manuscript(os.path.join(IMG, "manuscript_placeholder_1.png"), seed=5, seal=True, ornate_border=False)
    manuscript(os.path.join(IMG, "manuscript_placeholder_2.png"), seed=17, seal=False, ornate_border=False)
    manuscript(os.path.join(IMG, "manuscript_placeholder_3.png"), seed=29, seal=True, ornate_border=True)
    book_spines(os.path.join(IMG, "book_spines.png"))
    print("Done.")
