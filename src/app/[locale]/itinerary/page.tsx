import LocationBox from "@/src/components/molecules/locationBox";
import { getI18n } from "@/src/lib/translate/serverTranslate";
import { IconSearch } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default async function SelectCityPage() {
  const t = await getI18n();

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
        <div className="relative z-20">
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
          <Link
            href="/itinerary/search"
            className="relative w-full flex bg-gray-50 py-3.5 ps-9 pe-4 font-normal text-sm text-gray-500 border border-gray-300 rounded-2.5xl overflow-hidden"
          >
            <div className="absolute top-3 start-4 flex items-center pointer-events-none">
              <IconSearch
                stroke={3}
                className=" text-gray-400 transition-transform duration-300 w-3.5"
              />
            </div>
            search for city
          </Link>
        </div>
      </div>
      <div className="pt-9 px-8">
        <h5 className="text-start font-medium text-gray-800 text-2xl leading-9 pb-3">
          Most Visited Destination from{" "}
          <span className="font-bold text-green-500">London</span>
        </h5>
        <div className="flex flex-row flex-wrap gap-y-3 gap-x-[22px] ">
          <LocationBox image={"/paris.jpg"} title="Paris" />
          <LocationBox image={"/london.jpg"} title="London" />
          <LocationBox image={"/milan.jpg"} title="Milan" />
          <LocationBox image={"/istanbul.jpg"} title="Istanbul" />
        </div>
      </div>
    </section>
  );
}
