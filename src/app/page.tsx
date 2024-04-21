import StepsPagesLayout from '@/components/layouts/steps';
import LocationBox from '@/components/molecules/locationBox';

import { IconSearch } from '@tabler/icons-react';
import Image from 'next/image';

export default function Home() {
  return (
    <StepsPagesLayout step={1}>
      <section className=''>
        <div className='relative pb-8 pt-6 p-4'>
          <Image
            alt='Paris'
            className='absolute brightness-50 z-0 object-cover'
            src={'/paris.jpg'}
            fill
          />
          <div className='p-2 relative z-10'>
            <h1 className='text-3xl font-bold pb-2 !text-white'>
              Ready for an Adventure?
            </h1>
            <h2 className='text-xl text-green-400 font-medium'>
              Choose Your City!
            </h2>
          </div>
          <div className='relative overflow-hidden'>
            <input
              placeholder='Quick search for anything'
              type='text'
              className='rounded-md h-10 w-full border-2 pl-9 peer border-gray-200 text-sm bg-gray-50'
            />
            <IconSearch
              className='absolute text-slate-500  top-2 left-2 
          transition-transform duration-300 w-5'
            />
          </div>
        </div>

        <div className=''>
          <h5 className='text-center py-5 text-sm'>
            Or select from most visited cities
          </h5>
          <div className='flex flex-row flex-wrap gap-3 px-4'>
            <LocationBox slug='/paris' image={'/paris.jpg'} title='Paris' />
            <LocationBox slug='/london' image={'/london.jpg'} title='London' />
            <LocationBox slug='/milan' image={'/milan.jpg'} title='Milan' />
            <LocationBox
              slug='/istanbul'
              image={'/istanbul.jpg'}
              title='Istanbul'
            />
          </div>
        </div>
      </section>
    </StepsPagesLayout>
  );
}
