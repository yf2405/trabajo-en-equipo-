

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function MeshCube(props:any) {
  const { nodes, materials } = useGLTF('/cubebros.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.SMO_MysteryBlock_geo_SMO_MysteryBlock_SHD_0.geometry} material={materials.SMO_MysteryBlock_SHD} scale={0.01} />
    </group>
  )
}

useGLTF.preload('/cubebros.gltf')
