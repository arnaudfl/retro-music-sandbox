// Blade of Atheryon - BOSS BATTLE: "The Stone Golem" @by arnaudfl
// C Phrygian Mode for a heavy, oppressive feel.
// Tempo is fast (approx 168 BPM) for urgency.

setcps(1.4)

stack(
  // VOICE 1: AGGRESSIVE LEAD
  // Short, punchy notes with a chromatic descent at the end of the phrase.
  // The '|' separates the two measures of the loop.
  note(`
    [c5 c5] db5 [c5 ~] g4 | [f4 e4] f4 [g4 ~ ~ ~] |
    [c5 c5] db5 [c5 ~] bb4 | [ab4 g4] f4 [e4 f4 g4 ~]
  `)
  .s("square")
  .decay(0.05).sustain(0.1).release(0.1) // Sharp attack
  .gain(0.6),

  // VOICE 2: GOLEM'S MARCH (Bass Ostinato)
  // Driving 8th notes focusing on the root (C) and the flat 2nd (Db).
  note(`
    [c2 ~ c2 c2] [db2 ~ c2 ~] | [c2 ~ c2 c2] [g2 f2 e2 ~] |
    [c2 ~ c2 c2] [db2 ~ c2 ~] | [c2 ~ c2 c2] [bb1 ~ g1 ~]
  `)
  .s("square")
  .decay(0.15).sustain(0) // Tight bass
  .gain(0.5),

  // VOICE 3: TENSION TEXTURE
  // Fast alternating octaves/fifths (Arpeggio effect) to fill the spectrum.
  // Adds that chaotic "8-bit boss" energy.
  note("c4 g4 c5 g4")
  .fast(4) // 4x speed = 16th notes
  .s("square")
  .decay(0.05).sustain(0)
  .gain(0.25)
)