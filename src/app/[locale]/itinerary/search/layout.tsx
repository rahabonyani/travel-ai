import SearchInput from "@/src/components/atoms/searchInput";
import { getI18n } from "@/src/lib/translate/serverTranslate";
import { IconChevronLeft } from "@tabler/icons-react";
import Link from "next/link";

export default async function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = await getI18n();
  return (
    <div className="p-4 h-full">
      <nav className="flex flex-row items-center gap-6 pb-6 pt-2">
        <Link href="/itinerary">
          <IconChevronLeft />
        </Link>
        <h6 className="text-xl font-medium">
          {t("search-for-your-dream-city")}
        </h6>
      </nav>
      <div className="pb-2">
        <SearchInput />
      </div>
      {children}
    </div>
  );
}
