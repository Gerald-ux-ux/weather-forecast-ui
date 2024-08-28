export function formatDate(dt_txt: string): string {
  const date = new Date(dt_txt);
  return date.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
}
export function getCardinalDirection(deg: number): string {
  const directions = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  const index = Math.round(deg / 22.5) % 16;
  return directions[index];
}
