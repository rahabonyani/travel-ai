'use client';

import ItineraryHeader from '@/components/molecules/ItineraryHeader';
import Stepper from '@/components/atoms/stepper';
import { IconArrowLeft } from '@tabler/icons-react';
import Link from 'next/link';

export default function BudgetPage() {
  return (
    <section className='h-full flex-col flex pb-14'>
      <ItineraryHeader step={1} />

      <div className='flex-col flex grow'>
        <div className='mt-4 mb-6'>
          <h1>Set your trip budget</h1>
          <p className='text-gray-500 mt-3'>
            Let us know your budget preference, and we&apos;ll craft an
            itinerary that suits your financial comfort.
          </p>
        </div>

        <div className='flex flex-col grow gap-4 '>
          <Link
            href={'/itinerary/duration'}
            className='rounded-3xl bg-green-100 flex flex-col grow justify-end'
          >
            <div className='p-4 text-2xl font-medium'>
              <span>I have mid budget</span>
            </div>
          </Link>
          <Link
            href={'/itinerary/duration'}
            className='rounded-3xl bg-green-100 flex flex-col grow justify-end'
          >
            <div className='p-4 text-2xl font-medium'>
              <span>I have cheap budget</span>
            </div>
          </Link>
          <Link
            href={'/itinerary/duration'}
            className='rounded-3xl bg-green-100 flex flex-col grow justify-end'
          >
            <div className='p-4 text-2xl font-medium'>
              <span>I have high budget</span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
