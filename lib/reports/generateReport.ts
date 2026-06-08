import jsPDF from "jspdf";
import { Activity } from "@/types/activity";

export function generateReport(
  activities: Activity[]
) {
  const pdf = new jsPDF();

  const totalEmissions = activities.reduce(
    (sum, activity) =>
      sum + activity.carbonEmission,
    0
  );

  const averageEmission =
    activities.length > 0
      ? totalEmissions /
        activities.length
      : 0;

  pdf.setFontSize(20);

  pdf.text(
    "EcoPulse AI Sustainability Report",
    20,
    20
  );

  pdf.setFontSize(12);

  pdf.text(
    `Total Activities: ${activities.length}`,
    20,
    40
  );

  pdf.text(
    `Total Emissions: ${totalEmissions.toFixed(
      2
    )} kg CO₂`,
    20,
    50
  );

  pdf.text(
    `Average Emissions: ${averageEmission.toFixed(
      2
    )} kg CO₂`,
    20,
    60
  );

  pdf.text(
    `Generated: ${new Date().toLocaleDateString()}`,
    20,
    70
  );

  pdf.save(
    "EcoPulse-Sustainability-Report.pdf"
  );
}