"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Leaf {
  x: number;
  size: number;
  duration: number;
  delay: number;
}

export default function FloatingLeaves() {
  const [leaves, setLeaves] = useState<Leaf[]>([]);

  useEffect(() => {
    const generatedLeaves = Array.from(
      { length: 12 },
      () => ({
        x: Math.random() * 100,
        size: 20 + Math.random() * 25,
        duration: 15 + Math.random() * 10,
        delay: Math.random() * 5,
      })
    );

    setLeaves(generatedLeaves);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {leaves.map((leaf, index) => (
        <motion.div
          key={index}
          className="absolute text-green-500 opacity-20"
          initial={{
            y: -100,
            x: `${leaf.x}vw`,
            rotate: 0,
          }}
          animate={{
            y: "110vh",
            rotate: 360,
          }}
          transition={{
            duration: leaf.duration,
            repeat: Infinity,
            ease: "linear",
            delay: leaf.delay,
          }}
          style={{
            fontSize: `${leaf.size}px`,
          }}
        >
          🍃
        </motion.div>
      ))}
    </div>
  );
}