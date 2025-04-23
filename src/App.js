import * as THREE from 'three'
import React, { Suspense, useRef, useState, useEffect } from 'react'
import { extend, useFrame, useThree, useLoader } from '@react-three/fiber'
import { VRCanvas, DefaultXRControllers, useXR } from '@react-three/xr'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

import { react_umami } from 'react-umami';

import './styles.css'
import conf from "./conf.json"

import Skydome from "./components/Skydome.js"
import Loading from "./components/Loading.js"


extend({ OrbitControls })

/*const tracker = new react_umami(
  "20eaaad8-b3a4-432d-ae9e-a438eac3150c",
  "sobradofs.cloud.ffurst.com",
  "https://umami.cloud.ffurst.com/umami.js"
);*/

THREE.Cache.enabled = true;

function Controls(props) {
  const { camera, gl } = useThree()
  const ref = useRef()
  useFrame(() => ref.current.update())
  return <orbitControls ref={ref} target={[0, 0, 0]} {...props} args={[camera, gl.domElement]} />
}

function CenaGrupo() {
  const { isPresenting } = useXR()
  const [scene, setScene] = useState(conf.start);

  
  useEffect(() => {
    // Update the document title using the browser API
    //tracker.trackView(`/${scene}`);    
    //tracker.trackEvent("VR", `${isPresenting}`, `/${scene}`);
    
  });


  conf.scenes = conf.scenes.map((sc, idx) => {
    sc.textureL = useLoader(THREE.TextureLoader, `stereoscopic/${sc.imgname}-left.jpg`);
    sc.textureL.generateMipmaps = false;
    sc.textureR = useLoader(THREE.TextureLoader, `stereoscopic/${sc.imgname}-right.jpg`);
    sc.textureR.generateMipmaps = false;

    return sc;
  });

  const arrBlk = useLoader(THREE.TextureLoader, `arrow-black.png`);
  const arrWht = useLoader(THREE.TextureLoader, `arrow-white.png`);


  return (
    <group>
      {
        conf.scenes.map((sc, idx) => {
          if(sc.nome === scene)
            return <Skydome key={idx} visible={sc.nome === scene} arrB={arrBlk} arrW={arrWht} imgL={sc.textureL} imgR={sc.textureR} imgname={sc.imgname} gates={sc.paths} setScene={setScene} />
          else
            null
        })
      }
    </group>
  );
}

function App() {

    const { isPresenting } = useXR()

    useEffect(() => {
      // Update the document title using the browser API
      //tracker.trackView("/");
    });

    return (
    <VRCanvas linear={true} camera={{ position: [0, 0, 0.1] }}>

      <ambientLight intensity={0.1} />
      <pointLight position={[0, 100, 0]} />
      
      {(!isPresenting)?<Controls enableZoom={false} enablePan={false} enableDamping dampingFactor={0.2} />:<mesh/> }
      
      {/*<Hands/>*/}

      <DefaultXRControllers />

      <Suspense fallback={<Loading total={(conf.scenes.length*2)+2}/>}>
      
        <CenaGrupo />   

      </Suspense>
    </VRCanvas>
  )
}

export default App;
