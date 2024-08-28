import React from "react";
import SearchCity from "./search-city";
import TemperatureUnits from "./temperature-units";

type TopBarProps = {
  onDataFetch: (lat: number, lon: number) => void;
};
export default function TopBar({ onDataFetch }: TopBarProps) {
  return (
    <div className="w-full   border-b pb-6 border-primary flex items-center justify-between  ">
      <SearchCity onDataFetch={onDataFetch} />

      <TemperatureUnits />
    </div>
  );
}
