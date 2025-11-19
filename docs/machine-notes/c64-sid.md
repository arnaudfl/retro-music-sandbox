# Commodore 64 – SID Notes

- Chip: MOS 6581 / 8580
- 3 voices
- Waveforms: pulse, saw, triangle, noise
- Hardware filter (LP/HP/BP)
- Signature features: PWM, filter sweep, warm distortion

## Guidelines for Strudel

- Use `.shape("pulse")` or `.shape("saw")`
- Fake PWM by modulating parameters
- Add slight distortion for "6581 warmth"
