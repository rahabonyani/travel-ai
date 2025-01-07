import { ReactNode } from "react";

export default function ItineraryLayout({ children }: { children: ReactNode }) {
  return (
    <div className="p-4 h-full relative">
      <div>{children}</div>
    </div>
  );
}
