# Blade of Atheryon – Stage 1 (CPC)

![Blade of Atheryon – Stage 1](./art/blade-of-atheryon-stage1.png)

- **Machine**: Amstrad CPC 6128
- **Chip**: AY-3-8912
- **Role**: First gameplay stage theme (Whispering Woods)
- **Key**: E Dorian
- **Tempo**: ~110 BPM (Moderato)
- **Voices**: 3 (Lead, Galloping Bass, Fast Arpeggio)

## Description

The Stage 1 theme accompanies the hero as he enters the "Whispering Woods".
The atmosphere is heroic yet tinged with mystery, utilizing the Dorian mode
to evoke the fantasy adventure style typical of the 80s. The music is
driving and engaging without being frantic.

## Story / Scene

The player controls the knight through ancient woods where sunlight barely
filters through. Shadow creatures (wolves, skeletons) emerge from the thickets.
The HUD at the bottom of the screen displays the sword and health bar in
vivid Mode 0 colors.

## Technical Constraints

- 3 AY-3-8912 voices used full-time
- No modern effects (reverb, stereo)
- Exclusive use of square waves
- Short, "plucky" envelopes to detach notes clearly
- Seamless loop for continuous exploration

## Structure / Harmony

- **Progression**: i (Em) → IV (A) → v (Bm) / III (G)
- **Lead**: Narrative melody over 2 measures (Call & Response)
- **Bass**: "Gallop" rhythm (dotted eighth + sixteenth) for dynamic motion
- **Texture**: Fast arpeggio (x4) in the background to simulate magical effects

## Future Variants

- “Dark Cave” (slower tempo, no arpeggios)
- “Critical Time” (accelerated tempo if timer is low)
- “Game Over” (short jingle in E minor)

## Files

- `blade-of-atheryon-stage1.strudel.js` – Strudel code
- `art/blade-of-atheryon-stage1.png` – stage screenshot (CPC style)
- `audio/` – optional exported previews
