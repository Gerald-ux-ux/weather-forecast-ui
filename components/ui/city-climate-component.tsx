import React from "react";
import Card from "./card";
import { CityClimate } from "@/types/app-types";

import {
  aggregateDailyData,
  convertTemperature,
  currentDate,
  formatDate,
} from "@/lib/functions";

type CityClimateComponentProps = {
  climate: CityClimate;
  unit: "C" | "F";
};

export default function CityClimateComponent({
  climate,
  unit,
}: CityClimateComponentProps) {
  //  Hourly data into daily averages
  const dailyAverages = aggregateDailyData(climate?.list);

  // Filter for the next 3 days
  const futureWeather = dailyAverages
    .filter((summary) => summary.date > currentDate)
    .slice(0, 3);

  return (
    <div className="">
      <div className="flex  flex-col md:flex-row gap-3 w-full justify-evenly items-center  ">
        {futureWeather.map((weather, index) => (
          <Card
            key={index}
            cardHeading={formatDate(weather.date)}
            cardBody={
              <img
                src={`http://openweathermap.org/img/wn/${weather.weather_icon}@2x.png`}
                alt={weather.weather_description}
              />
            }
            cardFooter={`${Math.round(
              convertTemperature(weather.minTemp, unit)
            )}°${unit} - ${Math.round(
              convertTemperature(weather.maxTemp, unit)
            )}°${unit}`}
          />
        ))}
      </div>
    </div>
  );
}
