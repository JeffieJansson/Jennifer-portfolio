// src/sections/Tech.jsx
import styled from "styled-components";
import techStack from "../data/tech-stack.json";
import { media } from "../data/media.js";
import { useInView } from "../hooks/useInView.js";
import { TechBadge } from "../components/TechBadge";

// ---- STYLES ----
const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 80px;
  gap: 48px;
  color: var(--cream);

  @media ${media.tablet} { padding: 64px 40px; }
  @media ${media.mobile} { padding: 48px 24px; }
`;

const Title = styled.h2`
  margin: 0;
  font-size: clamp(40px, 5vw, 60px);
  font-weight: 400;
  text-align: center;
  letter-spacing: 0.05em;
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transform: ${({ $inView }) => ($inView ? "translateY(0)" : "translateY(24px)")};
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
`;

const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px 80px;
  width: 100%;
  max-width: 1200px;
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transform: ${({ $inView }) => ($inView ? "translateY(0)" : "translateY(24px)")};
  transition: opacity 0.7s ease-out 0.15s, transform 0.7s ease-out 0.15s;

  @media ${media.tablet} { grid-template-columns: 1fr; gap: 40px; }
  @media ${media.mobile} { grid-template-columns: 1fr; gap: 32px; }
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CategoryTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--gold);
  position: relative;
  padding-bottom: 12px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 32px;
    height: 1px;
    background: var(--gold);
    opacity: 0.5;
  }
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const TechTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 14px;
  border-radius: 6px;
  border: 1px solid rgba(201, 169, 110, 0.2);
  background: rgba(255, 255, 255, 0.02);
  color: var(--cream-dim);
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 400;
  transition: border-color 0.25s ease, background 0.25s ease, color 0.25s ease;

  &:hover {
    border-color: rgba(201, 169, 110, 0.5);
    background: rgba(201, 169, 110, 0.06);
    color: var(--cream);
  }

  img {
    width: 20px;
    height: 20px;
    object-fit: contain;
  }
`;

// ---- COMPONENT ----
export const Tech = () => {
  const [ref, inView] = useInView();

  const categoryLabels = {
    frontend: "Frontend",
    backend: "Backend",
    database: "Database",
    tools: "Tools",
    digitalAnalytics: "Digital Analytics",
  };

  return (
    <Wrap id="skills" ref={ref}>
      <Title $inView={inView}>Tech</Title>
      <CategoriesGrid $inView={inView}>
        {Object.entries(techStack).map(([category, technologies]) => (
          <Category key={category}>
            <CategoryTitle>{categoryLabels[category]}</CategoryTitle>
            <TechList>
              {technologies.map((tech, index) => (
                <TechBadge key={`${category}-${index}`} tech={tech} />
              ))}
            </TechList>
          </Category>
        ))}
      </CategoriesGrid>
    </Wrap>
  );
};
