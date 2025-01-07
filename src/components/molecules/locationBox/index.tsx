import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import Link from "next/link";

export interface LocationBoxProps {
  title: string;
  image: string | StaticImport;
}

export default function LocationBox({ title, image }: LocationBoxProps) {
  return (
    <Link
      href={`/itinerary/budget?search=${title}`}
      className="relative w-[152px] rounded-3xl h-36 overflow-hidden aspect-square"
    >
      <Image
        className="bg-green-200 w-full min-h-40 object-cover"
        src={image}
        fill
        alt=""
      />
      <h6
        className="absolute bottom-0  text-lg font-bold tracking-wide  bg-gradient-to-b 
      from-transparent from-0 to-black w-full py-4 text-white px-4
      "
      >
        {title}
      </h6>
    </Link>
  );
}
