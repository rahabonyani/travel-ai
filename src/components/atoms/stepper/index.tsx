import type { StepperProps } from "./types";

export default function Stepper({ step, totalSteps = 3 }: StepperProps) {
  return (
    <div className={` h-3 rounded-full bg-green-100 gap-2 w-full`}>
     <div style={{width: `${(step / totalSteps) * 100}%`}} 
     className={`bg-green-500 h-full rounded-full`}></div>
    </div>
  );
}

const Step = ({ active }: { active: boolean }) => {
  return (
    <div
      className={`h-1 w-full border rounded-full ${
        active ? "bg-olive-400" : "bg-olive-100"
      }`}
    ></div>
  );
};
