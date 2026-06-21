export function getBadges(
  totalActivities: number,
  ecoScore: number
) {
  const badges: string[] = [];

  if (totalActivities >= 1) {
    badges.push("🏅 First Calculation");
  }

  if (totalActivities >= 5) {
    badges.push("🌱 Eco Beginner");
  }

  if (totalActivities >= 10) {
    badges.push("♻️ Carbon Tracker");
  }

  if (totalActivities >= 20) {
    badges.push("🌿 Sustainability Explorer");
  }

  if (totalActivities >= 30) {
    badges.push("🌳 Green Guardian");
  }

  if (ecoScore >= 70) {
    badges.push("🌎 Climate Protector");
  }

  if (ecoScore >= 85) {
    badges.push("⭐ Sustainability Star");
  }

  if (ecoScore >= 95) {
    badges.push("🏆 Eco Champion");
  }

  return badges;
}