"use server";

import { CityClimate, CityCords } from "@/types/app-types";
import { GET } from "../base";
import apiEndpoints from "./constants";

// Responsible for getting the city cords using the re-usable GET fn
export async function getCityCords(formData: FormData) {
  const city = formData.get("city");
  return await GET<CityCords>(apiEndpoints.Get_City_Cords(city as string));
}

export async function getCityClimate(lat: number, lon: number) {
  return await GET<CityClimate>(apiEndpoints.Get_City_Climate(lat, lon));
}
