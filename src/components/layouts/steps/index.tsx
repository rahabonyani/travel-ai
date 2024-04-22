import Stepper from "@/components/atoms/stepper";
import type { StepsPagesLayoutProps } from "./types";

export default function StepsPagesLayout({
  children,
  step,
}: StepsPagesLayoutProps) {
  return (
    <div className="flex flex-col h-full">
      {children}
      <span className="grow"></span>
      <Stepper step={step} />
    </div>
  );
}
