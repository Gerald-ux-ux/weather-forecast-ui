import React from "react";
import Card from "./card";
import { CityClimate } from "@/types/app-types";

import { formatDate } from "@/lib/functions";

type CityClimateComponentProps = {
  climate: CityClimate;
};

export default function CityClimateComponent({
  climate,
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
            cardFooter={`${Math.round(weather.main.temp_min)}°F - ${Math.round(
              weather.main.temp_max
            )}°C`}
          />
        ))}
      </div>
    </div>
  );
}
