"use client";

import { useItineraryStore } from "@/src/core/stores/itinerary";
import { IconArrowRight } from "@tabler/icons-react";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

export default function DurationPage() {
  const route = useRouter();
  const setDuration = useItineraryStore((state) => state.setDuration);

  const handleSaveDuration = (value: number) => {
    setDuration(value);
    route.push("/itinerary/preferences");
  };

  const formik = useFormik({
    initialValues: {
      duration: 0,
    },
    onSubmit: async (values) => {
      handleSaveDuration(values.duration);
    },
  });

  return (
    <section className="h-full flex-col flex pb-14">
      <div className="flex flex-col mt-4">
        <div className=" mb-6">
          <h1>Travel Duration</h1>
          <p className="text-gray-500 mt-3 font-medium text-sm">
            Enter the number of days for your trip or set specific dates of your
            trip.
          </p>
        </div>

        <div className="flex flex-col  gap-5 ">
          <div
            onClick={() => handleSaveDuration(1)}
            className="rounded-3xl border border-green-500 text-green-600
           flex grow justify-between p-5 font-medium"
          >
            <span>1 Day</span>
            <IconArrowRight />
          </div>
          <div
            onClick={() => handleSaveDuration(2)}
            className="rounded-3xl border border-green-500 text-green-600
           flex grow justify-between p-5 font-medium"
          >
            <span>2 Day</span>

            <IconArrowRight />
          </div>
          <div
            onClick={() => handleSaveDuration(3)}
            className="rounded-3xl border border-green-500 text-green-600
           flex grow justify-between p-5 font-medium"
          >
            <span>3 Day</span>

            <IconArrowRight />
          </div>
          <div
            onClick={() => handleSaveDuration(4)}
            className="rounded-3xl border border-green-500 text-green-600
           flex grow justify-between p-5 font-medium"
          >
            <span>4 Day</span>

            <IconArrowRight />
          </div>
        </div>

        <div>
          <form onSubmit={formik.handleSubmit} className="grow mt-10">
            <label
              htmlFor="customDays"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Or write
            </label>
            <input
              type="number"
              id="customDays"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
           focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="12"
              name="duration"
              value={formik.values.duration > 0 ? formik.values.duration : ""}
              onChange={formik.handleChange}
              required
            />
          </form>
        </div>
      </div>
    </section>
  );
}
