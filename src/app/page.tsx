import Image from "next/image";
import { IconHome } from "@tabler/icons-react";
import Stepper from "@/components/molecules/stepper";
import LocationBox from "@/components/molecules/locationBox";

export default function Home() {
  return (
    <section className="">
      <div className="p-6">
        <h1 className="text-3xl font-bold pb-2">Ready for an Adventure?</h1>
        <h2 className="text-3xl text-green-400 font-bold">Choose Your City!</h2>
      </div>

      <input
        type="text"
        className="rounded-md w-full border-2 border-gray-200 text-sm bg-gray-50"
      />
      <div className="pt-10">
        <h5 className="text-center pb-6">Or select from most visited cities</h5>
        <div className="flex flex-row flex-wrap gap-3">
          <LocationBox title="Paris" />
          <LocationBox title="Paris" />
          <LocationBox title="Paris" />
          <LocationBox title="Paris" />
        </div>
      </div>
    </section>
  );
}
