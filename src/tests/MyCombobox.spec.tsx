import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MyCombobox from "@/components/MyCombobox";
import { vi } from "vitest";

const frameworks = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
];

describe("MyCombobox", () => {
  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  //
  // BASIC RENDERING
  //
  it("renders with default title and no badges", () => {
    render(<MyCombobox options={frameworks} />);

    expect(screen.getByTestId("title")).toHaveTextContent(/select items/i);
    expect(screen.queryByTestId("badge")).not.toBeInTheDocument();
  });

  it("supports custom title and placeholder props", async () => {
    render(
      <MyCombobox
        options={frameworks}
        title="Choose frameworks"
        placeholder="Type something..."
      />
    );

    expect(screen.getByTestId("title")).toHaveTextContent(/choose frameworks/i);

    await userEvent.click(screen.getByTestId("trigger"));

    expect(screen.getByTestId("search-input")).toHaveAttribute(
      "placeholder",
      "Type something..."
    );
  });

  //
  // POPOVER BEHAVIOUR
  //
  it("opens the popover when clicking the trigger", async () => {
    render(<MyCombobox options={frameworks} />);

    await userEvent.click(screen.getByTestId("trigger"));

    const options = await screen.findAllByRole("option");
    expect(options.length).toBe(frameworks.length);
  });

  //
  // SEARCH FILTER
  //
  it("shows loading spinner during search", async () => {
    render(<MyCombobox options={frameworks} />);
    await userEvent.click(screen.getByTestId("trigger"));

    vi.useFakeTimers();

    const input = screen.getByTestId("search-input");
    await userEvent.type(input, "a");

    expect(screen.getByRole("status")).toBeInTheDocument();

    act(() => vi.advanceTimersByTime(300));
    expect(screen.queryByRole("status")).not.toBeInTheDocument();
  });

  it("filters options based on search", async () => {
    render(<MyCombobox options={frameworks} />);
    await userEvent.click(screen.getByTestId("trigger"));

    vi.useFakeTimers();

    const input = screen.getByTestId("search-input");
    await userEvent.type(input, "svelte");

    act(() => vi.advanceTimersByTime(300));

    const options = screen.getAllByRole("option");
    expect(options.length).toBe(1);
    expect(options[0]).toHaveTextContent(/sveltekit/i);
  });

  it("shows empty message when nothing matches", async () => {
    render(<MyCombobox options={frameworks} />);
    await userEvent.click(screen.getByTestId("trigger"));

    vi.useFakeTimers();

    const input = screen.getByTestId("search-input");
    await userEvent.type(input, "notfound");

    act(() => vi.advanceTimersByTime(300));

    const empty = screen.getByTestId("empty-message");
    expect(empty).toBeInTheDocument();
    expect(empty).toHaveTextContent(/no results/i);
  });

  //
  // SELECTION
  //
  it("selects an item and shows a badge", async () => {
    render(<MyCombobox options={frameworks} />);
    await userEvent.click(screen.getByTestId("trigger"));

    const options = await screen.findAllByRole("option");
    await userEvent.click(options[0]);

    const checkboxes = screen.getAllByRole("checkbox");
    expect(checkboxes[0]).toBeChecked();

    const badges = screen.getAllByTestId("badge");
    expect(badges[0]).toHaveTextContent(frameworks[0].label);
  });

  it("allows deselecting an item", async () => {
    render(<MyCombobox options={frameworks} />);
    await userEvent.click(screen.getByTestId("trigger"));

    const options = await screen.findAllByRole("option");
    await userEvent.click(options[0]);

    const checkboxes = screen.getAllByRole("checkbox");
    expect(checkboxes[0]).toBeChecked();

    await userEvent.click(options[0]);
    expect(checkboxes[0]).not.toBeChecked();
  });

  //
  // BADGE REMOVAL
  //
  it("removes a badge when clicking the X button", async () => {
    render(<MyCombobox options={frameworks} />);
    await userEvent.click(screen.getByTestId("trigger"));

    const options = await screen.findAllByRole("option");
    await userEvent.click(options[0]);

    const removeBtns = screen.getAllByTestId("remove-selection");
    await userEvent.click(removeBtns[0]);

    expect(screen.queryByTestId("badge")).not.toBeInTheDocument();
  });

  //
  // CLEAR ALL
  //
  it("clears all selections", async () => {
    render(<MyCombobox options={frameworks} />);
    await userEvent.click(screen.getByTestId("trigger"));

    const options = await screen.findAllByRole("option");
    await userEvent.click(options[0]);

    const clearAll = screen.getByTestId("clear-all");
    await userEvent.click(clearAll);

    expect(screen.queryByTestId("badge")).not.toBeInTheDocument();
  });
});
