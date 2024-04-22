"use client";

import SearchInput from "@/components/atoms/input";
import LocationBox from "@/components/molecules/locationBox";
import { getI18n } from "@/lib/translate/serverTranslate";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const cities = [
  {
    city: "Paris",
    country: "France",
    image: "/paris.jpg",
  },
  {
    city: "Milan",
    country: "Italy",
    image: "/milan.jpg",
  },
  {
    city: "Istanbul",
    country: "Turkey",
    image: "/istanbul.jpg",
  },
  {
    city: "London",
    country: "United Kingdom",
    image: "/london.jpg",
  },
  {
    city: "Paris",
    country: "France",
    image: "/paris.jpg",
  },
  {
    city: "Milan",
    country: "Italy",
    image: "/milan.jpg",
  },
  {
    city: "London",
    country: "United Kingdom",
    image: "/london.jpg",
  },
  {
    city: "Milan",
    country: "Italy",
    image: "/milan.jpg",
  },
];

export default async function SelectCityPage() {
  const t = await getI18n();

  const [showSearchOverlay, setShowSearchOverly] = useState(false);
  return (
    <section className="relative">
      <div
        className={`
      ${showSearchOverlay ? "" : "translate-y-full"} 
      fixed top-0 left-0 h-screen w-screen p-4
      bg-white z-30 transition-transform flex flex-col
      duration-300 `}
      >
        <div className="relative">
          <SearchInput
            containerClasses="relative z-0"
            inputProps={{
              onFocus: () => {
                console.log("focus");
              },
            }}
          />
          <svg
            onClick={() => setShowSearchOverly(false)}
            className="w-8 absolute top-2 right-1 icon icon-tabler icon-tabler-x"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#55697c"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
          </svg>
        </div>
        <div className="mt-6  grow flex flex-col h-full ">
          <h3 className="text-gray-800 font-bold">Result</h3>
          <div className="mt-4  grow h-1/2 overflow-y-auto pb-20">
            <div className="flex flex-col gap-3">
              {cities.map((city) => (
                <Link
                  href={"/itinerary/budget"}
                  key={city.city}
                  className="flex items-center gap-2 font-medium text-xl"
                >
                  <div className="overflow-hidden relative w-[77px] h-[70px] rounded-[18px]">
                    <Image src={city.image} alt={city.city} fill />
                  </div>
                  <span className="capitalize">{city.city},</span>
                  <span className="capitalize"> {city.country}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
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
          <div className="relative overflow-hidden z-20  bg-red">
            <SearchInput
              inputProps={{
                onFocus: () => {
                  setShowSearchOverly(true);
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
            slug="/itinerary/budget"
            image={"/paris.jpg"}
            title="Paris"
          />
          <LocationBox
            slug="/itinerary/budget"
            image={"/london.jpg"}
            title="London"
          />
          <LocationBox
            slug="/itinerary/budget"
            image={"/milan.jpg"}
            title="Milan"
          />
          <LocationBox
            slug="/itinerary/budget"
            image={"/istanbul.jpg"}
            title="Istanbul"
          />
        </div>
      </div>
    </section>
  );
}
