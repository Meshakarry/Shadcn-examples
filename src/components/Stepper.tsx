import { Progress } from "@/components/ui/progress";

interface Step {
  label: string
}

interface StepperProps {
  steps: number | Step[]
  activeStep?: number
  onActiveStepChange: (step: number) => void
}

export default function Stepper ({
  steps,
  activeStep = 1,
  onActiveStepChange
}: StepperProps) {

  const stepsFormatted: number[] = Array.from({
    length: typeof steps === "number" ? steps : steps.length
  }, (_, index) => index + 1);

  const stepProgress = Math.min((activeStep / stepsFormatted.length) * 100, 100);
  const stepWithLabel = typeof steps !== "number";

  return (
    <div style={{ '--grid-cols' : stepsFormatted.length } as React.CSSProperties}>
      
      {/* COUNTER */}
      <div className="relative flex items-center justify-between mb-7">
        <span
          data-testid="step-counter"
          className="absolute left-0"
        >
          Step <span data-testid="current-step">{activeStep}</span> of {stepsFormatted.length}
        </span>

        {!stepWithLabel ? (
          <span data-testid="step-progress" className="flex justify-end flex-1">{stepProgress}%</span>
        ) : (
          <div className="flex-1 hidden sm:grid grid-cols-[repeat(var(--grid-cols),minmax(0,1fr))]">
            {steps.map((step) => (
              <span data-testid="step-label" key={step.label} className="ml-auto translate-x-1/2 last:translate-x-0">
                {step.label}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* PROGRESS BAR */}
      <div className="pr-2.5">
        <Progress value={stepProgress} />
      </div>

      {/* STEPS */}
      <ul role="tablist" className={`mt-12 items-center ${stepWithLabel ? 'grid grid-cols-[repeat(var(--grid-cols),minmax(0,1fr))]' : 'flex justify-between'}`}>
        {stepsFormatted.map(step => (
          <li
            key={step}
            data-testid="step-button"
            role="tab"
            className={`
              p-3 flex items-center justify-center w-11 h-11 text-xl cursor-pointer leading-none rounded-full transition-colors
              ${activeStep >= step ? "text-white bg-[#625B71]" : "bg-[#D8D9D9] text-black"}
              ${stepWithLabel && "translate-x-1/2 ml-auto last:translate-x-0"}
            `}
            onClick={() => onActiveStepChange(step)}
          >
            {step}
          </li>
        ))}
      </ul>
    </div>
  );
}
