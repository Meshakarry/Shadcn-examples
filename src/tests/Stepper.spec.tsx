import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import Stepper from "@/components/Stepper";


describe("Stepper", () => {
  const onStepChange = vi.fn();

  it("renders with multistep option", () => {
    render(<Stepper steps={5} onActiveStepChange={onStepChange} />);
    expect(screen.queryAllByTestId('step-buttons')).toHaveLength(5);
  });

  it("renders with step counter", () => {
    render(<Stepper steps={5} onActiveStepChange={onStepChange} />);
    expect(screen.getByTestId('step-counter')).toBeInTheDocument();
  });

  it("renders with current step", () => {
    render(<Stepper steps={5} onActiveStepChange={onStepChange} />);
    expect(screen.getByTestId('current-step')).toHaveTextContent('1');
    expect(screen.getByTestId('step-counter')).toHaveTextContent('Step 1 of 5');
  });

  it("renders progress percent correctly based on the steps number", () => {
    render(<Stepper steps={5} onActiveStepChange={onStepChange} />);
    expect(screen.getByTestId('step-progress')).toBeInTheDocument();
    expect(screen.getByTestId('step-progress')).toHaveTextContent('20%');
  });

  it("renders step labels if provided", () => {
    render(
      <Stepper steps={[
        { label: 'Select' },
        { label: 'Preview' },
        { label: 'Complete' },
      ]}
      onActiveStepChange={onStepChange}
    />
  );

    expect(screen.getAllByTestId('step-labels')).toBeInTheDocument();
    expect(screen.getAllByTestId('step-progress')[0]).toHaveTextContent('Select');
  });

  it("calls onStepChange when a clickable step is clicked", async () => {
    const onStepChange = vi.fn();

    render(<Stepper steps={5} onActiveStepChange={onStepChange} />);
    await userEvent.click(screen.getByRole('tab'))
    expect(onStepChange).toHaveBeenCalledWith(1);
  });
})
