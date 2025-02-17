import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      const letters = textRef.current.querySelectorAll("span");

      gsap.fromTo(
        letters,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger:0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 70%", // Start animation when 80% of text is in view
            end: "bottom 100%", // End when 20% remains
            scrub: 5, // Smooth transition on scroll
            toggleActions: "play none none reverse", // Play when entering, reverse when leaving
        
          },
        }
      );
    }
  }, []);

  return (
    <div className="min-h-fit max-w-screen text-black py-10">
      <div className="text-center">
        {/* Split each letter into a span */}
        <p className="text-6xl md:text-[11rem] font-extrabold" ref={textRef}>
          {"Macula Consultant".split("").map((char, index) => (
            <span key={index} className="inline-block">
              {char}
            </span>
          ))}
        </p>
      </div>
      <hr className="my-6 border-gray-700" />

      <footer className="w-full flex flex-col items-center text-center">
        <ul className="flex flex-wrap justify-center space-x-6 md:space-x-20 text-lg md:text-4xl font-bold">
          <li>
            <Link to="/about" className="hover:text-[#175884] hover:underline">
              About Us
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-[#175884] hover:underline"
            >
              Contact Us
            </Link>
          </li>
          <li>
            <Link
              to="/careers"
              className="hover:text-[#175884] hover:underline"
            >
              Careers
            </Link>
          </li>
          <li>
            <Link
              to="/privacypolicy"
              className="hover:text-[#175884] hover:underline"
            >
              Privacy Policy
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}
