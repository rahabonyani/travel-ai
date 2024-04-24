"use client";

import { IconReload, IconSearch, IconX } from "@tabler/icons-react";
import { useItineraryStore } from "@/src/core/stores/itinerary";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { googlePlaceApi } from "@/src/actions/googlePlaceApi";
import { Cities } from "@/src/models/cities";
import Spinner from "@/src/components/atoms/spinner/inde";

export default function SearchPage() {
  const route = useRouter();
  const setCity = useItineraryStore((state) => state.setCity);

  const [cityName, setCityName] = useState<string>("");
  const [cities, setCities] = useState<Cities[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState({ message: "", error: false });

  const handleGetCities = async () => {
    setLoading(true);

    try {
      const googlePlace = await googlePlaceApi(cityName);
      if (googlePlace) {
        setCities(googlePlace);
        console.log(googlePlace);
        setError({ message: "", error: false });
      }
    } catch (error) {
      setError({ message: "please try again", error: true });
    }

    setLoading(false);
  };

  const handleRefitchGetCities = () => {
    setError({ message: "", error: false });
    handleGetCities();
  };

  const handleSaveCity = (value: string) => {
    setCity(value);
    route.push("/itinerary/budget");
  };

  useEffect(() => {
    if (cityName.length > 0) {
      handleGetCities();
    } else {
      setCities([]);
    }
  }, [cityName]);

  return (
    <div
      className="
      fixed top-0 left-0 h-screen w-screen p-4
       z-30 transition-transform flex flex-col
      duration-300 "
    >
      <div className="relative">
        <div className="relative">
          <div className="absolute -top-0.5 start-0 flex items-center ps-3 pointer-events-none">
            <IconSearch
              className="absolute text-slate-500 top-4 left-4 
          transition-transform duration-300 w-4"
            />
          </div>
          <input
            type="text"
            name="search"
            id="default-search"
            className="rounded-lg w-full border ps-9 focus:border-green-500 pe-4 py-3 border-gray-300 text-md font-normal bg-gray-50"
            placeholder="search for city"
            value={cityName}
            onChange={(event) => setCityName(event.target.value)}
            autoComplete="off"
            required
          />
          {cityName && !error.error && (
            <div
              className="absolute h-full w-4 top-3 right-4 text-gray-400"
              onClick={() => setCityName("")}
            >
              <IconX stroke={2} />
            </div>
          )}
          {cityName.length > 0 && error.error && !loading && (
            <div
              className="absolute h-full w-4 top-3 right-4 text-gray-400"
              onClick={handleRefitchGetCities}
            >
              <IconReload stroke={2} />
            </div>
          )}
        </div>
      </div>
      <div className="mt-6  grow flex flex-col h-full ">
        <h3 className="text-gray-800 font-bold">Result</h3>
        <div className="mt-4  grow h-1/2 overflow-y-auto pb-20">
          {cityName.length > 0 && error.error && !loading && (
            <p className="text-center text-red-500">{error.message}</p>
          )}
          <div className="flex flex-col gap-3">
            {loading && cityName.length > 0 ? (
              <Spinner className="mx-auto" />
            ) : (
              cities.map((city) => (
                <div
                  key={city.id}
                  onClick={() => handleSaveCity(city.title)}
                  className="flex items-center gap-2 font-medium text-xl"
                >
                  <div className="overflow-hidden relative w-[77px] h-[70px] rounded-[18px]">
                    <img
                      src={city.imageUrl}
                      alt={city.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <span className="capitalize">{city.title},</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
