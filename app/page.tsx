"use client";

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="border-b border-zinc-800 bg-black">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-green-500">
            EcoPulse AI
          </h1>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-zinc-300 hover:text-green-500"
            >
              Features
            </a>

            <a
              href="#analytics"
              className="text-zinc-300 hover:text-green-500"
            >
              Analytics
            </a>

            <a
              href="#about"
              className="text-zinc-300 hover:text-green-500"
            >
              About
            </a>
          </div>

          <Link
            href="/activities"
            className="rounded-lg bg-green-500 px-5 py-2 font-semibold text-black hover:bg-green-400"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-28 text-center">
        <h1 className="text-5xl font-bold leading-tight md:text-7xl">
          Track Your{" "}
          <span className="text-green-500">
            Carbon Footprint
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
          Measure emissions, understand your impact,
          and build sustainable habits for a greener future.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/activities"
            className="rounded-xl bg-green-500 px-8 py-4 font-semibold text-black hover:bg-green-400"
          >
            Start Tracking
          </Link>

          <a
            href="#features"
            className="rounded-xl border border-zinc-700 px-8 py-4 text-white hover:bg-zinc-900"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 text-center">
            <h2 className="text-4xl font-bold text-green-500">
              Track
            </h2>

            <p className="mt-2 text-zinc-400">
              Carbon Activities
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 text-center">
            <h2 className="text-4xl font-bold text-green-500">
              Analyze
            </h2>

            <p className="mt-2 text-zinc-400">
              Sustainability Data
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 text-center">
            <h2 className="text-4xl font-bold text-green-500">
              Improve
            </h2>

            <p className="mt-2 text-zinc-400">
              Eco Habits
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="mx-auto max-w-7xl px-6 py-24"
      >
        <h2 className="mb-12 text-center text-4xl font-bold">
          Powerful Features
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          <Link
            href="/activities"
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 transition hover:border-green-500"
          >
            <h3 className="mb-3 text-xl font-semibold text-green-500">
              Carbon Tracking
            </h3>

            <p className="text-zinc-400">
              Monitor transportation and electricity emissions.
            </p>
          </Link>

          <Link
            href="/tips"
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 transition hover:border-green-500"
          >
            <h3 className="mb-3 text-xl font-semibold text-green-500">
              Sustainability Tips
            </h3>

            <p className="text-zinc-400">
              Discover practical ways to reduce your carbon footprint.
            </p>
          </Link>

          <Link
            href="/analytics"
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 transition hover:border-green-500"
          >
            <h3 className="mb-3 text-xl font-semibold text-green-500">
              Analytics Dashboard
            </h3>

            <p className="text-zinc-400">
              Visualize trends and understand your environmental impact.
            </p>
          </Link>
        </div>
      </section>

      {/* Analytics Preview */}
      <section
        id="analytics"
        className="bg-zinc-950 py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Explore Your Sustainability Journey
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            <Link
              href="/activities"
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
            >
              <h3 className="text-zinc-400">
                Activities
              </h3>

              <p className="mt-2 text-2xl font-bold text-green-500">
                Track
              </p>
            </Link>

            <Link
              href="/analytics"
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
            >
              <h3 className="text-zinc-400">
                Analytics
              </h3>

              <p className="mt-2 text-2xl font-bold text-green-500">
                Analyze
              </p>
            </Link>

            <Link
              href="/goals"
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
            >
              <h3 className="text-zinc-400">
                Goals
              </h3>

              <p className="mt-2 text-2xl font-bold text-green-500">
                Improve
              </p>
            </Link>

            <Link
              href="/tips"
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
            >
              <h3 className="text-zinc-400">
                Tips
              </h3>

              <p className="mt-2 text-2xl font-bold text-green-500">
                Learn
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold">
          Ready to Make an Impact?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
          Start tracking your sustainability journey today.
        </p>

        <Link
          href="/activities"
          className="mt-8 inline-block rounded-xl bg-green-500 px-8 py-4 font-semibold text-black hover:bg-green-400"
        >
          Get Started Free
        </Link>
      </section>

      {/* Footer */}
      <footer
        id="about"
        className="border-t border-zinc-800 py-8 text-center text-zinc-500"
      >
        © 2026 EcoPulse AI. All rights reserved.
      </footer>
    </main>
  );
}