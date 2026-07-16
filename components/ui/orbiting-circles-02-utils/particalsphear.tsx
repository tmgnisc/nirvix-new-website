"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import React, { useMemo, useRef } from "react";
import * as THREE from "three";

const PARTICLE_COUNT = 900;
const SPHERE_RADIUS = 1;

function ParticleSphere() {
  const pointsRef = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const arr = new Float32Array(PARTICLE_COUNT * 3);
    // Fibonacci sphere distribution for even point spacing
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const y = 1 - (i / (PARTICLE_COUNT - 1)) * 2;
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = goldenAngle * i;
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;
      arr[i * 3] = x * SPHERE_RADIUS;
      arr[i * 3 + 1] = y * SPHERE_RADIUS;
      arr[i * 3 + 2] = z * SPHERE_RADIUS;
    }
    return arr;
  }, []);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0035;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color="#0168b5" size={0.02} sizeAttenuation transparent opacity={0.85} />
    </points>
  );
}

export default function ParticleSphereAnimation() {
  return (
    <Canvas camera={{ position: [0, 0, 2.6], fov: 45 }}>
      <ParticleSphere />
    </Canvas>
  );
}
