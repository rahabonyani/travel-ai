"use client";

import { IconArrowLeft } from "@tabler/icons-react";
import type { ItineraryHeaderProps } from "./types";
import { usePathname, useRouter } from "next/navigation";
import Stepper from "../../atoms/stepper";

const ItineraryHeader = ({ step, rightButton }: ItineraryHeaderProps) => {
  const router = useRouter();
  const pathName = usePathname();
  console.log(pathName);
  return (
    <nav className="grid grid-cols-[55px,_1fr,_55px] place-items-center justify-items-start">
      <IconArrowLeft onClick={() => router.back()} />{" "}
      <Stepper step={step} totalSteps={4} />
      {rightButton}
    </nav>
  );
};

export default ItineraryHeader;
