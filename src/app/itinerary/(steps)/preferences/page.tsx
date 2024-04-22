'use client';

import Tag from '@/components/atoms/tag';
import ItineraryHeader from '@/components/molecules/ItineraryHeader';
import {
  IconArrowLeft,
  IconArrowRight,
  IconBrush,
  IconFish,
  IconWaveSawTool,
} from '@tabler/icons-react';
import Link from 'next/link';
import { useState } from 'react';

export default function PreferencesPage() {
  const [selectedGroup, setSelectedGroup] = useState<string[]>([]);
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);

  return (
    <>
      <title>Preferences</title>
      <section className='h-full flex-col flex '>
        <ItineraryHeader
          step={3}
          rightButton={
            <Link
              href={'/itinerary/result'}
              className='text-green-500 text-lg font-semibold justify-self-end'
            >
              Next
            </Link>
          }
        />

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
              <Tag
                icon={<IconBrush />}
                text='Solo'
                value='solo'
                array={selectedGroup}
                arraySelector={setSelectedGroup}
              />

               <Tag
                icon={<IconBrush />}
                text='Friends'
                value='friends'
                array={selectedGroup}
                arraySelector={setSelectedGroup}
              />

               <Tag
                icon={<IconBrush />}
                text='Solo'
                value='5'
                array={selectedGroup}
                arraySelector={setSelectedGroup}
              />
            </div>
          </div>

          <div className=''>
            <h1>Activities you find most enjoyable</h1>
            <div className='flex flex-wrap gap-3 mt-6'>
            

<Tag
                icon={<IconFish />}
                text='Beach Vacation'
                value='beach'
                array={selectedActivities}
                arraySelector={setSelectedActivities}
              />

               <Tag
                icon={<IconBrush />}
                text='Solo'
                value='1'
                array={selectedActivities}
                arraySelector={setSelectedActivities}
              />

               <Tag
                icon={<IconBrush />}
                text='Solo'
                value='2'
                array={selectedActivities}
                arraySelector={setSelectedActivities}
              />

               <Tag
                icon={<IconBrush />}
                text='Friends'
                value='3'
                array={selectedActivities}
                arraySelector={setSelectedActivities}
              />

               <Tag
                icon={<IconBrush />}
                text='Solo'
                value='4'
                array={selectedActivities}
                arraySelector={setSelectedActivities}
              />
            </div>
          </div>
        </div>
        <span className='grow'></span>
        <Link
          href={'/itinerary/result'}
          className='bg-green-500 text-white rounded-2xl text-center p-3'
        >
          Next
        </Link>
      </section>
    </>
  );
}
