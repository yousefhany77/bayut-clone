import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import SearchBox from "./SearchBox";
import { residential_data } from "./DropDown";

describe("should render dropdown list with residential types", () => {
  it("should render dropdown list input Field", () => {
    render(<SearchBox />);
    const DropDownList = screen.getByRole("textbox", {
      name: "Residential type",
    });
    expect(DropDownList).toBeInTheDocument();
  });
  
  it(`Filter Value = "" or undefined should render full orginal list`, async () => {
    user.setup();
    render(<SearchBox />);
    const Input = screen.getByRole("textbox", {
      name: "Residential type",
    });
    await user.type(Input, "   ");
    const dropDownList = await screen.findAllByRole("listitem");
    expect(dropDownList.map((item) => item.textContent)).toEqual(
      expect.arrayContaining(Object.keys(residential_data))
    );
  });
  it("should render Selected option ==> Villas", async () => {
    user.setup();
    render(<SearchBox />);
    const Input = screen.getByRole("textbox", {
      name: "Residential type",
    });
    await user.type(Input, "Villas");
    const VillasOption = screen.getByRole("listitem");
    await user.click(VillasOption);
    expect(VillasOption).not.toBeInTheDocument();
    expect(Input).toHaveDisplayValue(/villas/i);
  });
  it("should render sorry not found if value does not exist",async () => {
    user.setup();
    render(<SearchBox />);
    const Input = screen.getByRole("textbox", {
      name: "Residential type",
    });
    await user.type(Input, "Some Random Wrong Value That Doesn't Exist XD");
    const ErrorMessage = screen.getByRole("listitem");
    expect(ErrorMessage).toHaveTextContent(/sorry not found/i)
  })
  
});
