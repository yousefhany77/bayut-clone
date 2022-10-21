import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import SearchBox from "./SearchBox";
import { server } from "../../mocks/server";
beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

describe("Location Search", () => {
  it("should render search input", () => {
    render(<SearchBox />);
    const search = screen.getByRole("textbox", { name: /Enter location/i });
    expect(search).toBeInTheDocument();
  });

  it("should render autocomplete values for dubai", async () => {
    user.setup();
    render(<SearchBox />);
    const search = screen.getByRole("textbox", { name: /Enter location/i });
    await user.type(search, "dubai");
    expect(search).toHaveValue("dubai");
    const autoComplete = await screen.findAllByRole("listitem");
    expect(autoComplete).toHaveLength(25);
    //  asseerting resluts
    expect(autoComplete.map((res) => res.textContent)).toContain("yousef");
  });
});
