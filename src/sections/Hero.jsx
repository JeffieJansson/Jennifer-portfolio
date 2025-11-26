// src/sections/Hero.jsx
import styled from "styled-components";
import PortraitImg from "/portrait.png";
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

const PortraitImage = styled.img`
  width: 358px;
  height: 382px;
  border-radius: 8px;
  object-fit: cover;
  display: block;
  margin: 32px auto 16px;

  @media ${media.tablet} {
    width: 267px;
    height: 277px;
  }

  @media ${media.mobile} {
    width: 144px;
    height: 154px;
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
        <PortraitImage src={PortraitImg} alt="Portrait of Jennifer" />
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
