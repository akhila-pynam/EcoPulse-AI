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
      ? totalEmissions / activities.length
      : 0;

  const highestEmission =
    activities.length > 0
      ? Math.max(
          ...activities.map(
            (a) => a.carbonEmission
          )
        )
      : 0;

  const lowestEmission =
    activities.length > 0
      ? Math.min(
          ...activities.map(
            (a) => a.carbonEmission
          )
        )
      : 0;

  pdf.setFontSize(20);

  pdf.text(
    "EcoPulse AI Sustainability Report",
    20,
    20
  );

  pdf.setFontSize(12);

  pdf.text(
    `Generated: ${new Date().toLocaleDateString()}`,
    20,
    35
  );

  pdf.text(
    `Total Activities: ${activities.length}`,
    20,
    50
  );

  pdf.text(
    `Total Emissions: ${totalEmissions.toFixed(
      2
    )} kg CO2`,
    20,
    60
  );

  pdf.text(
    `Average Emissions: ${averageEmission.toFixed(
      2
    )} kg CO2`,
    20,
    70
  );

  pdf.text(
    `Highest Emission: ${highestEmission.toFixed(
      2
    )} kg CO2`,
    20,
    80
  );

  pdf.text(
    `Lowest Emission: ${lowestEmission.toFixed(
      2
    )} kg CO2`,
    20,
    90
  );

  pdf.setFontSize(16);

  pdf.text(
    "Activity History",
    20,
    110
  );

  pdf.setFontSize(10);

  let y = 125;

  activities.forEach((activity) => {
    if (y > 270) {
      pdf.addPage();
      y = 20;
    }

    pdf.text(
      `${activity.date} | Transport: ${activity.transport} km | Electricity: ${activity.electricity} kWh | CO2: ${activity.carbonEmission.toFixed(
        2
      )} kg`,
      20,
      y
    );

    y += 10;
  });

  pdf.save(
    "EcoPulse-Sustainability-Report.pdf"
  );
}