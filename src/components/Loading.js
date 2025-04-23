import * as THREE from 'three'
import { useRef, useState } from 'react'
import { useProgress, Text } from "@react-three/drei"
import { useThree, useFrame } from '@react-three/fiber'
import { useXR } from '@react-three/xr'

function Loading(props) {
    const { progress, total } = useProgress()
    const { camera } = useThree()    

    const ref = useRef()
    useFrame(() => {
            const dist = 150;
            let cwd = new THREE.Vector3();
            
            camera.getWorldDirection(cwd);
            cwd.multiplyScalar(dist);
            cwd.add(camera.position);
            ref.current.position.set(cwd.x, cwd.y, cwd.z);
            ref.current.setRotationFromQuaternion(camera.quaternion);
        }
    )
    
    return (
        
        <Text
            ref={ref}
            color={'#000000'}
            fontSize={10}
            maxWidth={70}
            lineHeight={1}
            letterSpacing={0.02}
            textAlign={'center'}
            font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
            anchorX="center"
            anchorY="middle"
            outlineWidth={1}
            outlineColor="#ffffff"
        >
            CARREGANDO {total}{props.total?" de "+props.total:""}
        </Text>
        
    );
}

export default Loading;