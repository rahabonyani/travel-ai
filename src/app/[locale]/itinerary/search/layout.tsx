"use client";

import { useI18n } from "@/src/lib/translate/clientTranslate";
import { IconChevronLeft } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

export default function SearchLayout({ children }: { children: ReactNode }) {
  const router = useRouter();
  const t = useI18n();

  return (
    <div className="p-4 h-full">
      <nav className="flex flex-row items-center gap-6 pb-6">
        <IconChevronLeft onClick={() => router.back()} />{" "}
        <h6 className="text-xl font-medium">
          {t("search-for-your-dream-city")}
        </h6>
      </nav>
      {children}
    </div>
  );
}
