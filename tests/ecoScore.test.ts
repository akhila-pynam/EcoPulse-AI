import { calculateEcoScore } from "../lib/score/ecoScore";

describe("Eco Score", () => {
  test("Eco Champion", () => {
    expect(calculateEcoScore(20).rank).toBe("A+");
  });

  test("Green Hero", () => {
    expect(calculateEcoScore(40).rank).toBe("A");
  });

  test("High Emitter", () => {
    expect(calculateEcoScore(500).rank).toBe("D");
  });
});