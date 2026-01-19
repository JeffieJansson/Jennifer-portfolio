// src/sections/Hero.jsx
import styled from "styled-components";
import PortraitImg from "/portrait.png";
import { media } from "../data/media.js";

// ---- STYLES ----
const IntroWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 120px 80px 80px 80px;
  gap: 80px;
  margin-top: 60px;
  min-height: 100vh;
  background: linear-gradient(135deg, #fdfbfb 0%, #f8f5f9 50%, #fef9f8 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -200px;
    right: -200px;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(232, 196, 221, 0.15) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -150px;
    left: -150px;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(196, 216, 236, 0.12) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
  }

  @media ${media.tablet} {
    padding: 100px 40px 60px 40px;
    gap: 50px;
    flex-direction: column;

    &::before,
    &::after {
      display: none;
    }
  }

  @media ${media.mobile} {
    padding: 80px 24px 60px 24px;
    gap: 40px;
    flex-direction: column;

    &::before,
    &::after {
      display: none;
    }
  }
`;

const IntroText = styled.div`
  flex: 1;
  max-width: 600px;
  z-index: 2;

  h3 {
    color: #C4B5A0;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin: 0 0 20px 0;
    font-family: 'Poppins', sans-serif;
    animation: fadeInUp 0.8s ease-out;
  }

  h1 {
    color: #2d2d2d;
    font-size: 72px;
    font-weight: 700;
    line-height: 1.1;
    margin: 0 0 16px 0;
    letter-spacing: -2px;
    background: linear-gradient(135deg, #2d2d2d 0%, #5a4a5a 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: fadeInUp 0.8s ease-out 0.1s backwards;
  }

  h2 {
    color: #6b6b6b;
    font-size: 22px;
    font-weight: 400;
    line-height: 1.5;
    margin: 24px 0 0 0;
    font-style: italic;
    animation: fadeInUp 0.8s ease-out 0.2s backwards;
  }

  @media ${media.tablet} {
    h1 {
      font-size: 52px;
    }

    h2 {
      font-size: 20px;
    }
  }

  @media ${media.mobile} {
    h3 {
      font-size: 12px;
      letter-spacing: 2px;
    }

    h1 {
      font-size: 38px;
      letter-spacing: -1px;
    }

    h2 {
      font-size: 18px;
      margin: 20px 0 0 0;
    }
  }
`;

const ImageBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 550px;
  z-index: 2;

  @media ${media.tablet} {
    min-height: 450px;
  }

  @media ${media.mobile} {
    min-height: 350px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 120%;
    height: 120%;
    background: linear-gradient(135deg, rgba(212, 165, 165, 0.15) 0%, rgba(196, 216, 236, 0.15) 100%);
    border-radius: 50%;
    z-index: -1;
  }

  img {
    width: 100%;
    max-width: 450px;
    height: auto;
    aspect-ratio: 3/4;
    border-radius: 200px 200px 30px 30px;
    object-fit: cover;
    box-shadow: 0 30px 80px rgba(212, 165, 165, 0.2);
    border: 8px solid rgba(255, 255, 255, 0.8);
    position: relative;
    z-index: 1;
    animation: fadeInUp 0.8s ease-out 0.3s backwards;

    @media ${media.tablet} {
      max-width: 380px;
    }

    @media ${media.mobile} {
      max-width: 280px;
      border: 6px solid rgba(255, 255, 255, 0.8);
    }
  }
`;

const Accent = styled.div`
  width: 60px;
  height: 4px;
  background: linear-gradient(90deg, #D4A5A5 0%, #C4B5A0 100%);
  margin: 20px 0;
  border-radius: 2px;
  animation: fadeInUp 0.8s ease-out 0.15s backwards;

  @media ${media.mobile} {
    width: 50px;
    height: 3px;
  }
`;

// ---- COMPONENT ----
export const Hero = () => {
  return (
    <IntroWrapper id="home">
      <IntroText>
        <h3>Hi there, I'm</h3>
        <Accent />
        <h1>Jennifer Jansson</h1>
        <h2>Frontend Developer & Digital Analytics Specialist</h2>
      </IntroText>
      <ImageBox>
        <img src={PortraitImg} alt="Portrait of Jennifer" />
      </ImageBox>
    </IntroWrapper>
  );
};
