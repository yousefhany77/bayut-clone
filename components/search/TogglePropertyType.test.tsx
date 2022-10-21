import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import SearchBox from "./SearchBox";

describe("TogglePropertyType", () => {
  it("should render correctly with Property Type Sale -Default value-", async () => {
    render(<SearchBox />);
    expect(screen.getByText("Sale")).toHaveClass("bg-indigo-500");
  });
  it("should test rent property type Rent and choose rent ferquancy", async () => {
    user.setup();
    render(<SearchBox />);
    await user.click(screen.getByText("Rent"));
    const Daily = screen.getByText("Daily");
    const Weekly = screen.getByText("Weekly");
    const Monthly = screen.getByText("Monthly");
    const Yearly = screen.getByText("Yearly");

    // Weekly
    await user.click(Weekly);
    expect(Weekly).toHaveClass("bg-indigo-500");
    // Monthly
    await user.click(Monthly);
    expect(Monthly).toHaveClass("bg-indigo-500");
    // Yearly
    await user.click(Yearly);
    expect(Yearly).toHaveClass("bg-indigo-500");
    // Daily
    await user.click(Daily);
    expect(Daily).toHaveClass("bg-indigo-500");
  });
  it("should switch between Sale and Rent", async () => {
    user.setup();
    render(<SearchBox />);
    const Rent = screen.getByText("Rent");
    await user.click(Rent);
    expect(Rent).toHaveClass("bg-indigo-500");
    const Sale = screen.getByText("Sale");
    await user.click(Sale);
    expect(Sale).toHaveClass("bg-indigo-500");
  });
});
