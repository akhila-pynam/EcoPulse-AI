export function getRecommendations(
  transport: number,
  electricity: number
): string[] {
  const recommendations: string[] = [];

  if (transport > 200) {
    recommendations.push(
      "🚗 Your transport emissions are very high. Consider carpooling, cycling, or using public transport to reduce emissions by up to 30%."
    );
  } else if (transport > 100) {
    recommendations.push(
      "🚌 Use public transport at least 2–3 times per week and reduce up to 18kg CO₂ monthly."
    );
  } else {
    recommendations.push(
      "🌱 Great job keeping transport emissions low. Continue using sustainable travel options."
    );
  }

  if (electricity > 100) {
    recommendations.push(
      "⚡ Your electricity consumption is high. Switching to energy-efficient appliances could significantly reduce your footprint."
    );
  } else if (electricity > 50) {
    recommendations.push(
      "💡 Replace traditional bulbs with LEDs and turn off unused devices to save energy."
    );
  } else {
    recommendations.push(
      "🌿 Excellent energy usage. Your electricity consumption is already eco-friendly."
    );
  }

  const estimatedReduction =
    transport * 0.1 + electricity * 0.05;

  recommendations.push(
    `📉 By following these recommendations, you could reduce approximately ${estimatedReduction.toFixed(
      1
    )} kg CO₂ emissions.`
  );

  recommendations.push(
    "🌍 Planting one tree can absorb approximately 21kg CO₂ annually and further improve your sustainability impact."
  );

  return recommendations;
}