export default function Navbar() {
  return (
    <nav className="border-b border-gray-200">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-green-600">
          EcoPulse AI
        </h1>

        <div className="hidden md:flex gap-8">
          <a href="#features">Features</a>
          <a href="#analytics">Analytics</a>
          <a href="#about">About</a>
        </div>

        <button className="rounded-lg bg-green-600 px-5 py-2 text-white">
          Get Started
        </button>
      </div>
    </nav>
  );
}