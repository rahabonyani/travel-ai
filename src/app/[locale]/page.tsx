import { googlePlaceApi } from "@/src/actions/googlePlaceApi";

export default async function Home({
  params,
  searchParams,
}: {
  params: { q: string };
  searchParams: { [key: string]: string };
}) {
  const cities = await googlePlaceApi(searchParams.q);

  return (
    <div>
      <a href="/?q=paris">paris</a>istanbul
      <a href="/?q=london">london</a>
      <a href="/?q=istanbul">istanbul</a>
      {cities.map((city: { name: string }) => (
        <p>{city.name}</p>
      ))}
    </div>
  );
}
