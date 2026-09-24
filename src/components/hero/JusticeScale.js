"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const BRASS = "#c79b52";

function Pan({ side = 1 }) {
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ref.current) {
      ref.current.position.y = -1.55 + Math.sin(t * 0.7 + side) * 0.05;
      ref.current.rotation.z = Math.sin(t * 0.5 + side) * 0.03;
    }
  });
  return (
    <group ref={ref} position={[side * 1.6, -1.55, 0]}>
      {/* chains */}
      {[-0.38, 0.38].map((x, i) => (
        <mesh key={i} position={[x, 0.35, 0]}>
          <cylinderGeometry args={[0.012, 0.012, 0.7, 6]} />
          <meshStandardMaterial color={BRASS} metalness={0.9} roughness={0.3} />
        </mesh>
      ))}
      {/* pan dish */}
      <mesh rotation={[Math.PI, 0, 0]}>
        <coneGeometry args={[0.42, 0.16, 32, 1, true]} />
        <meshStandardMaterial
          color={BRASS}
          metalness={0.9}
          roughness={0.25}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh position={[0, 0.02, 0]}>
        <torusGeometry args={[0.42, 0.02, 12, 40]} />
        <meshStandardMaterial color={BRASS} metalness={0.9} roughness={0.2} />
      </mesh>
    </group>
  );
}

export default function JusticeScale({ groupRef }) {
  const beamRef = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (beamRef.current) {
      beamRef.current.rotation.z = Math.sin(t * 0.5) * 0.025;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0.4, 0]} dispose={null}>
      {/* base */}
      <mesh position={[0, -2.55, 0]}>
        <cylinderGeometry args={[0.65, 0.75, 0.14, 48]} />
        <meshStandardMaterial color="#2a1c12" metalness={0.4} roughness={0.6} />
      </mesh>
      <mesh position={[0, -2.45, 0]}>
        <cylinderGeometry args={[0.1, 0.14, 0.18, 32]} />
        <meshStandardMaterial color={BRASS} metalness={0.85} roughness={0.3} />
      </mesh>

      {/* pole */}
      <mesh position={[0, -1, 0]}>
        <cylinderGeometry args={[0.045, 0.055, 3.1, 24]} />
        <meshStandardMaterial color={BRASS} metalness={0.9} roughness={0.25} />
      </mesh>

      {/* finial */}
      <mesh position={[0, 0.58, 0]}>
        <sphereGeometry args={[0.09, 24, 24]} />
        <meshStandardMaterial color={BRASS} metalness={0.95} roughness={0.15} />
      </mesh>

      {/* beam */}
      <group ref={beamRef} position={[0, 0.42, 0]}>
        <mesh rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.035, 0.035, 3.4, 20]} />
          <meshStandardMaterial color={BRASS} metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[-1.6, -0.02, 0]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color={BRASS} metalness={0.9} roughness={0.2} />
        </mesh>
        <mesh position={[1.6, -0.02, 0]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color={BRASS} metalness={0.9} roughness={0.2} />
        </mesh>
      </group>

      <Pan side={-1} />
      <Pan side={1} />
    </group>
  );
}
