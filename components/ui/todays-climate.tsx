import {
  aggregateDailyData,
  convertTemperature,
  formatDate,
} from "@/lib/functions";
import { CityClimate } from "@/types/app-types";
import React from "react";
import Loader from "./loader-";

type IProps = {
  cityClimate: CityClimate;
  unit: "C" | "F";
  loading: boolean;
};

export default function TodaysClimate({ cityClimate, unit, loading }: IProps) {
  const todaysAverage = aggregateDailyData(cityClimate?.list);

  if (loading) return <Loader sideBarLoader skeletons={1} />;

  return (
    <div className="b">
      {cityClimate && (
        <p className="font-semibold text-center text-xs md:text-2xl">
          Todays Temperature{" "}
        </p>
      )}

      {todaysAverage.slice(0, 1).map((weather) => (
        <div className="flex  text-primary p-4 gap-6  flex-col">
          <div
            className="flex  h-full justify-between items-center gap-6 flex-col"
            key={weather.date}
          >
            <img
              height={80}
              width={80}
              src={`http://openweathermap.org/img/wn/${weather.weather_icon}@2x.png`}
              alt={weather.weather_description}
            />
            <p>{`${Math.round(
              convertTemperature(weather.avgTemp, unit)
            )}°${unit}`}</p>
            <p className="capitalize">{weather.weather_description}</p>
            <p>{`${formatDate(weather.date)} 2024`}</p>
          </div>
          <p className="text-center ">{cityClimate.city.name}</p>
        </div>
      ))}
    </div>
  );
}
