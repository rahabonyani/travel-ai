import ItineraryHeader from "@/components/molecules/ItineraryHeader";
import { ReactNode } from "react";

const ItineraryLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-4 h-full bg-red">
      <ItineraryHeader step={1} />
      {children}
    </div>
  );
};

export default ItineraryLayout;
