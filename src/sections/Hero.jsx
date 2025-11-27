// src/sections/Hero.jsx
import styled from "styled-components";
import PortraitImg from "/portrait.png";
import Img2 from "/mic.png";
import Img3 from "/arts.png";
import { media } from "../data/media.js";

const IntroWrapper = styled.header`
  display: flex;
  padding: 128px 24px 64px 24px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  font-family: Poppins;

  /* Tablet */
  @media ${media.tablet} {
    padding: 96px 16px 64px 16px;
  }

  /* Mobile */
  @media ${media.mobile} {
    padding: 64px 16px 48px 16px;
    gap: 24px;
  }
`;

const IntroText = styled.section`
  max-width: 720px;
  text-align: center;

  h3 {
    color: #000;
    font-size: 30px;
    font-weight: 500;
    line-height: normal;
    margin: 0 0 8px;
  }

  h1 {
    color: #000;
    font-size: 100px;
    font-weight: 700;
    line-height: normal;
    margin: 0 0 24px;
  }

  p {
    color: #202020;
    font-size: 18px;
    font-weight: 400;
    line-height: 32px;
    margin: 0;
  }

  @media ${media.tablet} {
    h1 {
      font-size: 56px;
    }

    p {
      font-size: 16px;
      line-height: 28px;
    }
  }

  @media ${media.mobile} {
    h3 {
      font-size: 20px;
    }

    h1 {
      font-size: 40px;
    }

    p {
      font-size: 16px;
      line-height: 26px;
    }
  }
`;

const ImageBox = styled.div`
  position: relative;
  margin: 32px auto 24px;
  width: 520px;
  height: 450px;
  display: block;

  @media ${media.tablet} {
    width: 420px;
    height: 230px;
  }

  @media ${media.mobile} {
    width: 280px;
    height: 200px;
  }
    
  img {
    position: absolute;
    top: 0;
    width: 358px;
    height: 382px;
    border-radius: 16px;
    object-fit: cover;
    box-shadow: 0 24px 60px rgba(0, 0, 0, 0.25);
    

    @media ${media.tablet} {
      width: 260px;
      height: 277px;
    }

    @media ${media.mobile} {
      width: 144px;
      height: 154px;
      box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
    }
  }

  /* Left img */
  img:nth-child(1) {
    left: 0;
    transform: translateY(20px) rotate(-8deg);
    z-index: 1;

    @media ${media.mobile} {
      transform: translate(-20px) rotate(-8deg);
    }
  }

  /* middle img */
   img:nth-child(2) {
    left: 50%;
    transform: translate(-50%, -16px);
    z-index: 3;

    @media ${media.mobile} {
      transform: translate(-50%, -16px);
    }
  }

  /* right img */
  img:nth-child(3) {
    right: 0;
    transform: translateY(20px) rotate(8deg);
    z-index: 1;

    @media ${media.mobile} {
      transform: translate(30px) rotate(8deg);
    }
  }
`;

export const Hero = () => {
  return (
    <IntroWrapper>
      <IntroText>
        <h3>Hi there, I'm</h3>
        <h1>
          Jennifer <br /> Jansson
        </h1>
        <ImageBox>
        <img src={Img3} alt="Picture of woman doing martial arts" />
        <img src={PortraitImg} alt="Portrait of Jennifer" />
        <img src={Img2} alt="Picture of microphone" />
        </ImageBox>
        <h3>Frontend Developer & Digital Analytics Specialst</h3>
        <p>
          I love bridging the gap between design, data, and technology. I have
          enjoyed understanding user behavior and uncovering insights, but now I
          have realized that I don&apos;t just want to analyze digital experiences — I
          want to build them. Today, that passion drives me to create intuitive,
          accessible and meaningful digital products that deliver real value for
          real users.
        </p>
      </IntroText>
    </IntroWrapper>
  );
};
