import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import Stepper from "@/components/Stepper";

describe("Stepper", () => {
  const onStepChange = vi.fn();

  it("renders numbered steps when steps is a number", () => {
    render(<Stepper steps={5} onActiveStepChange={onStepChange} />);
    expect(screen.getAllByTestId("step-button")).toHaveLength(5);
  });

  it("renders step counter", () => {
    render(<Stepper steps={5} onActiveStepChange={onStepChange} />);
    expect(screen.getByTestId("step-counter")).toHaveTextContent("Step 1 of 5");
  });

  it("renders current step correctly", () => {
    render(<Stepper steps={5} onActiveStepChange={onStepChange} />);
    expect(screen.getByTestId("current-step")).toHaveTextContent("1");
  });

  it("shows correct progress percentage", () => {
    render(<Stepper steps={5} onActiveStepChange={onStepChange} />);

    const progress = screen.getByTestId("step-progress");
    expect(progress).toHaveTextContent("20%");
  });

  it("renders step labels when provided", () => {
    render(
      <Stepper
        steps={[
          { label: "Select" },
          { label: "Preview" },
          { label: "Complete" },
        ]}
        onActiveStepChange={onStepChange}
      />
    );

    const labels = screen.getAllByTestId("step-label");
    expect(labels).toHaveLength(3);
    expect(labels[0]).toHaveTextContent("Select");
  });

  it("calls onActiveStepChange when a step is clicked", async () => {
    render(<Stepper steps={5} onActiveStepChange={onStepChange} />);

    const stepButtons = screen.getAllByTestId("step-button");
    await userEvent.click(stepButtons[1]); // click step 2

    expect(onStepChange).toHaveBeenCalledWith(2);
  });
});
