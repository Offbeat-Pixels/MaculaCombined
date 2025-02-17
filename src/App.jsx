
import {
  Banner,
  // WhySection,
  Challenges,
  ServicesSection,
  VideoSection,
  // ContactForm,
  ImageCarousel,
  Whitepaper,
  FocusCardsComp,
  HelpSection,
} from "./components";
import AnimatedSVG from "./components/Temp";


function App() {
  return (
    <div className="bg-black">
      <Banner />
      {/* <Whitepaper /> */}
      {/* <AnimatedSVG/> */}
     <Challenges /> 
      {/* <ImageCarousel /> */}
      {/* <FocusCardsComp /> */}
      <ServicesSection />
      {/* <VideoSection /> */}
      {/* <HelpSection/> */}
    </div>
  );
}

export default App;
