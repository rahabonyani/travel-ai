import Stepper from '@/components/molecules/stepper';
import type { StepsPagesLayoutProps } from './types';

const StepsPagesLayout = ({ children, step }: StepsPagesLayoutProps) => {
  return (
    <div className='p-4 flex flex-col h-full'>
       
      {children}
      <span className='grow'></span>
      <Stepper step={step} />
    </div>
  );
};

export default StepsPagesLayout;
