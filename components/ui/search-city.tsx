"use client";
import { getCityCords } from "@/actions/climate/actions";
import { CityCords } from "@/types/app-types";
import clsx from "clsx";
import React from "react";
import { useFormStatus } from "react-dom";

type SearchCityProps = {
  onDataFetch: (lat: number, lon: number) => void;
};
function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      className={clsx(
        "btn btn-solid-primary",
        pending ? "btn btn-loading" : ""
      )}
    >
      Go
    </button>
  );
}
export default function SearchCity({ onDataFetch }: SearchCityProps) {
  async function handleSubmit(formData: FormData) {
    const res: CityCords = await getCityCords(formData);
    // Always accessing the first city since this are the coordinates needed
    const firstCity = res[0];
    // Ensure the cords are present before calling the city climate fn
    if (firstCity && firstCity.lat && firstCity.lon) {
      // Pass the lat/lon to the parent component
      onDataFetch(firstCity.lat, firstCity.lon);
    }
  }
  return (
    <div className="w-full flex gap-2 ">
      <form action={handleSubmit} className="flex gap-4  w-full items-center">
        <input
          name="city"
          type="search"
          className=" input  border input-ghost-primary"
          placeholder="Search city..."
        />
        <SubmitBtn />
      </form>
    </div>
  );
}
