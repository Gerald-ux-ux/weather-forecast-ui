"use client";

import { getCityClimate } from "@/actions/climate/actions";
import Card from "@/components/ui/card";
import SideBar from "@/components/ui/side-bar";
import TopBar from "@/components/ui/top-bar";
import { CityClimate } from "@/types/app-types";
import { useState } from "react";

export default function Home() {
  const [cityClimate, setCityClimate] = useState<CityClimate>();
  const [loading, setLoading] = useState<boolean>(false);

  async function handleGetCityClimate(lat: number, lon: number) {
    setLoading(true);
    const climate: CityClimate = await getCityClimate(lat, lon);
    console.log(
      "climate",
      climate.list.map((weather) => weather.dt_txt)
    );
    setCityClimate(climate);
    setLoading(false);
  }
  return (
    <main className="flex min-h-screen flex-col  items-center justify-between p-12 mx-20 ">
      <div className="flex  p-4 gap-4 items-start w-full">
        <SideBar />
        <div className="flex gap-12 w-full flex-col">
          <TopBar onDataFetch={handleGetCityClimate} />

          <div className="flex  flex-col md:flex-row gap-3 w-full justify-evenly items-center  px-12">
            <Card cardHeading="21 May" cardBody="Sunny" cardFooter="11-17" />
            <Card cardHeading="21 May" cardBody="Sunny" cardFooter="11-17" />
            <Card cardHeading="21 May" cardBody="Sunny" cardFooter="11-17" />
          </div>
        </div>
      </div>
    </main>
  );
}
