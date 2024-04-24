"use client";

import { IconArrowLeft } from "@tabler/icons-react";
import { usePathname, useRouter } from "next/navigation";
import Stepper from "../../atoms/stepper";

const ItineraryHeader = () => {
  const router = useRouter();
  const pathName = usePathname();

  const handleSteppes = () => {
    switch (pathName) {
      case "/itinerary/budget":
        return 1;
      case "/itinerary/duration":
        return 2;
      case "/itinerary/preferences":
        return 3;
      default:
        return 1;
    }
  };

  return (
    <nav className="grid grid-cols-[55px,_1fr,_55px] place-items-center justify-items-start">
      <IconArrowLeft onClick={() => router.back()} />{" "}
      <Stepper step={handleSteppes()} totalSteps={4} />
    </nav>
  );
};

export default ItineraryHeader;
