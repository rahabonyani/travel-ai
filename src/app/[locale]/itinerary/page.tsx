"use client";

import SearchInput from "@/src/components/atoms/searchInput";
import LocationBox from "@/src/components/molecules/locationBox";
import { useItineraryStore } from "@/src/core/stores/itinerary";
import { useI18n } from "@/src/lib/translate/clientTranslate";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SelectCityPage() {
  const route = useRouter();
  const t = useI18n();
  const setCity = useItineraryStore((state) => state.setCity);

  const handleSaveCity = (value: string) => {
    setCity(value);
    route.push("/itinerary/budget");
  };

  const handleRedirectToSearchPage = () => {
    route.push("/itinerary/search");
  };

  return (
    <section className="relative">
      <div
        className="relative py-8 px-8 before:absolute before:bg-neutral-900
       before:w-full before:h-full before:top-0 before:left-0 before:z-10 before:opacity-50"
      >
        <Image
          alt="Paris"
          className="absolute z-0 object-cover"
          src={"/paris.jpg"}
          fill
        />
        <div className=" relative z-20">
          <h1
            className="text-3xl leading-[150%] pb-4 font-normal !text-white flex flex-row 
                         max-w-64 flex-wrap gap-3 "
          >
            <span>Let</span>
            <span className="text-green-300 font-extrabold">AI</span>
            <span className="whitespace-nowrap">Plan Your</span>
            <span className="text-4xl text-green-300 font-extrabold">Trip</span>
          </h1>
          <h2 className="text-xl text-green-500 font-medium mb-3">
            {t("choose_Your_City")}
          </h2>
          <div className="relative overflow-hidden z-20  max-w-md bg-red">
            <SearchInput
              inputProps={{
                onFocus: () => {
                  handleRedirectToSearchPage();
                },
              }}
            />
          </div>
        </div>
      </div>
      <div className="pt-8 p-4">
        <h5 className="text-start text-sm pb-3">
          Or select from most visited cities
        </h5>
        <div className="flex flex-row flex-wrap gap-3">
          <LocationBox
            image={"/paris.jpg"}
            title="Paris"
            onClick={() => handleSaveCity("Paris")}
          />
          <LocationBox
            image={"/london.jpg"}
            title="London"
            onClick={() => handleSaveCity("London")}
          />
          <LocationBox
            image={"/milan.jpg"}
            title="Milan"
            onClick={() => handleSaveCity("Milan")}
          />
          <LocationBox
            image={"/istanbul.jpg"}
            title="Istanbul"
            onClick={() => handleSaveCity("Istanbul")}
          />
        </div>
      </div>
    </section>
  );
}
