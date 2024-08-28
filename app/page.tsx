"use client";
import Card from "@/components/ui/card";
import CityClimateComponent from "@/components/ui/city-climate-component";
import SideBar from "@/components/ui/side-bar";
import TopBar from "@/components/ui/top-bar";
import { getCardinalDirection } from "@/lib/functions";
import { SlCompass } from "react-icons/sl";
import useWeather from "@/hooks/useWeather";
import TodaysClimate from "@/components/ui/todays-climate";
import CityClimateDetails from "@/components/ui/city-climate-details";

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
          <CityClimateDetails unit={temperatureUnit} climate={cityClimate!} />
        </div>
      </div>
    </main>
  );
}
