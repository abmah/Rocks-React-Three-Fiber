import React, { useEffect } from 'react';
import { animated, useSpring } from '@react-spring/three';
import { useFrame } from '@react-three/fiber';
import { Rocks } from './Rocks';

export default function AnimatedCube({ position, remove }) {

  const randomMeshIndex = Math.floor(Math.random() * 10);
  const randomRotation = Math.random() * Math.PI * 2;
  const randomScale = Math.random() * 0.6


  const [animation, setAnimation] = useSpring(() => ({
    from: { position: remove ? [position[0], -0.4, position[2]] : [position[0], -1.2, position[2]] },
    to: { position: remove ? [position[0], -2, position[2]] : [position[0], -0.4, position[2]] },
    config: { tension: 200, friction: 30 },
  }));

  useFrame(() => {
    setAnimation({
      position: remove ? [position[0], -2, position[2]] : [position[0], -0.4, position[2]],
    });
  });

  const interpolatedPosition = animation.position.to((x, y, z) => [x, y, z]);

  return (
    <animated.group position={interpolatedPosition}>
      <Rocks
        randomMeshIndex={randomMeshIndex}
        randomRotation={randomRotation}
        randomScale={randomScale}
      />
    </animated.group>
  );
}
