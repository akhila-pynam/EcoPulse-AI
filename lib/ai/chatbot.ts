export function getBotResponse(
  message: string
): string {
  const msg = message.toLowerCase();

  if (
    msg.includes("goal") ||
    msg.includes("goals")
  ) {
    return "Visit the Goals page to set and track your monthly carbon reduction target.";
  }

  if (
    msg.includes("analytics") ||
    msg.includes("dashboard")
  ) {
    return "The Analytics page shows your emission trends and sustainability insights.";
  }

  if (
    msg.includes("activity") ||
    msg.includes("activities")
  ) {
    return "Use the Activities page to calculate and record your carbon emissions.";
  }

  if (
    msg.includes("report") ||
    msg.includes("pdf")
  ) {
    return "Generate a PDF report from the Activities page after adding some activity records.";
  }

  if (
    msg.includes("score") ||
    msg.includes("eco score")
  ) {
    return "Lower emissions improve your Eco Score. Reduce transport and electricity usage to score higher.";
  }

  if (
    msg.includes("reduce") ||
    msg.includes("emission")
  ) {
    return "You can reduce emissions by using public transport, reducing electricity consumption, and avoiding waste.";
  }

  return "I can help with Activities, Goals, Analytics, Reports, Eco Scores, and sustainability tips.";
}