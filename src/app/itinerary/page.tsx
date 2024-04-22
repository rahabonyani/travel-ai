import SearchInput from "@/components/atoms/input";
import LocationBox from "@/components/molecules/locationBox";
import Image from "next/image";
import { getI18n } from "@/lib/translate/serverTranslate";

export default async function SelectCityPage() {
  const t = await getI18n();

  return (
    <section className="">
      <div className="relative py-8 px-8 before:absolute before:bg-neutral-900 before:w-full before:h-full before:top-0 before:left-0 before:z-10 before:opacity-50">
        <Image
          alt="Paris"
          className="absolute z-0 object-cover"
          src={"/paris.jpg"}
          fill
        />
        <div className=" relative z-20">
          <h1 className="text-3xl leading-[150%] pb-4 font-normal !text-white flex flex-row flex-wrap gap-3 ">
            <span>Let</span>
            <span className="text-green-300 font-extrabold">AI</span>
            <span className="whitespace-nowrap">Plan Your</span>
            <span className="text-4xl text-green-300 font-extrabold">Trip</span>
          </h1>
          <h2 className="text-xl text-green-500 font-medium">
            {t("choose_Your_City")}
          </h2>
          <div className="relative overflow-hidden z-20 pt-3">
            <SearchInput />
          </div>
        </div>
      </div>
      <div className="pt-8 p-4">
        <h5 className="text-start text-sm pb-3">
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
  );
}
