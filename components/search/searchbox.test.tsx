import { screen, render } from "@testing-library/react";
import SearchBox from "./SearchBox";

describe("SearchBox", () => {
  it("should render a search box", () => {
    render(<SearchBox />);
    const heading = screen.getByRole("heading", { name: /search/i });
    expect(heading).toBeInTheDocument();
  });
});
