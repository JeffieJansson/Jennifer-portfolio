// src/sections/Journey.jsx
import styled from "styled-components";
import techData from "../data/tech.json";
import { media } from "../data/media.js";

const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: Poppins;

 
  padding: 42px 0 42px 0;
  gap: 16px;

  background: #000;
  color: #fff;
  text-align: center;

    @media ${media.tablet} {
    padding: 64px 16px;
  }

  @media ${media.mobile} {
    padding: 48px 16px;
  }
`;

const Inner = styled.div`
  max-width: 720px;
  padding: 0 16px;

  h2 {
    margin: 0;
    font-size: 80px;        
    font-weight: 700;
  }

  p {
    margin: 0;
    font-size: 16px;       
    line-height: 1.6;
  }

   @media ${media.tablet} {
    h2 {
      font-size: 56px;
    }

    p {
      font-size: 15px;
    }
  }

  @media ${media.mobile} {
    h2 {
      font-size: 40px;
    }

    p {
      font-size: 14px;
      line-height: 1.5;
    }
  }
`;

export const Tech = () => { // Tech component to display technologies
  const techLine = techData.tech.join(", "); // transform array into comma-separated string

  return (
    <Wrap id="tech">
      <Inner>
        <h2>Tech</h2>
        <p>{techLine}</p>
      </Inner>
    </Wrap>
  );
};
