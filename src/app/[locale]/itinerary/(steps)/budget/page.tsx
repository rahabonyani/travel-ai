import ItineraryHeader from "@/src/components/molecules/ItineraryHeader";
import Link from "next/link";

interface BudgetProps {
  searchParams: {
    [key: string]: string;
  };
}

export default function BudgetPage({ searchParams }: BudgetProps) {
  console.log(searchParams);
  return (
    <section className="flex-col flex">
      <div className="py-2">
        <ItineraryHeader step={1} backUrl="/itinerary" />
      </div>
      <div className="flex-col flex grow px-4">
        <div className="pt-4 pb-6">
          <h1 className="text-green-900 pb-3"> Set your trip budget</h1>
          <p className="text-gray-500 mt-3 font-medium text-sm">
            Let us know your budget preference, and we&apos;ll craft an
            itinerary that suits your financial comfort.
          </p>
        </div>

        <div className="flex flex-col grow gap-4 ">
          <Link
            href={`/itinerary/duration?search=${searchParams.search}&budget=2`}
            className="rounded-3xl bg-green-100 flex flex-col h-40 justify-end"
          >
            <div className="p-4 text-xl font-semibold">
              <span>I have mid budget</span>
            </div>
          </Link>
          <Link
            href={`/itinerary/duration?search=${searchParams.search}&budget=3`}
            className="rounded-3xl bg-green-100 flex flex-col h-40 justify-end"
          >
            <div className="p-4 text-xl font-semibold">
              <span>I have cheap budget</span>
            </div>
          </Link>
          <Link
            href={`/itinerary/duration?search=${searchParams.search}&budget=1`}
            className="rounded-3xl bg-green-100 flex flex-col h-40 justify-end"
          >
            <div className="p-4 text-xl font-semibold">
              <span>I have high budget</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
