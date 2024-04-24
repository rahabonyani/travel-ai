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
        className="relative py-10 px-8 before:absolute before:bg-neutral-900
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
            className="text-5xl leading-[62px] pb-4 font-normal !text-white flex flex-row 
                          flex-wrap gap-3 "
          >
            <span> {t("let-ai-plan-your-trip.let")}</span>
            <span className="text-green-300 font-extrabold">
              {t("let-ai-plan-your-trip.ai")}
            </span>
            <span>{t("let-ai-plan-your-trip.plan")}</span>
            <span>{t("let-ai-plan-your-trip.your")}</span>
            <span className=" text-green-300 font-extrabold">
              {t("let-ai-plan-your-trip.trip")}
            </span>
          </h1>
          <h2 className="text-lg text-white font-normal pb-3">
            {t("title-Have-spedific-destination-in-mind")}
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
      <div className="pt-9 px-8">
        <h5 className="text-start font-medium text-gray-800 text-2xl leading-9 pb-3">
          Most Visited Destination from{" "}
          <span className="font-bold text-green-500">London</span>
        </h5>
        <div className="flex flex-row flex-wrap gap-y-3 gap-x-[22px] ">
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
