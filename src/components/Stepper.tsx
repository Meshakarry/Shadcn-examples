import { Progress } from "@/components/ui/progress";

interface Step {
  label: string
}

interface StepperProps {
  steps: number | Step[]
  activeStep?: number
  onActiveStepChange: (step: number) => void
}

export default function Stepper ({ steps, activeStep = 1, onActiveStepChange }: StepperProps) {
  const stepsFormatted: number[] = Array.from({ length: typeof steps === "number" ? steps : steps.length }, (_, index) => index + 1);
  const stepProgress = Math.min((activeStep / stepsFormatted.length) * 100, 100);
  const stepWithLabel = typeof steps !== "number";

  return (
    <div style={{ '--grid-cols' : stepsFormatted.length } as React.CSSProperties} >
      <div className="relative flex items-center justify-between text-xl leading-none font-light mb-7">
        <span className="absolute left-0">
          Step <span>{ activeStep }</span> of { stepsFormatted.length }
        </span>

        { !stepWithLabel ? <span className="flex justify-end flex-1">{ stepProgress }%</span> : (
          <div className="flex-1 grid-cols-[repeat(var(--grid-cols),minmax(0,1fr))] hidden sm:grid">
            {
              steps.map(step =>
                <span key={step.label} className="ml-auto translate-x-1/2 last:translate-x-0">
                  { step.label }
                </span>
              )
            }
          </div>
        ) }
      </div>

      <div className="pr-2.5">
        <Progress value={stepProgress} />
      </div>

      <ul 
        role="tablist" 
        className={`items-center mt-12 ${stepWithLabel ? 'grid grid-cols-[repeat(var(--grid-cols),minmax(0,1fr))]' : 'flex justify-between'}`}
      >
        {
          stepsFormatted.map(step =>
            <li 
              key={step}
              role="tab"
              className={
                `
                  p-3 flex items-center justify-center w-11 h-11 text-xl cursor-pointer leading-none rounded-full transition-colors 
                  ${activeStep >= step ? 'text-white bg-[#625B71]' : 'bg-[#D8D9D9] text-black'}
                  ${stepWithLabel && 'translate-x-1/2 ml-auto last:translate-x-0'}
                `
              }
              onClick={() => onActiveStepChange(step)}
            >
              { step }
            </li>
          )
        }
      </ul>
    </div>
  )
}
