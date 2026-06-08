"use client";

import Navbar from "@/components/layout/Navbar";

export default function TipsPage() {
  const tips = [
    {
      category: "Transportation",
      impact: "High Impact",
      title: "Use Public Transport",
      description:
        "Switching from private vehicles to buses, metros, or trains can significantly reduce emissions.",
    },
    {
      category: "Transportation",
      impact: "Medium Impact",
      title: "Carpool With Friends",
      description:
        "Sharing rides reduces fuel consumption and traffic congestion.",
    },
    {
      category: "Electricity",
      impact: "High Impact",
      title: "Switch To LED Bulbs",
      description:
        "LEDs consume far less electricity and last much longer than traditional bulbs.",
    },
    {
      category: "Electricity",
      impact: "High Impact",
      title: "Turn Off Unused Devices",
      description:
        "Many electronics consume power even when not actively used.",
    },
    {
      category: "Food",
      impact: "Medium Impact",
      title: "Reduce Food Waste",
      description:
        "Plan meals properly and avoid throwing away edible food.",
    },
    {
      category: "Food",
      impact: "Medium Impact",
      title: "Choose Local Produce",
      description:
        "Locally sourced food reduces transportation-related emissions.",
    },
    {
      category: "Lifestyle",
      impact: "High Impact",
      title: "Plant Trees",
      description:
        "Trees absorb carbon dioxide and improve local ecosystems.",
    },
    {
      category: "Lifestyle",
      impact: "Medium Impact",
      title: "Use Reusable Products",
      description:
        "Avoid single-use plastics by switching to reusable alternatives.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black p-8 text-white">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold">
            Sustainability Tips
          </h1>

          <p className="mt-3 max-w-3xl text-zinc-400">
            Small daily changes can make a huge
            difference. Explore practical ways to
            reduce your carbon footprint and live
            more sustainably.
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-green-500"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-zinc-800 px-3 py-1 text-sm">
                    {tip.category}
                  </span>

                  <span className="text-sm font-semibold text-green-500">
                    {tip.impact}
                  </span>
                </div>

                <h2 className="mt-5 text-xl font-bold text-green-500">
                  {tip.title}
                </h2>

                <p className="mt-3 text-zinc-400">
                  {tip.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-green-500 bg-zinc-900 p-8">
            <h2 className="text-2xl font-bold text-green-500">
              Why This Matters
            </h2>

            <p className="mt-4 text-zinc-300">
              Reducing carbon emissions helps slow
              climate change, improves air quality,
              protects ecosystems, and creates a
              healthier future for everyone.
            </p>
          </div>
        </div>
      </main>
    </>
  );
}