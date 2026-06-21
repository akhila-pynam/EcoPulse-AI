export function getBotResponse(
  message: string
): string {
  const msg = message.toLowerCase();

  if (
    msg.includes("goal") ||
    msg.includes("goals")
  ) {
    return "🎯 Sustainability Goals help you reduce your carbon footprint over time. Set a monthly target and track your progress through the Goals page.";
  }

  if (
    msg.includes("analytics") ||
    msg.includes("dashboard")
  ) {
    return "📊 The Analytics Dashboard visualizes your carbon emissions, Eco Score trends, sustainability level, and overall environmental impact.";
  }

  if (
    msg.includes("activity") ||
    msg.includes("activities")
  ) {
    return "📝 Record transportation distance and electricity usage on the Activities page. EcoPulse AI calculates your estimated carbon footprint automatically.";
  }

  if (
    msg.includes("report") ||
    msg.includes("pdf")
  ) {
    return "📄 Generate a PDF Sustainability Report from the Activities page. Reports include emissions history, Eco Score, achievements, and sustainability insights.";
  }

  if (
    msg.includes("score") ||
    msg.includes("eco score")
  ) {
    return "🌍 Eco Score measures your environmental performance. Lower emissions result in higher scores, better sustainability levels, and improved Eco Rankings.";
  }

  if (
    msg.includes("rank")
  ) {
    return "🏆 Eco Rank reflects your sustainability performance. Users with lower emissions achieve higher ranks such as A+, A, or B.";
  }

  if (
    msg.includes("badge") ||
    msg.includes("achievement")
  ) {
    return "🏅 Earn sustainability badges by tracking activities consistently and maintaining a strong Eco Score.";
  }

  if (
    msg.includes("reduce") ||
    msg.includes("emission")
  ) {
    return "♻️ To reduce emissions: use public transport, switch to LED lighting, reduce unnecessary electricity consumption, recycle waste, and adopt eco-friendly habits.";
  }

  if (
    msg.includes("electricity")
  ) {
    return "⚡ Electricity consumption contributes significantly to carbon emissions. Using energy-efficient appliances and turning off unused devices can reduce your footprint.";
  }

  if (
    msg.includes("transport")
  ) {
    return "🚗 Transportation emissions can be reduced through public transport, cycling, walking, electric vehicles, and carpooling.";
  }

  if (
    msg.includes("tree")
  ) {
    return "🌳 Trees absorb carbon dioxide and help combat climate change. Planting trees is one of the most effective long-term sustainability actions.";
  }

  if (
    msg.includes("sustainability")
  ) {
    return "🌱 Sustainability means meeting present needs without compromising future generations. EcoPulse AI helps users build sustainable daily habits.";
  }

  if (
    msg.includes("hello") ||
    msg.includes("hi")
  ) {
    return "👋 Hello! I'm EcoPulse AI Assistant. I can help with carbon tracking, Eco Scores, sustainability goals, reports, analytics, and environmental tips.";
  }

  return "🤖 I can help with Carbon Tracking, Sustainability Goals, Analytics, Eco Scores, Reports, Achievements, Environmental Tips, and reducing your carbon footprint.";
}