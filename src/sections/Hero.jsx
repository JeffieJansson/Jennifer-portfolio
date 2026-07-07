import styled from "styled-components";
import PortraitImg from "/portrait.png";
import { media } from "../data/media.js";

// ---- STYLES ----
const IntroWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 80px 80px 60px 80px;
  gap: 60px;
  margin-top: 60px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: -200px;
    right: -200px;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(201, 169, 110, 0.06) 0%, transparent 70%);
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
    background: radial-gradient(circle, rgba(201, 169, 110, 0.04) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
  }

  @media ${media.tablet} {
    padding: 70px 40px 50px 40px;
    gap: 40px;
    flex-direction: column;

    &::before, &::after { display: none; }
  }

  @media ${media.mobile} {
    padding: 60px 24px 40px 24px;
    gap: 32px;
    flex-direction: column;

    &::before, &::after { display: none; }
  }
`;

const IntroText = styled.div`
  flex: 1;
  max-width: 600px;
  z-index: 2;

  h3 {
    color: var(--gold);
    font-family: 'Poppins', sans-serif;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin: 0 0 20px 0;
    animation: fadeInUp 0.8s ease-out;
  }

  h1 {
    font-size: clamp(3rem, 6vw, 5rem);
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: -0.01em;
    padding-left: 0.08em;
    margin-left: -0.08em;
    background: linear-gradient(135deg, var(--cream) 0%, var(--gold-light) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: fadeInUp 0.8s ease-out 0.1s backwards;
  }

  h2 {
    font-family: 'Poppins', sans-serif;
    color: var(--cream-muted);
    font-size: 16px;
    font-weight: 300;
    line-height: 1.5;
    margin: 24px 0 0 0;
    letter-spacing: 0.2px;
    animation: fadeInUp 0.8s ease-out 0.2s backwards;
  }

  @media ${media.tablet} {
    h1 { font-size: 3rem; }
    h2 { font-size: 15px; }
  }

  @media ${media.mobile} {
    h3 { font-size: 10px; letter-spacing: 2.5px; }
    h1 { font-size: 2.4rem; }
    h2 { font-size: 14px; margin: 16px 0 0 0; }
  }
`;

const ImageBox = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 460px;
  z-index: 2;

  @media ${media.tablet} { min-height: 380px; }
  @media ${media.mobile} { min-height: 300px; }

  img {
    width: 100%;
    max-width: 250px;
    height: auto;
    aspect-ratio: 3/4;
    border-radius: 200px 200px 30px 30px;
    object-fit: cover;
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(201, 169, 110, 0.2);
    border: 1px solid rgba(158, 130, 77, 0.69);
    filter: brightness(0.72);
    position: relative;
    z-index: 1;
    animation: fadeInUp 0.8s ease-out 0.3s backwards, float 4s ease-in-out 1.1s infinite;

    @media ${media.tablet} { max-width: 200px; }
    @media ${media.mobile} { max-width: 180px; }
  }
`;

const Accent = styled.div`
  width: 48px;
  height: 1px;
  background: linear-gradient(90deg, var(--gold) 0%, var(--gold-light) 100%);
  margin: 20px 0;
  animation: fadeInUp 0.8s ease-out 0.15s backwards;

  @media ${media.mobile} {
    width: 36px;
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
        <h2>Web Developer & Digital Analytics Specialist</h2>
      </IntroText>
      <ImageBox>
        <img src={PortraitImg} alt="Portrait of Jennifer" />
      </ImageBox>
    </IntroWrapper>
  );
};
