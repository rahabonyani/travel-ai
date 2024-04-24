"use client";

import {
  IconChevronRight,
  IconReload,
  IconSearch,
  IconX,
} from "@tabler/icons-react";
import { useItineraryStore } from "@/src/core/stores/itinerary";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { googlePlaceApi } from "@/src/actions/googlePlaceApi";
import { Cities } from "@/src/models/cities";
import Spinner from "@/src/components/atoms/spinner/inde";
import { staticCities } from "@/src/constants/cities";
import { useI18n } from "@/src/lib/translate/clientTranslate";

export default function SearchPage() {
  const route = useRouter();
  const t = useI18n();
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
    <div className="px-2 z-30 transition-transform flex flex-col duration-300 ">
      <div className="relative pb-2">
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
          className="rounded-2.5xl w-full border ps-9 focus:border-green-500 pe-4 py-3 border-green-500 placeholder:text-gray-500 text-md font-normal bg-gray-50"
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
      <div className="flex flex-col h-full bg-white p-4 rounded-2.5xl">
        {loading && cityName.length > 0 && (
          <div className="mt-4  grow h-1/2 overflow-y-auto">
            <div className="flex flex-col gap-3">
              <Spinner className="mx-auto" />
            </div>
          </div>
        )}
        {!loading && cityName.length === 0 && (
          <>
            <h3 className="text-gray-800 font-bold">{t("most-visited")}</h3>
            <div className="mt-4  grow h-1/2 overflow-y-auto">
              <div className="flex flex-col gap-3">
                {staticCities.map((city, index) => (
                  <div
                    key={city.id}
                    onClick={() => handleSaveCity(city.name)}
                    className="flex items-center justify-between gap-2"
                  >
                    <div className="flex flex-row items-center gap-2">
                      <div className="overflow-hidden relative w-[77px] h-[70px] rounded-[18px]">
                        <img
                          src={city.imageUrl}
                          alt={city.name}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <h6 className="flex flex-row gap-1.5 items-end">
                          <span className="capitalize font-medium text-xl text-gray-800 mb-0">
                            {city.name},
                          </span>
                          <span className="capitalize font-medium text-gray-400 text-sm">
                            {city.country}
                          </span>
                        </h6>
                        {index === 0 && (
                          <p className="text-gray-700 text-xs font-normal">
                            {t("most-popular")}
                          </p>
                        )}
                      </div>
                    </div>

                    <div>
                      <IconChevronRight />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
        {!loading && cities.length > 0 && cityName.length > 0 && (
          <>
            <h3 className="text-gray-800 font-bold">Result</h3>
            <div className="mt-4  grow h-1/2 overflow-y-auto ">
              {cityName.length > 0 && error.error && !loading && (
                <p className="text-center text-red-500">{error.message}</p>
              )}
              <div className="flex flex-col gap-3">
                {cities.map((city) => (
                  <div
                    key={city.id}
                    onClick={() => handleSaveCity(city.name)}
                    className="flex items-center gap-2 font-medium text-xl"
                  >
                    <div className="overflow-hidden relative w-[77px] h-[70px] rounded-[18px]">
                      <img
                        src={city.imageUrl}
                        alt={city.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h6 className="capitalize font-medium text-xl text-gray-800 mb-0">
                      {city.name},
                      <span className="font-medium text-gray-400 text-sm ps-1.5">
                        {city.country}
                      </span>
                    </h6>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
