// src/sections/Projects.jsx
import { useState } from "react";
import styled from "styled-components";
import { media } from "../data/media.js";
import projects from "../data/projects.json";
import Button from "../components/Button";
import { TagsRow, Tag } from "../components/Card";
import { LiveIcon, CodeIcon } from "../components/Icons";
import { SeeMoreButton } from "../components/SeeMoreButton";

// ---- STYLES ----

const ProjectsSection = styled.section`
  background: #ffffff;
  display: flex;
  justify-content: center;
  padding: 128px 0;

  @media ${media.tablet} {
    padding: 96px 16px;
  }

  @media ${media.mobile} {
    padding: 64px 16px;
  }
`;

const ProjectsInner = styled.div`
  width: 1184px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 128px;
`;

const ProjectsTitle = styled.h2`
  font-size: 80px;
  font-weight: 700;
  text-align: center;
  font-family: Poppins;

  @media ${media.tablet} {
    font-size: 56px;
  }

  @media ${media.mobile} {
    font-size: 40px;
  }
`;

const ProjectsList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 125px;

  @media ${media.tablet} {
    gap: 80px;
  }

  @media ${media.mobile} {
    gap: 64px;
  }
`;

const ProjectRow = styled.article`
  display: flex;
  align-items: center;
  gap: 64px;
  align-self: stretch;
  flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};

  @media ${media.tablet} {
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
  }

  @media ${media.mobile} {
    align-items: center;
  }
`;

const ProjectThumb = styled.img.attrs({ loading: "lazy" })`
  flex-shrink: 0;
  border-radius: 12px;
  object-fit: cover;
  width: 479px;
  height: 479px;

 @media ${media.tablet} {
    width: 696px;
    height: 479px;
    margin-left: auto;
    margin-right: auto;
  }

  @media ${media.mobile} {
    width: 100%;
    max-width: 343px;
    aspect-ratio: 343 / 300;
    height: auto;
    margin-left: auto;
    margin-right: auto; 
  }
`;


const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 560px;

  @media ${media.tablet} {
    max-width: 100%;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 30px;
  font-weight: 600;
  font-family: Poppins;

  @media ${media.mobile} {
    font-size: 24px;
  }
`;

const ProjectSummary = styled.p`
  font-size: 18px;
  line-height: 1.6;
  font-family: Poppins;

  @media ${media.mobile} {
    font-size: 16px;
    line-height: 1.5;
  }
`;

const ButtonsRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  font-family: Poppins;

  @media ${media.mobile} {
    align-items: stretch;

    a {
      width: 100%;
      display: flex;
      justify-content: center;
    }
  }
`;

// ---- COMPONENT ----

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, 3);
  const hasMoreProjects = projects.length > 3;

  return (
    <ProjectsSection id="projects">
      <ProjectsInner>
        <ProjectsTitle>Featured Projects</ProjectsTitle>

        <ProjectsList>
          {visibleProjects.map((project, index) => (
            <ProjectRow
              key={project.id}
              $reverse={index % 2 === 1} // desktop: every second project is reversed
            >
              {project.image && (
                <ProjectThumb
                  src={project.image.src}
                  alt={project.image.alt}
                />
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
                    >
                      <CodeIcon aria-hidden="true" />
                      <span>View code</span>
                    </Button>
                  )}
                </ButtonsRow>
              </ProjectContent>
            </ProjectRow>
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
