export function calculateEcoScore(
  carbonEmission: number
) {
  const score = Math.max(
    0,
    Math.min(
      100,
      Math.round(100 - carbonEmission / 2)
    )
  );

  if (score >= 90) {
    return {
      score,
      level: "Eco Champion 🌎",
      rank: "A+",
    };
  }

  if (score >= 80) {
    return {
      score,
      level: "Green Hero 🌱",
      rank: "A",
    };
  }

  if (score >= 70) {
    return {
      score,
      level: "Eco Friendly 🍃",
      rank: "B+",
    };
  }

  if (score >= 60) {
    return {
      score,
      level: "Sustainability Learner 🌿",
      rank: "B",
    };
  }

  if (score >= 40) {
    return {
      score,
      level: "Needs Improvement ⚠️",
      rank: "C",
    };
  }

  return {
    score,
    level: "High Emitter 🚨",
    rank: "D",
  };
}