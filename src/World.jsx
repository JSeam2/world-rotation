import React, { useRef, useState } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { useLoader } from '@react-three/fiber';
import { useFrame } from '@react-three/fiber';

export default function World({ rotate, setRotate }) {
  const glb = useLoader(GLTFLoader, '/low_poly_planet_earth.glb');
  const modelRef = useRef();
  const [totalRotation, setTotalRotation] = useState(0); // Track the total rotation

  useFrame(() => {
    if (rotate) {
      const rotationStep = Math.PI / 2 / 120; // Rotation increment
      modelRef.current.rotation.y += rotationStep;

      // Update total rotation and check if it reached the next 90 degrees
      if (modelRef.current.rotation.y >= totalRotation + Math.PI / 2) {
        modelRef.current.rotation.y = totalRotation + Math.PI / 2; // Align to exact 90 degrees
        setTotalRotation(modelRef.current.rotation.y); // Update total rotation
        setRotate(false); // Stop further rotation
      }
    }
  });

  return <primitive object={glb.scene} ref={modelRef} dispose={null} />;
}