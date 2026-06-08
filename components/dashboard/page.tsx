export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r min-h-screen p-6">
          <h1 className="text-2xl font-bold text-green-600">
            EcoPulse AI
          </h1>

          <nav className="mt-10 space-y-4">
            <a
              href="#"
              className="block rounded-lg bg-green-100 px-4 py-2 text-green-700"
            >
              Dashboard
            </a>

            <a
              href="#"
              className="block rounded-lg px-4 py-2 hover:bg-gray-100"
            >
              Activities
            </a>

            <a
              href="#"
              className="block rounded-lg px-4 py-2 hover:bg-gray-100"
            >
              Analytics
            </a>

            <a
              href="#"
              className="block rounded-lg px-4 py-2 hover:bg-gray-100"
            >
              Goals
            </a>

            <a
              href="#"
              className="block rounded-lg px-4 py-2 hover:bg-gray-100"
            >
              Settings
            </a>
          </nav>
        </aside>

        {/* Main Content */}
        <section className="flex-1 p-8">
          <h1 className="text-3xl font-bold">
            Dashboard
          </h1>

          <p className="mt-2 text-gray-500">
            Welcome back 👋
          </p>

          {/* Stats */}
          <div className="mt-8 grid gap-6 md:grid-cols-4">
            <div className="rounded-2xl bg-white p-6 shadow">
              <h3 className="text-gray-500">
                Carbon Score
              </h3>
              <p className="mt-2 text-3xl font-bold text-green-600">
                87
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow">
              <h3 className="text-gray-500">
                Monthly Emissions
              </h3>
              <p className="mt-2 text-3xl font-bold">
                245kg
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow">
              <h3 className="text-gray-500">
                Goal Progress
              </h3>
              <p className="mt-2 text-3xl font-bold">
                72%
              </p>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow">
              <h3 className="text-gray-500">
                Green Streak
              </h3>
              <p className="mt-2 text-3xl font-bold">
                14 Days
              </p>
            </div>
          </div>

          {/* Chart Placeholder */}
          <div className="mt-8 rounded-2xl bg-white p-8 shadow">
            <h2 className="text-xl font-semibold">
              Carbon Emission Trends
            </h2>

            <div className="mt-6 h-64 rounded-xl bg-gray-100 flex items-center justify-center">
              Chart Coming Soon
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}