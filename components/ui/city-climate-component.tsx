import React from "react";
import Card from "./card";
import { CityClimate } from "@/types/app-types";

import { convertTemperature, formatDate } from "@/lib/functions";

type CityClimateComponentProps = {
  climate: CityClimate;
  unit: "C" | "F";
};

export default function CityClimateComponent({
  climate,
  unit,
}: CityClimateComponentProps) {
  return (
    <div className="">
      <div className="flex  flex-col md:flex-row gap-3 w-full justify-evenly items-center  ">
        {climate?.list.slice(0, 3).map((weather, index) => (
          <Card
            key={index}
            cardHeading={formatDate(weather.dt_txt)}
            cardBody={
              <img
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                alt={weather.weather[0].description}
              />
            }
            cardFooter={`${Math.round(
              convertTemperature(weather.main.temp_min, unit)
            )}°${unit} - ${Math.round(
              convertTemperature(weather.main.temp_max, unit)
            )}°${unit}`}
          />
        ))}

      
      </div>
    </div>
  );
}





