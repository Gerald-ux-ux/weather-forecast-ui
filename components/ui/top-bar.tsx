import React, { useState } from "react";
import SearchCity from "./search-city";
import TemperatureUnits from "./temperature-units";

type TopBarProps = {
  onDataFetch: (lat: number, lon: number) => void;
  onUnitChange: (unit: "C" | "F") => void;
  currentUnit: "C" | "F";
};
export default function TopBar({
  onDataFetch,
  currentUnit,
  onUnitChange,
}: TopBarProps) {
  return (
    <div className="w-full   border-b pb-6 border-primary flex items-center justify-between  ">
      <SearchCity onDataFetch={onDataFetch} />

      <TemperatureUnits onUnitChange={onUnitChange} currentUnit={currentUnit} />
    </div>
  );
}
