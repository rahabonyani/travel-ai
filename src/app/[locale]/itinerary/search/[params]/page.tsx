import { googlePlaceApi } from "@/src/actions/googlePlaceApi";
import CityDetails from "@/src/components/molecules/cityDetails";

interface SearchProps {
  params: { params: string };
}

export default async function SearchParams({ params }: SearchProps) {
  const cities = await googlePlaceApi(params.params);

  return (
    <div className="flex flex-col gap-4 pt-4">
      {cities.length === 0 ? (
        <p>nothing found</p>
      ) : (
        cities.map((city: { name: string; id: string; country: string }) => (
          <CityDetails id={city.id} name={city.name} country={city.country} />
        ))
      )}
    </div>
  );
}
