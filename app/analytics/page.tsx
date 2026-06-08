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

      <main className="min-h-screen bg-black p-8 text-white">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-4xl font-bold">
            Analytics Dashboard
          </h1>

          <p className="mt-2 text-zinc-400">
            Insights based on your real tracked
            activities.
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

          <div className="mt-8 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="mb-6 text-xl font-bold">
              Emission Trend
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
        </div>
      </main>
    </>
  );
}