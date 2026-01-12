import styled from "styled-components";
import { media } from "../data/media.js";

// ---- STYLES ----
const AboutWrapper = styled.section`
  padding: 120px 80px;
  background-color: #FAF8F5;
  display: flex;
  align-items: center;
  gap: 80px;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    bottom: -100px;
    right: -150px;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(212, 165, 165, 0.1) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
  }

  @media ${media.tablet} {
    padding: 80px 40px;
    gap: 50px;
    flex-direction: column;
  }

  @media ${media.mobile} {
    padding: 60px 24px;
    gap: 40px;
    flex-direction: column;
  }
`;


const AboutContent = styled.div`
  flex: 1;
  max-width: 600px;
  z-index: 2;

  h2 {
    font-size: 52px;
    color: #2D2D2D;
    margin-bottom: 16px;
    line-height: 1.2;
    animation: fadeInUp 0.8s ease-out 0.1s backwards;
  }

  .accent-line {
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #D4A5A5 0%, #C4B5A0 100%);
    border-radius: 2px;
    margin-bottom: 24px;
    animation: fadeInUp 0.8s ease-out 0.2s backwards;
  }

  p {
    color: #5A5A5A;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.8;
    margin: 0;
    animation: fadeInUp 0.8s ease-out 0.3s backwards;
  }

  @media ${media.tablet} {
    h2 {
      font-size: 40px;
    }

    p {
      font-size: 16px;
      line-height: 1.7;
    }
  }

  @media ${media.mobile} {
    h2 {
      font-size: 32px;
    }

    p {
      font-size: 15px;
      line-height: 1.6;
    }
  }
`;

// ---- COMPONENT ----
export const About = () => {
  return (
    <AboutWrapper id="about">
      <AboutContent>
        <h2>About Me</h2>
        <div className="accent-line"></div>
        <p>
          I love bridging the gap between design, data, and technology. I have
          enjoyed understanding user behavior and uncovering insights, but now I
          have realized that I don&apos;t just want to analyze digital experiences — I
          want to build them. Today, that passion drives me to create intuitive,
          accessible and meaningful digital products that deliver real value for
          real users.
        </p>
      </AboutContent>
    </AboutWrapper>
  );
};
