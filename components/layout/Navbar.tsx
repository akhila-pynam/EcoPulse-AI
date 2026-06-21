import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      aria-label="Main Navigation"
      className="border-b border-zinc-800 bg-black"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          aria-label="EcoPulse AI Home"
          className="text-2xl font-bold text-green-500"
        >
          EcoPulse AI
        </Link>

        <div
          role="navigation"
          className="flex flex-wrap gap-6 text-zinc-300"
        >
          <Link
            href="/"
            aria-label="Home Page"
          >
            Home
          </Link>

          <Link
            href="/activities"
            aria-label="Activities Page"
          >
            Activities
          </Link>

          <Link
            href="/goals"
            aria-label="Goals Page"
          >
            Goals
          </Link>

          <Link
            href="/analytics"
            aria-label="Analytics Page"
          >
            Analytics
          </Link>

          <Link
            href="/tips"
            aria-label="Tips Page"
          >
            Tips
          </Link>

          <Link
            href="/chat"
            aria-label="AI Assistant Page"
            className="font-semibold text-green-500 hover:text-green-400"
          >
            AI Assistant
          </Link>
        </div>
      </div>
    </nav>
  );
}