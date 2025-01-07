"use client";

import { IconSearch } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { type InputHTMLAttributes, useState } from "react";
import { useDebouncedCallback } from "use-debounce";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}
export interface SearchInputProps {
  inputProps?: InputProps;
  containerClasses?: string;
}

export default function SearchInput({ inputProps }: SearchInputProps) {
  const [searchText, setSearchText] = useState("");
  const { push } = useRouter();

  const debounced = useDebouncedCallback((value) => {
    push(`/itinerary/search/${value}`);
  }, 1000);

  const handleOnChangeSearch = (value: string) => {
    setSearchText(value);
    debounced(value);
  };

  return (
    <div className="relative">
      <div className="absolute -top-0.5 start-0 flex items-center ps-3 pointer-events-none">
        <IconSearch
          stroke={3}
          className="absolute text-gray-400 top-4 left-4 
          transition-transform duration-300 w-3.5"
        />
      </div>
      <input
        type="text"
        name="search"
        id="default-search"
        className="rounded-2.5xl w-full border ps-9 focus:border-green-500 pe-4 py-3 border-gray-300 placeholder:text-gray-500 text-md font-normal bg-gray-50"
        placeholder="search for city"
        onChange={(e) => handleOnChangeSearch(e.target.value)}
        value={searchText}
        autoComplete="off"
        required
        {...inputProps}
      />
    </div>
  );
}
