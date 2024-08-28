import { CityClimate } from "@/types/app-types";
import React from "react";
import TodaysClimate from "./todays-climate";

type SideBarProps = {
  cityClimate: CityClimate;
  loading: boolean
  unit: "C" | "F";
};

export default function SideBar({ cityClimate, unit, loading }: SideBarProps) {
  return (
    <div className="w-4/12  hidden md:flex flex-col items-center justify-center   border-primary border-r h-screen">
      <TodaysClimate loading={loading} cityClimate={cityClimate} unit={unit} />
    </div>
  );
}
