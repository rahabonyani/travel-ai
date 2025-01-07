import CityDetails from "@/src/components/molecules/cityDetails";
import { getI18n } from "@/src/lib/translate/serverTranslate";

export default async function SearchPage() {
  const t = await getI18n();

  return (
    <div className="flex flex-col bg-white p-4 rounded-2.5xl">
      <h3 className="text-gray-800 font-bold">{t("most-visited")}</h3>
      <div className="flex flex-col gap-3 pt-7">
        <CityDetails
          id="ChIJD7fiBh9u5kcRYJSMaMOCCwQ"
          name="Paris"
          country="France"
          mostVisited={true}
        />
        <CityDetails
          id="ChIJdd4hrwug2EcRmSrV3Vo6llI"
          name="London"
          country="England"
        />
        <CityDetails
          id="ChIJ53USP0nBhkcRjQ50xhPN_zw"
          name="Milan"
          country="Italy"
        />
        <CityDetails
          id="ChIJawhoAASnyhQR0LABvJj-zOE"
          name="Istanbul"
          country="Turkey"
        />
      </div>
    </div>
  );
}
