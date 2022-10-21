import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import SearchBox from "./SearchBox";
import { server } from "../../mocks/server";
beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
describe("SearchBox", () => {
 
  it("More Filters must be hidden by default", () => {
    render(<SearchBox />);
    const Area = screen.queryByText("Area");
    const Rooms = screen.queryByText("Rooms");
    const Baths = screen.queryByText("Baths");
    expect(Rooms).not.toBeInTheDocument();
    expect(Area).not.toBeInTheDocument();
    expect(Baths).not.toBeInTheDocument();
  });
  it("Should render addtional Filters onClick More Filters Button", async () => {
    user.setup();
    render(<SearchBox />);
    const MoreFilterbtn = screen.getByRole("button", { name: "More Filters" });
    await user.click(MoreFilterbtn);
    const Area = await screen.findByText("Area");
    const Rooms = await screen.findByText("Rooms");
    const Baths = await screen.findByText("Baths");
    expect(Rooms).toBeInTheDocument();
    expect(Area).toBeInTheDocument();
    expect(Baths).toBeInTheDocument();
  });
});
