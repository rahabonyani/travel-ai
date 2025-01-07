import ItineraryHeader from "@/src/components/molecules/ItineraryHeader";
import DurationForm from "@/src/components/molecules/durationForm";
import { IconArrowRight } from "@tabler/icons-react";
import Link from "next/link";

interface DurationProps {
  searchParams: {
    [key: string]: string;
  };
}

export default function DurationPage({ searchParams }: DurationProps) {
  return (
    <section className="h-full flex-col flex pb-14">
      <div className="py-2">
        <ItineraryHeader
          step={3}
          backUrl={`/itinerary/budget?search=${searchParams.search}&budget=${searchParams.budget}`}
        />
      </div>
      <div className="flex flex-col p-4">
        <div className="pb-6">
          <h1 className="text-green-900">Travel Duration</h1>
          <p className="text-gray-500 pt-3 font-medium text-sm">
            Enter the number of days for your trip or set specific dates of your
            trip.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <Link
            href={`/itinerary/preferences?search=${searchParams.search}&budget=${searchParams.budget}&duration=1`}
            className="rounded-2.5xl border-2 border-green-700 text-green-700
           flex grow justify-between py-3.5 px-6 text-md font-semibold"
          >
            <span>1 Day</span>
            <IconArrowRight />
          </Link>
          <Link
            href={`/itinerary/preferences?search=${searchParams.search}&budget=${searchParams.budget}&duration=2`}
            className="rounded-2.5xl border-2 border-green-700 text-green-700
           flex grow justify-between py-3.5 px-6 text-md font-semibold"
          >
            <span>2 Day</span>
            <IconArrowRight />
          </Link>
          <Link
            href={`/itinerary/preferences?search=${searchParams.search}&budget=${searchParams.budget}&duration=3`}
            className="rounded-2.5xl border-2 border-green-700 text-green-700
           flex grow justify-between py-3.5 px-6 text-md font-semibold"
          >
            <span>3 Day</span>
            <IconArrowRight />
          </Link>
          <Link
            href={`/itinerary/preferences?search=${searchParams.search}&budget=${searchParams.budget}&duration=4`}
            className="rounded-2.5xl border-2 border-green-700 text-green-700
           flex grow justify-between py-3.5 px-6 text-md font-semibold"
          >
            <span>4 Day</span>
            <IconArrowRight />
          </Link>
        </div>

        <div className="grow pt-10">
          <h6 className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Or write
          </h6>
          <DurationForm />
        </div>
      </div>
    </section>
  );
}
