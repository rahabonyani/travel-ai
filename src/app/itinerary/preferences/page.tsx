import { IconArrowLeft, IconArrowRight, IconBrush } from '@tabler/icons-react';
import Link from 'next/link';

export default function PreferencesPage() {
  return (
    <section className='h-full flex-col flex '>
      <nav className='flex gap-2 items-center'>
        <IconArrowLeft /> <div className='grow text-center'> Steper</div>
      </nav>

      <div className='flex flex-col gap-10 mt-4'>
        <div className=''>
          <h1>Tailor your adventure to your tastes</h1>
          <p className='text-gray-500 mt-3'>
            Select your travel preferences to customize your trip plan.
          </p>
        </div>

        <div className=''>
          <h1>Your travel group type</h1>
          <div className='flex flex-wrap gap-3 mt-6'>
            <div className='px-5 py-3 gap-2 flex items-center font-semibold
            border-green-500 rounded-full border-2'>
              <IconBrush />
              <span>Freiends</span>
            </div>
            <div className='px-5 py-3 gap-2 flex items-center font-semibold
            border-green-500 rounded-full border-2'>
              <IconBrush />
              <span>Freiends</span>
            </div>
            <div className='px-5 py-3 gap-2 flex items-center font-semibold
            border-green-500 rounded-full border-2'>
              <IconBrush />
              <span>Freiends</span>
            </div>
            <div className='px-5 py-3 gap-2 flex items-center font-semibold
            border-green-500 rounded-full border-2'>
              <IconBrush />
              <span>Freiends</span>
            </div>
          </div>
        </div>

        <div className=''>
          <h1>Activities you find most enjoyable</h1>
          <div className='flex flex-wrap gap-3 mt-6'>
            <div className='px-5 py-3 gap-2 flex items-center font-semibold
            border-green-500 rounded-full border-2'>
              <IconBrush />
              <span>Beach Vacation</span>
            </div>
            <div className='px-5 py-3 gap-2 flex items-center font-semibold
            border-green-500 rounded-full border-2'>
              <IconBrush />
              <span>Freiends</span>
            </div>
            <div className='px-5 py-3 gap-2 flex items-center font-semibold
            border-green-500 rounded-full border-2'>
              <IconBrush />
              <span>Freiends</span>
            </div>
            <div className='px-5 py-3 gap-2 flex items-center font-semibold
            border-green-500 rounded-full border-2'>
              <IconBrush />
              <span>Adventure</span>
            </div>
            <div className='px-5 py-3 gap-2 flex items-center font-semibold
            border-green-500 rounded-full border-2'>
              <IconBrush />
              <span>Freiends</span>
            </div>
            <div className='px-5 py-3 gap-2 flex items-center font-semibold
            border-green-500 rounded-full border-2'>
              <IconBrush />
              <span>Freiends</span>
            </div>
          </div>
        </div>
      </div>
<span className='grow'></span>
      <Link href={'/itinerary/result'} className='bg-green-500 text-white rounded-2xl text-center p-3'>
      Next
      </Link>
    </section>
  );
}
