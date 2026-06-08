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

  if (ecoScore >= 90) {
    badges.push("🏆 Eco Champion");
  }

  return badges;
}