"use client";
import { getCityClimate } from "@/actions/climate/actions";
import Card from "@/components/ui/card";
import CityClimateComponent from "@/components/ui/city-climate-component";
import SideBar from "@/components/ui/side-bar";
import TopBar from "@/components/ui/top-bar";
import { CityClimate } from "@/types/app-types";
import { useState } from "react";
import { getCardinalDirection } from "@/lib/functions";
import { SlCompass } from "react-icons/sl";

export default function Home() {
  const [cityClimate, setCityClimate] = useState<CityClimate>();
  const [loading, setLoading] = useState<boolean>(false);
  const [temperatureUnit, setTemperatureUnit] = useState<"C" | "F">("C");

  async function handleGetCityClimate(lat: number, lon: number) {
    setLoading(true);
    const climate: CityClimate = await getCityClimate(lat, lon);
    console.log("climate", climate);
    setCityClimate(climate);
    setLoading(false);
  }
  return (
    <main className="flex min-h-screen flex-col  items-center justify-between p-12 mx-20 ">
      <div className="flex  p-4 gap-4 items-start w-full">
        <SideBar />
        <div className="flex gap-12 w-full flex-col">
          <TopBar
            onUnitChange={setTemperatureUnit}
            currentUnit={temperatureUnit}
            onDataFetch={handleGetCityClimate}
          />
          <CityClimateComponent unit={temperatureUnit} climate={cityClimate!} />
          {cityClimate?.list.slice(0, 1).map((wind) => (
            <div
              key={wind.dt}
              className="flex  w-full  items-center justify-between "
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
      </div>
    </main>
  );
}
