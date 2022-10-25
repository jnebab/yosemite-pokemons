enum ColorSchemes {
  red = "red",
  orange = "orange",
  yellow = "yellow",
  green = "green",
}

export default function getColorScheme(baseStat: number) {
  if (baseStat <= 40) {
    return ColorSchemes.red;
  }
  if (baseStat <= 80) {
    return ColorSchemes.orange;
  }
  if (baseStat <= 120) {
    return ColorSchemes.yellow;
  }
  if (baseStat > 120) {
    return ColorSchemes.green;
  }
}
