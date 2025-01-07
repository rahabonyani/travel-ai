import { type ReactNode } from "react";
import Image from "next/image";
import ResultImage from "@/public/image/svg/Loading pic.svg";

export default function ResultLayout({ children }: { children: ReactNode }) {
  return (
    <section className="h-full relative">
      <div
        className="h-screen w-screen top-0 left-0 flex flex-col gap-12 items-center justify-center
   px-8"
      >
        <div className="mt-1">
          <Image src={ResultImage} alt="" />
        </div>

        <div className="w-full">{children}</div>
      </div>
    </section>
  );
}
