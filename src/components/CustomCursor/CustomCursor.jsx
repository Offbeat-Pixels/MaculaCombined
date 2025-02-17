import React, { useState, useEffect } from "react";
import { gsap } from "gsap";

const CustomCursor = ({ revealText }) => {
  const [cursorPos, setCursorPos] = useState({ x: "50%", y: "50%" });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: `${e.clientX}px`, y: `${e.clientY}px` });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Custom Cursor Overlay */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          clipPath: isVisible
            ? `circle(120px at ${cursorPos.x} ${cursorPos.y})`
            : "circle(0px at 50% 50%)",
          transition: "clip-path 0.3s ease-out",
        }}
      >
        <div className="absolute inset-0 flex justify-center items-center text-white text-3xl font-bold bg-black">
          {revealText}
        </div>
      </div>

      {/* Invisible Hover Area to Trigger the Effect */}
      <div
        className="absolute inset-0"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      />
    </>
  );
};

export default CustomCursor;
