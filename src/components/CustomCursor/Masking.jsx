import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const MASKSIZE = {
  initial: 50,
  onHover: 400,
};

const MASK_IMAGEURL =
  "https://framerusercontent.com/images/De0CMakQwO0HOVWPyQnVeTw.svg";

export function withMaskHover(Component) {
  return (props) => {
    const [maskSize, setMaskSize] = useState(MASKSIZE.initial);

    return (
      <Component
        {...props}
        onMouseEnter={() => setMaskSize(MASKSIZE.onHover)}
        onMouseLeave={() => setMaskSize(MASKSIZE.initial)}
        maskSize={maskSize}
      />
    );
  };
}

export function withMaskFrame(Component) {
  return (props) => {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [maskSize, setMaskSize] = useState(MASKSIZE.initial);
    const maskRef = useRef(null);

    // Track mouse movement
    useEffect(() => {
      const handleMouseMove = (event) => {
        setMousePos({ x: event.clientX, y: event.clientY });
      };
      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    // Animate mask effect with GSAP
    useEffect(() => {
      if (maskRef.current) {
        gsap.to(maskRef.current, {
          WebkitMaskPosition: `${mousePos.x - maskSize / 2}px ${
            mousePos.y - maskSize / 2
          }px`,
          WebkitMaskSize: `${maskSize}px`,
          duration: 0.5,
          ease: "power3.out",
        });
      }
    }, [mousePos, maskSize]);

    return (
      <div
        {...props}
        ref={maskRef}
        style={{
          WebkitMaskImage: `url(${MASK_IMAGEURL})`,
          WebkitMaskRepeat: "no-repeat",
        }}
        onMouseEnter={() => setMaskSize(MASKSIZE.onHover)}
        onMouseLeave={() => setMaskSize(MASKSIZE.initial)}
      />
    );
  };
}


// import { useState, useEffect, useRef } from "react";
// import gsap from "gsap";
// import useMousePosition from "./useMousePosition"; // Importing the hook

// const MASKSIZE = {
//   initial: 50,
//   onHover: 400,
// };

// const MASK_IMAGEURL =
//   "https://framerusercontent.com/images/De0CMakQwO0HOVWPyQnVeTw.svg";

// export function withMaskFrame(Component) {
//   return (props) => {
//     const { x, y } = useMousePosition(); // Using the custom hook
//     const [maskSize, setMaskSize] = useState(MASKSIZE.initial);
//     const maskRef = useRef(null);

//     // Animate mask effect with GSAP
//     useEffect(() => {
//       if (maskRef.current) {
//         gsap.to(maskRef.current, {
//           WebkitMaskPosition: `${x - maskSize / 2}px ${y - maskSize / 2}px`,
//           WebkitMaskSize: `${maskSize}px`,
//           duration: 0.5,
//           ease: "power3.out",
//         });
//       }
//     }, [x, y, maskSize]);

//     return (
//       <div
//         {...props}
//         ref={maskRef}
//         style={{
//           WebkitMaskImage: `url(${MASK_IMAGEURL})`,
//           WebkitMaskRepeat: "no-repeat",
//         }}
//         onMouseEnter={() => setMaskSize(MASKSIZE.onHover)}
//         onMouseLeave={() => setMaskSize(MASKSIZE.initial)}
//       />
//     );
//   };
// }
