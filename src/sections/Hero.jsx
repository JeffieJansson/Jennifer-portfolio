import styled from "styled-components";
import PortraitImg from "../assets/portrait.png";
import { media } from "../data/media.js";

const IntroWrapper = styled.header`
  display: flex;
  height: 1289px;
  padding: 128px 0 64px 0;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  font-family: Poppins;

    /* Tablet & mobile: let the height grow with content and add side padding */
  @media ${media.tablet} {
    height: auto;
    padding: 96px 16px 64px 16px;
  }

  @media ${media.mobile} {
    padding: 64px 16px 48px 16px;
    gap: 24px;
  }
`;

const IntroText = styled.section`
    
    h3 {
      color: #000;
      text-align: center;
      font-size: 30px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }

    h1 {
      color: #000;
      text-align: center;
      font-size: 100px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;

    }

    p {
      color: #202020;
      text-align: center;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 32px; /* 177.778% */
 
    }


    /* Tablet adjustments */
  @media ${media.tablet} {
    h1 {
      font-size: 72px;
    }

    p {
      font-size: 16px;
      line-height: 28px;
    }
  }

  /* Mobile adjustments */
  @media ${media.mobile} {
    h3 {
      font-size: 20px;
    }

    h1 {
      font-size: 42px;
    }

    p {
      font-size: 14px;
      line-height: 24px;
    }
  }

`;

const PortraitImage = styled.img`
width: 475px;
height: 398px;
flex-shrink: 0;
aspect-ratio: 475/398;

  @media ${media.tablet} {
    width: 360px;
    height: auto;
  }

  @media ${media.mobile} {
    width: 220px;
    height: auto;
    max-width: 80vw;
  }
`;

export const Hero = () => {
    return (
        <IntroWrapper>
            <IntroText>
                <h3>Hi there, I'm</h3>
                <h1>Jennifer <br /> Jansson</h1>
                <PortraitImage src={PortraitImg} alt="Portrait of Jennifer" />
                <h3>Frontend Developer & Digital Analytics Specialst</h3>
                <p>
                  I love bridging the gap between design, data, and technology. I have
                  enjoyed understanding user behavior and uncovering insights, but now I
                  have realized that I don&apos;t just want to analyze digital experiences —
                  I want to build them. Today, that passion drives me to create
                  intuitive, accessible and meaningful digital products that deliver
                  real value for real users.
                </p>
            </IntroText>
        </IntroWrapper>
    )
}
