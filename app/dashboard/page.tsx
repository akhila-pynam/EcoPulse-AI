export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen border-r border-zinc-800 bg-zinc-950 p-6">
          <h1 className="text-2xl font-bold text-green-500">
            EcoPulse AI
          </h1>

          <nav className="mt-10 space-y-3">
            <a
              href="#"
              className="block rounded-lg bg-green-500/10 px-4 py-3 text-green-500"
            >
              Dashboard
            </a>

            <a
              href="#"
              className="block rounded-lg px-4 py-3 hover:bg-zinc-900"
            >
              Activities
            </a>

            <a
              href="#"
              className="block rounded-lg px-4 py-3 hover:bg-zinc-900"
            >
              Analytics
            </a>

            <a
              href="#"
              className="block rounded-lg px-4 py-3 hover:bg-zinc-900"
            >
              Goals
            </a>

            <a
              href="#"
              className="block rounded-lg px-4 py-3 hover:bg-zinc-900"
            >
              Settings
            </a>
          </nav>
        </aside>

        {/* Main */}
        <section className="flex-1 p-8">
          <h1 className="text-3xl font-bold">
            Dashboard
          </h1>

          <p className="mt-2 text-zinc-400">
            Welcome back 👋
          </p>

          {/* KPI Cards */}
          <div className="mt-8 grid gap-6 md:grid-cols-4">
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

          {/* Chart Area */}
          <div className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
            <h2 className="text-xl font-semibold">
              Carbon Emission Trends
            </h2>

            <div className="mt-6 flex h-72 items-center justify-center rounded-xl bg-zinc-950">
              Chart Coming Soon
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}