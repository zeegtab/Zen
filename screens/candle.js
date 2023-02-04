import React, {useRef, useState} from 'react';
import {Pressable, StyleSheet, Text, View, Image} from 'react-native';
import {Canvas, useFrame} from '@react-three/fiber/native'
import { PerspectiveCamera } from '@react-three/drei/native'
import DateTimePickerModal from "react-native-modal-datetime-picker";

const textButtons = StyleSheet.create({
    normal: {
        fontSize: 30,
        color: "#fff",
        textAlign: 'center',
        fontFamily: 'Jost_500Medium'
    },
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#fff",
        padding: 20,
        margin: 10,
    },
    top: {
        flex: 0.25,
        backgroundColor: "#00CC66",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: 'center', //Centered horizontally
        alignItems: 'center', //Centered vertically
    },
    middle: {
        flex: 0.5,
        backgroundColor: "#00CC66",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: 'center', //Centered horizontally
        alignItems: 'center', //Centered vertically
    },
    bottom: {
        flex: 0.15,
        backgroundColor: "#00CC66",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: 'center', //Centered horizontally
        alignItems: 'center', //Centered vertically
    },
    image_style: {height: 250, width: 250, overflow: 'hidden', margin: 5},
});

function Cylinder(props) {
    const mesh = useRef(null)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    // useFrame((state, delta) => (mesh.current.rotation.z += 0.1));

    return (<mesh
        {...props}
        ref={mesh}
        scale={0.75}
        // scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
        <cylinderGeometry attach="geometry" args={[props.radius, props.radius, props.height]}/>
        <meshStandardMaterial color={props.color}/>
    </mesh>)
}

function Cone(props) {
    const mesh = useRef(null)
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)

    // useFrame((state, delta) => (mesh.current.rotation.z += 0.1));

    const [color, setColor] = useState(props.color);
    return (<mesh
        position={props.position}
        onPointerOver={() => setColor(props.color)}
        onPointerOut={() => setColor('blue')}
        // radialSegments={props.radialSegments}
    >
        <coneBufferGeometry
            scale={[0, 0, 0]}
            attach="geometry"
            args={[props.radius, props.height, props.radialSegments]}
        />
        <meshBasicMaterial
            attach="material"
            color={props.color}
            opacity={props.opacity}
            transparent={true}
        />
    </mesh>)
}

const Candle = ({navigation}) => {

    return (
            <Canvas>
                <ambientLight/>
                <pointLight position={[10, 10, 10]}/>
                <Cylinder position={[0, 0, 0]} color={'orange'} radius={0.4} height={3}/>
                {/*<OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />*/}
                <Cylinder position={[0, 1.25, 0]} color={'black'} radius={0.01} height={0.3}/>
                <Cone position={[0, 1.5, 0]} color={'red'} radius={0.1} height={0.3} radialSegments={15} opacity={0.75}/>
                <Cone position={[0, 1.5, 0]} color={'yellow'} radius={0.25} height={0.5} radialSegments={15} opacity={0.4}/>
            </Canvas>
    );
};
export default Candle;