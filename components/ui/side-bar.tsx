import { convertTemperature, formatDate } from "@/lib/functions";
import { CityClimate } from "@/types/app-types";
import React from "react";
import TodaysClimate from "./todays-climate";

type SideBarProps = {
  cityClimate: CityClimate;
  unit: "C" | "F";
};

export default function SideBar({ cityClimate, unit }: SideBarProps) {
  return (
    <div className="w-4/12  hidden md:flex flex-col items-center justify-center   border-primary border-r h-screen">
      <TodaysClimate cityClimate={cityClimate} unit={unit} />
    </div>
  );
}
