import { useState } from 'react'
import './App.css'
import * as THREE from 'three'
import { useRef } from 'react'
import { Canvas } from '@react-three/fiber'
// import { OrbitControls, PivotControls } from '@react-three/drei'
// import { Geometry, Base, Subtraction, Addition } from '@react-three/csg'
import { Environment } from './Environment'
import World from "./World"

const hoverStyle = {
  background: 'hsl(210, 100%, 60%)',
  boxShadow: '0 0 20px hsl(210, 100%, 80%), 0 0 30px hsl(210, 100%, 80%), 0 0 50px hsl(210, 100%, 80%)',
};

const buttonStyle = {
  position: 'absolute',
  bottom: '100px',
  left: '50%',
  transform: 'translateX(-50%)',
  zIndex: 100,
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  background: 'hsl(210, 100%, 50%)', // Bright blue color
  color: '#FFF',
  fontSize: '1em',
  fontWeight: 'bold',
  textTransform: 'uppercase',
  letterSpacing: '2px',
  boxShadow: '0 0 10px hsl(210, 100%, 70%), 0 0 20px hsl(210, 100%, 70%), 0 0 40px hsl(210, 100%, 70%)', // Glowing effect
  cursor: 'pointer',
  transition: 'all 0.3s ease',
};

function App() {

  return (
    <>
      <Canvas className="root" shadows camera={{ position: [-15, 10, 15], fov: 25 }}>
        <color attach="background" args={['black']} />
        <World />
        <Environment />
      </Canvas>
      <button
        style={buttonStyle}
        onMouseEnter={() => (buttonStyle.background = hoverStyle.background, buttonStyle.boxShadow = hoverStyle.boxShadow)}
        onMouseLeave={() => (buttonStyle.background = 'hsl(210, 100%, 50%)', buttonStyle.boxShadow = '0 0 10px hsl(210, 100%, 70%), 0 0 20px hsl(210, 100%, 70%), 0 0 40px hsl(210, 100%, 70%)')}
      >
        Rotate
      </button>
    </>
  );
}

export default App
