import { calculateCarbon } from "../lib/carbon/calculator";

describe("Carbon Calculator", () => {
  test("calculates emissions correctly", () => {
    expect(
      calculateCarbon(100, 50)
    ).toBeCloseTo(42.5);
  });

  test("returns zero emissions", () => {
    expect(
      calculateCarbon(0, 0)
    ).toBe(0);
  });

  test("handles larger values", () => {
    expect(
      calculateCarbon(200, 100)
    ).toBeCloseTo(85);
  });
});