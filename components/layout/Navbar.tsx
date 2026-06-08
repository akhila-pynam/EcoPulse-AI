// components/layout/Navbar.tsx

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

        <div className="flex gap-6 text-zinc-300">
          <Link href="/">Home</Link>
          <Link href="/activities">Activities</Link>
          <Link href="/goals">Goals</Link>
          <Link href="/analytics">Analytics</Link>
          <Link href="/tips">Tips</Link>
        </div>
      </div>
    </nav>
  );
}