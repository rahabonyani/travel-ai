"use client";

import Spinner from "@/src/components/atoms/spinner/inde";
import ResultImage from "@/public/image/Loading pic.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useItineraryStore } from "@/src/core/stores/itinerary";

export default function ResultPage() {
  const [loading, setLoading] = useState(true);

  const itineraryDetails = useItineraryStore((state) => state.itinerary);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <section className="h-full relative">
      <div
        className="h-screen w-screen top-0 left-0 flex flex-col gap-12 items-center
      pt-16 px-4"
      >
        <div className="mt-1">
          <Image src={ResultImage} alt="" />
        </div>

        <div className="w-full">
          {loading ? (
            <>
              <Spinner className="mx-auto" width={100} height={100} />
              <p className="text-2xl font-semibold text-gray-700 text-center pt-12">
                Our AI is busy tailoring your itinerary to fit your dream trip.
              </p>
            </>
          ) : (
            <div className="flex flex-col gap-4 w-full">
              {Object.keys(itineraryDetails).map((key) => (
                <div
                  key={key}
                  className="flex flex-row w-full justify-evenly bg-gray-100 p-2 rounded-lg"
                >
                  <p>{key}</p>
                  <p>{itineraryDetails[key]}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
