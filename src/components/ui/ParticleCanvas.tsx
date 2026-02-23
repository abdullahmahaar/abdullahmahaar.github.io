"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

type PointCloudProps = {
  count?: number;
};

function PointCloud({ count = 800 }: PointCloudProps) {
  const pointsRef = useRef<THREE.Points>(null);
  const pointer = useRef({ x: 0, y: 0 });

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);

    for (let i = 0; i < count; i += 1) {
      const phi = Math.acos(2 * Math.random() - 1);
      const theta = Math.random() * Math.PI * 2;
      const radius = 1.8 + Math.random() * 0.45;

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.cos(phi);
      pos[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);

      const tint = 0.6 + Math.random() * 0.4;
      col[i * 3] = 0 * tint;
      col[i * 3 + 1] = 0.96 * tint;
      col[i * 3 + 2] = 0.83 * tint;
    }

    return { positions: pos, colors: col };
  }, [count]);

  useFrame(({ clock, mouse }) => {
    pointer.current.x = mouse.x;
    pointer.current.y = mouse.y;

    if (!pointsRef.current) {
      return;
    }

    pointsRef.current.rotation.y = clock.getElapsedTime() * 0.16;
    pointsRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.08;
    pointsRef.current.position.x = pointer.current.x * 0.2;
    pointsRef.current.position.y = pointer.current.y * 0.2;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={colors.length / 3} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.025} transparent opacity={0.85} vertexColors sizeAttenuation depthWrite={false} />
    </points>
  );
}

export function ParticleCanvas() {
  return (
    <div className="h-full w-full" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 6], fov: 60 }} dpr={[1, 1.8]}>
        <ambientLight intensity={0.4} />
        <PointCloud />
      </Canvas>
    </div>
  );
}
