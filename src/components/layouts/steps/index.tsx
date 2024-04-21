import Stepper from '@/components/molecules/stepper';
import type { StepsPagesLayoutProps } from './types';

const StepsPagesLayout = ({ children, step }: StepsPagesLayoutProps) => {
  return (
    <div className='p-4'>
      {children}
      <Stepper step={step} />
    </div>
  );
};

export default StepsPagesLayout;
