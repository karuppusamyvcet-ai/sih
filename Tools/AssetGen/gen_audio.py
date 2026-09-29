#!/usr/bin/env python3
"""
AMBEDKAR: THE DIGITAL HERITAGE JOURNEY — procedural audio generator.
Writes original, synthesized WAVs (SFX + ambience + theme) into Assets/Audio.
Pure python 'wave' module; 44100 Hz 16-bit mono.

Run:  python3 Tools/AssetGen/gen_audio.py
"""
import os, math, wave, struct, random

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.abspath(os.path.join(HERE, "..", ".."))
SFX  = os.path.join(ROOT, "Assets", "Audio", "SFX")
MUS  = os.path.join(ROOT, "Assets", "Audio", "Music")
AMB  = os.path.join(ROOT, "Assets", "Audio", "Ambience")
for d in (SFX, MUS, AMB):
    os.makedirs(d, exist_ok=True)

SR = 44100

def write_wav(path, samples):
    samples = [max(-1.0, min(1.0, s)) for s in samples]
    with wave.open(path, "wb") as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR)
        w.writeframes(b"".join(struct.pack("<h", int(s * 32767)) for s in samples))
    print("  wrote", os.path.relpath(path, ROOT), f"({len(samples)/SR:.2f}s)")

def env_ad(n, a=0.005, d=0.15):
    out = []
    na, nd = max(1, int(a * SR)), max(1, int(d * SR))
    for i in range(n):
        if i < na: out.append(i / na)
        elif i < na + nd: out.append(1.0 - (i - na) / nd)
        else: out.append(0.0)
    return out

def tone(freq, dur, vol=0.5, attack=0.005, decay=None, harmonics=((1, 1.0),)):
    n = int(dur * SR)
    e = env_ad(n, attack, decay if decay else dur * 0.9)
    return [vol * e[i] * sum(g * math.sin(2 * math.pi * freq * h * i / SR) for h, g in harmonics)
            for i in range(n)]

def mix_into(dst, src, at=0.0):
    off = int(at * SR)
    for i, s in enumerate(src):
        if off + i < len(dst): dst[off + i] += s

def noise_lp(dur, vol=0.3, cutoff=0.12, seed=4, attack=0.01, hold=0.7):
    """Brownish low-passed noise with fade in/out — page swishes, door whoosh."""
    rnd = random.Random(seed)
    n = int(dur * SR)
    out = [0.0] * n
    v = 0.0
    for i in range(n):
        v += cutoff * (rnd.uniform(-1, 1) - v)
        t = i / n
        g = min(1.0, i / (attack * SR))
        g *= 1.0 if t < hold else max(0.0, 1.0 - (t - hold) / (1 - hold))
        out[i] = v * vol * g
    return out

def loopify(samples, fade=2.0):
    """Crossfade the tail into the head for a seamless loop."""
    nf = int(fade * SR)
    if len(samples) <= nf * 2: return samples
    out = samples[:-nf]
    for i in range(nf):
        t = i / nf
        out[i] = samples[i] * t + out[i] * (1 - t) if False else out[i]
    # simpler: wrap-blend
    out = samples[:]
    for i in range(nf):
        t = i / nf
        j = len(samples) - nf + i
        blended = samples[i] * t + samples[j] * (1 - t)
        out[i] = blended
    return out[:-nf]
    return out

# ---------------------------------------------------------------- SFX
print("SFX:")

# UI click — short, soft
s = tone(1320, 0.07, 0.35, 0.002, 0.06, ((1, 1.0), (2, 0.25)))
mix_into(s, noise_lp(0.03, 0.12, 0.3, seed=1))
write_wav(os.path.join(SFX, "ui_click.wav"), s)

# UI hover — very soft tick
write_wav(os.path.join(SFX, "ui_hover.wav"), tone(880, 0.05, 0.15, 0.003, 0.045))

# Correct answer — warm major chime (E5 -> A5)
s = [0.0] * int(0.9 * SR)
mix_into(s, tone(659.25, 0.5, 0.35, 0.005, 0.45, ((1, 1.0), (2, 0.3), (3, 0.1))), 0.0)
mix_into(s, tone(880.0, 0.55, 0.3, 0.005, 0.5, ((1, 1.0), (2, 0.25))), 0.12)
write_wav(os.path.join(SFX, "quiz_correct.wav"), s)

# Gentle incorrect — soft descending two-tone (not harsh)
s = [0.0] * int(0.8 * SR)
mix_into(s, tone(392.0, 0.35, 0.28, 0.005, 0.3), 0.0)
mix_into(s, tone(311.1, 0.42, 0.26, 0.005, 0.38), 0.16)
write_wav(os.path.join(SFX, "quiz_incorrect.wav"), s)

# Door open — whoosh + low thud
s = [0.0] * int(1.2 * SR)
mix_into(s, noise_lp(1.0, 0.5, 0.06, seed=8, attack=0.25, hold=0.55), 0.0)
mix_into(s, tone(72, 0.35, 0.4, 0.01, 0.3), 0.28)
write_wav(os.path.join(SFX, "door_open.wav"), s)

# Page turn — quick filtered noise swish
write_wav(os.path.join(SFX, "page_turn.wav"), noise_lp(0.35, 0.45, 0.35, seed=5, attack=0.05, hold=0.5))

# Pickup / collectible — small rising arpeggio
s = [0.0] * int(0.9 * SR)
for i, f in enumerate((523.25, 659.25, 783.99)):
    mix_into(s, tone(f, 0.3, 0.3, 0.004, 0.26, ((1, 1.0), (2, 0.2))), i * 0.09)
write_wav(os.path.join(SFX, "pickup.wav"), s)

# New objective — soft temple-bell like bell
s = tone(1046.5, 1.6, 0.22, 0.004, 1.5, ((1, 1.0), (2.76, 0.28), (5.4, 0.12)))
write_wav(os.path.join(SFX, "objective_new.wav"), s)

# Exhibit activate — warm low chime
write_wav(os.path.join(SFX, "exhibit_open.wav"), tone(523.25, 0.7, 0.25, 0.01, 0.65, ((1, 1.0), (3, 0.12))))

# Footstep (single, soft on stone) — game varies pitch at runtime
write_wav(os.path.join(SFX, "footstep_stone.wav"), noise_lp(0.12, 0.30, 0.09, seed=12, attack=0.002, hold=0.4))

# Achievement — dignified 4-note motif
s = [0.0] * int(1.8 * SR)
for i, f in enumerate((523.25, 659.25, 783.99, 1046.5)):
    mix_into(s, tone(f, 0.6, 0.28, 0.006, 0.55, ((1, 1.0), (2, 0.22), (4, 0.06))), i * 0.13)
write_wav(os.path.join(SFX, "achievement.wav"), s)

# ------------------------------------------------------------ ambience
print("Ambience:")
n = int(30 * SR)
rnd = random.Random(42)
s = [0.0] * n
v = 0.0
for i in range(n):
    v += 0.004 * (rnd.uniform(-1, 1) - v)     # very low rumble noise
    s[i] = v * 0.9
mix_into(s, tone(55, 30, 0.05, 4.0, 22.0, ((1, 1.0), (1.5, 0.3))), 0.0)
write_wav(os.path.join(AMB, "hall_ambience_loop.wav"), loopify(s, 3.0))

# ------------------------------------------------------------ music
print("Music:")
# Warm, respectful pad in A (add9): slow chord motion, very gentle.
DUR = 48.0
n = int(DUR * SR)
s = [0.0] * n
chords = [
    (220.0, 277.18, 329.63, 493.88),   # A add9-ish
    (174.61, 220.0, 261.63, 349.23),   # F
    (261.63, 329.63, 392.0, 493.88),   # C
    (196.0, 246.94, 293.66, 392.0),    # G
]
seg = DUR / len(chords)
for ci, chord in enumerate(chords):
    for f in chord:
        v = 0.045 if f < 300 else 0.032
        t = tone(f, seg + 2.0, v, 3.0, seg,
                 ((1, 1.0), (2, 0.18), (3, 0.05)))
        mix_into(s, t, ci * seg - 1.0 if ci > 0 else 0.0)
# soft slow pulse (tanpura-like root)
pulse = tone(110.0, DUR, 0.05, 2.0, DUR - 2.0, ((1, 1.0), (2, 0.35), (2.997, 0.1)))
mix_into(s, pulse, 0.0)
s = [x * 0.8 for x in s]
write_wav(os.path.join(MUS, "museum_theme_loop.wav"), loopify(s, 4.0))
print("Done.")
