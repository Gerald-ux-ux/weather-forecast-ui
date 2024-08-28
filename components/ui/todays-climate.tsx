import { convertTemperature, formatDate } from "@/lib/functions";
import { CityClimate } from "@/types/app-types";
import React from "react";

type IProps = {
  cityClimate: CityClimate;
  unit: "C" | "F";
};

export default function TodaysClimate({ cityClimate, unit }: IProps) {
  return (
    <div className="b">
      {cityClimate && (
        <p className="font-semibold text-center text-xs md:text-2xl">
          Todays Temperature{" "}
        </p>
      )}

      {cityClimate?.list?.slice(0, 1).map((weather) => (
        <div className="flex  text-primary p-4 gap-6  flex-col">
          <div
            className="flex  h-full justify-between items-center gap-6 flex-col"
            key={weather.dt}
          >
            <img
              height={80}
              width={80}
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p>{`${Math.round(
              convertTemperature(weather.main.temp, unit)
            )}°${unit}`}</p>
            <p className="capitalize">{weather.weather[0].description}</p>
            <p>{`${formatDate(weather.dt_txt)} 2024`}</p>
          </div>
          <p className="text-center ">{cityClimate.city.name}</p>
        </div>
      ))}
    </div>
  );
}
