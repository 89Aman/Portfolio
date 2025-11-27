import { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Generate particle data outside of component for purity
function generateParticleData(count: number) {
  const positions = new Float32Array(count * 3);
  const velocities = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 5;
    
    velocities[i * 3] = (Math.random() - 0.5) * 0.01;
    velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.01;
    velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.005;
  }
  
  return { positions, velocities };
}

interface ParticlesProps {
  count?: number;
  mouse: { x: number; y: number };
}

function Particles({ count = 200, mouse }: ParticlesProps) {
  const meshRef = useRef<THREE.Points>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const dataRef = useRef<{ positions: Float32Array; velocities: Float32Array } | null>(null);
  
  // Update mouse position ref in effect
  useEffect(() => {
    mouseRef.current = mouse;
  }, [mouse]);

  // Initialize particle data once
  useEffect(() => {
    if (!dataRef.current) {
      dataRef.current = generateParticleData(count);
    }
    
    if (meshRef.current && meshRef.current.geometry && dataRef.current) {
      const geometry = meshRef.current.geometry;
      geometry.setAttribute('position', new THREE.BufferAttribute(dataRef.current.positions, 3));
    }
  }, [count]);

  useFrame((state) => {
    if (!meshRef.current || !dataRef.current) return;
    
    const geometry = meshRef.current.geometry;
    const positionAttribute = geometry.attributes.position as THREE.BufferAttribute;
    if (!positionAttribute) return;
    
    const posArray = positionAttribute.array as Float32Array;
    const velocities = dataRef.current.velocities;
    
    for (let i = 0; i < count; i++) {
      // Update positions with velocity
      posArray[i * 3] += velocities[i * 3];
      posArray[i * 3 + 1] += velocities[i * 3 + 1];
      posArray[i * 3 + 2] += velocities[i * 3 + 2];
      
      // Mouse influence
      const dx = mouseRef.current.x * 5 - posArray[i * 3];
      const dy = mouseRef.current.y * 5 - posArray[i * 3 + 1];
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      if (dist < 2) {
        posArray[i * 3] -= dx * 0.002;
        posArray[i * 3 + 1] -= dy * 0.002;
      }
      
      // Boundary check
      if (posArray[i * 3] > 5 || posArray[i * 3] < -5) velocities[i * 3] *= -1;
      if (posArray[i * 3 + 1] > 5 || posArray[i * 3 + 1] < -5) velocities[i * 3 + 1] *= -1;
      if (posArray[i * 3 + 2] > 2.5 || posArray[i * 3 + 2] < -2.5) velocities[i * 3 + 2] *= -1;
    }
    
    positionAttribute.needsUpdate = true;
    
    // Slow rotation
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.05;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry />
      <pointsMaterial
        size={0.03}
        color="#404040"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

interface ParticleBackgroundProps {
  mouse: { x: number; y: number };
}

export default function ParticleBackground({ mouse }: ParticleBackgroundProps) {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <Particles count={150} mouse={mouse} />
      </Canvas>
    </div>
  );
}
