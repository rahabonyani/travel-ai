import Image from 'next/image';
import { IconHome } from '@tabler/icons-react';
import Stepper from '@/components/Stepper';

export default function Home() {
  return (
    <main className=''>
      <Stepper step={1} />
    </main>
  );
}
