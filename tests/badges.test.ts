import { getBadges } from "../lib/badges/badges";

describe("Badges", () => {
  test("First Calculation", () => {
    expect(
      getBadges(1, 50)
    ).toContain("🏅 First Calculation");
  });

  test("Eco Champion", () => {
    expect(
      getBadges(10, 95)
    ).toContain("🏆 Eco Champion");
  });
});