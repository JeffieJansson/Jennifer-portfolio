// src/sections/Projects.jsx
import { useState } from "react";
import styled from "styled-components";
import { media } from "../data/media.js";
import projects from "../data/projects.json";
import Button from "../components/Button";
import { TagsRow, Tag } from "../components/Card";
import { LiveIcon, CodeIcon } from "../components/Icons";
import { SeeMoreButton } from "../components/SeeMoreButton";
import { useInView } from "../hooks/useInView.js";

// ---- STYLES ----
const ProjectsSection = styled.section`
  background: transparent;
  display: flex;
  justify-content: center;
  padding: 80px 0;
  overflow-x: hidden;

  @media ${media.tablet} { padding: 64px 16px; }
  @media ${media.mobile} { padding: 48px 16px; }
`;

const ProjectsInner = styled.div`
  width: 1184px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
`;

const ProjectsTitle = styled.h2`
  font-size: clamp(40px, 5vw, 60px);
  font-weight: 400;
  text-align: center;
  color: var(--cream);
  letter-spacing: 0.05em;
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transform: ${({ $inView }) => ($inView ? "translateY(0)" : "translateY(24px)")};
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
`;

const ProjectsList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ProjectRow = styled.article`
  display: flex;
  align-items: center;
  gap: 56px;
  align-self: stretch;
  flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};
  background: var(--surface);
  border: 1px solid rgba(201, 169, 110, 0.1);
  border-radius: 20px;
  padding: 48px;
  opacity: ${({ $inView }) => ($inView ? 1 : 0)};
  transform: ${({ $inView }) => ($inView ? "translateY(0)" : "translateY(24px)")};
  transition: opacity 0.8s ease-out, transform 0.8s ease-out, border-color 0.3s ease;

  &:hover {
    border-color: rgba(201, 169, 110, 0.25);
  }

  @media ${media.tablet} {
    flex-direction: column;
    align-items: flex-start;
    gap: 28px;
    padding: 32px;
  }

  @media ${media.mobile} {
    align-items: center;
    padding: 24px;
  }
`;

const ProjectThumb = styled.img.attrs({ loading: "lazy" })`
  flex-shrink: 0;
  border-radius: 12px;
  object-fit: cover;
  width: 460px;
  height: auto;
  max-height: 320px;
  opacity: 0.9;
  transition: opacity 0.3s ease;

  ${ProjectRow}:hover & {
    opacity: 1;
  }

  @media ${media.tablet} {
    width: 100%;
    max-height: 280px;
    object-fit: cover;
  }

  @media ${media.mobile} {
    width: 100%;
    max-width: 320px;
    max-height: 220px;
  }
`;

const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  flex: 1;
  position: relative;
  z-index: 2;
`;

const ProjectTitle = styled.h3`
  font-size: clamp(22px, 2.5vw, 30px);
  font-weight: 500;
  color: var(--cream);
  line-height: 1.2;
  letter-spacing: 0.01em;
`;

const ProjectSummary = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: var(--cream-dim);
  font-weight: 300;

  @media ${media.mobile} {
    font-size: 14px;
    line-height: 1.6;
  }
`;

const ButtonsRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 6px;
`;

// ---- ANIMATED ROW ----
const AnimatedProjectRow = ({ project, index }) => {
  const [ref, inView] = useInView(0.1);
  return (
    <ProjectRow ref={ref} $reverse={index % 2 === 1} $inView={inView}>
      {project.image && (
        <ProjectThumb src={project.image.src} alt={project.image.alt} />
      )}
      <ProjectContent>
        {Array.isArray(project.tags) && project.tags.length > 0 && (
          <TagsRow>
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </TagsRow>
        )}
        <ProjectTitle>{project.title}</ProjectTitle>
        {project.summary && (
          <ProjectSummary>{project.summary}</ProjectSummary>
        )}
        <ButtonsRow>
          {project.live && (
            <Button
              as="a"
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                window.dataLayer?.push({ event: "click_project_demo", project_name: project.title })
              }
            >
              <LiveIcon aria-hidden="true" />
              <span>Live demo</span>
            </Button>
          )}
          {project.code && (
            <Button
              as="a"
              href={project.code}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                window.dataLayer?.push({ event: "click_project_code", project_name: project.title })
              }
            >
              <CodeIcon aria-hidden="true" />
              <span>View code</span>
            </Button>
          )}
        </ButtonsRow>
      </ProjectContent>
    </ProjectRow>
  );
};

// ---- COMPONENT ----
export const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [titleRef, titleInView] = useInView(0.05);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);
  const hasMoreProjects = projects.length > 3;

  return (
    <ProjectsSection id="projects">
      <ProjectsInner>
        <ProjectsTitle ref={titleRef} $inView={titleInView}>
          Featured Projects
        </ProjectsTitle>
        <ProjectsList>
          {visibleProjects.map((project, index) => (
            <AnimatedProjectRow key={project.id} project={project} index={index} />
          ))}
        </ProjectsList>
        {hasMoreProjects && (
          <SeeMoreButton
            onClick={() => setShowAll((prev) => !prev)}
            label={showAll ? "Show fewer projects" : "See more projects"}
          />
        )}
      </ProjectsInner>
    </ProjectsSection>
  );
};
