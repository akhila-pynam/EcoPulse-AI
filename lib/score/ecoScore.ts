export function calculateEcoScore(
  carbonEmission: number
) {
  if (carbonEmission <= 25) {
    return {
      score: 100,
      level: "Eco Champion",
      rank: "A+",
    };
  }

  if (carbonEmission <= 50) {
    return {
      score: 90,
      level: "Green Hero",
      rank: "A",
    };
  }

  if (carbonEmission <= 100) {
    return {
      score: 75,
      level: "Eco Friendly",
      rank: "B",
    };
  }

  if (carbonEmission <= 200) {
    return {
      score: 60,
      level: "Needs Improvement",
      rank: "C",
    };
  }

  return {
    score: 40,
    level: "High Emitter",
    rank: "D",
  };
}