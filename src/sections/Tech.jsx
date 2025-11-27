// src/sections/Tech.jsx (din nuvarande Journey.jsx med Tech-export)
import styled from "styled-components";
import techData from "../data/tech.json";
import { media } from "../data/media.js";

const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: Poppins;
  padding: 128px 0;
  gap: 16px;
  background: #000;
  color: #fff;
  text-align: center;

  @media ${media.tablet} {
    padding: 96px 16px;
  }

  @media ${media.mobile} {
    padding: 64px 16px;
  }
`;

const Inner = styled.div`
  max-width: 720px;
  padding: 0 24px;

  h2 {
    margin: 0 0 16px;
    font-size: 80px;
    font-weight: 700;
  }

  p {
    margin: 0;
    font-size: 30px;
    line-height: normal;
    font-weight: 500;
  }

  @media ${media.tablet} {
    padding: 0 16px;

    h2 {
      font-size: 60px;
    }

    p {
      font-size: 16px;
      font-weight: 500;
      line-height: normal;
      }
  }

  @media ${media.mobile} {
    h2 {
      font-size: 40px;
    }

    p {
      font-size: 16px;
      font-weight: 500;
      line-height: normal;
    }
  }
`;

export const Tech = () => {
  const techLine = techData.tech.join(", ");

  return (
    <Wrap id="tech">
      <Inner>
        <h2>Tech</h2>
        <p>{techLine}</p>
      </Inner>
    </Wrap>
  );
};
