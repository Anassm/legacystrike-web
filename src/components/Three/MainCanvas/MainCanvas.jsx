import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { DoubleSide } from "three";

export default function MainCanvas() {
  return (
    <div className="h-screen">
      <Canvas camera={{ fov: 75, position: 1 }} frameloop="demand">
        <mesh>
          <ambientLight intensity={0.1} />
          <directionalLight color="red" position={[0, 0, 5]} />

          <sphereGeometry args={[1]} />
          <meshStandardMaterial side={DoubleSide} />
          <OrbitControls />
        </mesh>
      </Canvas>
    </div>
  );
}
