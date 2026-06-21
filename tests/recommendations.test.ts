import { getRecommendations } from "../lib/ai/recommendations";

describe("Recommendations", () => {
  test("High transport", () => {
    expect(
      getRecommendations(150, 20).length
    ).toBeGreaterThan(0);
  });

  test("High electricity", () => {
    expect(
      getRecommendations(20, 150).length
    ).toBeGreaterThan(0);
  });

  test("Low emissions", () => {
    expect(
      getRecommendations(10, 10)[0]
    ).toContain("Excellent");
  });
});