import { ArrowRight } from "lucide-react";
import { gtmImg, genAiImg, salesImg } from "../assets";
import { styles } from "../style";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
// import { ButtonFade } from "./ui/motion";
// import { LazyLoadImage } from "react-lazy-load-image-component";

// ProjectCard component
const ProjectCard = ({  title, description, image, category }) => {
  return (
   
    <div className="bg-transparent rounded-3xl h-full overflow-visible border-gray-500 border-2 p-5 relative flex flex-col justify-between">
      <div>
        <h3 className="text-xl font-medium mb-3">{title}</h3>
        <p className="text-gray-600 mb-5">{description}</p>
      </div>
      <div className="relative flex justify-center">
        <img
          src={image}
          alt="project_image"
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <Link
        to={{ pathname: "/services" }}
        state={{ category }}
        className="absolute bottom-1 right-1 p-3 border-2 rounded-full -rotate-45 hover:rotate-0 text-black hover:text-white hover:bg-[#4a6d49] transition-transform"
      >
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
};

const services = [
  {
    title: "Sales as a Service",
    category: "Sales as a Service",
    description:
      "A Go-to-Market (GTM) strategy is a comprehensive plan that outlines how a company will sell its products or services to customers. It encompasses various components that are essential for successfully launching and positioning a product in the market. ",
    image: gtmImg,
  },
  {
    title: "Business Consulting",
    category: "Business Consulting",
    description:
      "We provide expert advice and guidance to organizations aiming to improve their operations, achieve specific goals, and resolve complex challenges. Our Start-up incubation service involves supporting new businesses through various stages of development by providing resources, mentorship, and networking opportunities.",
    image: salesImg,
  },
  {
    title: "Gen AI Enabled Products",
    category: "Gen AI Enabled Products",
    description:
      "Generative AI-Enabled Products as a Service (GenAI-PaaS) is a transformative solution model that democratizes access to cutting-edge artificial intelligence tools for both businesses and individual consumers. This approach integrates generative AI capabilities into workflows and daily activities, providing scalable innovation, personalized experiences, and enhanced productivity.",
    image: genAiImg,
  },
];

function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.8 });
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();

  function delayAndGo(e) {
    e.preventDefault();
    setTimeout(() => navigate("/services"), 300);
  }

  return (
    <section className="py-16 bg-white ">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="md:flex justify-between items-center mb-12">
          <p
            ref={ref}
            className={`${styles.sectionHeadText} ${
              isInView ? "motion-preset-slide-right-md" : "opacity-0"
            } transition-all duration-1000 ease-in-out md:py-5`}
          >
            Explore Our <span className=" italic">Services</span>
          </p>
          <Link
            to="/services"
            onClick={delayAndGo}
            onMouseLeave={() => setIsClicked(false)}
            className=" hidden md:flex items-center border gap-2 bg-white text-white w-fit pl-2 rounded-full hover:bg-slate-300 transition-colors"
          >
            <div
              onClick={() => setIsClicked(true)}
           
              className="bg-[#588157] rounded-full p-2 shadow-md"
            >
              <ArrowRight className="w-5 h-5 text-white transform  transition-transform" />
            </div>
            <span
              onClick={() => setIsClicked(true)}
            
              className="items-center font-bold  bg-[#588157] text-white px-4 py-2  rounded-full transition-colors"
            >
              Explore More
            </span>
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid  lg:grid-cols-3  gap-6 ">
          {services.map((service, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;

// import { Users, Globe, MessageCircle } from "lucide-react";
// import { useRef } from "react";

// function UniqueSection() {
//   const ref = useRef(null);
//   return (
//     <div className="w-full bg-[#ffffff]  px-4  py-32">
//       <div className="max-w-6xl mx-auto">
//         <h2
//           ref={ref}
//           className="text-4xl md:text-5xl  mb-14  font-bold text-left md:text-center"
//         >
//           {" "}
//           SERVICES like old Macula GEN AI business consulting Sales as a Service{" "}
//           <br />3 Simple Steps to Start Scaling
//           <p className="text-xl md:text-2xl mt-5">
//             Transform your business with our expert guidance.
//           </p>
//         </h2>

//         <div className="grid md:grid-cols-3 gap-8   relative">
//           {/* Step 1 */}
//           <div className="flex  flex-col px-5 md:px-0  items-start md:items-center text-left md:text-center relative">
//             <div className="w-16 h-16  bg-[#e7e7e7]  rounded-full flex items-center justify-center text-black mb-4 relative">
//               <Users className="w-8 h-8 text-[#175884]  " />
//               <span className="absolute top-5 -right-5 border-2 border-[#e7e7e7] w-10 h-10 rounded-full bg-white  flex items-center justify-center text-lg font-bold">
//                 01
//               </span>
//             </div>
//             <h3 className="text-xl font-semibold mb-3 ">
//               Schedule Tour Consultation
//             </h3>
//             <p className="text-lg text-gray-600">
//               Connect with our expertst Dscns your needs.
//             </p>
//           </div>
//           {/* Arrow 1 */}
//           <div className="hidden md:block absolute left-[22%] top-[2rem] w-[45%]">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="100%"
//               height="100%"
//               fill="black"
//               viewBox="50 0 550 20"
//             >
//               <path
//                 fill="#"
//                 d="M324.707 8.707a1 1 0 0 0 0-1.414L318.343.929a1 1 0 1 0-1.414 1.414L322.586 8l-5.657 5.657a1 1 0 1 0 1.414 1.414zM0 9h324V7H0z"
//               ></path>
//             </svg>
//           </div>

//           {/* Step 2 */}
//           <div className="flex flex-col px-5 md:px-0  items-start md:items-center text-left md:text-center relative">
//             <div className="w-16 h-16 bg-[#e7e7e7] rounded-full flex items-center justify-center text-black mb-4 relative">
//               <Globe className="w-8 h-8 text-[#175884]" />
//               <span className="absolute top-3 -right-7 border-2 border-[#e7e7e7] w-10 h-10  rounded-full bg-white text-black flex items-center justify-center text-lg font-bold">
//                 02
//               </span>
//             </div>
//             <h3 className="text-xl font-semibold mb-3">
//               Identify Your Challenges
//             </h3>
//             <p className="text-sm text-gray-600">
//               Work together to outline your specific handles.
//             </p>
//           </div>

//           {/* Arrow 2 */}
//           <div className="hidden md:block absolute -right-5  top-[2rem] w-[45%]">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="100%"
//               height="100%"
//               fill="black"
//               viewBox="50 0 550 20"
//             >
//               <path
//                 fill="#"
//                 d="M324.707 8.707a1 1 0 0 0 0-1.414L318.343.929a1 1 0 1 0-1.414 1.414L322.586 8l-5.657 5.657a1 1 0 1 0 1.414 1.414zM0 9h324V7H0z"
//               ></path>
//             </svg>
//           </div>

//           {/* Step 3 */}
//           <div className="flex flex-col px-5 md:px-0  items-start md:items-center text-left md:text-center relative">
//             <div className="w-16 h-16 bg-[#e7e7e7] rounded-full flex items-center justify-center text-black mb-4 relative">
//               <MessageCircle className="w-8 h-8 text-[#175884]" />
//               <span className="absolute top-3 -right-7 border-2 border-[#e7e7e7] w-10 h-10  rounded-full bg-white text-black flex items-center justify-center text-lg font-bold">
//                 03
//               </span>
//             </div>
//             <h3 className="text-xl font-semibold mb-3">
//               Begin Your Growth Jourmey
//             </h3>
//             <p className="text-sm text-gray-600">
//               Start implementing our tailored solutions for success.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UniqueSection;
