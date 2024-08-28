import { baseUrl } from "../base";

const Get_City_Cords = (city_name: string) => `${baseUrl}/cords/${city_name}`;
const Get_City_Climate = (lat: number, lon: number) =>
  `${baseUrl}/climate?lat=${lat}&lng=${lon}`;

const apiEndpoints = {
  Get_City_Cords,
  Get_City_Climate,
};

export default apiEndpoints;
