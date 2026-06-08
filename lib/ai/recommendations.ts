export function getRecommendations(
  transport: number,
  electricity: number
): string[] {
  const recommendations: string[] = [];

  if (transport > 100) {
    recommendations.push(
      "Use public transport 2 days/week and reduce up to 18kg CO₂ monthly."
    );
  }

  if (transport > 200) {
    recommendations.push(
      "Consider carpooling to reduce travel emissions."
    );
  }

  if (electricity > 50) {
    recommendations.push(
      "Switch to LED bulbs and save up to 12kg CO₂ monthly."
    );
  }

  if (electricity > 100) {
    recommendations.push(
      "Use energy-efficient appliances to reduce power consumption."
    );
  }

  if (
    transport <= 100 &&
    electricity <= 50
  ) {
    recommendations.push(
      "Excellent! Your carbon footprint is already low."
    );
  }

  return recommendations;
}