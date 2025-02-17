import React, { useEffect } from "react";
import styled from "styled-components";
import { gsap, Expo, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const PageReveal = () => {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: ".reveal-container",
          start: "top top",
          end: "+=150%", // Reduced scroll range for better effect
          scrub: 1, // Smoother animation
          pin: true,
        },
      })
      .to(".top-section", { y: "-100%", duration: 1.5, ease: Expo.easeInOut })
      .to(
        ".bottom-section",
        { y: "100%", duration: 1.5, ease: Expo.easeInOut },
        "-=1.5"
      )
      .to(".content", { opacity: 1, y: 0, duration: 1, ease: Expo.easeInOut });

    // Fix text animation lag
    gsap.fromTo(
      ".text-line",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: ".content",
          start: "top 70%", // Start fading in earlier
          end: "top 40%", // Extend the transition for smoothness
          scrub: 0.5, // Smoother fade-in effect
        },
      }
    );
  }, []);

  return (
    <AppContainer>
      <RevealContainer className="reveal-container">
        <TopSection className="top-section" />
        <BottomSection className="bottom-section" />

        <Content className="content">
          <p className="text-line">The greatest glory in living lies</p>
          <p className="text-line">not in never falling,</p>
          <p className="text-line">but in rising every time we fall.</p>
          <p className="text-line">- Nelson Mandela</p>
        </Content>
      </RevealContainer>
    </AppContainer>
  );
};

export default PageReveal;

// Styled Components
const AppContainer = styled.div`
  width: 100vw;
  height: 300vh;
  position: relative;
  overflow: hidden;
  background-color: rgb(201, 177, 177); // Fixed typo in "background-color"
`;

const RevealContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TopSection = styled.div`
  background-color: #121212;
  height: 50vh;
  width: 100vw;
  position: absolute;
  top: 0;
`;

const BottomSection = styled.div`
  background-color: #f48049;
  height: 50vh;
  width: 100vw;
  position: absolute;
  bottom: 0;
`;

const Content = styled.div`
  height: 100vh;
  width: 100%;
  position: relative;
  background-color: #121212;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  opacity: 0; /* Initially hidden */
  transform: translateY(50px);

  p {
    text-align: center;
    font-size: 64px;
    font-weight: 500;
    margin: 10px 0;
  }
`;
