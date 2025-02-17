// export function TestimonialCard({
//   name,
//   company,
//   quote,
//   imageSrc,
// }) {
//   return (
//     <div className="relative rounded-lg overflow-hidden group">
//       <img src={imageSrc} alt={name} className="w-full h-full  object-cover" />
//       <div className="absolute inset-1 bg-black/50 flex bg-clip-text items-end p-6">
//         <div className="text-white">
//           <h3 className="font-bold">{name}</h3>
//           <p className="text-sm ">{company}</p>
//           <p className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
//             {quote}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }





import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function TestimonialCard({ name, company, quote, imageSrc }) {
  const cardRef = useRef(null);
  const maskTopRef = useRef(null);
  const maskBottomRef = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: cardRef.current,
        start: "top 5%", // When the card is 80% in view
        end: "top 80%", // Ends animation at 30%
        scrub: 3, // Smooth effect
      },
    });

    timeline.to(maskTopRef.current, {
      yPercent: -100, // Moves top mask UP
      ease: "power2.out",
    });

    timeline.to(
      maskBottomRef.current,
      {
        yPercent: 100, // Moves bottom mask DOWN
        ease: "power2.out",
      },
      0 // Start both animations together
    );
  }, []);

  return (
    <div ref={cardRef} className="relative rounded-lg overflow-hidden w-80  group">
      {/* Image */}
      <img src={imageSrc} alt={name} className="w-full h-full object-cover" />

      {/* White Mask (Moves UP) */}
      <div
        ref={maskTopRef}
        className="absolute top-0 left-0 w-full h-1/2 bg-white z-10"
      />

      {/* Black Mask (Moves DOWN) */}
      <div
        ref={maskBottomRef}
        className="absolute bottom-0 left-0 w-full h-1/2 bg-black z-10"
      />

      {/* Text Overlay */}
      <div className="absolute inset-1 flex items-end p-6 z-20">
        <div className="text-white">
          <h3 className="font-bold">{name}</h3>
          <p className="text-sm">{company}</p>
          <p className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
            {quote}
          </p>
        </div>
      </div>
    </div>
  );
}
