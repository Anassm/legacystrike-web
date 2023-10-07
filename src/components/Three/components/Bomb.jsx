import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Bomb() {
  function Scene() {
    const gltf = useLoader(GLTFLoader, "/scene.gltf");
    return <primitive object={gltf.scene}
  }

  return (
    <Canvas>
      <mesh></mesh>
    </Canvas>
  );
}
