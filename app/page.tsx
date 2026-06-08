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
            <a href="#features" className="text-zinc-300 hover:text-green-500">
              Features
            </a>

            <a href="#analytics" className="text-zinc-300 hover:text-green-500">
              Analytics
            </a>

            <a href="#about" className="text-zinc-300 hover:text-green-500">
              About
            </a>
          </div>

          <button className="rounded-lg bg-green-500 px-5 py-2 text-black font-semibold hover:bg-green-400">
            Get Started
          </button>
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
          <button className="rounded-xl bg-green-500 px-8 py-4 font-semibold text-black hover:bg-green-400">
            Start Tracking
          </button>

          <button className="rounded-xl border border-zinc-700 px-8 py-4 text-white hover:bg-zinc-900">
            Learn More
          </button>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 text-center">
            <h2 className="text-4xl font-bold text-green-500">
              50K+
            </h2>

            <p className="mt-2 text-zinc-400">
              Activities Tracked
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 text-center">
            <h2 className="text-4xl font-bold text-green-500">
              120 Tons
            </h2>

            <p className="mt-2 text-zinc-400">
              CO₂ Reduced
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 text-center">
            <h2 className="text-4xl font-bold text-green-500">
              10K+
            </h2>

            <p className="mt-2 text-zinc-400">
              Active Users
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
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
            <h3 className="mb-3 text-xl font-semibold text-green-500">
              Carbon Tracking
            </h3>

            <p className="text-zinc-400">
              Monitor transportation, electricity,
              food and shopping emissions.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
            <h3 className="mb-3 text-xl font-semibold text-green-500">
              AI Recommendations
            </h3>

            <p className="text-zinc-400">
              Receive personalized suggestions
              to reduce your carbon footprint.
            </p>
          </div>

          <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
            <h3 className="mb-3 text-xl font-semibold text-green-500">
              Analytics Dashboard
            </h3>

            <p className="text-zinc-400">
              Visualize trends and understand
              your environmental impact.
            </p>
          </div>
        </div>
      </section>

      {/* Analytics Preview */}
      <section
        id="analytics"
        className="bg-zinc-950 py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Analytics Dashboard
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="text-zinc-400">
                Carbon Score
              </h3>

              <p className="mt-2 text-3xl font-bold text-green-500">
                87
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="text-zinc-400">
                Monthly Emissions
              </h3>

              <p className="mt-2 text-3xl font-bold">
                245kg
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="text-zinc-400">
                Goal Progress
              </h3>

              <p className="mt-2 text-3xl font-bold">
                72%
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
              <h3 className="text-zinc-400">
                Green Streak
              </h3>

              <p className="mt-2 text-3xl font-bold">
                14 Days
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-4xl font-bold">
          Ready to Make an Impact?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
          Join thousands of users reducing their
          carbon footprint every day.
        </p>

        <button className="mt-8 rounded-xl bg-green-500 px-8 py-4 font-semibold text-black hover:bg-green-400">
          Get Started Free
        </button>
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