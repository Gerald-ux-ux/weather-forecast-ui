export type CityCords = {
  name: string;
  local_names: {
    [key: string]: string;
  };
  lat: number;
  lon: number;
  country: string;
  state: string;
}[];

export type CityClimate = {
  cod: string;
  message: string;
  cnt: number;
  list: {
    dt: number;
    weather: {
      id: number;
      main: string;
      description: string;
      icon: string;
    }[];
    clouds: {
      all: number;
    };
    wind: {
      speed: number;
      deg: number;
      gust: number;
    };
    dt_txt: string;
  }[];
};
