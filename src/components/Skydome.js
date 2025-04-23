import * as THREE from 'three'
import React, { useRef } from 'react'
import { useLoader } from '@react-three/fiber'
import { Interactive } from '@react-three/xr'
import { Image } from '@react-three/drei'

function Skydome(props) {

    const refSkyL = useRef()
    const refSkyR = useRef()
    const imgRefB = props.gates.map((itm, idx) => {
      return useRef()
    })
  
    const imgRefW = props.gates.map((itm, idx) => {
      return useRef()
    })

  
    //const textureL = useLoader(THREE.TextureLoader, `/stereoscopic/${props.imgname}-left.jpg`);
    const textureL = props.imgL;
    //textureL.minFilter = THREE.NearestFilter;
    //textureL.generateMipmaps = false;
    
  
    //const textureR = useLoader(THREE.TextureLoader, `/stereoscopic/${props.imgname}-right.jpg`);
    const textureR = props.imgR;
    //textureR.minFilter = THREE.NearestFilter;
    //textureR.generateMipmaps = false;
  
    //const textureSignB = useLoader(THREE.TextureLoader, `/arrow-black.png`);
    //const textureSignW = useLoader(THREE.TextureLoader, `/arrow-white.png`);
    const textureSignB = props.arrB;
    const textureSignW = props.arrW;
  

    const radius = 4
  
    const changeScene = (sc) => {
      //if(props.visible) {
        props.setScene(sc);
      //}
    }
  
  
    const changeTB = (idx) => {
      if(imgRefB[idx].current) {
        imgRefB[idx].current.visible = true; 
        imgRefW[idx].current.visible = false;
      }
    }
  
    const changeTW = (idx) => {
      if(imgRefB[idx].current) {
        imgRefB[idx].current.visible = false; 
        imgRefW[idx].current.visible = true;
      }
    }
  
  
    return (
      <group  {...props}>
        
        
        {
          props.gates.map((itm, idx) => {
            const x = radius * Math.sin( THREE.MathUtils.degToRad( itm.angle ) );
            const y = -2.5; //radius * Math.sin( THREE.MathUtils.degToRad( theta ) );
            const z = radius * Math.cos( THREE.MathUtils.degToRad( itm.angle ) );
  
            
            return (
              <Interactive key={idx}
                onSelect={() => { changeScene(itm.scene)}}
                onHover={() => {changeTW(idx)}}
                onBlur={() => {changeTB(idx)}}>
                <Image ref={imgRefB[idx]}
                  onClick={() => { changeScene(itm.scene)}}
                  onPointerOver={() => {changeTW(idx)}}
                  onPointerOut={() => {changeTB(idx)}}
                  visible={true}
                  rotation={
                    [ 270 * Math.sin( THREE.MathUtils.degToRad( 1 ) ),
                      0,
                      itm.angle * Math.sin( THREE.MathUtils.degToRad( 1 ))
                    ]} 
                  scale={
                    [1,1,1]
                  } 
                  position={[x, y, z]} 
                  texture={textureSignB} 
                  transparent opacity={0.5} />
                <Image ref={imgRefW[idx]}
                  onClick={() => { changeScene(itm.scene)}}
                  visible={false}
                  rotation={
                    [ 270 * Math.sin( THREE.MathUtils.degToRad( 1 ) ),
                      0,
                      itm.angle * Math.sin( THREE.MathUtils.degToRad( 1 ))
                    ]} 
                  scale={
                    [1,1,1]
                  } 
                  position={[x, y, z]} 
                  texture={textureSignW} 
                  transparent opacity={1} />
              </Interactive>
            )
  
          })
        }
  
  
        <mesh ref={refSkyL} layers={[1]}>
          <sphereBufferGeometry attach="geometry" args={[500, 80, 80]} />
          <meshStandardMaterial toneMapped={false} attach="material" map={textureL} side={THREE.BackSide} />
        </mesh>
        <mesh ref={refSkyR} layers={[0,2]}>
          <sphereBufferGeometry attach="geometry" args={[500, 80, 80]} />
          <meshStandardMaterial toneMapped={false} attach="material" map={textureR} side={THREE.BackSide} />
        </mesh>
      </group>
    )
  }

export default Skydome;