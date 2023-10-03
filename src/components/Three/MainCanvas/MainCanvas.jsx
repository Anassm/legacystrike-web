import { Canvas } from "@react-three/fiber";
import { useState } from "react";
import {
  AmbientLight,
  BoxGeometry,
  MeshStandardMaterial,
  PointLight,
} from "three";

export default function MainCanvas() {
  const [hovered, setHovered] = useState(null);

  return (
    <>
      <Canvas>
        <AmbientLight intensity={0.5} />
        <PointLight position={[10, 10, 10]} />

        <mesh
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <BoxGeometry args={[1, 1, 1]} />
          <MeshStandardMaterial color={hovered ? "#ffa400" : "#1d2c48"} />
        </mesh>
      </Canvas>
    </>
  );
}
