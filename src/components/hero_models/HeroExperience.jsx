import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Room } from "./Room";
import HeroLights from "./HeroLights";
import { OrbitControls } from "@react-three/drei";

const HeroExperience = () => {
  return (
    <Canvas
      camera={{ position: [0, 2, 10], fov: 50 }}
      shadows                 // Enable real shadows
      dpr={[1, 2]}             // High resolution rendering
      gl={{
        antialias: true,       // Smooth edges
        alpha: true,
        powerPreference: "high-performance",
      }}
    >
      {/* Enable physically correct lighting */}
      <color attach="background" args={["#000000"]} />

      {/* Stronger base lighting */}
      <ambientLight intensity={0.7} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <OrbitControls
        enablePan={false} // Prevents panning of the scene
        enableZoom={true} // Disables zoom on tablets
        maxDistance={20} // Maximum distance for zooming out
        minDistance={5} // Minimum distance for zooming in
        minPolarAngle={Math.PI / 5} // Minimum angle for vertical rotation
        maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
        enableDamping={false}

      /> 

      <Suspense fallback={null}>
        <HeroLights />
        <group
          scale={1}
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Room />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;








// import { Canvas } from "@react-three/fiber";
// import { Suspense, useMemo } from "react";
// import { Room } from "./Room";
// import HeroLights from "./HeroLights";
// if (import.meta.hot) {
//   import.meta.hot.accept(() => {
//     window.location.reload();
//   });
// }

// const HeroExperience = () => {
//   const canvasScene = useMemo(() => {
//     return (
//       <Canvas
//         key="main canvas"
//         camera={{ position: [0, 2, 10], fov: 50 }}
//         dpr={1}
//         frameloop="demand"
//         gl={{ antialias: false }}
//       >
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[5, 5, 5]} intensity={1} />

//         <Suspense fallback={null}>
//           <HeroLights />
//           <group
//             scale={1}
//             position={[0, -3.5, 0]}
//             rotation={[0, -Math.PI / 4, 0]}
//           >
//             <Room />
//           </group>
//         </Suspense>
//       </Canvas>
//     );
//   }, []);

//   return canvasScene;
// };

// export default HeroExperience;









// import { OrbitControls } from "@react-three/drei";
// import { Canvas } from "@react-three/fiber";
// import { useMediaQuery } from "react-responsive";

// import { Room } from "./Room";
// import HeroLights from "./HeroLights";
// // import Particles from "./Particles";
// import { Suspense } from "react";
// import { useMemo } from "react";

// const HeroExperience = () => {

//   const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
//   const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

//   return (
//     <Canvas camera={{ position: [0, 0, 15], fov: 45 }}  dpr={[1, 1.5]} frameloop="demand"  gl={{ antialias: false }} >
//       {/* deep blue ambient */}
//       <ambientLight intensity={0.2} color="#1a1a40" />
//       <directionalLight position={[5,5,5]} intensity={2} />
//       {/* Configure OrbitControls to disable panning and control zoom based on device type */}
//       {/* <OrbitControls
//         enablePan={false} // Prevents panning of the scene
//         enableZoom={!isTablet} // Disables zoom on tablets
//         maxDistance={20} // Maximum distance for zooming out
//         minDistance={5} // Minimum distance for zooming in
//         minPolarAngle={Math.PI / 5} // Minimum angle for vertical rotation
//         maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
//         enableDamping={false}

//       /> */}

//       <Suspense fallback={null}>
//         <HeroLights />
//         {/* <Particles count={20} /> */}
//         <group
//           scale={isMobile ? 0.7 : 1}
//           position={[0, -3.5, 0]}
//           rotation={[0, -Math.PI / 4, 0]}
//         >
//           <Room />
//         </group>
//        </Suspense> 
//     </Canvas>
//   );
// };

// export default HeroExperience;









// import { Canvas } from '@react-three/fiber'
// import React from 'react'

// const HeroExperience = () => {
//   return (
//     <Canvas>

//     </Canvas>
//   )
// }

// export default HeroExperience