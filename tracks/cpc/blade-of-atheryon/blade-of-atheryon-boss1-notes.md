# Blade of Atheryon – Boss 1 (CPC)

![Blade of Atheryon – Boss 1](./art/blade-of-atheryon-boss1.png)

- **Machine**: Amstrad CPC 6128
- **Chip**: AY-3-8912
- **Role**: First Boss Battle theme (The Stone Golem)
- **Key**: C Phrygian
- **Tempo**: ~168 BPM (Fast/Urgent)
- **Voices**: 3 (Aggressive Lead, Bass Ostinato, Tension Texture)

## Description

This theme triggers when the player reaches the dungeon ruins.
The Stone Golem is a massive, slow, but devastating enemy. The music is
heavy, oppressive, and uses dissonant intervals (minor seconds) to create
a sense of immediate danger and pressure.

## Story / Scene

A heavy stone door slams shut behind the hero. The ground trembles.
The Golem assembles itself from rocks falling from the ceiling. The screen
shakes (hardware scroll effect) with every step the boss takes. The player
must dodge falling debris.

## Technical Constraints

- 3 saturated AY-3-8912 channels
- Priority on rhythm and note attack
- No long sustain (to avoid muddying the mix)
- Short repetitive structure to maintain battle tension

## Structure / Harmony

- **Progression**: Cm → Db (Typical Phrygian minor second movement)
- **Lead**: High, piercing notes with a chromatic descent at the phrase end
- **Bass**: Relentless eighth-note ostinato on the tonic and flat second
- **Texture**: Fast alternating octaves to densify the sound spectrum

## Future Variants

- “Enraged Golem” (Phase 2: Tempo +20%, added white noise)
- “Victory” (Short major fanfare)
- “Defeat” (Slow chromatic descending sound)

## Files

- `blade-of-atheryon-boss1.strudel.js` – Strudel code
- `art/blade-of-atheryon-boss1.png` – boss screenshot (CPC style)
- `audio/` – optional exported previews
