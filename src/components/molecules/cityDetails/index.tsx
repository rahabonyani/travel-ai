import GooglePlacePhoto from "../../atoms/googlePlacePhoto";
import { IconChevronRight } from "@tabler/icons-react";
import { getI18n } from "@/src/lib/translate/serverTranslate";
import Link from "next/link";

export default async function CityDetails({
  name,
  country,
  id,
  mostVisited = false,
}: {
  name: string;
  country: string;
  id: string;
  mostVisited?: boolean;
}) {
  const t = await getI18n();
  return (
    <Link
      href={`/itinerary/budget?search=${name}`}
      key={id}
      className="flex items-center justify-between gap-2 font-medium text-xl"
    >
      <div className="flex flexx-row items-center gap-2">
        <div className="overflow-hidden relative w-[77px] h-[70px] rounded-2.5xl shadow-md ">
          <GooglePlacePhoto imageId={id} />
        </div>
        <div>
          <h6 className="capitalize font-medium text-xl text-gray-800 mb-0">
            {name},
            <span className="font-medium text-gray-400 text-sm ps-1.5">
              {country}
            </span>
          </h6>
          {mostVisited && (
            <p className="text-xs font-normal text-gray-700">
              {t("most-popular")}
            </p>
          )}
        </div>
      </div>
      <div className="w-4 h-4">
        <IconChevronRight stroke={2} className="w-4 h-4" />
      </div>
    </Link>
  );
}
