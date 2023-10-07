import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

// components
import { Bomb } from "./Bomb";

export default function BombCanvas() {
  return (
    <Canvas camera={{ position: [1, 500, 3] }}>
      <ambientLight intensity={3} />
      <Suspense fallback={null}>
        <Bomb />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}
