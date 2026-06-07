"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

function Diamond({ position, size, speed, delay, mouseRef }: {
  position: [number, number, number];
  size: number;
  speed: number;
  delay: number;
  mouseRef: React.RefObject<{ x: number; y: number }>;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const [initialPos] = useState(() => new THREE.Vector3(...position));
  const timeRef = useRef(delay);

  useFrame((state) => {
    if (!meshRef.current) return;
    
    timeRef.current += state.clock.getDelta() * speed;
    
    // Smooth floating movement
    meshRef.current.position.y = initialPos.y + Math.sin(timeRef.current) * 0.4;
    meshRef.current.position.x = initialPos.x + Math.cos(timeRef.current * 0.7) * 0.3;
    
    // Slow rotational drift
    meshRef.current.rotation.x = timeRef.current * 0.15;
    meshRef.current.rotation.y = timeRef.current * 0.25;
    
    // Mouse follow offset (subtle parallax)
    if (mouseRef.current) {
      meshRef.current.position.x += (mouseRef.current.x * 1.5 - meshRef.current.position.x) * 0.05;
      meshRef.current.position.y += (-mouseRef.current.y * 1.5 - meshRef.current.position.y) * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} position={position} castShadow receiveShadow>
      {/* Detail 0 creates a beautiful 20-faceted icosahedron representing a cut gemstone */}
      <icosahedronGeometry args={[size, 0]} />
      <meshPhysicalMaterial
        color="#ffffff"
        emissive="#F8C8DC"
        emissiveIntensity={0.15}
        roughness={0.0}
        metalness={0.0}
        clearcoat={1.0}
        clearcoatRoughness={0.0}
        transmission={0.9}    // Makes it glass-like/translucent
        ior={2.417}           // Index of Refraction of Diamond
        thickness={size * 1.2}
        flatShading={true}    // Enables faceted diamond appearance
        transparent={true}
        opacity={0.85}
      />
    </mesh>
  );
}

function Sparkles() {
  const pointsRef = useRef<THREE.Points>(null);
  const [positions] = useState(() => {
    const arr = new Float32Array(300); // 100 particles * 3 coordinates
    for (let i = 0; i < 300; i += 3) {
      arr[i] = (Math.random() - 0.5) * 15; // X
      arr[i + 1] = (Math.random() - 0.5) * 15; // Y
      arr[i + 2] = (Math.random() - 0.5) * 10 - 2; // Z
    }
    return arr;
  });

  useFrame((state) => {
    if (!pointsRef.current) return;
    const time = state.clock.getElapsedTime();
    pointsRef.current.rotation.y = time * 0.02;
    pointsRef.current.rotation.x = time * 0.01;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#D4AF37" // Elegant Gold Sparkles
        size={0.08}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

export default function ThreeDCanvas() {
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 w-full h-full pointer-events-none bg-gradient-to-b from-[#FFF9FB] via-[#FFF2F5] to-[#FFF9FB]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.5} />
        
        {/* Diamond directional lights to create sparkling reflections */}
        <directionalLight position={[5, 5, 5]} intensity={2.0} color="#FFF" />
        <directionalLight position={[-5, 5, -5]} intensity={1.5} color="#F8C8DC" />
        <pointLight position={[0, -2, 2]} intensity={1.0} color="#D4AF37" />

        {/* Floating Faceted Diamonds */}
        <Diamond position={[-2.2, 1.5, 0]} size={0.6} speed={0.8} delay={0} mouseRef={mouseRef} />
        <Diamond position={[2.5, 1.2, -1]} size={0.45} speed={1.1} delay={2.5} mouseRef={mouseRef} />
        <Diamond position={[-2.0, -1.8, -2]} size={0.5} speed={0.9} delay={4.0} mouseRef={mouseRef} />
        <Diamond position={[2.0, -2.0, 1]} size={0.55} speed={0.7} delay={1.2} mouseRef={mouseRef} />
        <Diamond position={[0.2, 0.5, -3]} size={0.35} speed={1.3} delay={5.5} mouseRef={mouseRef} />
        
        {/* Soft Golden Sparkle Particle Field */}
        <Sparkles />
      </Canvas>
    </div>
  );
}
