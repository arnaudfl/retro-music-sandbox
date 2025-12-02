// Blade of Atheryon – Intro Theme (CPC Style) @by arnaudfl
// Tempo mystique et lent
setcps(0.5)

stack(
  // VOICE 1 – Main Mystical Melody
  // J'ai remplacé le '7' par '-1' pour avoir la note en dessous du Do (Si bémol)
  // au lieu de sauter à l'octave supérieure, ce qui est plus logique pour une intro.
  note("[0 2 3 5] [3 2 0 -1] [5 ~ 3 2] [0 ~ ~ ~]")
    .scale("C3:aeolian") // Do Mineur Naturel (Octave 3)
    .s("square")         // Son carré CPC
    .decay(0.2).sustain(0.3).release(0.5) // Enveloppe douce
    .gain(0.6)
    .pan(0.4),

  // VOICE 2 – Fast Arpeggio Pad
  // Les < > indiquent que la note change à chaque mesure (cycle)
  note("<0 2 4 6>")
    .scale("C3:aeolian")
    .fast(8)             // Arpège rapide (8 notes par cycle)
    .s("square")
    .decay(0.05).sustain(0) // Très court (Ping !)
    .gain(0.35)          // Plus discret en fond
    .pan(0.7),

  // VOICE 3 – Slow Bass Drone
  // -1 correspond au 7ème degré à l'octave inférieure
  note("[0 ~ ~ 0] [-1 ~ ~ -1]")
    .scale("C2:aeolian") // Octave basse (2)
    .s("square")
    .decay(0.5).sustain(0.8).release(1) // Son lourd et long
    .gain(0.5)
    .pan(0.5)
)