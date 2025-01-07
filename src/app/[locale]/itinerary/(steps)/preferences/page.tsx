import ItineraryHeader from "@/src/components/molecules/ItineraryHeader";
import { IconBrush } from "@tabler/icons-react";

interface PreferencesProps {
  searchParams: {
    [key: string]: string;
  };
}

export default function PreferencesPage({ searchParams }: PreferencesProps) {
  console.log(searchParams);
  return (
    <>
      <section className="flex-col flex ">
        <div className="py-2">
          <ItineraryHeader
            step={3}
            backUrl={`/itinerary/duration?search=${searchParams.search}&budget=${searchParams.budget}&duration=${searchParams.duration}`}
            forwardUrl={`/itinerary/result?search=${searchParams.search}&budget=${searchParams.budget}&duration=${searchParams.duration}&groupType=${searchParams.groupType}&activities=${searchParams.activities}`}
          />
        </div>
        <div className="flex flex-col gap-10 pt-4 px-4">
          <div className="">
            <h1 className="text-green-900">
              Tailor your adventure to your tastes
            </h1>
            <p className="text-gray-500 pt-3 text-sm font-medium">
              Select your travel preferences to customize your trip plan.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
