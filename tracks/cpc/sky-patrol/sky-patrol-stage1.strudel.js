// Sky Patrol – Stage 1 Theme (CPC) @by arnaudfl
// Faster horizontal shoot'em up loop

// Around 112 BPM
setcpm(112/4)

$: stack(
  // BASS – driving pattern on Cm → Ab → Bb → Gm
  note("c2 c2 c2 c2   ab1 ab1 ab1 ab1   bb1 bb1 bb1 bb1   g1 g1 g1 g1")
    .s("square")
    .gain(0.75)
    .fast(2),          // more movement than intro

  // ARPS – 16th-note style chip arpeggios
  note("<c4 eb4 g4>*2   <ab3 c4 eb4>*2   <bb3 d4 f4>*2   <g3 bb3 d4>*2")
    .s("square")
    .gain(0.5)
    .fast(4),          // classic chiptune sparkle

  // LEAD – simple, catchy motif (original)
  note("g4 bb4 c5 bb4   eb5 d5 c5 bb4   g4 bb4 c5 bb4   d5 c5 bb4 g4")
    .s("square")
    .gain(0.9)
    .slow(2)
)
