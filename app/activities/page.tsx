"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { calculateCarbon } from "@/lib/carbon/calculator";
import { getRecommendations } from "@/lib/ai/recommendations";
import { calculateEcoScore } from "@/lib/score/ecoScore";
import { getBadges } from "@/lib/badges/badges";
import { generateReport } from "@/lib/reports/generateReport";
import { Activity } from "@/types/activity";
import { validateActivityInput } from "@/lib/validation/activityValidation";

export default function ActivitiesPage() {
  const [result, setResult] = useState<number | null>(null);

  const [activities, setActivities] = useState<Activity[]>([]);

  const [recommendations, setRecommendations] = useState<string[]>([]);

  const [badges, setBadges] = useState<string[]>([]);

  const [ecoData, setEcoData] = useState<{
    score: number;
    level: string;
    rank: string;
  } | null>(null);

  useEffect(() => {
    const savedActivities =
      localStorage.getItem("eco_activities");

    if (savedActivities) {
      setActivities(JSON.parse(savedActivities));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "eco_activities",
      JSON.stringify(activities)
    );
  }, [activities]);

  const handleSubmit = (
  e: React.FormEvent<HTMLFormElement>
) => {
  e.preventDefault();

  const form = new FormData(e.currentTarget);

  const transport = Number(
    form.get("transport")
  );

  const electricity = Number(
    form.get("electricity")
  );

  if (
    !validateActivityInput(
      transport,
      electricity
    )
  ) {
    alert(
      "Please enter valid positive values."
    );

    return;
  }

  const carbon = calculateCarbon(
    transport,
    electricity
  );

  const ecoScore =
    calculateEcoScore(carbon);

  setResult(carbon);

  setEcoData(ecoScore);

  setRecommendations(
    getRecommendations(
      transport,
      electricity
    )
  );

  setBadges(
    getBadges(
      activities.length + 1,
      ecoScore.score
    )
  );

  const newActivity: Activity = {
    transport,
    electricity,
    carbonEmission: carbon,
    date: new Date().toLocaleDateString(),
  };

  setActivities((prev) => [
    newActivity,
    ...prev,
  ]);

  e.currentTarget.reset();
};

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black p-8 text-white">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold">
                Carbon Calculator
              </h1>

              <p className="mt-2 text-zinc-400">
                Track emissions and receive AI-powered
                sustainability insights.
              </p>
            </div>

            {activities.length > 0 && (
              <button
                onClick={() =>
                  generateReport(activities)
                }
                className="rounded-lg bg-green-500 px-6 py-3 font-semibold text-black hover:bg-green-400"
              >
                Download PDF Report
              </button>
            )}
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-8 max-w-lg space-y-4"
          >
            <input
              name="transport"
              type="number"
              placeholder="Transport KM"
              required
              className="w-full rounded-lg border border-zinc-800 bg-zinc-900 p-4"
            />

            <input
              name="electricity"
              type="number"
              placeholder="Electricity kWh"
              required
              className="w-full rounded-lg border border-zinc-800 bg-zinc-900 p-4"
            />

            <button
              type="submit"
              className="rounded-lg bg-green-500 px-6 py-3 font-semibold text-black hover:bg-green-400"
            >
              Calculate
            </button>
          </form>

          {result !== null && (
            <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
              <h2 className="text-xl font-bold">
                Carbon Emission
              </h2>

              <p className="mt-2 text-3xl font-bold text-green-500">
                {result.toFixed(2)} kg CO₂
              </p>
            </div>
          )}

          {ecoData && (
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                <h3 className="text-zinc-400">
                  Eco Score
                </h3>

                <p className="mt-2 text-4xl font-bold text-green-500">
                  {ecoData.score}
                </p>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                <h3 className="text-zinc-400">
                  Sustainability Level
                </h3>

                <p className="mt-2 text-xl font-bold text-green-500">
                  {ecoData.level}
                </p>
              </div>

              <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
                <h3 className="text-zinc-400">
                  Eco Rank
                </h3>

                <p className="mt-2 text-4xl font-bold text-green-500">
                  {ecoData.rank}
                </p>
              </div>
            </div>
          )}

          {badges.length > 0 && (
            <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
              <h2 className="mb-4 text-xl font-bold text-green-500">
                Achievements
              </h2>

              <div className="flex flex-wrap gap-3">
                {badges.map((badge, index) => (
                  <div
                    key={index}
                    className="rounded-full border border-green-500 px-4 py-2"
                  >
                    {badge}
                  </div>
                ))}
              </div>
            </div>
          )}

          {recommendations.length > 0 && (
            <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
              <h2 className="mb-4 text-xl font-bold text-green-500">
                AI Recommendations
              </h2>

              <div className="space-y-3">
                {recommendations.map(
                  (recommendation, index) => (
                    <div
                      key={index}
                      className="rounded-lg border border-zinc-800 bg-black p-4"
                    >
                      {recommendation}
                    </div>
                  )
                )}
              </div>
            </div>
          )}

          {activities.length > 0 && (
            <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
              <h2 className="mb-4 text-xl font-bold">
                Activity History
              </h2>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-zinc-800">
                      <th className="p-3 text-left">
                        Date
                      </th>
                      <th className="p-3 text-left">
                        Transport
                      </th>
                      <th className="p-3 text-left">
                        Electricity
                      </th>
                      <th className="p-3 text-left">
                        CO₂
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {activities.map(
                      (activity, index) => (
                        <tr
                          key={index}
                          className="border-b border-zinc-800"
                        >
                          <td className="p-3">
                            {activity.date}
                          </td>

                          <td className="p-3">
                            {activity.transport}
                          </td>

                          <td className="p-3">
                            {activity.electricity}
                          </td>

                          <td className="p-3 font-semibold text-green-500">
                            {activity.carbonEmission.toFixed(
                              2
                            )}{" "}
                            kg
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}