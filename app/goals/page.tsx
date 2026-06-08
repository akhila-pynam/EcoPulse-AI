"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";

export default function GoalsPage() {
  const [goal, setGoal] = useState(500);
  const [currentEmission] = useState(320);

  useEffect(() => {
    const savedGoal = localStorage.getItem(
      "eco_goal"
    );

    if (savedGoal) {
      setGoal(Number(savedGoal));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "eco_goal",
      String(goal)
    );
  }, [goal]);

  const progress =
    ((goal - currentEmission) / goal) * 100;

  const safeProgress = Math.max(
    0,
    Math.min(progress, 100)
  );

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black p-8 text-white">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold">
            Sustainability Goals
          </h1>

          <p className="mt-2 text-zinc-400">
            Set your monthly carbon reduction target.
          </p>

          <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <label className="mb-3 block text-lg font-semibold">
              Monthly CO₂ Goal (kg)
            </label>

            <input
              type="number"
              value={goal}
              onChange={(e) =>
                setGoal(Number(e.target.value))
              }
              className="w-full rounded-lg border border-zinc-700 bg-black p-4"
            />
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="text-zinc-400">
                Goal
              </h3>

              <p className="mt-2 text-3xl font-bold text-green-500">
                {goal} kg
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="text-zinc-400">
                Current Emission
              </h3>

              <p className="mt-2 text-3xl font-bold">
                {currentEmission} kg
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="text-zinc-400">
                Progress
              </h3>

              <p className="mt-2 text-3xl font-bold text-green-500">
                {safeProgress.toFixed(0)}%
              </p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
            <h2 className="text-xl font-bold">
              Goal Progress
            </h2>

            <div className="mt-6 h-6 overflow-hidden rounded-full bg-zinc-800">
              <div
                className="h-full bg-green-500 transition-all duration-500"
                style={{
                  width: `${safeProgress}%`,
                }}
              />
            </div>

            <p className="mt-4 text-green-500">
              {safeProgress.toFixed(0)}% Goal Achieved
            </p>
          </div>
        </div>
      </main>
    </>
  );
}