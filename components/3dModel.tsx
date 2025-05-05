
"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

function Model() {
  const gltf = useGLTF('/cube.glb'); 
  return <primitive object={gltf.scene} scale={1.5} />;
}

export default function ModelViewer() {
  return (
    <div style={{ width: '50%', height: '150px' }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <Environment preset="city" />
          <Model />
          <OrbitControls enableZoom={false} />
        </Suspense>
      </Canvas>
    </div>
  );
}
