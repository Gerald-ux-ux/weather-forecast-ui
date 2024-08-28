"use client";

import { getCityClimate } from "@/actions/climate/actions";
import { CityClimate } from "@/types/app-types";
import { useState } from "react";

export default function useWeather() {
  const [cityClimate, setCityClimate] = useState<CityClimate>();
  const [loading, setLoading] = useState<boolean>(false);
  const [temperatureUnit, setTemperatureUnit] = useState<"C" | "F">("C");

  async function handleGetCityClimate(lat: number, lon: number) {
    setLoading(true);
    const climate: CityClimate = await getCityClimate(lat, lon);
    setCityClimate(climate);
    setLoading(false);
  }

  return {
    handleGetCityClimate,
    loading,
    cityClimate,
    setCityClimate,
    temperatureUnit,
    setTemperatureUnit,
  };
}
