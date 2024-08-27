import React from "react";
import SearchCity from "./search-city";
import TemperatureUnits from "./temperature-units";

export default function TopBar() {
  return (
    <div className="w-full   border-b pb-6 border-primary flex items-center justify-between  ">
      <SearchCity />

      <TemperatureUnits />
    </div>
  );
}
