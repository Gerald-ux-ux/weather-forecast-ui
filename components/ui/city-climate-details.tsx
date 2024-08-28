import React from "react";
import Card from "./card";
import { SlCompass } from "react-icons/sl";
import { getCardinalDirection } from "@/lib/functions";
import { CityClimate } from "@/types/app-types";
type CityClimateDetailComponentProps = {
  climate: CityClimate;
  unit: "C" | "F";
};

export default function CityClimateDetails({
  climate,
  unit,
}: CityClimateDetailComponentProps) {
  return (
    <div>
      {climate?.list.slice(0, 1).map((wind) => (
        <div
          key={wind.dt}
          className="flex md:flex-row flex-col md:gap-0 gap-6 items-center justify-evenly "
        >
          <Card
            cardHeading="Wind Status"
            cardBody={`${wind.wind.speed.toFixed()} Km/h`}
            cardFooter={
              <span className="flex items-center gap-2">
                <SlCompass />
                {getCardinalDirection(wind.wind.deg)}
              </span>
            }
          />

          <Card
            cardHeading="Humidity"
            cardBody={`${wind.main.humidity}%`}
            cardFooter={
              <progress
                className="progress progress-primary"
                value={wind.main.humidity}
                max="100"
              />
            }
          />
        </div>
      ))}
    </div>
  );
}
