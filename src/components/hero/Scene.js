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

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 820);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

export default function Scene() {
  const groupRef = useRef();
  const isMobile = useIsMobile();

  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0.3, isMobile ? 13 : 7.2], fov: isMobile ? 30 : 38 }}
      gl={{ antialias: true, alpha: true }}
    >
      <color attach="background" args={["#120e0a"]} />
      <fog attach="fog" args={["#120e0a", isMobile ? 10 : 6, isMobile ? 20 : 13]} />

      <ambientLight intensity={0.35} color="#4a3521" />
      <pointLight position={[4, 4, 4]} intensity={90} color="#e0c07f" />
      <pointLight position={[-4, -2, -3]} intensity={30} color="#8a6d38" />
      <directionalLight position={[0, 5, 5]} intensity={0.8} color="#fff3d6" />

      <group scale={isMobile ? 0.55 : 1}>
        <JusticeScale groupRef={groupRef} />
      </group>
      <Rig groupRef={groupRef} />

      <Sparkles
        count={90}
        scale={[7, 5, 4]}
        size={2.2}
        speed={0.25}
        color="#d8b979"
        opacity={0.55}
      />
    </Canvas>
  );
}