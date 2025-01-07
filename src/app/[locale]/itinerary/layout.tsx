import type { ReactNode } from "react";

export default function ItineraryLayout({ children }: { children: ReactNode }) {
  return <div className="bg-green-50 min-h-dvh">{children}</div>;
}
