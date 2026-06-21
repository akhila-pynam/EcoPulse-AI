"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import { Activity } from "@/types/activity";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function AnalyticsPage() {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    const saved =
      localStorage.getItem("eco_activities");

    if (saved) {
      setActivities(JSON.parse(saved));
    }
  }, []);

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

  const estimatedAnnualEmission =
    totalEmissions * 12;

  const chartData = activities
    .slice()
    .reverse()
    .map((activity) => ({
      date: activity.date,
      emission: Number(
        activity.carbonEmission.toFixed(2)
      ),
    }));

  return (
    <>
      <Navbar />

      <main
        role="main"
        className="min-h-screen bg-black p-8 text-white"
      >
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold">
            Analytics Dashboard
          </h1>

          <p className="mt-2 text-zinc-400">
            Insights generated from your real
            sustainability activities and carbon
            footprint tracking data.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="text-zinc-400">
                Total Activities
              </h3>

              <p className="mt-2 text-4xl font-bold text-green-500">
                {activities.length}
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="text-zinc-400">
                Total Emissions
              </h3>

              <p className="mt-2 text-4xl font-bold text-green-500">
                {totalEmissions.toFixed(2)} kg
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="text-zinc-400">
                Average Emissions
              </h3>

              <p className="mt-2 text-4xl font-bold text-green-500">
                {averageEmission.toFixed(2)} kg
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="text-zinc-400">
                Highest Emission
              </h3>

              <p className="mt-2 text-3xl font-bold text-red-400">
                {highestEmission.toFixed(2)} kg
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="text-zinc-400">
                Lowest Emission
              </h3>

              <p className="mt-2 text-3xl font-bold text-green-500">
                {lowestEmission.toFixed(2)} kg
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="text-zinc-400">
                Estimated Annual Impact
              </h3>

              <p className="mt-2 text-3xl font-bold text-green-500">
                {estimatedAnnualEmission.toFixed(2)} kg
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="mb-6 text-xl font-bold">
              Carbon Emission Trend
            </h2>

            {activities.length > 0 ? (
              <div className="h-96">
                <ResponsiveContainer
                  width="100%"
                  height="100%"
                >
                  <LineChart data={chartData}>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />

                    <Line
                      type="monotone"
                      dataKey="emission"
                      stroke="#22c55e"
                      strokeWidth={3}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <p className="text-zinc-400">
                No activity data found.
                Add activities first.
              </p>
            )}
          </div>

          <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="mb-4 text-xl font-bold text-green-500">
              Sustainability Insights
            </h2>

            <ul className="space-y-3 text-zinc-300">
              <li>
                🌱 Tracking your emissions regularly
                helps identify opportunities to
                reduce environmental impact.
              </li>

              <li>
                ⚡ Lower electricity consumption
                directly reduces household carbon
                emissions.
              </li>

              <li>
                🚲 Sustainable transportation
                choices such as cycling, walking,
                and public transit can significantly
                reduce emissions.
              </li>

              <li>
                🌳 Trees absorb carbon dioxide and
                contribute positively to climate
                action efforts.
              </li>

              <li>
                📉 Reducing your average emissions
                improves your Eco Score and
                sustainability ranking.
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}