import { IconSearch, IconX } from "@tabler/icons-react";
import { useFormik } from "formik";
import { SearchInputProps } from "./types";
import { useItineraryStore } from "@/src/core/stores/itinerary";

export default function SearchInput({
  containerClasses,
  inputProps,
}: SearchInputProps) {
  const setCity = useItineraryStore((state) => state.setCity);

  const formik = useFormik({
    initialValues: {
      search: "",
    },
    onSubmit: async (values) => {
      setCity(values.search);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={`${containerClasses} ml-0`}>
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
          value={formik.values.search}
          onChange={(event) => {
            formik.setFieldValue("city", event.target.value);
          }}
          autoComplete="off"
          required
          {...inputProps}
        />
        {formik.values.search && (
          <div
            className="absolute h-full w-4 top-3 right-4 text-gray-400"
            onClick={() => formik.resetForm()}
          >
            <IconX stroke={2} />
          </div>
        )}
      </div>
    </form>
  );
}
