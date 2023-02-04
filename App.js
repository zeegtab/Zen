import React, {useRef, useState} from 'react'
import {Canvas, useFrame} from '@react-three/fiber/native'

function Cylinder(props) {
    const mesh = useRef(null)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    // useFrame((state, delta) => (mesh.current.rotation.z += 0.1));

    return (
        <mesh
            {...props}
            ref={mesh}
            scale={0.75}
            // scale={active ? 1.5 : 1}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}>
            <cylinderGeometry attach="geometry" args={[props.radius, props.radius, props.height]}/>
            <meshStandardMaterial color={props.color}/>
        </mesh>
    )
}

function Cone(props) {
    const mesh = useRef(null)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    // useFrame((state, delta) => (mesh.current.rotation.z += 0.1));

    const [color, setColor] = useState('red');
    return (
        <mesh
            position={props.position}
            onPointerOver={() => setColor('red')}
            onPointerOut={() => setColor('blue')}
            // radialSegments={props.radialSegments}
        >
            <coneBufferGeometry
                scale={[0,0,0]}
                attach="geometry"
                args={[props.radius, props.height, props.radialSegments]}
            />
            <meshBasicMaterial
                attach="material"
                color={color}
                opacity={0.5}
                transparent={true}
            />
        </mesh>
    )
}

export default function App() {
    return (
        <Canvas>
            <ambientLight/>
            <pointLight position={[10, 10, 10]}/>
            <Cylinder position={[0, 0, 0]} color={'orange'} radius={0.4} height={3}/>
            {/*<OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />*/}
            <Cylinder position={[0, 1.25, 0]} color={'black'} radius={0.01} height={0.4}/>
            <Cone position={[0,1.5,0]} color={'orange'} radius={0.25} height={0.5} radialSegments={15} />

        </Canvas>
    )
}