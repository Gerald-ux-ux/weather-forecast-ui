import React from "react";

export default function TemperatureUnits() {
  return (
    <div className="flex items-center gap-0.5 border rounded-lg border-primary overflow-hidden">
      <button className="btn-ghost btn rounded-none hover:rounded-none hover:bg-primary-light">
        °C
      </button>

      <span className="w-px h-6 border  border-primary" />
      <button className="btn-ghost btn rounded-none hover:rounded-none hover:bg-primary-light">
        °F
      </button>
    </div>
  );
}
