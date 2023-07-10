import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Rocks({ randomMeshIndex, randomRotation, randomScale }) {
  const { nodes } = useGLTF("/rocks1.glb");

  const getMeshByIndex = (index) => {
    switch (index) {
      case 0:
        return (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={nodes.Cube.material}
            rotation={[0, -1.126, 0]}
          />
        );
      case 1:
        return (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001.geometry}
            material={nodes.Cube001.material}
          />
        );
      case 2:
        return (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube002.geometry}
            material={nodes.Cube002.material}
            rotation={[0, 1.298, 0]}
          />
        );
      case 3:
        return (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003.geometry}
            material={nodes.Cube003.material}
            rotation={[0, -0.507, 0]}
          />
        );
      case 4:
        return (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004.geometry}
            material={nodes.Cube004.material}
            position={[0, -0.425, 0]}
            rotation={[Math.PI, -0.797, Math.PI]}
            scale={0.575}
          />
        );
      case 5:
        return (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube005.geometry}
            material={nodes.Cube005.material}
            position={[0, -0.387, 0]}
            rotation={[0, 0.266, 0]}
            scale={0.613}
          />
        );
      case 6:
        return (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube006.geometry}
            material={nodes.Cube006.material}
            position={[0, -0.884, 0]}
            rotation={[0, 0.923, 0]}
            scale={0.116}
          />
        );
      case 7:
        return (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube007.geometry}
            material={nodes.Cube007.material}
          />
        );
      case 8:
        return (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008.geometry}
            material={nodes.Cube008.material}
            position={[0, -0.465, 0]}
            rotation={[0, -0.869, 0]}
            scale={0.535}
          />
        );
      case 9:
        return (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube009.geometry}
            material={nodes.Cube009.material}
            position={[0, 0.407, 0]}
            rotation={[0, -0.011, 0]}
            scale={[0.535, 1.407, 0.535]}
          />
        );
      case 10:
        return (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube010.geometry}
            material={nodes.Cube010.material}
            position={[0, -0.888, 0]}
            rotation={[-Math.PI, 1.49, -Math.PI]}
            scale={0.112}
          />
        );
      default:
        return null;
    }
  };

  return (
    <group position-y={randomScale - 0.1} scale={randomScale} rotation-y={randomRotation} >
      {getMeshByIndex(randomMeshIndex)}
    </group>
  );
}

useGLTF.preload("/rocks1.glb");
