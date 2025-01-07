import SearchCitySkeleton from "@/src/components/molecules/searchCitySkeleton";

export default function SearchLoading() {
  // Or a custom loading skeleton component
  return (
    <div className="bg-white p-4 rounded-2.5xl">
      <SearchCitySkeleton />
    </div>
  );
}
