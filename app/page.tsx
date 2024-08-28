"use client";
import Card from "@/components/ui/card";
import CityClimateComponent from "@/components/ui/city-climate-component";
import SideBar from "@/components/ui/side-bar";
import TopBar from "@/components/ui/top-bar";
import {
  convertTemperature,
  formatDate,
  getCardinalDirection,
} from "@/lib/functions";
import { SlCompass } from "react-icons/sl";
import useWeather from "@/hooks/useWeather";
import TodaysClimate from "@/components/ui/todays-climate";

export default function Home() {
  const {
    handleGetCityClimate,
    loading,
    cityClimate,
    setCityClimate,
    temperatureUnit,
    setTemperatureUnit,
  } = useWeather();
  return (
    <main className="flex min-h-screen flex-col  items-center justify-between py-2  md:p-0 p-4">
      <div className="flex  p-4 gap-4 items-start w-full">
        <SideBar unit={temperatureUnit} cityClimate={cityClimate!} />
        <div className="flex gap-12 w-full flex-col">
          <TopBar
            onUnitChange={setTemperatureUnit}
            currentUnit={temperatureUnit}
            onDataFetch={handleGetCityClimate}
          />
          <div className="block md:hidden">
            <TodaysClimate cityClimate={cityClimate!} unit={temperatureUnit} />
          </div>
          <CityClimateComponent unit={temperatureUnit} climate={cityClimate!} />
          {cityClimate?.list.slice(0, 1).map((wind) => (
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
      </div>
    </main>
  );
}
