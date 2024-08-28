import { convertTemperature, formatDate } from "@/lib/functions";
import { CityClimate } from "@/types/app-types";
import React from "react";

type SideBarProps = {
  cityClimate: CityClimate;
  unit: "C" | "F";
};

export default function SideBar({ cityClimate, unit }: SideBarProps) {
  return (
    <div className="w-4/12   flex flex-col items-center justify-center   border-primary border-r h-screen">
      <p className="font-semibold mr-4 text-2xl">Todays Temperature</p>
      {cityClimate?.list?.slice(0, 1).map((weather) => (
        <div className="flex  text-primary p-4 gap-6  flex-col">
          <div
            className="flex bg--100 h-full justify-between items-center gap-6 flex-col"
            key={weather.dt}
          >
            <img
              src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p>{`${Math.round(
              convertTemperature(weather.main.temp, unit)
            )}°${unit}`}</p>
            <p className="capitalize">{weather.weather[0].description}</p>
            <p>{`${formatDate(weather.dt_txt)} 2024`}</p>
          </div>
          <p className="text-center ">{cityClimate.city.name.split(" ")[0]}</p>
        </div>
      ))}
    </div>
  );
}
