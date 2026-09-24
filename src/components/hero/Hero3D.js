"use client";

import dynamic from "next/dynamic";

const Scene = dynamic(() => import("./Scene"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full flex items-center justify-center">
      <div className="h-16 w-16 rounded-full border border-brass-dim border-t-brass-bright animate-spin" />
    </div>
  ),
});

export default function Hero3D() {
  return (
    <div className="absolute inset-0">
      <Scene />
    </div>
  );
}
