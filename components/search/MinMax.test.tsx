import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import MinMax from "./MinMaxRange";

describe("Price Picker", () => {
  it("should render price picker", () => {
    render(
      <MinMax
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
      <MinMax
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
  it("Should Render Error Messages", async () => {
    user.setup();
    render(
      <MinMax
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
    await user.type(min, "10000000");
    await user.type(max, "2000000");
    expect(screen.getByText("Max must be more then min")).toBeInTheDocument();
  });
});

describe("Min Max Area with meter square units", () => {
  it("should render min max value", async () => {
    user.setup();

    render(
      <MinMax
        title="Area"
        filterType={"area"}
        setFilters={() => undefined}
        unit={"m²"}
      />
    );
    const header = screen.getByText("Area");
    await user.click(header);
    const min = await screen.findByPlaceholderText(/min/i);
    await user.type(min, "500");
    await user.click(header);
    expect(
      await screen.findByText("500 m²", { exact: false })
    ).toBeInTheDocument();
    expect(
      await screen.findByText("any", { exact: false })
    ).toBeInTheDocument();
  });
  it("Should Have max Value", async () => {
    user.setup();

    render(
      <MinMax
        title="Rooms"
        filterType={"rooms"}
        setFilters={() => undefined}
        maxLimit={10}
      />
    );
    const header = screen.getByText("Rooms");
    await user.click(header);
    const min = await screen.findByPlaceholderText(/min/i);
    await user.type(min, "30");
    expect(min).toHaveValue("10");
    await user.clear(min);
    await user.type(min, "NaN");
    expect(min).toHaveValue("0");
    const max = await screen.findByPlaceholderText(/max/i);
    await user.type(max, "30");
    expect(max).toHaveValue("10");
    await user.clear(max);
    await user.type(max, "NaN");
    expect(max).toHaveValue("");
  });
});
