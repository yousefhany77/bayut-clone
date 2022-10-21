import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import PricePicker from "./MinMaxRange";

describe("PricePicker", () => {
  it("should render price picker", () => {
    render(
      <PricePicker
        title={"Price Range"}
        filterType={"price"}
        setFilters={() => undefined}
      />
    );
    const header = screen.getByText("Price Range");
    expect(header).toBeInTheDocument();
  });
  it("should render price picker min & max", async () => {
    user.setup();
    render(
      <PricePicker
        title={"Price"}
        filterType={"price"}
        setFilters={() => undefined}
        isMouny
      />
    );
    const header = screen.getByText("Price");
    await user.click(header);
    const min = await screen.findByPlaceholderText(/min/i);
    const max = await screen.findByPlaceholderText(/max/i);
    await user.type(min, "1000000");
    await user.type(max, "2000000");
    await user.click(header);
    const minPrice = await screen.findByTestId("min");
    expect(minPrice).toHaveTextContent("AED 1.0M");
    const maxPrice = await screen.findByTestId("max");
    expect(maxPrice).toHaveTextContent("AED 2.0M");
  });
});
