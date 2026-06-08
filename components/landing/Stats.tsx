export default function Stats() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border p-8 text-center">
          <h2 className="text-4xl font-bold text-green-600">
            50K+
          </h2>
          <p>Activities Tracked</p>
        </div>

        <div className="rounded-2xl border p-8 text-center">
          <h2 className="text-4xl font-bold text-green-600">
            120 Tons
          </h2>
          <p>CO₂ Reduced</p>
        </div>

        <div className="rounded-2xl border p-8 text-center">
          <h2 className="text-4xl font-bold text-green-600">
            10K+
          </h2>
          <p>Active Users</p>
        </div>
      </div>
    </section>
  );
}