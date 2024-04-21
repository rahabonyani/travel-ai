import { IconSearch } from "@tabler/icons-react";

export default function SearchInput() {
  return (
    <form className="max-w-md ml-0">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <IconSearch
            className="absolute text-slate-500 top-2 left-3 
          transition-transform duration-300 w-4"
          />
        </div>
        <input
          type="search"
          id="default-search"
          className="rounded-lg h-10 w-full border-2 pl-9 peer border-gray-200 text-sm bg-gray-50"
          placeholder="Quick search for anything"
          required
        />
      </div>
    </form>
  );
}
