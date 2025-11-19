// "Sky Patrol" – CPC 6128 Flight Theme
// Original composition, 3-voice AY-style

setcpm(82/4)

$: stack(
  // Bass: Cm → Ab → Bb → Gm
  note("c2 ~ ~ ~   ab1 ~ ~ ~   bb1 ~ ~ ~   g1 ~ ~ ~")
    .s("square")
    .gain(0.7)
    .slow(2),

  // 8-bit arpeggios over the chords
  note("<c4 eb4 g4>   <ab3 c4 eb4>   <bb3 d4 f4>   <g3 bb3 d4>")
    .s("square")
    .gain(0.45)
    .fast(2),

  // Heroic lead (original)
  note("g4 ~ bb4 ~  c5 ~ bb4 ~   eb5 ~ f5 ~  g5 ~ f5 ~   d5 ~ eb5 ~  f5 ~ eb5 ~   c5 ~ bb4 ~  g4 ~ bb4 ~")
    .s("square")
    .gain(0.9)
    .slow(2)
)
