import React from "react";

type TempUnitsProps = {
  onUnitChange: (unit: "C" | "F") => void;
  currentUnit: "C" | "F";
};
export default function TemperatureUnits({
  onUnitChange,
  currentUnit,
}: TempUnitsProps) {
  return (
    <div className="flex items-center gap-0.5 border justify-between rounded-lg border-primary ">
      <button
        className={`btn-ghost btn rounded-none ${
          currentUnit === "C" ? "bg-primary-light" : "hover:bg-primary-light"
        }`}
        onClick={() => onUnitChange("C")}
      >
        °C
      </button>

      <span className="h-6 border  border-primary" />
      <button
        className={`btn-ghost btn rounded-none ${
          currentUnit === "F" ? "bg-primary-light" : "hover:bg-primary-light"
        }`}
        onClick={() => onUnitChange("F")}
      >
        °F
      </button>
    </div>
  );
}
