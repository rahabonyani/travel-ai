import Image from 'next/image';
import { IconHome } from '@tabler/icons-react';
import Stepper from '@/components/molecules/stepper';
import StepsPagesLayout from '@/components/layouts/steps';

export default function Home() {
  return (
    <StepsPagesLayout step={1}>
      <section className=''>
        <h1>Ready for an Adventure?</h1>
        <h2 className='text-green-400'>Choose Your City!</h2>
        <input type='text' />
      </section>
    </StepsPagesLayout>
  );
}
