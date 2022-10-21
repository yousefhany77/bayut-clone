import { priceFormater } from "./PriceFormer";

describe("It Formates prices to UAE format", () => {
  it("should return empty string if there is no valid input", () => {
    return expect(priceFormater(NaN)).toBe("");
  });
  it("should return the value with correctt format", () => {
    expect(priceFormater(1000)).toBe("AED 1000");
  });
});
