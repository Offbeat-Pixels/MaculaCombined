
//@green 1st scroll up desgin

// import { gtmImg, genAiImg, salesImg } from "../assets";
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const challengesContent = [
//   {
//     title: "Decades of Experience",
//     description:
//       "Our advisors have decades of Experience helping startup succeed.",
//     src: gtmImg,
//   },

//   {
//     title: "Proven Success Stories",
//     description: "We have helped numerous startups reach Series a funding ",
//     src: genAiImg,
//   },
//   {
//     title: "Alex R, Startup CEO ",
//     description:
//       "Macula Consultants helped us turn our vision into reality. Their insights were invaluable.",
//     src: salesImg,
//   },
// ];

// export default function StickyScrollRevealDemo() {
//   const imagesRef = useRef([]);

//   useEffect(() => {
//     gsap.to(".scroll-container", {
//       y: -1400,
//       opacity: 1,
//       stagger: 0.2, 
//       scrollTrigger: {
//         trigger: ".ServiceSection",
//         start: "top 0%",
//         end: "bottom 10%",
//         pin: ".ServiceSection",
//         pinSpacing:true,
//         scrub: 0.8,
//         invalidateOnRefresh: true, // Fixes layout shifts on resize
//         toggleActions: "play none none reset", // Unpin when scrolling back up
//         toggleClass: "active",
//         markers: true,
//       },
//     });
//    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

//   }, []);

//   return (
//     <section className="ServiceSection relative overflow-hidden bg-[#ffffff] h-[120vh] flex flex-col items-center justify-start py-20">
//       {/* Fixed Header */}
//       <div className=" mt-20  ">
//         <p className="text-6xl md:text-[5.5rem] font-extrabold uppercase ">
//           We Understand <span className="text-[#286090]">Your Challenges</span>
//         </p>
//         <p className="text-5xl md:text-[2.4rem] w-[70%] p-4 ">
//           Navigating growth is though- we're here to help.
//         </p>
//       </div>

//       {/* Scrolling Images */}
//       <div className="scroll-container  ml-auto flex flex-col items-end gap-10 z-10 mt-[10vh]">
//         {challengesContent.map((item, id) => (
//           <div
//             key={id}
//             // ref={(el) => (imagesRef.current[id] = el)}
//             // ref={imagesRef}
//             className="relative group w-[40rem] h-[50vh] overflow-hidden rounded-lg"
//           >
//             <img
//               src={item.src}
//               alt={item.title}
//               loading="lazy"
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute inset-0  items-center justify-center opacity-100 group-hover:opacity-100 transition-opacity duration-300">
//               <p className="text-white font-bold text-3xl text-center mt-40 p-4">{item.title}</p>
//               <p className="text-white text-3xl text-center p-4">{item.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

//@green 2nd split page desgin

// import { gtmImg, genAiImg, salesImg } from "../assets";
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const challengesContent = [
//   {
//     title: "Decades of Experience",
//     description:
//       "Our advisors have decades of Experience helping startup succeed.",
//     src: gtmImg,
//   },
  
//   {
//     title: "Proven Success Stories",
//     description: "We have helped numerous startups reach Series a funding ",
//     src: genAiImg,
//   },
//   {
//     title: "Alex R, Startup CEO ",
//     description:
//       "Macula Consultants helped us turn our vision into reality. Their insights were invaluable.",
//     src: salesImg,
//   },
// ];

// export default function StickyScrollRevealDemo() {
//   const imagesRef = useRef([]);

//   useEffect(() => {
    // gsap.to(".scroll-container", {
    //   y: -1400,
    //   opacity: 1,
    //   stagger: 0.2,
    //   scrollTrigger: {
    //     trigger: ".ServiceSection",
    //     start: "top 0%",
    //     end: "bottom 10%",
    //     pin: ".ServiceSection",
    //     pinSpacing: true,
    //     scrub: 0.8,
    //     invalidateOnRefresh: true, // Fixes layout shifts on resize
    //     toggleActions: "play none none reset", // Unpin when scrolling back up
    //     toggleClass: "active",
    //     markers: true,
    //   },
    // });
//     return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//   }, []);

//   return (
//     <section className="ServiceSection relative overflow-hidden bg-white h-[120vh] flex">
//       {/* Left Side - Black */}
//       <div className="absolute top-0 left-0 w-1/2 h-full bg-black" />

//       {/* Right Side - White */}
//       {/* <div className="absolute top-0 right-0 w-1/2 h-full bg-white" /> */}

//       {/* ChallengesContent Wrapper */}
//       <div className="relative flex flex-col items-center justify-start w-full py-20 z-10">
//         {/* Fixed Header */}
//         <div className="mt-20 px-16 w-full">
//           <p className="text-6xl md:text-[5.3rem] font-extrabold uppercase text-white">
//             We Understand{" "}
//             <span className="text-[#286090]">Your Challenges</span>
//           </p>
//           <p className="text-5xl md:text-[2rem] p-4 text-white">
//             Navigating growth is tough – we're here to help.
//           </p>
//         </div>

//         {/* Scrolling Images */}
//         <div className="scroll-container bg-white  ml-auto flex flex-col items-end gap-10 z-10 mt-[10vh]">
//           {challengesContent.map((item, id) => (
//             <div
//               key={id}
//               className="relative group w-[54.5rem] h-[60vh] overflow-hidden rounded-lg"
//             >
//               <img
//                 src={item.src}
//                 alt={item.title}
//                 loading="lazy"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center opacity-100 group-hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-white font-bold text-3xl text-center mt-40 p-4">
//                   {item.title}
//                 </p>
//                 <p className="text-white text-3xl text-center p-4">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


//@green 3rd scroll X desgin

// import { gtmImg, genAiImg, salesImg } from "../assets";
// import React, {  useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);

// const challengesContent = [
//   {
//     title: "Decades of Experience",
//     description:
//       "Our advisors have decades of Experience helping startup succeed.",
//     src: gtmImg,
//   },

//   {
//     title: "Proven Success Stories",
//     description: "We have helped numerous startups reach Series a funding ",
//     src: genAiImg,
//   },
//   {
//     title: "Alex R, Startup CEO ",
//     description:
//       "Macula Consultants helped us turn our vision into reality. Their insights were invaluable.",
//     src: salesImg,
//   },
// ];

// export default function StickyScrollRevealDemo() { 

//   useGSAP(() => {
//     const tl =gsap.timeline({

//     })
//     gsap.fromTo(
//       ".scroll-container",
//       {
//         x: 1000,
//         autoAlpha: 0,
//       },
//       {
//         x: 0,
//         autoAlpha: 1,
//         stagger: 1,
//         scrollTrigger: {
//           trigger: ".ServiceSection",
//           start: "top 0%",
//           end: "bottom 10%",
//           pin: ".ServiceSection",
//           pinSpacing: true,
//           scrub: 2,
//           invalidateOnRefresh: true, 
//           toggleActions: "play none none reset", 
//           toggleClass: "active",
//           markers: true,
//         },
//       }
//     );

//     return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//   }, []);

//   return (
//     <section className="ServiceSection relative overflow-hidden bg-white h-[120vh] flex"> 
 

//       {/* ChallengesContent Wrapper */}
//       <div className="relative flex flex-col items-center justify-start w-full py-20 z-10">
//         {/* Fixed Header */}
//         <div className="mt-20 px-16 w-full">
//           <p className="text-6xl md:text-[5.3rem] font-extrabold uppercase text-black">
//             We Understand{" "}
//             <span className="toBeScale text-[#286090] mt-40">Your Challenges</span>
//           </p>
//           <p className="text-5xl md:text-[2rem] p-4 text-black">
//             Navigating growth is tough – we're here to help.
//           </p>
//         </div>

//         {/* Scrolling Images */}
//         <div className="scroll-container bg-white   flex   items-end gap-10 z-10 mt-[10vh]">
//           {challengesContent.map((item, id) => (
//             <div
//               key={id}
//               className="relative group w-1/2 h-full overflow-hidden rounded-lg"
//             >
//               <img
//                 src={item.src}
//                 alt={item.title}
//                 loading="lazy"
//                 className="w-full h-full object-cover"
//               />
//               <div className="absolute inset-0 flex flex-col items-center justify-center opacity-100 group-hover:opacity-100 transition-opacity duration-300">
//                 <p className="text-white font-bold text-3xl text-center mt-40 p-4">
//                   {item.title}
//                 </p>
//                 <p className="text-white text-3xl text-center p-4">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }



//@green 4th desgin

// import { gtmImg, genAiImg, salesImg, curvedText } from "../assets";
// import React, {  useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// const challengesContent = [
//   {
//     title: "Decades of Experience",
//     description:
//       "Our advisors have decades of Experience helping startup succeed.",
//     src: gtmImg,
//   },

//   {
//     title: "Proven Success Stories",
//     description: "We have helped numerous startups reach Series a funding ",
//     src: genAiImg,
//   },
//   {
//     title: "Alex R, Startup CEO ",
//     description:
//       "Macula Consultants helped us turn our vision into reality. Their insights were invaluable.",
//     src: salesImg,
//   },
// ];

// gsap.registerPlugin(ScrollTrigger);

// export default function StickyScrollRevealDemo() {
//   useGSAP(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".ServiceSection",
//         start: "top 0%",
//         end: "bottom 10%",
//         pin: ".ServiceSection",
//         pinSpacing: true,
//         scrub: 1,
//         invalidateOnRefresh: true,
//         toggleActions: "play none none reset",
//         toggleClass: "active",
//         markers: true, // Remove in production
//       },
//     });
//     tl.fromTo(
//       ".scroll-container",
//       {  autoAlpha: 0 },
//       {  autoAlpha: 1, duration: 0.5, ease: "power2.out", stagger: 0.1 }
//     );

//     return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//   }, []);

//   return (
//     <section className="ServiceSection relative flex bg-white  ">
//       <div className="relative max-h-screen w-screen">
//         <section className="bg-yellow-50 overflow-hidden">
//           <div className="flex flex-col lg:flex-row-reverse lg:items-stretch lg:min-h-[800px]">
//             <div className="relative flex items-center justify-center w-full lg:order-2 lg:w-1/2">
//               <div className="absolute bottom-0 right-0 hidden lg:block">
//                 <img
//                   className="object-contain w-auto h-48"
//                   src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/curved-lines.png"
//                   alt=""
//                 />
//               </div>

//               <div className="relative px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-18 lg:py-24 lg:text-left">
//                 <h3 className="text-4xl font-bold text-black sm:text-6xl xl:text-8xl">
//                   We Understand{" "}
//                   <span className="toBeScal text-[#286090] ">
//                     Your Challenges
//                   </span>
//                 </h3>
//                 <p className="mt-8 text-xl text-black">
//                   Navigating growth is tough – we're here to help.
//                 </p>
//               </div>

//               <div className="absolute right-0 -bottom-16 lg:top-20 lg:left-7/12  translate-x-70 ">
//                 <img
//                   className="w-32 h-32 md:w-40 md:h-40"
//                   src={curvedText}
//                   alt="Macula Consultant text"
//                 />
//               </div>
//             </div>

//             <div className="relative w-full lg:order-1 h-96 lg:h-auto lg:w-1/2 overflow-hidden">
//               <div className=" absolute inset-0 w-full h-full">
//                 {challengesContent.map((item, id) => (
//                   <div key={id} className="relative  group w-full h-full">
//                     <img
//                       src={item.src}
//                       alt={item.title}
//                       loading="lazy"
//                       className="scroll-container w-full h-full object-cover"
//                     />
//                     {/* Gradient Overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

//                     {/* Bottom Left Stats */}
//                     <div className="absolute bottom-0 left-0">
//                       <div className="p-4 sm:p-6 lg:p-8">
//                         <div className="flex items-center">
//                           <svg
//                             className="w-10 h-10 text-orange-500"
//                             xmlns="http://www.w3.org/2000/svg"
//                             viewBox="0 0 20 20"
//                             fill="currentColor"
//                           >
//                             <path
//                               fillRule="evenodd"
//                               d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
//                               clipRule="evenodd"
//                             />
//                           </svg>
//                           <h2 className="font-bold text-white text-6xl ml-2.5">
//                             {item.title}
//                           </h2>
//                         </div>
//                         <p className="max-w-fit mt-10 text-xl text-white">
//                           {item.description}
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </section>
//   );
// }




//@green 5th desgin

// import { gtmImg, genAiImg, salesImg, curvedText, } from "../assets";
// import  { useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";

// const challengesContent = [
//   {
//     title: "Decades of Experience",
//     description:
//       "Our advisors have decades of Experience helping startup succeed.",
//     src: gtmImg,
//   },

//   {
//     title: "Proven Success Stories",
//     description: "We have helped numerous startups reach Series a funding ",
//     src: genAiImg,
//   },
//   {
//     title: "Alex R, Startup CEO ",
//     description:
//       "Macula Consultants helped us turn our vision into reality. Their insights were invaluable.",
//     src: salesImg,
//   },
// ];

// gsap.registerPlugin(ScrollTrigger);

// export default function Challenges() {
//   const containerRef = useRef(null);
//   const imagesRef = useRef([]);

//   useGSAP(() => {
//     gsap.set(".image-panel", {
//       zIndex: (i, target, targets) => targets.length - i, // Stack images correctly
//     });

//     gsap.to(".image-panel:not(:last-child)", {
//       yPercent: -100,
//       ease: "none",
//       stagger: 0.5,
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: "+=300%",
//         scrub: true,
//         pin: true,
//       },
//     });

//     return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//   }, []);

//   return (
//     <section
//       ref={containerRef}
//       className="ServiceSection mb-72 h-screen relative flex bg-white  "
//     >
//       <div className="relative  w-screen">
//         <section className="bg-yellow-50 overflow-hidden">
//           <div className="flex flex-col lg:flex-row-reverse lg:items-stretch lg:min-h-[800px]">
//             <div className="relative flex items-center justify-center w-full lg:order-2 lg:w-1/2">
//               <div className="absolute bottom-0 right-0 hidden lg:block">
//                 <img
//                   className="object-contain w-auto h-48"
//                   src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/curved-lines.png"
//                   alt=""
//                 />
//               </div>

//               <div className="relative px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-18 lg:py-24 lg:text-left">
//                 <h3 className="text-4xl font-bold text-black sm:text-6xl xl:text-8xl">
//                   We Understand{" "}
//                   <span className="toBeScal text-[#286090] ">
//                     Your Challenges
//                   </span>{" "}
//                   split page below will be proven Success Stories &Decades of
//                   Experience with img
//                 </h3>
//                 <p className="mt-8 ml-5 text-xl text-black">
//                   Navigating growth is tough – we are here to help.
//                 </p>
//               </div>

//               <div className="absolute right-0 z-10 -bottom-16 lg:top-20 lg:left-7/12  translate-x-70 ">
//                 <img
//                   className="w-32 h-32 md:w-40 md:h-40"
//                   src={curvedText}
//                   alt="Macula Consultant text"
//                 />
//               </div>
//             </div>
            
            // <div className="relative w-full lg:order-1 h-96 lg:h-auto lg:w-1/2 overflow-hidden">
            //   <div className=" absolute inset-0 w-full h-full">
            //     {challengesContent.map((item, index) => (
            //       <div
            //         key={index}
            //         ref={(el) => (imagesRef.current[index] = el)}
            //         className={`image-panel absolute inset-1 flex items-center justify-center`}
            //       >
            //         <img
            //           src={item.src}
            //           alt={item.title}
            //           className="w-full h-full object-cover"
            //         />
            //         <div className="absolute  bg-gradient-to-t from-black via-transparent to-transparent" />
            //         <div className="absolute bottom-10 left-6 text-white">
            //           <h2 className="text-4xl font-bold">{item.title}</h2>
            //           <p className="text-xl mt-2">{item.description}</p>
            //         </div>
            //       </div>
            //     ))}
            //   </div>
            // </div>
            
//           </div>
//         </section>
//       </div>
//     </section>
//   );
// }


//@green 6th desgin

// import { gtmImg, genAiImg, salesImg } from "../assets";
// import { useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";
// import { GrowthCard, TestimonialCard } from "../components/index";

// gsap.registerPlugin(ScrollTrigger);

// const challengesContent = [
//   {
//     title: "Decades of Experience",
//     description:
//       "Our advisors have decades of experience helping startups succeed.",
//     src: gtmImg,
//   },
//   {
//     title: "Proven Success Stories",
//     description: "We have helped numerous startups reach Series A funding.",
//     src: genAiImg,
//   },
//   {
//     title: "Alex R, Startup CEO",
//     description:
//       "Macula Consultants helped us turn our vision into reality. Their insights were invaluable.",
//     src: salesImg,
//   },
// ];

// export default function Challenges() {
//   const containerRef = useRef(null);
//   const imagesRef = useRef([]);

//   useGSAP(() => {
//     gsap.set(".image-panel", {
//       zIndex: (i, target, targets) => targets.length - i,
//     });

//     gsap.to(".image-panel:not(:last-child)", {
//       yPercent: -100,
//       ease: "none",
//       stagger: 0.5,
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: "+=300%",
//         scrub: true,
//         pin: true,
//       },
//     });

    // gsap.from(".text-fade", {
    //   opacity: 0,
    //   y: 50,
    //   duration: 1.5,
    //   stagger: 0.3,
    //   scrollTrigger: {
    //     trigger: containerRef.current,
    //     start: "top 80%",
    //   },
    // });

//     return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//   }, []);

//   return (
//     <div ref={containerRef} className="min-h-screen flex bg-yellow-50"> 
       
//           {/* Left Section */}
//           <section className="w-1/2">
//             <h3 className="text-4xl font-bold text-center text-black sm:text-6xl 3xl:text-8xl text-fade">
//               We Understand{" "}
//               <p className="toBeScal text-[#286090]">Your Challenges</p>
//             </h3>
//             <p className="my-8 ml-5 text-xl text-center text-black text-fade">
//               Navigating growth is tough – we are here to help.
//             </p>
            // <div className="grid sm:grid-cols-2 gap-6">
            //   {challengesContent.map((item, index) => (
            //     <TestimonialCard
            //       key={index}
            //       name={item.title}
            //       company={item.description}
            //       quote=""
            //       imageSrc={item.src}
            //       className="text-fade"
            //     />
            //   ))}
            // </div>
//           </section>
//           {/* Right Section */}
//           <section className="bg-gray-400 text-center w-1/2 p-8 rounded-lg text-fade">
            // <h2 className="text-4xl font-bold mb-4">
            //   Unlock Your Growth Potential
            // </h2>
            // <p className="text-gray-600 mb-8">
            //   Our experts guide you from seed funding to serious growth.
            // </p>
            // <div ref={imagesRef} className="space-y-6 image-panel">
            //   <GrowthCard
            //     imageSrc={gtmImg}
            //     description="Achieve growth with expert guidance from seasoned advisors"
            //   />
            //   <GrowthCard
            //     imageSrc={genAiImg}
            //     description="Transform your business with proven growth strategies"
            //   />
            //   <GrowthCard
            //     imageSrc={salesImg}
            //     description="Scale your operations with confidence and expertise"
            //   />
            // </div>
//           </section>
        
      
//     </div>
//   );
// }




//@green 7th desgin

import { gtmImg, genAiImg, salesImg, curvedText } from "../assets";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { GrowthCard, TestimonialCard } from "../components/index";

const challengesContent = [
  {
    title: "Decades of Experience",
    description:
      "Our advisors have decades of Experience helping startup succeed.",
    src: gtmImg,
  },

  {
    title: "Proven Success Stories",
    description: "We have helped numerous startups reach Series a funding ",
    src: genAiImg,
  },
  {
    title: "Alex R, Startup CEO ",
    description:
      "Macula Consultants helped us turn our vision into reality. Their insights were invaluable.",
    src: salesImg,
  },
];

gsap.registerPlugin(ScrollTrigger);

export default function Challenges() {
  const containerRef = useRef(null); 
  const imagesRef = useRef([]);
  useGSAP(() => {
    gsap.set(".image-panel", {
      zIndex: (i, target, targets) => targets.length - i, // Stack images correctly
    });

    gsap.to(".image-panel:not(:last-child)", {
      yPercent: -200,
      ease: "none",
      stagger: 0.5,
      // autoAlpha:0,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=350%",
        scrub: 1,
        pin: true,
      },
    });

    gsap.from(".text-fade", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      stagger: 0.3,
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 20%",
      },
    });
 


    return () => ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  }, []);

  return (
    <section
      ref={containerRef}
      className="ServiceSection pb-72 h-screen relative flex bg-white  "
    >
      <div className="relative   w-screen">
        <section className="bg-yellow-50 overflow-hidden">
          <div className="flex flex-col lg:flex-row-reverse lg:items-stretch lg:min-h-[800px]">
            <div className="relative flex items-center justify-center w-full lg:order-2 lg:w-[60%]">
              <div className="absolute bottom-0 right-0 hidden lg:block">
                <img
                  className="object-contain w-auto h-48"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/hero/3/curved-lines.png"
                  alt=""
                />
              </div>

              <div className="relative px-4 pt-24 pb-16 text-center sm:px-6 md:px-24 2xl:px-18 lg:py-24   text-fade">
                <h3 className="text-4xl font-bold text-black sm:text-6xl 3xl:text-8xl">
                  We Understand{" "}
                  <p className="toBeScal text-[#286090] ">Your Challenges</p>{" "}
                </h3>
                <p className="my-8 ml-5 text-xl text-black">
                  Navigating growth is tough – we are here to help.
                </p>
                <div className="grid sm:grid-cols-3  gap-20">
                  {challengesContent.map((item, index) => (
                    <TestimonialCard
                      key={index}
                      name={item.title}
                      company={item.description}
                      quote=""
                      imageSrc={item.src}
                      className="text-fade"
                    />
                  ))}
                </div>
               
              </div>
            </div>

            <div className="relative text-center  text-black bg-[#e9e9e9] w-full lg:order-1 h-96 lg:h-auto lg:w-[40%] overflow-hidden">
              <h2 className="text-4xl font-bold my-4 pt-10">
                Unlock Your Growth Potential
              </h2>
              <p className=" mb-8">
                Our experts guide you from seed funding to serious growth.
              </p>

              <div className=" absolute inset-0 top-52 mx-auto w-[40rem] h-[80%]">
                {challengesContent.map((item, index) => (
                  <div
                    key={index}
                    ref={(el) => (imagesRef.current[index] = el)}
                    className={`image-panel absolute inset-1 h-[80%] bg-white items-center justify-center`}
                  >
                    <img
                      src={item.src}
                      alt={item.title}
                      className="w-full h-96 object-cover"
                    />

                    <div className=" bottom-10 left-6  text-black">
                      <h2 className="text-2xl font-bold">{item.title}</h2>
                      <p className="text-xl mt-2">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}


