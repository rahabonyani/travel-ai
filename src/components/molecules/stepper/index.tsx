import type { StepperProps } from './types';

const Stepper = ({ step }: StepperProps) => {
  return (
    <div className={`grid grid-cols-4 gap-2 w-full h-1  py-4`}>
      <Step active={step >= 1} />
      <Step active={step >= 2} />
      <Step active={step >= 3} />
      <Step active={step >= 4} />
    </div>
  );
};

const Step = ({ active }: { active: boolean }) => {
  return (
    <div
      className={`h-1 w-full rounded-full ${
        active ? 'bg-olive-400' : 'bg-olive-100'
      }`}
    ></div>
  );
};

export default Stepper;
