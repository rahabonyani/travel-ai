import ItineraryHeader from "@/src/components/molecules/ItineraryHeader";
import { ReactNode } from "react";

export default function ItineraryLayout({ children }: { children: ReactNode }) {
  return (
    <div className="p-4 h-full bg-red">
      <ItineraryHeader />
      {children}
    </div>
  );
}
