import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import { MeshCube } from './MeshCube'

export default function CubeMagic() {
  return (
    <div style={{ width: '100%', height: '50vh'}}>
    <Canvas camera={{ zoom: 35, position: [15, 20, 15] }}>
      <ambientLight intensity={1} />
      <pointLight position={[40, 10, 10]} intensity={1} />
      <pointLight position={[-40, 10, 10]} intensity={1} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <directionalLight position={[-10, 10, 5]} intensity={1} />
      <Suspense fallback={null}>
        <MeshCube />
      </Suspense>
      <OrbitControls />
    </Canvas>
  </div>
  )
}
