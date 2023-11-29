import React from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';

export default function World() {
  const glb = useLoader(GLTFLoader, '/low_poly_planet_earth.glb');

  return <primitive object={glb.scene} dispose={null} />;
}