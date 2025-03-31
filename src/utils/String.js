export function capitalizeFirstLetters(str) {
  return str
    .split(" ")
    .map((w) =>
      w
        .split("")
        .map((l, i) => (i == 0 ? l.toUpperCase() : l))
        .join("")
    )
    .join(" ");
}
