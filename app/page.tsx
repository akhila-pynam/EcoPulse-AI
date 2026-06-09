"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import FloatingLeaves from "@/components/FloatingLeaves";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <FloatingLeaves />

      {/* Green Glow */}
      <div className="absolute left-1/2 top-32 h-96 w-96 -translate-x-1/2 rounded-full bg-green-500/20 blur-3xl" />

      {/* Navbar */}
      <nav className="relative z-10 border-b border-zinc-800 bg-black/70 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-green-500">
            EcoPulse AI
          </h1>

          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#features"
              className="text-zinc-300 transition hover:text-green-500"
            >
              Features
            </a>

            <a
              href="#analytics"
              className="text-zinc-300 transition hover:text-green-500"
            >
              Analytics
            </a>

            <a
              href="#about"
              className="text-zinc-300 transition hover:text-green-500"
            >
              About
            </a>
          </div>

          <Link
            href="/activities"
            className="rounded-lg bg-green-500 px-5 py-2 font-semibold text-black transition hover:scale-105 hover:bg-green-400"
          >
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-12 md:grid-cols-2">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Track Your{" "}
              <span className="text-green-500">
                Carbon Footprint
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg text-zinc-400">
              Measure emissions, understand your impact,
              and build sustainable habits for a greener future.
            </p>

            <div className="mt-10 flex gap-4">
              <Link
                href="/activities"
                className="rounded-xl bg-green-500 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-green-400"
              >
                Start Tracking
              </Link>

              <a
                href="#features"
                className="rounded-xl border border-zinc-700 px-8 py-4 text-white transition hover:scale-105 hover:bg-zinc-900"
              >
                Learn More
              </a>
            </div>
          </motion.div>

          {/* Globe */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 360,
            }}
            transition={{
              rotate: {
                repeat: Infinity,
                duration: 60,
                ease: "linear",
              },
              duration: 1,
            }}
            className="flex justify-center"
          >
            <div className="relative h-[350px] w-[350px] overflow-hidden rounded-full border-4 border-green-500 shadow-[0_0_60px_rgba(34,197,94,0.6)]">
              <Image
                src="/globe.png"
                alt="Earth"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            ["Track", "Carbon Activities"],
            ["Analyze", "Sustainability Data"],
            ["Improve", "Eco Habits"],
          ].map(([title, desc], index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8 text-center transition hover:border-green-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]"
            >
              <h2 className="text-4xl font-bold text-green-500">
                {title}
              </h2>

              <p className="mt-2 text-zinc-400">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="relative z-10 mx-auto max-w-7xl px-6 py-24"
      >
        <h2 className="mb-12 text-center text-4xl font-bold">
          Powerful Features
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Carbon Tracking",
              desc: "Monitor transportation and electricity emissions.",
              link: "/activities",
            },
            {
              title: "Sustainability Tips",
              desc: "Discover practical ways to reduce your carbon footprint.",
              link: "/tips",
            },
            {
              title: "Analytics Dashboard",
              desc: "Visualize trends and understand your environmental impact.",
              link: "/analytics",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
            >
              <Link
                href={item.link}
                className="block rounded-2xl border border-zinc-800 bg-zinc-900 p-8 transition hover:border-green-500 hover:shadow-[0_0_30px_rgba(34,197,94,0.3)]"
              >
                <h3 className="mb-3 text-xl font-semibold text-green-500">
                  {item.title}
                </h3>

                <p className="text-zinc-400">
                  {item.desc}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Analytics Preview */}
      <section
        id="analytics"
        className="relative z-10 bg-zinc-950/80 py-24"
      >
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Explore Your Sustainability Journey
          </h2>

          <div className="grid gap-6 md:grid-cols-4">
            {[
              ["Activities", "Track", "/activities"],
              ["Analytics", "Analyze", "/analytics"],
              ["Goals", "Improve", "/goals"],
              ["Tips", "Learn", "/tips"],
            ].map(([title, text, link], index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
              >
                <Link
                  href={link}
                  className="block rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-green-500 hover:shadow-[0_0_25px_rgba(34,197,94,0.3)]"
                >
                  <h3 className="text-zinc-400">
                    {title}
                  </h3>

                  <p className="mt-2 text-2xl font-bold text-green-500">
                    {text}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-24 text-center">
        <h2 className="text-4xl font-bold">
          Ready to Make an Impact?
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-400">
          Start tracking your sustainability journey today.
        </p>

        <Link
          href="/activities"
          className="mt-8 inline-block rounded-xl bg-green-500 px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-green-400"
        >
          Get Started Free
        </Link>
      </section>

      {/* Footer */}
      <footer
        id="about"
        className="relative z-10 border-t border-zinc-800 py-8 text-center text-zinc-500"
      >
        © 2026 EcoPulse AI. All rights reserved.
      </footer>
    </main>
  );
}