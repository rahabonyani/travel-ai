"use client";

import { useState } from "react";
import { Drawer, TextInput } from "flowbite-react";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useI18n } from "@/src/lib/translate/clientTranslate";
import { useRouter, useSearchParams } from "next/navigation";
import { IconX } from "@tabler/icons-react";

export default function DurationForm() {
  const t = useI18n();
  const { push } = useRouter();
  const searchParams = useSearchParams();

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  const durationSchema = Yup.object().shape({
    duration: Yup.number()
      .min(1, t("ERROR-You-must-enter-up-1-days"))
      .max(10, t("ERROR-You-must-enter-below-10-days.message"))
      .required(t("ERROR-Plase-add-duration-day")),
  });

  const formik = useFormik({
    initialValues: {
      duration: "",
    },
    validationSchema: durationSchema,
    onSubmit: async (values) => {
      const dureation = parseInt(values.duration);
      push(
        `/itinerary/preferences?search=${searchParams.get(
          "search"
        )}&budget=${searchParams.get("budget")}&duration=${dureation}`
      );
    },
  });

  return (
    <>
      <div className="flex items-center justify-center">
        <button
          onClick={() => setIsOpen(true)}
          className="rounded-2.5xl border border-gray-300 text-gray-500 w-full
           flex grow justify-between py-3.5 px-6 text-md font-normal"
        >
          Number of days
        </button>
      </div>
      <Drawer
        edge
        open={isOpen}
        onClose={handleClose}
        position="bottom"
        className="p-8 bottom-0 rounded-t-2.5xl"
      >
        <Drawer.Items>
          <div>
            <h6 className="block pb-5 text-sm font-medium text-gray-900 dark:text-white">
              Enter the number
            </h6>
            <form onSubmit={formik.handleSubmit} autoFocus={true}>
              <div>
                <div className="relative">
                  <input
                    type="number"
                    id="customDays"
                    className={`${
                      formik.errors.duration &&
                      formik.touched.duration &&
                      "text-red-600 border-red-600 focus:border-red-600"
                    } w-full p-3 border-b-2 border-gray-300 text-gray-900 text-sm border-x-0 border-t-0 focus:ring-0 focus:border-x-0 focus:border-t-0 focus:border-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-gray-500 dark:focus:border-gray-500`}
                    placeholder=""
                    name="duration"
                    value={formik.values.duration}
                    onChange={formik.handleChange}
                    autoFocus={true}
                  />
                  {formik.values.duration.length > 0 && (
                    <div
                      className="absolute h-full w-4 top-4 right-4 text-gray-400"
                      onClick={() => formik.resetForm()}
                    >
                      <IconX
                        stroke={2}
                        className={`w-4 h-4 ${
                          formik.errors.duration &&
                          formik.touched.duration &&
                          "text-red-600"
                        }`}
                      />
                    </div>
                  )}
                </div>

                {formik.errors.duration && formik.touched.duration && (
                  <p className="text-xs text-red-600 pt-2">
                    {parseInt(formik.values.duration) > 10 && (
                      <span className="font-semibold">
                        {t("ERROR-You-must-enter-below-10-days.Oh")}
                      </span>
                    )}{" "}
                    {formik.errors.duration}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="mt-8 py-3.5 px-6 text-base font-semibold bg-green-500 text-white w-full rounded-2xl"
              >
                Done
              </button>
            </form>
          </div>
        </Drawer.Items>
      </Drawer>
    </>
  );
}
