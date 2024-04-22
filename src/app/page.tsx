import SearchInput from "@/components/atoms/input";
import StepsPagesLayout from "@/components/layouts/steps";
import LocationBox from "@/components/molecules/locationBox";
import { IconSearch } from "@tabler/icons-react";
import Image from "next/image";


export default function Home() {
  return (
    <StepsPagesLayout step={1}>
      <section className="">
        <div className="relative pt-[49px] pb-[41px] px-8 before:absolute before:bg-neutral-900 before:w-full before:h-full before:top-0 before:left-0 before:z-10 before:opacity-50">
          <Image
            alt="Paris"
            className="absolute z-0 object-cover"
            src={"/paris.jpg"}
            fill
          />
          <div className=" relative z-20 pb-4">
            <h1 className="text-3xl font-semibold leading-[150%] pb-4 !text-white">
              Ready for an Adventure?
            </h1>
            <h2 className="text-xl text-green-500 font-medium">
              Choose Your City!
            </h2>
          </div>
          <div className="relative overflow-hidden z-20">
            <SearchInput />
          </div>
        </div>
        <div className="pt-5 p-4">
          <h5 className="text-start text-sm pb-6">
            Or select from most visited cities
          </h5>
          <div className="flex flex-row flex-wrap gap-3">
            <LocationBox slug="/paris" image={"/paris.jpg"} title="Paris" />
            <LocationBox slug="/london" image={"/london.jpg"} title="London" />
            <LocationBox slug="/milan" image={"/milan.jpg"} title="Milan" />
            <LocationBox
              slug="/istanbul"
              image={"/istanbul.jpg"}
              title="Istanbul"
            />
          </div>
        </div>
      </section>
    </StepsPagesLayout>
  );
}
