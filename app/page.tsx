"use client";
import CityClimateComponent from "@/components/ui/city-climate-component";
import SideBar from "@/components/ui/side-bar";
import TopBar from "@/components/ui/top-bar";
import useWeather from "@/hooks/useWeather";
import TodaysClimate from "@/components/ui/todays-climate";
import CityClimateDetails from "@/components/ui/city-climate-details";

export default function Home() {
  const {
    handleGetCityClimate,
    loading,
    cityClimate,
    temperatureUnit,
    setTemperatureUnit,
  } = useWeather();
  return (
    <main className="flex min-h-screen flex-col  items-center justify-between py-2  md:p-0 p-4">
      <div className="flex  p-4 gap-4 items-start w-full">
        <SideBar
          loading={loading}
          unit={temperatureUnit}
          cityClimate={cityClimate!}
        />
        <div className="flex gap-12 w-full flex-col">
          <TopBar
            onUnitChange={setTemperatureUnit}
            currentUnit={temperatureUnit}
            onDataFetch={handleGetCityClimate}
          />
          <div className="block md:hidden">
            <TodaysClimate
              loading={loading}
              cityClimate={cityClimate!}
              unit={temperatureUnit}
            />
          </div>

          {!cityClimate?.list.length ? (
            <span className="items-center text-primary/50 flex justify-center mt-12">
              Please enter a city name
            </span>
          ) : (
            <>
              <CityClimateComponent
                unit={temperatureUnit}
                loading={loading}
                climate={cityClimate!}
              />
              <CityClimateDetails loading={loading} climate={cityClimate!} />
            </>
          )}
        </div>
      </div>
    </main>
  );
}
