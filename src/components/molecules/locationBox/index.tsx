import Image from "next/image";
import type { LocationBoxProps } from "./types";

const LocationBox = ({ title, image }: LocationBoxProps) => {
  return (
    <div className="relative rounded-2xl w-[48%] h-full min-h-40 overflow-hidden">
      <Image className="bg-green-200 w-full min-h-40" src={image} alt="" />
      <h6 className="absolute bottom-4 left-4 text-lg font-medium">{title}</h6>
    </div>
  );
};

export default LocationBox;
