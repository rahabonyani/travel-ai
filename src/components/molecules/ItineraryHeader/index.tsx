import { IconChevronLeft } from "@tabler/icons-react";
import Stepper from "../../atoms/stepper";
import Link from "next/link";
import { ReactNode } from "react";

interface ItineraryHeaderProps {
  step: number;
  backUrl: string;
  forwardUrl?: string;
  children?: ReactNode;
}

const ItineraryHeader = ({
  step,
  backUrl,
  forwardUrl,
}: ItineraryHeaderProps) => {
  return (
    <nav className="flex flex-row gap-6 items-center px-2">
      <Link href={backUrl}>
        <IconChevronLeft className="w-6 h-6" />
      </Link>
      <div className="w-[67%]">
        <Stepper step={step} totalSteps={4} />
      </div>
      {forwardUrl && (
        <Link
          href={forwardUrl}
          className="text-lg text-green-500 font-semibold"
        >
          Next
        </Link>
      )}
    </nav>
  );
};

export default ItineraryHeader;
