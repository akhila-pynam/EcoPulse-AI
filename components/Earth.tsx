"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import {
  OrbitControls,
  Sphere,
  Stars,
} from "@react-three/drei";
import * as THREE from "three";

function Globe() {
  const earthTexture = useLoader(
    THREE.TextureLoader,
    "/earth.jpg"
  );

  return (
    <Sphere args={[2.2, 100, 100]}>
      <meshStandardMaterial map={earthTexture} />
    </Sphere>
  );
}

export default function Earth() {
  return (
    <div className="h-[500px] w-[500px]">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <Stars
          radius={100}
          depth={50}
          count={4000}
          factor={4}
          fade
        />

        <ambientLight intensity={2} />

        <directionalLight
          position={[5, 5, 5]}
          intensity={3}
        />

        <pointLight
          position={[-5, 0, 5]}
          intensity={2}
          color="#22c55e"
        />

        <Globe />

        <OrbitControls
          autoRotate
          autoRotateSpeed={1}
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
}