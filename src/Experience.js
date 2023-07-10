import React, { useEffect, useRef, useState } from "react";
import { OrbitControls, Environment } from "@react-three/drei";
import { Perf } from "r3f-perf";
import * as THREE from "three";
import AnimatedCube from "./AnimatedCube";
import RockAudio from "./RockAudio";
import { Canvas } from "@react-three/fiber";
import Grass from "./Grass";

let cubeIdCounter = 0;

export default function Experience() {




    const [newCubes, setNewCubes] = useState([]);
    const [removedCubes, setRemovedCubes] = useState([]);
    const threshold = 120; // Minimum distance (in pixels) to create a new cube
    const distanceRef = useRef(0); // Reference to keep track of the distance moved
    const maxCubeCount = 10; // Maximum number of cubes
    const maxCubeCountRender = 10
    const [playAudio, setPlayAudio] = useState(false)


    const handleMouseMove = (event) => {
        const { point, movementX, movementY } = event;
        const { x, z } = point;

        distanceRef.current += Math.abs(movementX) + Math.abs(movementY);
        if (distanceRef.current >= threshold) {
            let updatedCubes = newCubes;

            if (updatedCubes.length >= maxCubeCount) {
                const [oldestCube, ...restCubes] = updatedCubes;
                setRemovedCubes((prevRemovedCubes) => [
                    ...prevRemovedCubes,
                    React.cloneElement(oldestCube, { remove: true }),
                ]);

                updatedCubes = restCubes;
            }

            const cube = (
                <AnimatedCube
                    position={[x, -0.4, z]}
                    key={cubeIdCounter++}
                    remove={false}
                    randomMeshIndex={0}
                    randomScale={0}
                    randomRotation={0}
                />
            );
            updatedCubes = [...updatedCubes, cube];
            setNewCubes(updatedCubes);
            distanceRef.current = 0; // Reset the distance

            if (removedCubes.length > maxCubeCountRender) {
                setRemovedCubes([]);
            }
        }
    };

    useEffect(() => {
        setPlayAudio(true)
        console.log('do')
        setTimeout(() => {
            setPlayAudio(false)
            console.log('yo')
        }, 1000);
    }, [cubeIdCounter])

    return (
        <>
            <Canvas
                camera={{
                    fov: 45,
                    near: 0.1,
                    far: 2000,
                    position: [-3, 1.5, 4]
                }}
            >
                <OrbitControls />
                {/* <Perf position="top-left" /> */}
                <Environment preset="city" />
                <color args={["#695b5b"]} attach="background" />

                <mesh
                    onPointerMove={handleMouseMove}
                    rotation={[-Math.PI / 2, 0, 0]}
                    position={[0, -0.5, 0]}
                >
                    <planeGeometry args={[45, 45]} />
                    <meshBasicMaterial side={THREE.DoubleSide} />
                </mesh>

                {newCubes}
                {removedCubes.map((cube, index) =>
                    React.cloneElement(cube, { key: `removed-${index}` })
                )}
                {/* <Grass /> */}
                <ambientLight />
            </Canvas >
            <RockAudio playAudio={playAudio} />
        </>
    );
}
