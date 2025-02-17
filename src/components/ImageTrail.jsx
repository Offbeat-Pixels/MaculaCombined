
import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

const MouseTextTrail = () => {
  const lensRef = useRef(null);
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "React",
    "GSAP",
    "Tailwind",
    "Magic",
    "Lens",
    "Are", 
    "you",
  "  struggling" ,
   " to ",
    "scale",
     "your ",
     "startup",
     " or",
      "small",
      "business?",
  ];
  const lastMoveTime = useRef(0); // Store the last move timestamp

  useEffect(() => {
    const moveLens = (e) => {
      // Animate the lens smoothly following the cursor
      gsap.to(lensRef.current, {
        x: e.clientX - 10, // Centering the lens
        y: e.clientY - 40,
        duration: 0.2,
        ease: "power2.out",
      });

      const now = Date.now();
      if (now - lastMoveTime.current > 300) {
        // Change text only if 300ms has passed since the last change
        setTextIndex((prev) => (prev + 1) % texts.length);
        lastMoveTime.current = now;
      }
    };

    window.addEventListener("mousemove", moveLens);
    return () => window.removeEventListener("mousemove", moveLens);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Lens Effect */}
      <div
        ref={lensRef}
        className="w-80 h-80 flex-col rounded-full border border-white flex items-center justify-center bg-sky-100 text-red-700 bg-opacity-10 backdrop-blur-lg mix-blend-difference fixed overflow-clip"
        style={{
          transform: "translate(-50%, -50%)",
        }}
      >
        <p className="text-7xl ml-auto font-bold">{texts[textIndex]}</p>
        <p className="text-7xl mr-auto font-bold">{texts[textIndex]}</p>
        <p className="text-7xl mx-auto font-bold">{texts[textIndex]}</p>
      </div>
    </div>
  );
};

export default MouseTextTrail;

