"use client";

import { useItineraryStore } from "@/src/core/stores/itinerary";
import { useRouter } from "next/navigation";

export default function BudgetPage() {
  const route = useRouter();
  const setBudget = useItineraryStore((state) => state.setBudget);

  const handleSaveBudget = (value: number) => {
    setBudget(value);
    route.push("/itinerary/duration");
  };

  return (
    <section className=" flex-col flex">
      <div className="flex-col flex grow">
        <div className="mt-4 mb-6">
          <h1>Set your trip budget</h1>
          <p className="text-gray-500 mt-3 font-medium text-sm">
            Let us know your budget preference, and we&apos;ll craft an
            itinerary that suits your financial comfort.
          </p>
        </div>

        <div className="flex flex-col grow gap-4 ">
          <div
            onClick={() => handleSaveBudget(2)}
            className="rounded-3xl bg-green-100 flex flex-col h-40 justify-end"
          >
            <div className="p-4 text-xl font-semibold">
              <span>I have mid budget</span>
            </div>
          </div>
          <div
            onClick={() => handleSaveBudget(3)}
            className="rounded-3xl bg-green-100 flex flex-col h-40 justify-end"
          >
            <div className="p-4 text-xl font-semibold">
              <span>I have cheap budget</span>
            </div>
          </div>
          <div
            onClick={() => handleSaveBudget(1)}
            className="rounded-3xl bg-green-100 flex flex-col h-40 justify-end"
          >
            <div className="p-4 text-xl font-semibold">
              <span>I have high budget</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
