// Blade of Atheryon - Stage 1 @by arnaudfl
setcps(0.6)

stack(
  // VOICE 1: Main Melody
  note("< [0 ~ 4 0] [7 6 4 ~] [5 4 2 3] [2 0 ~ ~] , [0 ~ 4 0] [7 6 4 ~] [5 6 7 8] [7 ~ ~ ~] >")
    .scale("E4:dorian")
    .s("square")
    .decay(0.15).sustain(0.1).release(0.1)
    .gain(0.55),

  // VOICE 2: Bass Gallop
  // Rythme : E... E... G... A/F#
  note("[0 ~ 0 0] [0 ~ 0 0] [3 ~ 3 3] [4 ~ 2 2]")
    .scale("E2:dorian")
    .s("square")
    .decay(0.2).sustain(0)
    .gain(0.45),

  // VOICE 3: Arpeggio Texture
  // Rapide (fast 4) pour l'effet "magique" 8-bit
  note("0 2 4 7")
    .scale("E5:dorian")
    .fast(4)
    .s("square")
    .decay(0.05).sustain(0)
    .gain(0.25)
)