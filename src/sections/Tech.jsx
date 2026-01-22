// src/sections/Tech.jsx
import styled from "styled-components";
import techStack from "../data/tech-stack.json";
import { media } from "../data/media.js";

// ---- STYLES ----
const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 128px 80px;
  gap: 64px;

  color: #2D2D2D;

  @media ${media.tablet} {
    padding: 96px 40px;
  }

  @media ${media.mobile} {
    padding: 64px 24px;
  }
`;

const Title = styled.h2`
  margin: 0;
  font-size: 72px;
  font-weight: 700;
  text-align: center;

  @media ${media.tablet} {
    font-size: 56px;
  }

  @media ${media.mobile} {
    font-size: 40px;
  }
`;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px 80px;
  width: 100%;
  max-width: 1200px;

  @media ${media.tablet} {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  @media ${media.mobile} {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CategoryTitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  position: relative;
  padding-bottom: 12px;
  color: #2D2D2D;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, #D4A5A5 0%, #C4B5A0 100%);
    border-radius: 2px;
  }

  @media ${media.mobile} {
    font-size: 20px;
  }
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const TechTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: 24px;
  border: 1.5px solid #D4A5A5;
  background: rgba(212, 165, 165, 0.16);
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }

  img {
    width: 30px;
    height: 30px;
    object-fit: contain;
  }
`;

// ---- COMPONENT ----
export const Tech = () => {
  const categoryLabels = {
    frontend: "Frontend",
    backend: "Backend",
    database: "Database",
    tools: "Tools",
    digitalAnalytics: "Digital Analytics"
  };

  return (
    <Wrap id="tech">
      <Title>Tech</Title>
      <CategoriesGrid>
        {Object.entries(techStack).map(([category, technologies]) => (
          <Category key={category}>
            <CategoryTitle>{categoryLabels[category]}</CategoryTitle>
            <TechList>
              {technologies.map((tech, index) => (
                <TechTag key={`${category}-${index}`}>
                  {tech.image && <img src={tech.image} alt={tech.name} />}
                  {tech.name}
                </TechTag>
              ))}
            </TechList>
          </Category>
        ))}
      </CategoriesGrid>
    </Wrap>
  );
};
