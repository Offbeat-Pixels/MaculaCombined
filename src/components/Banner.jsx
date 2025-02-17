//@red OG

// import { useRef } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { PhoneCall } from "lucide-react";
// import { Link } from "react-router-dom";
// import Challenges from "./Challenges";

// gsap.registerPlugin(ScrollTrigger);

// function Banner() {
//   const containerRef = useRef(null); // Ref for the container

//   useGSAP(
//     () => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: "body",
//           start: "top top",
//           end: "+=1600px",
//           scrub: 1,
//           pin: ".split-container",
//           pinSpacing: true,
//           invalidateOnRefresh: true,
//           toggleActions: "play none none reset",
//         },
//       });

//       tl.to(".top-div", { y: "-100%", duration: 1.2, ease: "power2.inOut" }, 0)
//         .to(
//           ".bottom-div",
//           { y: "100%", duration: 1.2, ease: "power2.inOut" },
//           0
//         )
//         .fromTo(
//           ".center-div",
//           { opacity: 0, y: 50 },
//           { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
//           "-=0.8"
//         )
//         // .to(
//         //   ".top-div2",
//         //   { y: "-100%", duration: 1.2, ease: "power2.inOut" },
//         //   "+=0.5"
//         // )
//         // .to(
//         //   ".bottom-div2",
//         //   { y: "100%", duration: 1.2, ease: "power2.inOut" },
//         //   "-=1.0"
//         // )
//         .to(".tiles", { backgroundColor: "white" })
//         .fromTo(
//           ".tiles-item",
//           { x: -100, opacity: 0 },
//           { x: 0, opacity: 1, duration: 1.2, ease: "power2.out", stagger: 0.3 },
//           "-=0.8"
//         );

//       return () => tl.killAll(); 
//     },
//     { scope: containerRef }
//   ); // Scope to ensure cleanup

//   return (
//     <div ref={containerRef} className="overflow-hidden text-black">
//       <div className="h-screen relative split-container">
//         {/* First Split Screen */}
//         <div className="h-[40%] w-full bg-white absolute top-0 left-0 top-div">
//           <div className="macula text-[6rem] font-bold z-50 pt-48 pl-20 -space-y-10 text-center">
//             <p>Empower Your Business to Scale</p>
//           </div>
//         </div>
//         <div className="h-[60%] w-full bg-white absolute bottom-0 left-0 bottom-div">
//           <div className="consultants text-[2.8rem] z-50 font-bold text-center">
//             <p>Are you struggling to scale your startup or small business?</p>
//           </div>

//           <Link to="/contact">
//             <div className="flex items-center border mt-10 gap-2 py-1 px-3 sm:py-1 sm:px-2 mx-auto w-fit bg-white rounded-full hover:bg-slate-300 transition-colors">
//               <div className="bg-[#373737] rounded-full p-2 shadow-md cursor-pointer">
//                 <PhoneCall className="w-5 h-5 text-white" />
//               </div>

//               <span className="hidden md:block bg-[#373737] text-white py-2 px-2 rounded-full text-sm sm:text-base">
//                 Schedule a Call
//               </span>
//             </div>
//           </Link>
//         </div>
//         {/* Second Split Screen - Center Div */}
//         <div className="center-div text-black text-center absolute inset-0 text-6xl space-y-10 font-bold">
//           {/* <div className="h-[50%] bg-white w-full absolute top-0 left-0 top-div2"> */}
//           <div className="animated-text text-[4rem] font-bold  pt-20 pl-20  text-center">
//             <p>Don't Let Poor Strategy Hold You Back</p>
//           </div>
//           {/* </div> */}
//           {/* <div className="h-[50%] w-full bg-white absolute bottom-0 left-0 bottom-div2"> */}
//           <div className="animated-text text-[2rem]  font-bold text-center">
//             <p>
//               Are your operations, marketing and Sales efforts failing to
//               deliver results?
//             </p>
//           </div>
//           {/* </div> */}
//         </div>

//         <div className="tiles grid grid-cols-4 gap-24 px-40    justify-center h-screen pt-64 text-lg text-black">
//           <svg className="tiles-item absolute overflow-visible pt-48">
//             <line
//               x1=".58008"
//               x2="1338.2"
//               y1="74.754"
//               y2="74.754"
//               stroke="#000"
//               strokeWidth="5"
//             />
//             <path
//               d="m1056.9 70.866c3.41-2.4689 7.16-4.5948 10.09-7.535 1.77-1.7649 3.67-5.2056 3.1-7.204-7.46-26.117 25.84-57.972 50.88-54.988 5.54 0.66001 7.55 2.0671 7.61 7.7661 0.27 22.858-19.09 45.899-42.7 50.327-3.07 0.5764-6.1 1.3699-8.56 1.9275 2.48 3.1313 4.66 5.8875 6.61 9.8544 0.06 4.523 0.35 7.8352 0.64 11.148-9.21 10.978-17.72 11.247-27.43-0.4201-0.05-4.4822-0.15-7.6785-0.24-10.875zm21.38 5.0265c-2.34-2.5522-4.28-6.0082-7.18-7.2832-1.49-0.6576-5.65 1.9955-6.92 4.148-2.69 4.5411-1.91 9.47 3.42 11.626 6.36 2.569 9.71-0.8617 10.68-8.4908z"
//               fill="#FBA35D"
//             />
//             <path
//               d="m648.3 145.08c0.138 5.645-3.079 6.313-7.026 6.564-25.981 1.65-52.944-25.293-51.207-51.1 0.35-5.1929 2.7-6.9 7.791-7.0315 25.008-0.6459 49.509 23.896 50.442 51.568z"
//               fill="#39AFBA"
//             />
//             <path
//               d="m318.33 123.75c1.929 7.127 3.861 13.642 5.187 20.279 1.157 5.788-2.071 7.514-7.544 7.647-25.19 0.61-50.217-23.768-50.384-48.945-0.048-7.288 2.812-9.9129 9.849-9.0437 19.399 2.396 33.652 12.112 42.892 30.063z"
//               fill="#347296"
//             />
//             <path
//               d="m1234.2 117.37c-0.76-3.836-1.35-7.065-1.75-10.317-1.57-12.643 0.54-14.784 13.03-13.359 21.93 2.5032 43.64 26.312 44.5 48.374 0.27 6.835-1.6 9.799-9.15 9.644-23.51-0.482-36.18-15.279-46.63-34.342z"
//               fill="#85C251"
//             />
//             <path
//               d="m754.11 28.802c9.566-17.063 23.741-25.875 42.523-27.625 6.47-0.60275 9.304 1.4722 9.259 8.5807-0.163 25.614-24.928 50.089-50.485 49.494-5.511-0.1283-8.602-2.5209-7.474-7.9847 1.528-7.4033 3.865-14.64 6.177-22.465z"
//               fill="#E55563"
//             />
//             <path
//               d="m454.19 57.83c-7.489 1.2124-14.357 2.2374-21.047 3.236-5.973-23.975 12.226-50.929 37.291-56.517 5.518-1.2302 11.581-0.01893 17.392 0.06806-0.139 5.8606 0.846 12.022-0.626 17.526-4.602 17.205-15.844 28.908-33.01 35.687z"
//               fill="#95215E"
//             />
//             <path
//               d="m919.91 93.893c28.188 2.7233 47.271 27.925 47.684 49.211 0.129 6.651-2.29 8.481-8.588 8.447-24.294-0.13-47.782-22.775-49.308-47.562-0.452-7.331 1.778-11.072 10.212-10.096z"
//               fill="#60245F"
//             />
//             <path
//               d="m140.75 48.95c-9.051 6.6593-18.698 9.8939-29.281 10.623-5.266 0.3625-7.175-1.8703-7.381-7.1424-1.029-26.314 23.638-51.649 49.979-51.385 5.711 0.05726 7.69 2.0659 7.665 7.7091-0.076 16.856-7.424 29.777-20.982 40.195z"
//               fill="#77ABF8"
//             />
//             <path
//               d="m351.61 34.144c1.552 2.679 3.617 5.5141 3.257 7.998-1.463 10.1-11.741 19.112-21.868 20.238-5.461 0.6073-7.565-1.4423-6.668-6.9434 1.806-11.077 10.522-18.692 25.279-21.293z"
//               fill="#1A1A1A"
//             />
//             <path
//               d="m358.99 99.699c7.137 5.81 11.419 12.317 9.733 21.417-13.137 3.134-27.377-7.154-28.67-20.429-0.491-5.0518 1.52-7.5437 6.512-6.1333 4.106 1.16 7.966 3.1874 12.425 5.1453z"
//               fill="#1A1A1A"
//             />
//             <path
//               d="m181.95 55.578c-6.427 3.0754-12.428 5.7525-18.605 8.5082-4.977-14.825 9.576-32.098 22.846-29.691 1.558 0.2827 4.022 4.2452 3.537 5.5891-1.899 5.2637-4.813 10.161-7.778 15.593z"
//               fill="#1A1A1A"
//             />
//             <path
//               d="m671.04 98.626c1.732-1.7972 3.44-4.0202 5.157-4.0278 12.942-0.0573 23.8 13.553 21.708 26.778-13.662 2.68-24.786-6.485-26.865-22.75z"
//               fill="#1A1A1A"
//             />
//             <path
//               d="m860.03 105.27c2.008 5.44 3.65 10.419 5.336 15.532-14.744 3.325-29.331-8.196-29.327-21.337 2e-3 -4.703 3.136-6.2934 6.406-4.7889 6.019 2.7697 11.508 6.6907 17.585 10.594z"
//               fill="#1A1A1A"
//             />
//             <path
//               d="m1024.3 103.97c2.41 5.981 4.44 11.524 6.66 17.596-18.6 1.779-30.31-10.068-28.25-26.688 8.93-1.8085 15.39 2.5561 21.59 9.0922z"
//               fill="#1A1A1A"
//             />
//             <path
//               d="m1002.2 59.804c-4.647 1.1995-8.759 2.1193-12.857 3.0361-3.183-14.03 8.673-28.705 21.767-28.675 4.75 0.0108 5.47 2.7917 4.84 6.5287-1.41 8.3519-6.01 14.52-13.75 19.11z"
//               fill="#1A1A1A"
//             />
//             <path
//               d="m1167.4 102.2c-1.41-7.4735 1.85-8.6189 7.79-7.4206 10.08 2.0378 22.6 14.31 19.37 26.267-11.95 3.259-21.49-3.165-27.16-18.846z"
//               fill="#1A1A1A"
//             />
//             <path
//               d="m512.89 94.677c14.851 4.9153 21.263 13.548 20.018 26.29-12.861 3.844-28.663-8.696-27.228-22.084 0.178-1.6586 4.324-2.892 7.21-4.2063z"
//               fill="#1A1A1A"
//             />
//             <path
//               d="m493.56 49.536c4.328-8.6619 10.881-13.466 19.741-15.239 4.677-0.9364 6.475 0.9517 6.326 5.6632-0.394 12.487-13.082 23.062-27.934 21.732 0.539-3.9019 1.071-7.7564 1.867-12.156z"
//               fill="#1A1A1A"
//             />
//             <path
//               d="m1153.4 59.024c1.42-13.658 9.9-23.255 21.73-24.42 1.97-0.1941 5.76 2.1396 6.08 3.8074 2.08 10.901-13.92 25.973-24.81 23.712-1.09-0.2262-1.93-1.6403-3-3.0985z"
//               fill="#1A1A1A"
//             />
//             <path
//               d="m829.65 41.851c4.188-2.509 7.727-5.2624 11.738-6.5845 8.224-2.7107 11.049 0.0525 8.572 8.2062-2.898 9.539-9.19 15.998-19.071 18.411-7.194 1.7565-9.559-0.22-7.746-7.3561 1.099-4.326 3.988-8.1972 6.507-12.676z"
//               fill="#1A1A1A"
//             />
//             <path
//               d="m181.06 94.438c12.37 2.6709 20.114 9.4945 22.742 21.518 0.813 3.719 0.221 6.306-4.664 6.462-11.324 0.361-24.733-13.133-23.245-24.175 0.198-1.4697 2.993-2.5896 5.167-3.8059z"
//               fill="#1A1A1A"
//             />
//             <path
//               d="m413.2 79.79c0.017-1.7569 0.034-3.5138 0.036-6.5932-0.178-1.7349-0.339-2.1471-0.501-2.5592 12.84-9.8411 15.892-9.8868 26.708 0.0554 0.245 3.505 0.236 6.5584 0.266 10.376-10.34 11.771-16.756 12.086-26.051 0.9868-0.357-1.4528-0.408-1.8596-0.458-2.2663zm13.969-11.602c-7.74 1.8498-10.891 5.8343-8.719 11.512 2.044 5.341 6.509 6.7062 11.254 4.5425 2.254-1.0277 5.233-4.7747 4.79-6.4911-0.878-3.4025-3.904-6.2507-7.325-9.5629z"
//               fill="#95215E"
//             />
//             <path
//               d="m734.5 82.479c-0.056-3.6532 0.159-6.853 0.056-10.8 2.37-2.9717 4.788-5.6949 7.798-7.325 8.128-4.4014 13.828 0.5138 19.571 6.1949 0.221 3.5715 0.144 6.7031 0.192 10.615-9.876 12.301-14.705 12.474-27.617 1.3146zm8.249-11.828c-0.804 2.6577-2.728 5.5756-2.183 7.9199 1.214 5.2245 5.657 8.3083 10.417 5.5109 2.881-1.6935 5.985-7.3045 5.189-10.056-1.603-5.5393-6.647-7.5734-13.423-3.3749z"
//               fill="#AE8288"
//             />
//             <path
//               d="m89.738 76.072c-0.1658-1.4439-0.3317-2.8877-0.3906-4.821 1.0317-0.9652 2.0187-1.3497 2.8722-1.9304 13.067-8.8921 13.316-8.8904 25.1 1.2924 0.397 3.7457 0.682 6.9622 1.26 10.811-1.272 2.0623-2.806 3.5286-4.408 4.9168-7.865 6.8168-13.87 5.9256-22.789-4.4133-0.664-2.6758-1.1542-4.2655-1.6443-5.8551zm13.905 8.6887c2.909-2.1285 7.957-4.0495 8.189-6.4378 0.295-3.0349-2.708-8.2309-5.427-9.1586-2.351-0.8022-7.5098 2.2794-9.2685 5.0263-3.2574 5.0877 0.3598 8.4304 6.5065 10.57z"
//               fill="#ACA9AD"
//             />
//             <path
//               d="m1244.2 70.427c0.07 3.6584 0.01 6.8049 0.06 10.74-8.61 11.823-16.42 12.165-26.3 1.4222 0-3.6948 0.1-6.8718 0.1-10.836 9.07-11.455 14.74-11.684 26.14-1.3267zm-16.06-1.0133c-5.86 2.0172-6.82 6.8859-4.23 11.101 1.5 2.4492 6.73 4.4952 9.47 3.7497 2.52-0.685 5.64-5.4394 5.5-8.2482-0.25-4.8234-3.45-8.6569-10.74-6.6027z"
//               fill="#949494"
//             />
//             <path
//               d="m602.38 70.503c0.241 3.6097 0.233 6.7295 0.3 10.629-8.536 11.87-16.114 12.149-26.097 1.2693 0.249-3.5965 0.757-6.728 1.243-10.556 7.367-10.915 14.884-11.267 24.554-1.3431zm-20.921 5.3249c0.635 6.2501 4.144 9.7039 10.343 8.7511 5.347-0.8219 6.984-5.3951 5.748-10.013-0.642-2.3966-4.181-6.1748-5.48-5.8292-3.731 0.9923-6.987 3.7694-10.611 7.0909z"
//               fill="#949494"
//             />
//             <path
//               d="m895.58 82.646c-0.031-3.8257 0.201-7.1017 0.134-11.042 2.609-3.0766 7.27-5.8656 9.699-5.8646 7.442 1.6437 0.039 3.289-3.29 3.2904-7e-3 3.6605 0.086 12.578 2.389 14.13 2.245 1.5124 7.989 0.2596 10.448-1.8339 1.622-1.3816 0.738-6.55-0.106-9.7362-0.777-2.9347-6.896-2.5632-9.402-5.8515 4.151-0.8247 14.208-4.1129 14.81 4.1576 0.296 4.0644 0.572 7.5992 1.389 11.704-8.707 11.818-16.496 12.121-26.071 1.0463z"
//               fill="#867987"
//             />
//             <path
//               d="m257.02 66.143c5.73-6.1766 10.13-6.299 17.283-0.0028-6.79 0.9595-2.202 4.0569-2.251 6.3159-0.08 3.6511-0.035 8.4376-2.191 10.544-1.66 1.6215-8.787 0.9952-9.647-0.6434-1.561-2.9773-0.402-7.4617-0.085-11.293 0.094-1.1374 1.17-2.1936 2.103-3.8241-2.17-0.4569-3.691-0.777-5.212-1.0971z"
//               fill="#D9D9D9"
//             />
//             <path
//               d="m256.75 66.366c1.793 0.0978 3.314 0.4178 5.484 0.8747-0.933 1.6305-2.008 2.6868-2.102 3.8241-0.318 3.8312-1.476 8.3156 0.085 11.293 0.859 1.6386 7.986 2.2649 9.646 0.6435 2.157-2.1068 2.111-6.8934 2.191-10.544 0.049-2.259-4.539-5.3563 2.269-5.6989 1.5 1.2619 2.397 2.401 3.52 3.9227 0.154 3.4784 0.081 6.5742 0.087 10.444-8.366 12.087-16.76 12.632-24.199 1.7161 9e-3 -3.9288 0.12-7.2298 0.082-11.242-0.149-0.7112-0.437-1.4378 0.172-1.8954 1.03-1.2299 1.453-2.0022 1.875-2.7746 0 0 0.617-0.3398 0.89-0.5621z"
//               fill="#949494"
//             />
//             <path
//               d="m912.86 67.384c1.863 3.1937 1.262 1.2743 2.039 4.2089 0.845 3.1862 1.728 8.3547 0.106 9.7362-2.458 2.0935-8.203 3.3463-10.448 1.8339-2.302-1.5513-2.739-6.8576-2.732-10.518 5e-3 -2.5951-0.9-0.419 0.34-3.6141 1.58-1.0094 8.915-1.713 10.695-1.6469z"
//               fill="#CFCCCF"
//             />
//             <path
//               d="m255.41 67.017c0.031 0.6838-0.392 1.4561-1.25 2.3354-0.025-0.6776 0.386-1.4623 1.25-2.3354z"
//               fill="#D9D9D9"
//             />
//             <path
//               d="m1078.3 76.572c-0.97 6.9505-4.32 10.381-10.68 7.8123-5.33-2.156-6.11-7.085-3.43-11.626 1.28-2.1525 5.44-4.8055 6.93-4.1479 2.9 1.275 4.84 4.7309 7.18 7.9617z"
//               fill="#ECD2CC"
//             />
//             <path
//               d="m427.81 68.305c2.78 3.1948 5.805 6.0429 6.684 9.4454 0.443 1.7165-2.537 5.4634-4.791 6.4911-4.744 2.1638-9.21 0.7986-11.253-4.5424-2.172-5.6773 0.978-9.6617 9.36-11.394z"
//               fill="#D9D9D9"
//             />
//             <path
//               d="m743.25 70.3c6.269-3.8483 11.314-1.8143 12.917 3.725 0.796 2.7514-2.308 8.3624-5.19 10.056-4.76 2.7974-9.202-0.2864-10.416-5.5109-0.545-2.3443 1.379-5.2622 2.689-8.27z"
//               fill="#ECD2CC"
//             />
//             <path
//               d="m103 84.658c-5.5015-2.0381-9.1187-5.3809-5.8613-10.468 1.7587-2.747 6.9173-5.8286 9.2683-5.0264 2.72 0.9277 5.722 6.1237 5.427 9.1586-0.231 2.3884-5.28 4.3093-8.834 6.3363z"
//               fill="#D9D9D9"
//             />
//             <path
//               d="m1228.7 69.187c6.7-1.8276 9.9 2.0059 10.15 6.8293 0.14 2.8088-2.98 7.5632-5.5 8.2482-2.74 0.7455-7.97-1.3005-9.47-3.7496-2.59-4.2154-1.63-9.0841 4.82-11.328z"
//               fill="#D9D9D9"
//             />
//             <path
//               d="m581.55 75.205c3.533-2.6985 6.789-5.4756 10.519-6.4679 1.3-0.3456 4.839 3.4326 5.481 5.8292 1.236 4.6177-0.402 9.1909-5.749 10.013-6.198 0.9528-9.707-2.5011-10.251-9.3742z"
//               fill="#D9D9D9"
//             />
//             <path
//               d="m1399 72.319c0 6.8148-24.58 12.339-38.66 12.339-14.09 0-25.5-5.5244-25.5-12.339 0-6.8147 11.41-12.339 25.5-12.339 14.08 0 38.66 5.5244 38.66 12.339z"
//               fill="#9DAFE8"
//             />
//           </svg>
//           {[
//             "Insufficient funds delaying your plans",
//             "Operations that drain resources unnecessarily",
//             "Ineffective teams leading to missed goals",
//             "Marketing efforts yielding no return on investment",
//             "Lack of expertise in key areas",
//             "Inability to manage cash flow effectively",
//             "Difficulty in attracting investors",
//             "Feeling overwhelmed and unsupported in your journey",
//           ].map((text, index) => (
//             <div key={index} className="tiles-item  relative mx-auto w-72 h-48">
//               <div className="absolute inset-0 border border-[#202222] bg-gradient-to-br from-gray-50 to-[#ffffff] rounded-2xl   flex items-center justify-center text-center p-4">
//                 <p className="font-bold text-xl text-black">{text}</p>
//               </div>

//               {index < 4 ? (
//                 // Bottom Triangle (for first 4 tiles)
//                 <svg
//                   className="absolute top-[11.84rem]  z-20 left-1/2 -translate-x-1/2 "
//                   width="51"
//                   height="22"
//                   fill="none"
//                 >
//                   <path d="M1 1L25 20.5L50 1" stroke="black" />
//                   <path d="M1 1H49.5" stroke="white" strokeWidth="2px" />
//                 </svg>
//               ) : (
//                 // Top Triangle (for last 4 tiles)
//                 <svg
//                   className="absolute -top-5 z-10 left-1/2 -translate-x-1/2"
//                   width="51"
//                   height="21"
//                   fill="none"
                  
//                 >
//                   <path d="M1 20.5L25 1L50 20.5" stroke="black" />
//                   <path d="M1 20.5H49.5" stroke="white" />
//                 </svg>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Banner;



//@Green 2nd


import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";
import Challenges from "./Challenges";

gsap.registerPlugin(ScrollTrigger);

function Banner() {
  const containerRef = useRef(null); // Ref for the container

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "body",
          start: "top top",
          end: "+=1600px",
          scrub: 1,
          pin: ".split-container",  
          pinSpacing: true,
          invalidateOnRefresh: true,
          toggleActions: "play none none reset",
        },
      });

      tl.to(".top-div", { y: "-100%", duration: 1.2, ease: "power2.inOut" }, 0)
        .to(
          ".bottom-div",
          { y: "100%", duration: 1.2, ease: "power2.inOut" },
          0
        )
        .fromTo(
          ".center-div",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
          "-=0.8"
        )

        .to(".tiles", { backgroundColor: "white" })
        .fromTo(
          ".tiles-item",
          { x: -100, opacity: 0 },
          { x: 0, opacity: 1, duration: 1.2, ease: "power2.out", stagger: 0.3 },
          "-=0.8"
        )
        .to(
          ".top-div2",
          { y: "-100%", duration: 1.2, ease: "power2.inOut" },
          "+=0.5"
        )
        .to(
          ".bottom-div2",
          { y: "100%", duration: 1.2, ease: "power2.inOut" },
          "-=1.0"
        )
        .fromTo(
          ".center-div2",
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ".center-div2", // Trigger the pinning on this element
              start: "top center", // Pin when the top of .center-div2 reaches the center of the viewport
              end: "+=500px", // Pin until the scroll moves 500px further
              pin: ".challenges", // Enable pinning
              pinSpacing: true, // Keep space for the pinned element
            },
          },
          "-=0.8"
        );
      return () => tl.killAll();
    },
    { scope: containerRef }
  ); // Scope to ensure cleanup

  return (
    <div ref={containerRef} className="overflow-hidden   text-black">
      <div className="h-screen relative split-container">
        {/* First Split Screen */}
        <div className="h-[40%] w-full bg-white absolute top-0 left-0 top-div">
          <div className="macula text-[6rem] font-bold z-50 pt-48 pl-20 -space-y-10 text-center">
            <p>Empower Your Business to Scale</p>
          </div>
        </div>
        <div className="h-[60%] w-full z-10 bg-white absolute bottom-0 left-0 bottom-div">
          <div className="consultants text-[2.8rem] z-50 font-bold text-center">
            <p>Are you struggling to scale your startup or small business?</p>
          </div>

          <Link to="/contact">
            <div className="flex items-center border mt-10 gap-2 py-1 px-3 sm:py-1 sm:px-2 mx-auto w-fit bg-white rounded-full hover:bg-slate-300 transition-colors">
              <div className="bg-[#373737] rounded-full p-2 shadow-md cursor-pointer">
                <PhoneCall className="w-5 h-5 text-white" />
              </div>

              <span className="hidden md:block bg-[#373737] text-white py-2 px-2 rounded-full text-sm sm:text-base">
                Schedule a Call
              </span>
            </div>
          </Link>
        </div>
        {/* Second Split Screen - Center Div */}
        {/* <div className="center-div text-black text-center absolute inset-0 text-6xl space-y-10 font-bold h-[40%] bg-white w-full  top-0 left-0 top-div2"> */}
        <div className="center-div text-black text-center absolute inset-0 text-6xl space-y-10 font-bold ">
          <div className="h-[50%] bg-white w-full absolute top-0 left-0 top-div2">
            <div className="animated-text text-[4rem] font-bold pb-5 pt-20 pl-20  text-center">
              <p>Don't Let Poor Strategy Hold You Back</p>
            </div>
            <div className="animated-text text-[2rem]  font-bold text-center">
              <p>
                Are your operations, marketing and Sales efforts failing to
                deliver results?
              </p>
            </div>
          </div>
          {/* //@Green LEAF SVG */}
          {/* <div className=" grid grid-cols-4 gap-24 px-40   justify-center h-[60%] w-full bg-white absolute bottom-0 left-0 bottom-div2  text-lg text-black ">
          <svg className="tiles-item absolute overflow-visible pt-44 pl-40">
            <line
              x1=".58008"
              x2="1338.2"
              y1="74.754"
              y2="74.754"
              stroke="#000"
              strokeWidth="5"
            />
            <path
              d="m1056.9 70.866c3.41-2.4689 7.16-4.5948 10.09-7.535 1.77-1.7649 3.67-5.2056 3.1-7.204-7.46-26.117 25.84-57.972 50.88-54.988 5.54 0.66001 7.55 2.0671 7.61 7.7661 0.27 22.858-19.09 45.899-42.7 50.327-3.07 0.5764-6.1 1.3699-8.56 1.9275 2.48 3.1313 4.66 5.8875 6.61 9.8544 0.06 4.523 0.35 7.8352 0.64 11.148-9.21 10.978-17.72 11.247-27.43-0.4201-0.05-4.4822-0.15-7.6785-0.24-10.875zm21.38 5.0265c-2.34-2.5522-4.28-6.0082-7.18-7.2832-1.49-0.6576-5.65 1.9955-6.92 4.148-2.69 4.5411-1.91 9.47 3.42 11.626 6.36 2.569 9.71-0.8617 10.68-8.4908z"
              fill="#FBA35D"
            />
            <path
              d="m648.3 145.08c0.138 5.645-3.079 6.313-7.026 6.564-25.981 1.65-52.944-25.293-51.207-51.1 0.35-5.1929 2.7-6.9 7.791-7.0315 25.008-0.6459 49.509 23.896 50.442 51.568z"
              fill="#39AFBA"
            />
            <path
              d="m318.33 123.75c1.929 7.127 3.861 13.642 5.187 20.279 1.157 5.788-2.071 7.514-7.544 7.647-25.19 0.61-50.217-23.768-50.384-48.945-0.048-7.288 2.812-9.9129 9.849-9.0437 19.399 2.396 33.652 12.112 42.892 30.063z"
              fill="#347296"
            />
            <path
              d="m1234.2 117.37c-0.76-3.836-1.35-7.065-1.75-10.317-1.57-12.643 0.54-14.784 13.03-13.359 21.93 2.5032 43.64 26.312 44.5 48.374 0.27 6.835-1.6 9.799-9.15 9.644-23.51-0.482-36.18-15.279-46.63-34.342z"
              fill="#85C251"
            />
            <path
              d="m754.11 28.802c9.566-17.063 23.741-25.875 42.523-27.625 6.47-0.60275 9.304 1.4722 9.259 8.5807-0.163 25.614-24.928 50.089-50.485 49.494-5.511-0.1283-8.602-2.5209-7.474-7.9847 1.528-7.4033 3.865-14.64 6.177-22.465z"
              fill="#E55563"
            />
            <path
              d="m454.19 57.83c-7.489 1.2124-14.357 2.2374-21.047 3.236-5.973-23.975 12.226-50.929 37.291-56.517 5.518-1.2302 11.581-0.01893 17.392 0.06806-0.139 5.8606 0.846 12.022-0.626 17.526-4.602 17.205-15.844 28.908-33.01 35.687z"
              fill="#95215E"
            />
            <path
              d="m919.91 93.893c28.188 2.7233 47.271 27.925 47.684 49.211 0.129 6.651-2.29 8.481-8.588 8.447-24.294-0.13-47.782-22.775-49.308-47.562-0.452-7.331 1.778-11.072 10.212-10.096z"
              fill="#60245F"
            />
            <path
              d="m140.75 48.95c-9.051 6.6593-18.698 9.8939-29.281 10.623-5.266 0.3625-7.175-1.8703-7.381-7.1424-1.029-26.314 23.638-51.649 49.979-51.385 5.711 0.05726 7.69 2.0659 7.665 7.7091-0.076 16.856-7.424 29.777-20.982 40.195z"
              fill="#77ABF8"
            />
            <path
              d="m351.61 34.144c1.552 2.679 3.617 5.5141 3.257 7.998-1.463 10.1-11.741 19.112-21.868 20.238-5.461 0.6073-7.565-1.4423-6.668-6.9434 1.806-11.077 10.522-18.692 25.279-21.293z"
              fill="#1A1A1A"
            />
            <path
              d="m358.99 99.699c7.137 5.81 11.419 12.317 9.733 21.417-13.137 3.134-27.377-7.154-28.67-20.429-0.491-5.0518 1.52-7.5437 6.512-6.1333 4.106 1.16 7.966 3.1874 12.425 5.1453z"
              fill="#1A1A1A"
            />
            <path
              d="m181.95 55.578c-6.427 3.0754-12.428 5.7525-18.605 8.5082-4.977-14.825 9.576-32.098 22.846-29.691 1.558 0.2827 4.022 4.2452 3.537 5.5891-1.899 5.2637-4.813 10.161-7.778 15.593z"
              fill="#1A1A1A"
            />
            <path
              d="m671.04 98.626c1.732-1.7972 3.44-4.0202 5.157-4.0278 12.942-0.0573 23.8 13.553 21.708 26.778-13.662 2.68-24.786-6.485-26.865-22.75z"
              fill="#1A1A1A"
            />
            <path
              d="m860.03 105.27c2.008 5.44 3.65 10.419 5.336 15.532-14.744 3.325-29.331-8.196-29.327-21.337 2e-3 -4.703 3.136-6.2934 6.406-4.7889 6.019 2.7697 11.508 6.6907 17.585 10.594z"
              fill="#1A1A1A"
            />
            <path
              d="m1024.3 103.97c2.41 5.981 4.44 11.524 6.66 17.596-18.6 1.779-30.31-10.068-28.25-26.688 8.93-1.8085 15.39 2.5561 21.59 9.0922z"
              fill="#1A1A1A"
            />
            <path
              d="m1002.2 59.804c-4.647 1.1995-8.759 2.1193-12.857 3.0361-3.183-14.03 8.673-28.705 21.767-28.675 4.75 0.0108 5.47 2.7917 4.84 6.5287-1.41 8.3519-6.01 14.52-13.75 19.11z"
              fill="#1A1A1A"
            />
            <path
              d="m1167.4 102.2c-1.41-7.4735 1.85-8.6189 7.79-7.4206 10.08 2.0378 22.6 14.31 19.37 26.267-11.95 3.259-21.49-3.165-27.16-18.846z"
              fill="#1A1A1A"
            />
            <path
              d="m512.89 94.677c14.851 4.9153 21.263 13.548 20.018 26.29-12.861 3.844-28.663-8.696-27.228-22.084 0.178-1.6586 4.324-2.892 7.21-4.2063z"
              fill="#1A1A1A"
            />
            <path
              d="m493.56 49.536c4.328-8.6619 10.881-13.466 19.741-15.239 4.677-0.9364 6.475 0.9517 6.326 5.6632-0.394 12.487-13.082 23.062-27.934 21.732 0.539-3.9019 1.071-7.7564 1.867-12.156z"
              fill="#1A1A1A"
            />
            <path
              d="m1153.4 59.024c1.42-13.658 9.9-23.255 21.73-24.42 1.97-0.1941 5.76 2.1396 6.08 3.8074 2.08 10.901-13.92 25.973-24.81 23.712-1.09-0.2262-1.93-1.6403-3-3.0985z"
              fill="#1A1A1A"
            />
            <path
              d="m829.65 41.851c4.188-2.509 7.727-5.2624 11.738-6.5845 8.224-2.7107 11.049 0.0525 8.572 8.2062-2.898 9.539-9.19 15.998-19.071 18.411-7.194 1.7565-9.559-0.22-7.746-7.3561 1.099-4.326 3.988-8.1972 6.507-12.676z"
              fill="#1A1A1A"
            />
            <path
              d="m181.06 94.438c12.37 2.6709 20.114 9.4945 22.742 21.518 0.813 3.719 0.221 6.306-4.664 6.462-11.324 0.361-24.733-13.133-23.245-24.175 0.198-1.4697 2.993-2.5896 5.167-3.8059z"
              fill="#1A1A1A"
            />
            <path
              d="m413.2 79.79c0.017-1.7569 0.034-3.5138 0.036-6.5932-0.178-1.7349-0.339-2.1471-0.501-2.5592 12.84-9.8411 15.892-9.8868 26.708 0.0554 0.245 3.505 0.236 6.5584 0.266 10.376-10.34 11.771-16.756 12.086-26.051 0.9868-0.357-1.4528-0.408-1.8596-0.458-2.2663zm13.969-11.602c-7.74 1.8498-10.891 5.8343-8.719 11.512 2.044 5.341 6.509 6.7062 11.254 4.5425 2.254-1.0277 5.233-4.7747 4.79-6.4911-0.878-3.4025-3.904-6.2507-7.325-9.5629z"
              fill="#95215E"
            />
            <path
              d="m734.5 82.479c-0.056-3.6532 0.159-6.853 0.056-10.8 2.37-2.9717 4.788-5.6949 7.798-7.325 8.128-4.4014 13.828 0.5138 19.571 6.1949 0.221 3.5715 0.144 6.7031 0.192 10.615-9.876 12.301-14.705 12.474-27.617 1.3146zm8.249-11.828c-0.804 2.6577-2.728 5.5756-2.183 7.9199 1.214 5.2245 5.657 8.3083 10.417 5.5109 2.881-1.6935 5.985-7.3045 5.189-10.056-1.603-5.5393-6.647-7.5734-13.423-3.3749z"
              fill="#AE8288"
            />
            <path
              d="m89.738 76.072c-0.1658-1.4439-0.3317-2.8877-0.3906-4.821 1.0317-0.9652 2.0187-1.3497 2.8722-1.9304 13.067-8.8921 13.316-8.8904 25.1 1.2924 0.397 3.7457 0.682 6.9622 1.26 10.811-1.272 2.0623-2.806 3.5286-4.408 4.9168-7.865 6.8168-13.87 5.9256-22.789-4.4133-0.664-2.6758-1.1542-4.2655-1.6443-5.8551zm13.905 8.6887c2.909-2.1285 7.957-4.0495 8.189-6.4378 0.295-3.0349-2.708-8.2309-5.427-9.1586-2.351-0.8022-7.5098 2.2794-9.2685 5.0263-3.2574 5.0877 0.3598 8.4304 6.5065 10.57z"
              fill="#ACA9AD"
            />
            <path
              d="m1244.2 70.427c0.07 3.6584 0.01 6.8049 0.06 10.74-8.61 11.823-16.42 12.165-26.3 1.4222 0-3.6948 0.1-6.8718 0.1-10.836 9.07-11.455 14.74-11.684 26.14-1.3267zm-16.06-1.0133c-5.86 2.0172-6.82 6.8859-4.23 11.101 1.5 2.4492 6.73 4.4952 9.47 3.7497 2.52-0.685 5.64-5.4394 5.5-8.2482-0.25-4.8234-3.45-8.6569-10.74-6.6027z"
              fill="#949494"
            />
            <path
              d="m602.38 70.503c0.241 3.6097 0.233 6.7295 0.3 10.629-8.536 11.87-16.114 12.149-26.097 1.2693 0.249-3.5965 0.757-6.728 1.243-10.556 7.367-10.915 14.884-11.267 24.554-1.3431zm-20.921 5.3249c0.635 6.2501 4.144 9.7039 10.343 8.7511 5.347-0.8219 6.984-5.3951 5.748-10.013-0.642-2.3966-4.181-6.1748-5.48-5.8292-3.731 0.9923-6.987 3.7694-10.611 7.0909z"
              fill="#949494"
            />
            <path
              d="m895.58 82.646c-0.031-3.8257 0.201-7.1017 0.134-11.042 2.609-3.0766 7.27-5.8656 9.699-5.8646 7.442 1.6437 0.039 3.289-3.29 3.2904-7e-3 3.6605 0.086 12.578 2.389 14.13 2.245 1.5124 7.989 0.2596 10.448-1.8339 1.622-1.3816 0.738-6.55-0.106-9.7362-0.777-2.9347-6.896-2.5632-9.402-5.8515 4.151-0.8247 14.208-4.1129 14.81 4.1576 0.296 4.0644 0.572 7.5992 1.389 11.704-8.707 11.818-16.496 12.121-26.071 1.0463z"
              fill="#867987"
            />
            <path
              d="m257.02 66.143c5.73-6.1766 10.13-6.299 17.283-0.0028-6.79 0.9595-2.202 4.0569-2.251 6.3159-0.08 3.6511-0.035 8.4376-2.191 10.544-1.66 1.6215-8.787 0.9952-9.647-0.6434-1.561-2.9773-0.402-7.4617-0.085-11.293 0.094-1.1374 1.17-2.1936 2.103-3.8241-2.17-0.4569-3.691-0.777-5.212-1.0971z"
              fill="#D9D9D9"
            />
            <path
              d="m256.75 66.366c1.793 0.0978 3.314 0.4178 5.484 0.8747-0.933 1.6305-2.008 2.6868-2.102 3.8241-0.318 3.8312-1.476 8.3156 0.085 11.293 0.859 1.6386 7.986 2.2649 9.646 0.6435 2.157-2.1068 2.111-6.8934 2.191-10.544 0.049-2.259-4.539-5.3563 2.269-5.6989 1.5 1.2619 2.397 2.401 3.52 3.9227 0.154 3.4784 0.081 6.5742 0.087 10.444-8.366 12.087-16.76 12.632-24.199 1.7161 9e-3 -3.9288 0.12-7.2298 0.082-11.242-0.149-0.7112-0.437-1.4378 0.172-1.8954 1.03-1.2299 1.453-2.0022 1.875-2.7746 0 0 0.617-0.3398 0.89-0.5621z"
              fill="#949494"
            />
            <path
              d="m912.86 67.384c1.863 3.1937 1.262 1.2743 2.039 4.2089 0.845 3.1862 1.728 8.3547 0.106 9.7362-2.458 2.0935-8.203 3.3463-10.448 1.8339-2.302-1.5513-2.739-6.8576-2.732-10.518 5e-3 -2.5951-0.9-0.419 0.34-3.6141 1.58-1.0094 8.915-1.713 10.695-1.6469z"
              fill="#CFCCCF"
            />
            <path
              d="m255.41 67.017c0.031 0.6838-0.392 1.4561-1.25 2.3354-0.025-0.6776 0.386-1.4623 1.25-2.3354z"
              fill="#D9D9D9"
            />
            <path
              d="m1078.3 76.572c-0.97 6.9505-4.32 10.381-10.68 7.8123-5.33-2.156-6.11-7.085-3.43-11.626 1.28-2.1525 5.44-4.8055 6.93-4.1479 2.9 1.275 4.84 4.7309 7.18 7.9617z"
              fill="#ECD2CC"
            />
            <path
              d="m427.81 68.305c2.78 3.1948 5.805 6.0429 6.684 9.4454 0.443 1.7165-2.537 5.4634-4.791 6.4911-4.744 2.1638-9.21 0.7986-11.253-4.5424-2.172-5.6773 0.978-9.6617 9.36-11.394z"
              fill="#D9D9D9"
            />
            <path
              d="m743.25 70.3c6.269-3.8483 11.314-1.8143 12.917 3.725 0.796 2.7514-2.308 8.3624-5.19 10.056-4.76 2.7974-9.202-0.2864-10.416-5.5109-0.545-2.3443 1.379-5.2622 2.689-8.27z"
              fill="#ECD2CC"
            />
            <path
              d="m103 84.658c-5.5015-2.0381-9.1187-5.3809-5.8613-10.468 1.7587-2.747 6.9173-5.8286 9.2683-5.0264 2.72 0.9277 5.722 6.1237 5.427 9.1586-0.231 2.3884-5.28 4.3093-8.834 6.3363z"
              fill="#D9D9D9"
            />
            <path
              d="m1228.7 69.187c6.7-1.8276 9.9 2.0059 10.15 6.8293 0.14 2.8088-2.98 7.5632-5.5 8.2482-2.74 0.7455-7.97-1.3005-9.47-3.7496-2.59-4.2154-1.63-9.0841 4.82-11.328z"
              fill="#D9D9D9"
            />
            <path
              d="m581.55 75.205c3.533-2.6985 6.789-5.4756 10.519-6.4679 1.3-0.3456 4.839 3.4326 5.481 5.8292 1.236 4.6177-0.402 9.1909-5.749 10.013-6.198 0.9528-9.707-2.5011-10.251-9.3742z"
              fill="#D9D9D9"
            />
            <path
              d="m1399 72.319c0 6.8148-24.58 12.339-38.66 12.339-14.09 0-25.5-5.5244-25.5-12.339 0-6.8147 11.41-12.339 25.5-12.339 14.08 0 38.66 5.5244 38.66 12.339z"
              fill="#9DAFE8"
            />
          </svg>
          {[
            "Insufficient funds delaying your plans",
            "Operations that drain resources unnecessarily",
            "Ineffective teams leading to missed goals",
            "Marketing efforts yielding no return on investment",
            "Lack of expertise in key areas",
            "Inability to manage cash flow effectively",
            "Difficulty in attracting investors",
            "Feeling overwhelmed and unsupported in your journey",
          ].map((text, index) => (
            <div key={index} className="tiles-item  relative mx-auto w-72 h-48">
              <div className="absolute inset-0 border border-[#202222] bg-gradient-to-br from-gray-50 to-[#ffffff] rounded-2xl   flex items-center justify-center text-center p-4">
                <p className="font-bold text-xl text-black">{text}</p>
              </div>

              {index < 4 ? (
                // Bottom Triangle (for first 4 tiles)
                <svg
                  className="absolute top-[11.84rem]  z-20 left-1/2 -translate-x-1/2 "
                  width="51"
                  height="22"
                  fill="none"
                >
                  <path d="M1 1L25 20.5L50 1" stroke="black" />
                  <path d="M1 1H49.5" stroke="white" strokeWidth="2px" />
                </svg>
              ) : (
                // Top Triangle (for last 4 tiles)
                <svg
                  className="absolute -top-5 z-10 left-1/2 -translate-x-1/2"
                  width="51"
                  height="21"
                  fill="none"
                >
                  <path d="M1 20.5L25 1L50 20.5" stroke="black" />
                  <path d="M1 20.5H49.5" stroke="white" />
                </svg>
              )}
            </div>
          ))}
        </div> */}

          {/* //@Green Triangle SVG */}
          <div className="tiles grid grid-cols-4 px-40   justify-center h-screen pt-40 text-lg text-black">
            {[
              "Insufficient funds delaying your plans",
              "Operations that drain resources unnecessarily",
              "Ineffective teams leading to missed goals",
              "Marketing efforts yielding no return on investment",
              "Lack of expertise in key areas",
              "Inability to manage cash flow effectively",
              "Difficulty in attracting investors",
              "Feeling overwhelmed and unsupported in your journey",
            ].map((text, index) => (
              <div
                key={index}
                className="  relative mx-auto w-60 h-60"
              >
                <div className="absolute inset-0 border border-[#202222] bg-gradient-to-br from-gray-50 to-[#ffffff] rounded-2xl shadow-lg flex items-center justify-center text-center p-4">
                  <p className="font-bold text-xl text-black">{text}</p>
                </div>

                {index < 4 ? (
                  // Bottom Triangle (for first 4 tiles)
                  <div className="absolute ml-10 top-60 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[32px] border-r-[32px] border-t-[64px] border-l-transparent border-r-transparent border-t-[#286090]" />
                ) : (
                  // Top Triangle (for last 4 tiles)
                  <div className="absolute mr-20 -top-16 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[32px] border-r-[32px] border-b-[64px] border-l-transparent border-r-transparent border-b-[#286090]" />
                )}
              </div>
            ))}
          </div>
        </div>
        {/* <div className="center-div2   challenges  ">
          <Challenges />
        </div> */}
      </div>
    </div>
  );
}

export default Banner;

























  {
    /* //@green  1st tile dsign */
  }
 
  //  <div className="tiles grid grid-cols-4 px-40   justify-center h-screen pt-40 text-lg text-black">
  //         {[
  //           "Insufficient funds delaying your plans",
  //           "Operations that drain resources unnecessarily",
  //           "Ineffective teams leading to missed goals",
  //           "Marketing efforts yielding no return on investment",
  //           "Lack of expertise in key areas",
  //           "Inability to manage cash flow effectively",
  //           "Difficulty in attracting investors",
  //           "Feeling overwhelmed and unsupported in your journey",
  //         ].map((text, index) => (
  //           <div key={index} className="tiles-item  relative mx-auto w-60 h-60">
               
  //             <div className="absolute inset-0 border border-[#202222] bg-gradient-to-br from-gray-50 to-[#ffffff] rounded-2xl shadow-lg flex items-center justify-center text-center p-4">
  //               <p className="font-bold text-xl text-black">{text}</p>
  //             </div>

              
  //             {index < 4 ? (
  //               // Bottom Triangle (for first 4 tiles)
  //               <div className="absolute ml-10 top-60 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[32px] border-r-[32px] border-t-[64px] border-l-transparent border-r-transparent border-t-[#286090]" />
  //             ) : (
  //               // Top Triangle (for last 4 tiles)
  //               <div className="absolute mr-20 -top-16 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[32px] border-r-[32px] border-b-[64px] border-l-transparent border-r-transparent border-b-[#286090]" />
  //             )}
  //           </div>
  //         ))}
  //       </div>