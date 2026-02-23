import React, { memo } from "react";
import { words } from "../constants";
import Button from "../components/Button";
import HeroExperience from "../components/hero_models/HeroExperience";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.inOut",
      }
    );
  }, { scope: ".hero-text" });

  return (
    <section id="hero" className="relative min-h-screen pt-32">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="background" />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between px-5 md:px-20">
        {/* Left */}
        <header className="flex flex-col gap-7 max-w-xl">
          <div className="hero-text">
            <h1>
              Shaping
              <span className="slide">
                <span className="wrapper">
                  {words.map((word) => (
                    <span
                      key={word.text}
                      className="flex items-center md:gap-3 gap-1 pb-2"
                    >
                      <img
                        src={word.imgPath}
                        alt={word.text}
                        className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                      />
                      <span>{word.text}</span>
                    </span>
                  ))}
                </span>
              </span>
            </h1>

            <h1>Into Real Projects</h1>
            <h1>That Delivers Results</h1>
          </div>

          <p className="text-white-50 md:text-xl">
            Hi, I am Krishna — a developer from India with a passion to build things.
          </p>

          <Button
            className="md:w-80 md:h-16 w-60 h-12"
            id="Button"
            text="See My Work"
          />
        </header>

        {/* Right */}
        <div className="hero-3d-layout">
          <HeroExperience />
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);









// import React from 'react'

// import { words } from '../constants'
// import Button from '../components/Button'
// import HeroExperience from '../components/hero_models/HeroExperience'
// import gsap from "gsap"
// import { useGSAP } from '@gsap/react'
// import AnimatedCounter from '../components/AnimatedCounter'

// const Hero = () => {
//   useGSAP(() => {
//     gsap.fromTo('.hero-text h1', 
//       {
//         y:50,
//         opacity:0,
//       },
//       {
//         y:0,
//         opacity:1,
//         stagger:0.2,
//         duration:1,
//         ease:'power2.inOut'
//       }
//     )
//   } , { scope: '.hero-text' })
//   return (
//     <section id='hero' className='relative min-h-screen pt-32'>
//       <div className='absolute top-0 left-0 z-10'>
//         <img src='/images/bg.png' alt='background' />
//       </div>

//       <div>
//         <div>
//           {/* Left */}
//           <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
//             <div className='flex flex-col gap-7'>
//               <div className='hero-text'>
//                 <h1>
//                   Shaping
//                   <span className='slide'>
//                     <span className='wrapper'>
//                       {words.map((word) => (
//                         <span
//                           key={word.text}
//                           className='flex items-center md:gap-3 gap-1 pb-2'
//                         >
//                           <img
//                             src={word.imgPath}
//                             alt={word.text}
//                             className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50'
//                           />
//                           <span>{word.text}</span>
//                         </span>
//                       ))}
//                     </span>
//                   </span>
//                 </h1>
                

//                 <h1>Into Real Projects</h1>
//                 <h1>That Delivers Results</h1>
//               </div>
//             <p className='text-white-50 md:text-xl relative z-10 pointer-events-none' >
//                     Hi , I Am Krishna A Developer From India With A Passion To Build Things
//             </p>
//             <Button className="md:w-80 md:h-16 w-60 h-12" id="Button" text="See My Work"/>
//             </div>
//           </header>

//           {/* Right */}
//           <figure>
//             <div className='hero-3d-layout'>
//               <HeroExperience/>
//             </div>
//           </figure>
//         </div>
       
//       </div>
     

//     </section>
  
//   )
// }

// export default Hero










// import React from 'react'
// const words = [
//     { text:'Ideas' , imgPath: '/images/ideas.svg' } , 
//     { text:'Concepts' , imgPath: '/images/concepts.svg' } , 

// ]

// const Hero = () => {
//   return (
//     <section id='hero' className='relative overflow-hidden' >
//         <div className='absolute top-0 left-0 z-10'>
//             <img src='/images/bg.png' alt='background' />
//         </div>
//         <div>
//         <div>
//             {/*Left*/}
//             <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
//                 <div className='flex flex-col gap-7'>
//                     <div className='hero-text'>
//                         <h1>
//                             Shaping 
//                             <span className='slide'>
//                                 <span className='wrapper'>
//                                     {words.map((word) => (
//                                         <span key={word.text} className='flex items-centre md:gap-3 gap-1 pb-2'> 
//                                         <img 
//                                             src={word.imgPath}
//                                             alt={word.text}
//                                             className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50'
//                                         />
//                                         <span>{word.text}</span>

//                                     ))}

//                                 </span>
//                             </span>
//                         </h1>
//                         <h1>Into Real Projects</h1>
//                         <h1>That Delivers Results</h1>
//                     </div>

//                 </div>
 
//             </header>

//             {/*Right*/}
//         </div>
//         </div>

//     </section>
//    )
// }

// export default Hero