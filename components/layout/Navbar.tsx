import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-zinc-800 bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-2xl font-bold text-green-500"
        >
          EcoPulse AI
        </Link>

        <div className="flex flex-wrap gap-6 text-zinc-300">
          <Link href="/">Home</Link>
          <Link href="/activities">Activities</Link>
          <Link href="/goals">Goals</Link>
          <Link href="/analytics">Analytics</Link>
          <Link href="/tips">Tips</Link>

          <Link
            href="/chat"
            className="font-semibold text-green-500 hover:text-green-400"
          >
            AI Assistant
          </Link>
        </div>
      </div>
    </nav>
  );
}