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

//  Convert the temp from Kelvin(K) to either degrees celsius or Fahrenheit
export function convertTemperature(tempK: number, unit: "C" | "F") {
  const tempC = tempK - 273.15;
  return unit === "F" ? (tempC * 9) / 5 + 32 : tempC;
}
