// src/sections/Projects.jsx
import styled from "styled-components";
import { media } from "../data/media.js";
import projects from "../data/projects.json";
import Button from "../components/Button";
import { TagsRow, Tag } from "../components/Card";
import { LiveIcon, CodeIcon } from "../components/Icons";

// Outer section (full-width, white background)
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

// Inner container
const ProjectsInner = styled.div`
  width: 1184px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 128px;

   @media ${media.mobile} {
    gap: 80px;
  }
`;

// Section title
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

// Wrapper for all project rows
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

// Single project row, with optional reversed layout
const ProjectRow = styled.article`
  display: flex;
  align-items: center;
  gap: 64px;
  align-self: stretch;
  /*Desktop left/right */
  flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};

  /* Tablet & mobile: stack image and content */
  @media ${media.tablet} {
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
  }

  @media ${media.mobile} {
    align-items: center;
  }
  `;

// Project thumbnail
const ProjectThumb = styled.img`
  width: 479px;
height: 479px;
  max-width: 100%;
  border-radius: 12px;
  object-fit: cover;

 @media ${media.tablet} {
    width: 100%;
    height: auto;
  }
`;

// Content column
const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 560px;

    @media ${media.tablet} {
    max-width: 100%;
  }
`;

// Title, summary
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

// Buttons row
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

export const Projects = () => { 
  return (
    <ProjectsSection id="projects">
      <ProjectsInner>
        <ProjectsTitle>Featured Projects</ProjectsTitle>

        <ProjectsList>
          {projects.map((project, index) => (
            <ProjectRow
              key={project.id}
              $reverse={index % 2 === 1} // every second project reversed
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
      </ProjectsInner>
    </ProjectsSection>
  );
}
