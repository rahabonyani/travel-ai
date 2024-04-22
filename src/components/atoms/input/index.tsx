

import { IconSearch } from "@tabler/icons-react";
import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
}

interface SearchInputProps {
  inputProps?: InputProps,
  containerClasses?: string
}



export default function SearchInput({containerClasses, inputProps}: SearchInputProps) {
  return (
    <form className={`${containerClasses} max-w-md ml-0`}>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <IconSearch
            className="absolute text-slate-500 top-4 left-4 
          transition-transform duration-300 w-4"
          />
        </div>
        <input
        {...inputProps}
          type="search"
          id="default-search"
          className="rounded-lg w-full border ps-9 focus:border-green-500 pe-4 py-3 border-gray-300 text-md font-normal bg-gray-50"
          placeholder="search for city"
          required
        />
      </div>
    </form>
  );
}
