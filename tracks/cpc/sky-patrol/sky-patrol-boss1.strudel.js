// Sky Patrol – Boss 1 Theme (CPC) @by arnaudfl
// Tense, noisy boss loop

// Around 128 BPM
setcpm(128/4)

$: stack(
  // BASS – short, punching notes on Cm → Db → Bb → G
  note("c2 ~ c2 ~   db2 ~ db2 ~   bb1 ~ bb1 ~   g1 ~ g1 ~")
    .s("square")
    .gain(0.8)
    .fast(2),

  // ARPS – dissonant-ish pattern for tension
  note("<c4 eb4 g4> <db4 f4 ab4> <bb3 d4 f4> <g3 bb3 d4>")
    .s("square")
    .gain(0.5)
    .fast(4),

  // LEAD – more aggressive, repetitive
  note("g4 ab4 g4 f4   eb4 f4 g4 ab4   g4 ab4 g4 f4   d4 eb4 f4 g4")
    .s("square")
    .gain(0.95)
    .slow(2),

  // NOISE – simple “drums” layer
  s("white*8")
    .gain(0.2)
    .chop(8)       // tiny bursts of noise
)
