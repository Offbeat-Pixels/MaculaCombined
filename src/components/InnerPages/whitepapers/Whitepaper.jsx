//@red 1st whitePapper design
// import React, { useState, useRef, useEffect } from "react";
// import { useLocation, useParams, Link } from "react-router-dom";
// import { styles } from "../../../style";
// import { Banner, WhitepapperData } from "../..";
// import { useInView } from "framer-motion";
// import { Transition } from "../../ui/Transition";
// import Markdown from "./Markdown";
// import WhitepaperCard from "./WhitePapperCard";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import useIsVisible from "../../Hooks/useIsVisible";
// import CustomCursor from "../../CustomCursor/CustomCursor";
// gsap.registerPlugin(ScrollTrigger);

// function Whitepaper() {
//   const [ref, isVisible] = useIsVisible({ threshold: 0.3 }); // Trigger when 30% is visible

//   useEffect(() => {
//     if (isVisible) {
//       gsap.fromTo(
//         ".whitepaper-card",
//         { x: 300, autoAlpha: 0 },
//         {
//           x: 0,
//           autoAlpha: 1,
//           ease: "power2.out",
//           stagger: 0.8,
//           duration: 1, // Controls animation duration
//         }
//       );
//     }
//   }, [isVisible]); // Re-run animation when visibility changes

//   return (
//     <section
//       ref={ref}
//       className="whitepaper-container bg-service-pattern bg-cover bg-[#E2E7E0] bg-no-repeat bg-center pb-20"
//     >
//       <h3 className="text-center p-5 text-3xl font-bold">White Papers</h3>
//       {/* <CustomCursor revealText="Secret Message!" /> */}
//       <div className="flex p-10 gap-3 bg-white/10 rounded-xl w-full mx-auto place-items-center">
//         {WhitepapperData.map((service) => (
//           <div key={service.id} className="relative">
//             <div className="relative group h-fit text-justify rounded-xl justify-between">
//               <Link to={`/whitepaperDetail/${service.category}`}>
//                 <div className="whitepaper-card">
//                   <WhitepaperCard service={service} />
//                 </div>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
// export default Transition(Whitepaper);

//@red 2nd whitePapper design
import React, { useState, useRef, useEffect } from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import { styles } from "../../../style";
import { Banner, WhitepapperData } from "../..";
import { useInView } from "framer-motion";
import { Transition } from "../../ui/Transition";
import Markdown from "./Markdown";
import WhitepaperCard from "./WhitePapperCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useIsVisible from "../../Hooks/useIsVisible";
import CustomCursor from "../../CustomCursor/CustomCursor";

import {
  slider1,
  slider2,
  slider3,
  slider4,
  slider5,
  slider6,
  slider7,
  slider8,
} from "../../../assets/index";
 

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    id: 1,
    src: slider1,
    text: "Strategic Support and Accountability",
    subtext: "Develop actionable strategies and ensure accountability.",
  },
  {
    id: 2,
    src: slider2,
    text: "Goal Setting and Monitoring",
    subtext: "Set clear goals and track progress effectively.",
  },
  {
    id: 3,
    src: slider3,
    text: "Risk Mitigation",
    subtext: "Minimize risks and prepare for challenges.",
  },
  {
    id: 4,
    src: slider4,
    text: "Effective Solutions",
    subtext: "Deliver efficient solutions for maximum ROI.",
  },
  {
    id: 5,
    src: slider5,
    text: "Training and Development",
    subtext: "Enhance workforce skills and growth.",
  },
  {
    id: 6,
    src: slider7,
    text: "Expertise and Specialized Knowledge",
    subtext: "Provide advanced expertise and address internal capability gaps.",
  },
  {
    id: 7,
    src: slider8,
    text: "Networking Opportunities",
    subtext: "Connect to networks for partnerships and growth.",
  },
];


function Whitepaper() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const slidesRef = useRef([]);

  useEffect(() => {
    slidesRef.current.forEach((slide, index) => {
      gsap.to(slide, {
        opacity: 1,
        x: 0, // Moves in from the side
        scrollTrigger: {
          trigger: slide,
          start: "top 80%",
          end: "top 30%",
          scrub: true,
          toggleActions: "play none none reverse",
        },
      });
    });

    // Pin the image so it stays fixed while text scrolls
    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 40%",
        end: "bottom 20%",
        pin: true, 
        scrub: 1,
      },
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="whitepaper-container min-h-screen bg-service-pattern bg-cover bg-[#E2E7E0] bg-no-repeat bg-center py-20"
    >
      <h3 className="text-center text-3xl font-bold mb-10">White Papers</h3>

      <div className="flex justify-center gap-10">
        {/* Fixed Image */}
        <div
          className="w-[35rem]  h-96 flex items-center"
          ref={imageRef}
        >
          <img
            src={slides[0].src} // Default image
            alt="Whitepaper"
            className="rounded-lg shadow-lg w-full h-full object-cover"
          />
        </div>

        {/* Scrolling Text Content */}
        <div className="flex flex-col gap-20">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              ref={(el) => (slidesRef.current[index] = el)}
              className="w-full flex flex-col gap-5 opacity-0"
            >
              {/* Heading */}
              <h2 className="text-2xl font-bold">{slide.text}</h2>

              {/* Subtext */}
              <p className="text-gray-600">{slide.subtext}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Whitepaper;

