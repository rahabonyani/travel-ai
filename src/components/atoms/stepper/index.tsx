export interface StepperProps {
  step: number;
  totalSteps?: number;
}

export default function Stepper({ step, totalSteps = 3 }: StepperProps) {
  return (
    <div className={` h-3 rounded-full bg-green-100 gap-2 w-full`}>
      <div
        style={{ width: `${(step / totalSteps) * 100}%` }}
        className={`bg-green-500 h-full rounded-full`}
      ></div>
    </div>
  );
}
