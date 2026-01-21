// src/sections/Skills.jsx
import styled from "styled-components";
import skillsData from "../data/skills.json";
import { media } from "../data/media.js";

// ---- STYLES ----
const SkillsSection = styled.section`
  background: transparent;
  display: flex;
  padding: 128px 80px;
  flex-direction: column;
  align-items: center;
  gap: 64px;
  align-self: stretch;
  position: relative;
  overflow: hidden;
  overflow-x: hidden;


  @media ${media.tablet} {
    padding: 96px 40px;
  }

  @media ${media.mobile} {
    padding: 64px 24px;
  }
`;

const SkillsTitle = styled.h2`
  color: #2D2D2D;
  text-align: center;
  font-size: 72px;
  font-weight: 700;
  line-height: normal;
  position: relative;


  @media ${media.tablet} {
    font-size: 56px;
  }

  @media ${media.mobile} {
    font-size: 40px;
  }
`;

const Columns = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 60px;
  width: 100%;
  max-width: 1100px;
  position: relative;
  z-index: 2;

  @media ${media.tablet} {
    flex-direction: column;
    align-items: center;
    gap: 48px;
  }
  
  @media ${media.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: 40px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  color: #2D2D2D;
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  flex: 1;

  @media ${media.mobile} {
    align-items: flex-start;
    text-align: left;
    width: 100%;
  }
`;

const ColumnTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #2D2D2D;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 8px;

  &::before {
    content: "";
    width: 4px;
    height: 4px;
    background: linear-gradient(135deg, #D4A5A5 0%, #C4B5A0 100%);
    border-radius: 50%;
  }

  @media ${media.tablet} {
    text-align: center;
    justify-content: center;
  }
`;

const Tag = styled.div`
  display: inline-flex;
  height: 36px;
  padding: 6px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin: 6px;

  border-radius: 24px;
  border: 1.5px solid #D4A5A5;
  background: rgba(212, 165, 165, 0.08);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(212, 165, 165, 0.15);
    border-color: #C4B5A0;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(212, 165, 165, 0.15);
  }

  @media ${media.mobile} {
    margin: 6px 0;
  }
`;

const TagTitle = styled.span`
  color: #2D2D2D;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
`;

const List = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 0;
`;


// ---- COMPONENT ----
export const Skills = () => {
  const { code, toolbox, upcoming, more } = skillsData;
  return (
    <SkillsSection id="skills">
      <SkillsTitle>Skills</SkillsTitle>

      <Columns>
        <Column>
          <ColumnTitle>Code</ColumnTitle>
          <List>
            {code.map((item, index) => (
              <Tag key={`code-${index}`}>
                <TagTitle>{item}</TagTitle>
              </Tag>
            ))}
          </List>
        </Column>

        <Column>
          <ColumnTitle>Toolbox</ColumnTitle>
          <List>
            {toolbox.map((item, index) => (
              <Tag key={`toolbox-${index}`}>
                <TagTitle>{item}</TagTitle>
              </Tag>
            ))}
          </List>
        </Column>

        <Column>
          <ColumnTitle>Upcoming</ColumnTitle>
          <List>
            {upcoming.map((item, index) => (
              <Tag key={`upcoming-${index}`}>
                <TagTitle>{item}</TagTitle>
              </Tag>
            ))}
          </List>
        </Column>

        <Column>
          <ColumnTitle>More</ColumnTitle>
          <List>
            {more.map((item, index) => (
              <Tag key={`more-${index}`}>
                <TagTitle>{item}</TagTitle>
              </Tag>
            ))}
          </List>
        </Column>
      </Columns>
    </SkillsSection>
  );
};
