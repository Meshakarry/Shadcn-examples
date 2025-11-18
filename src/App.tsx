import MultiSelectCombobox from '@/components/MyCombobox'
import Stepper from '@/components/Stepper'
import { useState } from 'react'

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
  {
    value: "vue",
    label: "Vue",
  },
  {
    value: "vuetify",
    label: "Vuetify",
  },
]

const steps = [
  {
    label: "Select"
  },
  {
    label: "Preview"
  },
  {
    label: "Complete"
  },
  {
    label: "Label"
  },
  {
    label: "Done!!!"
  },
]


function App () {
  const [activeStep, setActiveStep] = useState(1);
  const [step, setStep] = useState(1);

  return (
    <div className="container">
      <h1 className="mb-5">Showcase page...</h1>
      <div className="flex flex-col gap-10 mb-6">
        <MultiSelectCombobox options={frameworks} />
        <Stepper steps={5} activeStep={activeStep} onActiveStepChange={setActiveStep} />
        <Stepper steps={steps} activeStep={step} onActiveStepChange={setStep} />
      </div>

      <Stepper steps={5} activeStep={activeStep} onActiveStepChange={setActiveStep} />

      

    </div>
  )
}

export default App;
