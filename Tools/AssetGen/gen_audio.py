#!/usr/bin/env python3
"""
AMBEDKAR: THE DIGITAL HERITAGE JOURNEY — physically-modeled procedural audio generator.
Writes realistic, acoustically spatialized WAVs (SFX + marble hall ambience + chamber theme)
into Assets/Audio. Pure python 'wave' module; 44100 Hz 16-bit mono.

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
    raw = bytearray()
    for s in samples:
        v = -1.0 if s < -1.0 else (1.0 if s > 1.0 else s)
        raw.extend(struct.pack("<h", int(v * 32767)))
    with wave.open(path, "wb") as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(SR)
        w.writeframes(bytes(raw))
    print("  wrote", os.path.relpath(path, ROOT), f"({len(samples)/SR:.2f}s)")

def env_exp(n, attack=0.004, tau=0.18):
    """Natural exponential physical decay envelope (plucked/struck acoustics)."""
    na = max(1, int(attack * SR))
    inv_tau = 1.0 / max(0.001, tau * SR)
    out = [0.0] * n
    for i in range(n):
        if i < na:
            out[i] = (i / na) ** 0.8
        else:
            out[i] = math.exp(-(i - na) * inv_tau)
    return out

def modal_tone(freq, dur, vol=0.5, attack=0.004, tau=0.22, partials=((1.0, 1.0, 1.0),), vibrato_hz=0.0, vibrato_depth=0.0):
    """Modal physical synthesis: each partial has (ratio, amplitude, decay_scale)."""
    n = int(dur * SR)
    na = max(1, int(attack * SR))
    out = [0.0] * n
    for ratio, amp, dscale in partials:
        f = freq * ratio
        inv_tau = 1.0 / max(0.001, tau * dscale * SR)
        phase = 0.0
        dp = 2.0 * math.pi * f / SR
        for i in range(n):
            env = (i / na) if i < na else math.exp(-(i - na) * inv_tau)
            if vibrato_hz > 0.0:
                vib = 1.0 + vibrato_depth * math.sin(2.0 * math.pi * vibrato_hz * i / SR)
                phase += dp * vib
            else:
                phase += dp
            out[i] += vol * amp * env * math.sin(phase)
    return out

def mix_into(dst, src, at=0.0, gain=1.0):
    off = int(at * SR)
    n_dst = len(dst)
    for i, s in enumerate(src):
        idx = off + i
        if 0 <= idx < n_dst:
            dst[idx] += s * gain

def hall_reverb(samples, wet=0.22):
    """Early reflections + comb diffuse tail modeling a marble museum gallery."""
    n = len(samples)
    out = samples[:]
    # Early reflection taps (ms, gain)
    taps = [
        (int(0.011 * SR), 0.36 * wet),
        (int(0.019 * SR), 0.28 * wet),
        (int(0.031 * SR), 0.22 * wet),
        (int(0.047 * SR), 0.16 * wet),
        (int(0.071 * SR), 0.11 * wet),
        (int(0.103 * SR), 0.07 * wet),
    ]
    for delay, g in taps:
        for i in range(delay, n):
            out[i] += samples[i - delay] * g
    # Simple low-passed feedback comb for warm room tail
    comb_d = int(0.037 * SR)
    lp = 0.0
    for i in range(comb_d, n):
        lp = 0.65 * lp + 0.35 * out[i - comb_d]
        out[i] += lp * (0.28 * wet)
    return out

def filtered_noise(dur, vol=0.3, lp_cut=0.12, hp_cut=0.01, seed=4, attack=0.01, hold=0.6):
    """Band-shaped physical friction noise with smooth attack/release."""
    rnd = random.Random(seed)
    n = int(dur * SR)
    out = [0.0] * n
    lp = 0.0
    hp = 0.0
    prev = 0.0
    na = max(1, int(attack * SR))
    for i in range(n):
        x = rnd.uniform(-1.0, 1.0)
        lp += lp_cut * (x - lp)
        hp = (1.0 - hp_cut) * (hp + lp - prev)
        prev = lp
        t = i / n
        g = min(1.0, i / na)
        if t >= hold:
            g *= max(0.0, 1.0 - (t - hold) / max(0.01, 1.0 - hold)) ** 1.5
        out[i] = hp * vol * g
    return out

def loopify(samples, fade=2.5):
    """Equal-power crossfade tail into head for a click-free seamless loop."""
    nf = int(fade * SR)
    if len(samples) <= nf * 2:
        return samples
    out = samples[:-nf]
    n_orig = len(samples)
    for i in range(nf):
        t = i / nf
        # Smooth cosine crossfade
        w_in = 0.5 - 0.5 * math.cos(t * math.pi)
        w_out = 1.0 - w_in
        out[i] = samples[i] * w_in + samples[n_orig - nf + i] * w_out
    return out

if __name__ == "__main__":
    print("SFX (Physically modeled + Marble Hall acoustics):")

    # 1. UI click — tactile wooden/brass mechanical key click
    s = [0.0] * int(0.085 * SR)
    mix_into(s, modal_tone(920, 0.07, 0.28, 0.001, 0.016, ((1.0, 1.0, 1.0), (2.42, 0.45, 0.6), (4.1, 0.2, 0.3))), 0.0)
    mix_into(s, filtered_noise(0.018, 0.16, 0.45, 0.08, seed=1, attack=0.001, hold=0.3), 0.0)
    write_wav(os.path.join(SFX, "ui_click.wav"), hall_reverb(s, 0.12))

    # 2. UI hover — delicate warm wooden tick
    s = modal_tone(660, 0.055, 0.14, 0.002, 0.012, ((1.0, 1.0, 1.0), (2.0, 0.25, 0.5)))
    write_wav(os.path.join(SFX, "ui_hover.wav"), s)

    # 3. Footstep on polished marble — leather heel strike + sole roll + hall reflection
    s = [0.0] * int(0.24 * SR)
    # Heel impact (wood/leather resonance at 165 Hz & 520 Hz + crisp stone transient)
    mix_into(s, modal_tone(165, 0.09, 0.34, 0.001, 0.018, ((1.0, 1.0, 1.0), (2.15, 0.55, 0.7), (3.8, 0.25, 0.4))), 0.002)
    mix_into(s, filtered_noise(0.028, 0.32, 0.28, 0.04, seed=12, attack=0.001, hold=0.25), 0.002)
    # Subtle forefoot sole tap 42ms later
    mix_into(s, modal_tone(230, 0.11, 0.22, 0.002, 0.022, ((1.0, 1.0, 1.0), (1.85, 0.45, 0.6))), 0.042)
    mix_into(s, filtered_noise(0.045, 0.18, 0.18, 0.03, seed=14, attack=0.003, hold=0.35), 0.040)
    write_wav(os.path.join(SFX, "footstep_stone.wav"), hall_reverb(s, 0.28))

    # 4. Door open — brass latch release + heavy timber double-door slide + soft stop
    s = [0.0] * int(1.35 * SR)
    # Brass latch click
    mix_into(s, modal_tone(480, 0.08, 0.22, 0.001, 0.018, ((1.0, 1.0, 1.0), (2.76, 0.4, 0.5))), 0.02)
    # Heavy timber & track glide (low resonant rumble + filtered sliding friction)
    mix_into(s, filtered_noise(1.05, 0.36, 0.055, 0.005, seed=8, attack=0.18, hold=0.68), 0.08)
    mix_into(s, modal_tone(68, 1.0, 0.22, 0.15, 0.42, ((1.0, 1.0, 1.0), (1.5, 0.45, 0.8), (2.2, 0.2, 0.5))), 0.10)
    # Cushioned pocket stop thud
    mix_into(s, modal_tone(82, 0.28, 0.30, 0.004, 0.055, ((1.0, 1.0, 1.0), (1.7, 0.35, 0.6))), 0.96)
    write_wav(os.path.join(SFX, "door_open.wav"), hall_reverb(s, 0.24))

    # 5. Page turn — realistic archival rag-paper lift, arc swish, and settle
    s = [0.0] * int(0.42 * SR)
    mix_into(s, filtered_noise(0.06, 0.20, 0.38, 0.08, seed=5, attack=0.004, hold=0.4), 0.01)
    mix_into(s, filtered_noise(0.26, 0.42, 0.26, 0.05, seed=6, attack=0.05, hold=0.55), 0.05)
    mix_into(s, filtered_noise(0.09, 0.18, 0.16, 0.02, seed=7, attack=0.01, hold=0.35), 0.27)
    write_wav(os.path.join(SFX, "page_turn.wav"), hall_reverb(s, 0.14))

    # 6. Correct answer — warm acoustic vibraphone/brass fifth & octave (A4 -> E5)
    s = [0.0] * int(1.05 * SR)
    partials_chime = ((1.0, 1.0, 1.0), (2.0, 0.32, 0.7), (3.0, 0.12, 0.45), (4.0, 0.05, 0.3))
    mix_into(s, modal_tone(523.25, 0.65, 0.28, 0.005, 0.22, partials_chime), 0.0)
    mix_into(s, modal_tone(659.25, 0.70, 0.26, 0.005, 0.24, partials_chime), 0.11)
    mix_into(s, modal_tone(783.99, 0.80, 0.28, 0.005, 0.28, partials_chime), 0.22)
    write_wav(os.path.join(SFX, "quiz_correct.wav"), hall_reverb(s, 0.25))

    # 7. Gentle incorrect — soft muted wooden marimba two-tone
    s = [0.0] * int(0.85 * SR)
    partials_wood = ((1.0, 1.0, 1.0), (3.98, 0.22, 0.35))
    mix_into(s, modal_tone(349.23, 0.38, 0.24, 0.005, 0.11, partials_wood), 0.0)
    mix_into(s, modal_tone(293.66, 0.48, 0.22, 0.005, 0.14, partials_wood), 0.15)
    write_wav(os.path.join(SFX, "quiz_incorrect.wav"), hall_reverb(s, 0.18))

    # 8. Pickup / archival card collected — warm harp/celesta triad + parchment touch
    s = [0.0] * int(0.95 * SR)
    mix_into(s, filtered_noise(0.07, 0.15, 0.30, 0.06, seed=9, attack=0.003, hold=0.4), 0.0)
    for i, f in enumerate((440.0, 554.37, 659.25)):
        mix_into(s, modal_tone(f, 0.55, 0.24, 0.004, 0.18, partials_chime), 0.03 + i * 0.085)
    write_wav(os.path.join(SFX, "pickup.wav"), hall_reverb(s, 0.24))

    # 9. New objective — authentic resonant bronze singing-bowl / temple bell harmonic
    bell_partials = ((1.0, 1.0, 1.0), (2.0, 0.35, 0.85), (2.756, 0.24, 0.65), (4.18, 0.10, 0.4))
    s = modal_tone(587.33, 1.65, 0.24, 0.006, 0.52, bell_partials)
    write_wav(os.path.join(SFX, "objective_new.wav"), hall_reverb(s, 0.30))

    # 10. Exhibit activate — warm low acoustic chord swell
    s = [0.0] * int(0.75 * SR)
    mix_into(s, modal_tone(293.66, 0.70, 0.20, 0.012, 0.24, partials_chime), 0.0)
    mix_into(s, modal_tone(440.00, 0.68, 0.18, 0.018, 0.22, partials_chime), 0.04)
    write_wav(os.path.join(SFX, "exhibit_open.wav"), hall_reverb(s, 0.22))

    # 11. Achievement — dignified 4-note heritage brass/bell motif
    s = [0.0] * int(1.85 * SR)
    for i, f in enumerate((440.0, 554.37, 659.25, 880.0)):
        mix_into(s, modal_tone(f, 0.85, 0.24, 0.006, 0.32, bell_partials), i * 0.13)
    write_wav(os.path.join(SFX, "achievement.wav"), hall_reverb(s, 0.28))

    # ------------------------------------------------------------ ambience
    print("Ambience:")
    n = int(30 * SR)
    rnd = random.Random(42)
    s = [0.0] * n
    lp1 = 0.0
    lp2 = 0.0
    # Spacious architectural hall air tone + subtle acoustic room modes
    for i in range(n):
        w = rnd.uniform(-1.0, 1.0)
        lp1 += 0.0035 * (w - lp1)
        lp2 += 0.018 * (w - lp2)
        mod = 0.85 + 0.15 * math.sin(2.0 * math.pi * i / (SR * 7.5))
        s[i] = (lp1 * 0.55 + lp2 * 0.08) * mod
    # Subtle architectural room resonance modes (A1=55Hz, E2=82.4Hz, A2=110Hz)
    for f, g in ((55.0, 0.028), (82.41, 0.018), (110.0, 0.012)):
        for i in range(n):
            slow = 0.7 + 0.3 * math.sin(2.0 * math.pi * i / (SR * 10.0) + f)
            s[i] += g * slow * math.sin(2.0 * math.pi * f * i / SR)
    write_wav(os.path.join(AMB, "hall_ambience_loop.wav"), loopify(s, 3.0))

    # ------------------------------------------------------------ music
    print("Music:")
    # Contemplative, dignified acoustic chamber piece with tanpura drone, warm strings & bansuri overtones
    DUR = 48.0
    n = int(DUR * SR)
    s = [0.0] * n
    chords = [
        (220.00, 277.18, 329.63, 440.00),   # A major
        (185.00, 220.00, 277.18, 369.99),   # F#m7
        (146.83, 220.00, 293.66, 369.99),   # Dmaj7
        (164.81, 246.94, 329.63, 415.30),   # E
    ]
    seg = DUR / len(chords)
    string_partials = ((1.0, 1.0, 1.0), (2.0, 0.42, 0.9), (3.0, 0.18, 0.8), (4.0, 0.07, 0.7))
    for ci, chord in enumerate(chords):
        base_t = ci * seg
        for ni, f in enumerate(chord):
            v = 0.038 if f < 300 else 0.026
            t = modal_tone(f, seg + 2.5, v, attack=2.4, tau=seg * 0.75,
                           partials=string_partials, vibrato_hz=4.2, vibrato_depth=0.0012)
            mix_into(s, t, max(0.0, base_t - 0.8))
        # Gentle plucked acoustic arpeggio notes in each bar
        for step, note in enumerate((chord[0] * 2, chord[2], chord[1] * 2, chord[3])):
            pluck = modal_tone(note, 3.2, 0.028, attack=0.015, tau=1.1, partials=partials_chime)
            mix_into(s, pluck, base_t + 1.5 + step * 2.4)

    # Subtle tanpura root & fifth drone (A2 + E3)
    tanpura_p = ((1.0, 1.0, 1.0), (2.0, 0.45, 0.95), (3.0, 0.25, 0.9), (4.0, 0.12, 0.85))
    mix_into(s, modal_tone(110.00, DUR, 0.032, attack=2.0, tau=DUR, partials=tanpura_p), 0.0)
    mix_into(s, modal_tone(164.81, DUR, 0.020, attack=2.5, tau=DUR, partials=tanpura_p), 0.0)
    s = hall_reverb(s, 0.26)
    s = [x * 0.82 for x in s]
    write_wav(os.path.join(MUS, "museum_theme_loop.wav"), loopify(s, 4.0))
    print("Done.")
