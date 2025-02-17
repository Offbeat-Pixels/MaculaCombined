import  { useEffect,} from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { createRoot } from "react-dom/client";
 
import "./index.css";
import App from "./App.jsx";
import {
  Footer,
  Navbar,
  Whitepaper,
  Services,
  Blog,
  ContactSection,
  ContactForm,
  About,
  Career,
  InnerWhitePaperDetail,
} from "./components/index.js";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

const Main = () => {

 useEffect(() => {
   const handleResize = () => {
     ScrollTrigger.refresh(); // Refresh GSAP triggers when layout changes
   };

   window.addEventListener("resize", handleResize);

   return () => {
     window.removeEventListener("resize", handleResize);
   };
 }, []);

  return (
    <div>
      <Navbar />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/whitepaper" element={<Whitepaper />} />
          <Route
            path="/whitepaperDetail/:category"
            element={<InnerWhitePaperDetail />}
          />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="*" element={<App />} />
        </Routes>
      <ContactForm />
      <Footer />
    </div>
  );
};

createRoot(document.getElementById("root")).render(
  <Router>
    <Main />
  </Router>
);
