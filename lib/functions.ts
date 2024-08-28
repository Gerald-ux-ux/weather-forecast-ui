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

export const currentDate = new Date().toISOString().split("T")[0];

//  Convert the temp from Kelvin(K) to either degrees celsius or Fahrenheit
export function convertTemperature(tempK: number, unit: "C" | "F") {
  const tempC = tempK - 273.15;
  return unit === "F" ? (tempC * 9) / 5 + 32 : tempC;
}

// Daily average from the 3-hourly weather data
export function aggregateDailyData(data: any[]) {
  const dailyData: {
    [key: string]: {
      temps: number[];
      weather_icon: string;
      weather_description: string;
    };
  } = {};

  data?.forEach((entry) => {
    const date = entry.dt_txt.split(" ")[0];
    if (!dailyData[date]) {
      // Initialize with the first entry's weather data
      dailyData[date] = {
        temps: [],
        weather_icon: entry.weather[0].icon,
        weather_description: entry.weather[0].description,
      };
    }
    dailyData[date].temps.push(entry.main.temp);
  });

  return Object.keys(dailyData).map((date) => {
    const temps = dailyData[date].temps;

    // Getting the min and max to give out a range as opposed to one value
    const minTemp = Math.min(...temps);
    const maxTemp = Math.max(...temps);
    const avgTemp = temps.reduce((sum, temp) => sum + temp, 0) / temps.length;
    // return the necessary props
    return {
      date,
      avgTemp,
      minTemp,
      maxTemp,
      weather_icon: dailyData[date].weather_icon,
      weather_description: dailyData[date].weather_description,
    };
  });
}
