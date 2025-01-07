import { googlePhotoPlaceApi } from "@/src/actions/googlePhotoPlaceApi";
import Image from "next/image";
import NoImage from "@/public/image/svg/no-image.svg";

export interface GooglePlacePhotoProps {
  imageId: string;
}

export default async function GooglePlacePhoto({ imageId }: GooglePlacePhotoProps) {
  let imageUrl = NoImage;
  try {
    imageUrl = await googlePhotoPlaceApi(imageId);
  } catch (error) {}
  console.log(imageUrl);
  return <Image src={imageUrl} alt={""} className="bg-gray-100 w-full h-full object-cover" width={100} height={100} />;
}
