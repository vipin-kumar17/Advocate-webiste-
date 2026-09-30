"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import JusticeScale from "./JusticeScale";

function Rig({ groupRef }) {
  const { pointer } = useThree();
  useFrame((state) => {
    if (!groupRef.current) return;
    const t = state.clock.elapsedTime;
    const targetY = t * 0.18 + pointer.x * 0.35;
    const targetX = pointer.y * 0.12;
    groupRef.current.rotation.y += (targetY - groupRef.current.rotation.y) * 0.04;
    groupRef.current.rotation.x += (targetX - groupRef.current.rotation.x) * 0.04;
  });
  return null;
}

// Ek badi desktop screen chhoti mobile screen se 4-6 guna zyada pixels
// hoti hai. Isliye "dpr" (render resolution) ko screen ke area ke hisaab
// se khud adjust karte hain -- badi screen pe thodi kam resolution, taaki
// total kaam (aur smoothness) har jagah barabar rahe.
const PIXEL_BUDGET = 550000;

function useResponsiveScene() {
  const [values, setValues] = useState({ scale: 1, z: 7.2, fov: 38, dpr: 1 });

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const minSide = Math.min(w, h);
      const t = Math.min(1, Math.max(0, (minSide - 340) / (900 - 340)));
      const scale = 0.42 + t * 0.58;
      const z = 14 - t * 6.8;
      const fov = 27 + t * 11;

      const naturalPixels = Math.max(1, w * h);
      let dpr = Math.sqrt(PIXEL_BUDGET / naturalPixels);
      dpr = Math.min(dpr, window.devicePixelRatio || 1, 1.6);
      dpr = Math.max(dpr, 0.6);

      setValues({ scale, z, fov, dpr });
    };
    compute();
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, []);

  return values;
}

export default function Scene() {
  const groupRef = useRef();
  const { scale, z, fov, dpr } = useResponsiveScene();

  return (
    <Canvas
      dpr={dpr}
      camera={{ position: [0, 0.3, z], fov }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <color attach="background" args={["#120e0a"]} />
      <fog attach="fog" args={["#120e0a", z + 2, z + 9]} />

      <ambientLight intensity={0.4} color="#4a3521" />
      <pointLight position={[4, 4, 4]} intensity={90} color="#e0c07f" />
      <directionalLight position={[0, 5, 5]} intensity={0.8} color="#fff3d6" />

      <group scale={scale}>
        <JusticeScale groupRef={groupRef} />
      </group>
      <Rig groupRef={groupRef} />

      <Sparkles
        count={60}
        scale={[7, 5, 4]}
        size={2.2}
        speed={0.25}
        color="#d8b979"
        opacity={0.55}
      />
    </Canvas>
  );
}