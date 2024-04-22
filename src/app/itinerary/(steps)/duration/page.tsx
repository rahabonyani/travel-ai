import ItineraryHeader from '@/components/molecules/ItineraryHeader';
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import Link from 'next/link';

export default function DurationPage() {
  return (
    <section className='h-full flex-col flex pb-14'>
      
      <ItineraryHeader step={2} />

      <div className='flex flex-col mt-4'>
        <div className=' mb-6'>
          <h1>Travel Duration</h1>
          <p className='text-gray-500 mt-3'>
            Enter the number of days for your trip or set specific dates of your
            trip.
          </p>
        </div>

        <div className='flex flex-col  gap-5 '>
          <Link
            href={'/itinerary/preferences'}
            className='rounded-3xl border-2 border-green-500 text-green-500
           flex grow justify-between p-5 font-medium'
          >
            <span>1 Day</span>
            <IconArrowRight />
          </Link>
          <Link
            href={'/itinerary/preferences'}
            className='rounded-3xl border-2 border-green-500 text-green-500
           flex grow justify-between p-5 font-medium'
          >
            <span>2 Day</span>

            <IconArrowRight />
          </Link>
          <Link
            href={'/itinerary/preferences'}
            className='rounded-3xl border-2 border-green-500 text-green-500
           flex grow justify-between p-5 font-medium'
          >
            <span>3 Day</span>

            <IconArrowRight />
          </Link>
          <Link
            href={'/itinerary/preferences'}
            className='rounded-3xl border-2 border-green-500 text-green-500
           flex grow justify-between p-5 font-medium'
          >
            <span>4 Day</span>

            <IconArrowRight />
          </Link>
        </div>

        <div className='grow mt-10'>
          <label
            htmlFor='customDays'
            className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
          >
            Or write
          </label>
          <input
            type='text'
            id='customDays'
            className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
           focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
            placeholder='12'
            required
          />
        </div>
      </div>
    </section>
  );
}
