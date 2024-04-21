import Image from 'next/image';
import type { LocationBoxProps } from './types';
import Link from 'next/link';

const LocationBox = ({ title, image, slug }: LocationBoxProps) => {
  return (
    <Link
      href={`${slug}`}
      className='relative rounded-3xl w-[48%] h-full min-h-40 overflow-hidden aspect-square'
    >
      <Image
        className='bg-green-200 w-full min-h-40 object-cover'
        src={image}
        fill
        alt=''
      />
      <h6
        className='absolute bottom-0  text-lg font-bold tracking-wide  bg-gradient-to-b 
      from-slate-900/0 to-slate-800 w-full py-4 text-white px-4
      '
      >
        {title}
      </h6>
    </Link>
  );
};

export default LocationBox;
