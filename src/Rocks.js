import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Rocks({ randomMeshIndex, randomRotation, randomScale }) {
  const { nodes, materials } = useGLTF("/rocks3.glb");

  const getMeshByIndex = (index) => {
    switch (index) {
      case 0:
        return (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube.geometry}
            material={materials['Material.005']}
            rotation={[0, -1.126, 0]}
          />
        );
      case 1:
        return (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001.geometry}
            material={materials['Material.002']}
          />
        );
      case 2:
        return (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube003.geometry}
            material={materials['Material.001']}
            rotation={[0, -0.507, 0]}
          />
        );
      case 3:
        return (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube004.geometry}
            material={materials['Material.011']}
            position={[0, -0.425, 0]}
            rotation={[Math.PI, -0.797, Math.PI]}
            scale={0.575}
          />
        );
      case 4:
        return (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube005.geometry}
            material={materials['Material.010']}
            position={[0, -0.387, 0]}
            rotation={[0, 0.266, 0]}
            scale={0.613}
          />
        );
      case 5:
        return (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube006.geometry}
            material={materials['Material.013']}
            position={[0, -0.884, 0]}
            rotation={[0, 0.923, 0]}
            scale={0.116}
          />
        );
      case 6:
        return (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube007.geometry}
            material={materials['Material.009']}
          />
        );
      case 7:
        return (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube008.geometry}
            material={materials['Material.012']}
            position={[0, -0.465, 0]}
            rotation={[0, -0.869, 0]}
            scale={0.535}
          />
        );
      case 8:
        return (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube009.geometry}
            material={materials['Material.008']}
            position={[0, 0.407, 0]}
            rotation={[0, -0.011, 0]}
            scale={[0.535, 1.407, 0.535]}
          />
        );
      case 9:
        return (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube010.geometry}
            material={materials['Material.014']}
            position={[0, -0.888, 0]}
            rotation={[-Math.PI, 1.49, -Math.PI]}
            scale={0.112}
          />
        );
      case 10:
        return (
          <group position={[0.399, 0.825, 0.71]} scale={0.128}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube011_1.geometry}
              material={materials['Material.003']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube011_2.geometry}
              material={materials['Material.004']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube011_3.geometry}
              material={materials['Material.006']}
            />
          </group>
        );
      case 11:
        return (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube012.geometry}
            material={materials['Material.007']}
            rotation={[0, -0.507, 0]}
          />
        );
      case 12:
        return (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube013.geometry}
            material={materials['Material.004']}
            position={[0, -0.606, 0]}
            rotation={[0, -0.641, 0]}
            scale={[0.588, 0.394, 0.467]}
          />
        );
      case 13:
        return (
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube014.geometry}
            material={materials['Material.006']}
            rotation={[0, 1.298, 0]}
          />
        );
      case 14:
        return (
          <group rotation={[0, 1.298, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube017.geometry}
              material={materials['Material.006']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Cube017_1.geometry}
              material={materials['Material.003']}
            />
          </group>
        );
      default:
        return null; // Default case, return null or handle accordingly
    }

  };

  return (
    <group onClick={() => console.log('clicked')} position-y={randomScale - 0.1} scale={randomScale} rotation-y={randomRotation} >
      {getMeshByIndex(randomMeshIndex)}
    </group>
  );
}

useGLTF.preload("/rocks1.glb");
