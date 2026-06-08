"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";

const monthlyData = [
  { month: "Jan", emission: 120 },
  { month: "Feb", emission: 150 },
  { month: "Mar", emission: 180 },
  { month: "Apr", emission: 130 },
  { month: "May", emission: 100 },
  { month: "Jun", emission: 90 },
];

const categoryData = [
  { name: "Transport", value: 45 },
  { name: "Electricity", value: 35 },
  { name: "Food", value: 20 },
];

const trendData = [
  { week: "W1", score: 55 },
  { week: "W2", score: 65 },
  { week: "W3", score: 78 },
  { week: "W4", score: 90 },
];

const COLORS = [
  "#22c55e",
  "#16a34a",
  "#15803d",
];

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-black p-8 text-white">
      <div className="mx-auto max-w-7xl">
        <h1 className="text-4xl font-bold">
          Analytics Dashboard
        </h1>

        <p className="mt-2 text-zinc-400">
          Real-time sustainability insights and carbon trends.
        </p>

        {/* KPI Cards */}

        <div className="mt-8 grid gap-6 md:grid-cols-4">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-zinc-400">
              Total Emissions
            </h3>

            <p className="mt-2 text-3xl font-bold text-green-500">
              770 kg
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-zinc-400">
              Eco Score
            </h3>

            <p className="mt-2 text-3xl font-bold text-green-500">
              90
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-zinc-400">
              Best Month
            </h3>

            <p className="mt-2 text-3xl font-bold">
              June
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h3 className="text-zinc-400">
              Reduction
            </h3>

            <p className="mt-2 text-3xl font-bold text-green-500">
              -25%
            </p>
          </div>
        </div>

        {/* Charts */}

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="mb-6 text-xl font-bold">
              Monthly Emissions
            </h2>

            <div className="h-80">
              <ResponsiveContainer
                width="100%"
                height="100%"
              >
                <LineChart data={monthlyData}>
                  <XAxis dataKey="month" />
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
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="mb-6 text-xl font-bold">
              Emission Sources
            </h2>

            <div className="h-80">
              <ResponsiveContainer
                width="100%"
                height="100%"
              >
                <PieChart>
                  <Pie
                    data={categoryData}
                    dataKey="value"
                    outerRadius={120}
                  >
                    {categoryData.map(
                      (_, index) => (
                        <Cell
                          key={index}
                          fill={
                            COLORS[
                              index %
                                COLORS.length
                            ]
                          }
                        />
                      )
                    )}
                  </Pie>

                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Eco Trend */}

        <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
          <h2 className="mb-6 text-xl font-bold">
            Eco Score Trend
          </h2>

          <div className="h-80">
            <ResponsiveContainer
              width="100%"
              height="100%"
            >
              <AreaChart data={trendData}>
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />

                <Area
                  type="monotone"
                  dataKey="score"
                  stroke="#22c55e"
                  fill="#22c55e"
                  fillOpacity={0.2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </main>
  );
}