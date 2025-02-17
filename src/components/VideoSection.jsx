




import { useRef, useState, useEffect } from "react";
import { Play, PlayIcon } from "lucide-react";
import { MaculaVideo } from "../assets";
import { ContainerScroll } from './ui/container-scroll-animation';
import { useInView } from "framer-motion";

 function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView && videoRef.current && !isPlaying) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }, [inView, isPlaying]);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Scroll Animations
              </span>
            </h1>
          </>
        }
      >
        <video
          ref={videoRef}
          // className="w-full h-full object-cover rounded-xl"
          muted
          controls
          preload="auto"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
          style={{ display: isPlaying ? "block" : "none" }}
        >
          <source src={MaculaVideo} type="video/mp4" />
        </video>
        {/* <img
          src={`/linear.webp`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        /> */}
      </ContainerScroll>
    </div>
  );
}


export default VideoSection;