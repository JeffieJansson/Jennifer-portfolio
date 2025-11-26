// src/sections/Skills.jsx
import styled from "styled-components";
import skillsData from "../data/skills.json";
import { media } from "../data/media.js";

const SkillsSection = styled.section`
  background: #000;
  display: flex;
  padding: 128px 0;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  align-self: stretch;
  font-family: Poppins;

  @media ${media.tablet} {
    padding: 96px 16px;
  }

  @media ${media.mobile} {
    padding: 64px 16px;
  }
`;

const SkillsTitle = styled.h2`
  color: #fff;
  text-align: center;
  font-size: 80px;
  font-weight: 700;
  line-height: normal;

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
  gap: 24px;
  width: 100%;
  max-width: 982px;

  /* Tablet & mobile: EN kolumn, centrerad */
  @media ${media.tablet} {
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;

  @media ${media.mobile} {
    align-items: center;
    text-align: center;
  }
`;

const Tag = styled.div`
  display: flex;
  height: 28px;
  padding: 2px 6px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  width: 177px;

  border-radius: 4px;
  border: 1px solid #fff;
  background: #000;

  @media ${media.mobile} {
    width: 100%;
    max-width: 220px;
  }
`;

const TagTitle = styled.span`
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 16px 0 0;
`;

const Item = styled.li`
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
`;

export const Skills = () => {
  const { code, toolbox, upcoming, more } = skillsData;

  return (
    <SkillsSection id="skills">
      <SkillsTitle>Skills</SkillsTitle>

      <Columns>
        <Column>
          <Tag>
            <TagTitle>Code</TagTitle>
          </Tag>
          <List>
            {code.map((item, index) => (
              <Item key={`code-${index}`}>{item}</Item>
            ))}
          </List>
        </Column>

        <Column>
          <Tag>
            <TagTitle>Toolbox</TagTitle>
          </Tag>
          <List>
            {toolbox.map((item, index) => (
              <Item key={`toolbox-${index}`}>{item}</Item>
            ))}
          </List>
        </Column>

        <Column>
          <Tag>
            <TagTitle>Upcoming</TagTitle>
          </Tag>
          <List>
            {upcoming.map((item, index) => (
              <Item key={`upcoming-${index}`}>{item}</Item>
            ))}
          </List>
        </Column>

        <Column>
          <Tag>
            <TagTitle>More</TagTitle>
          </Tag>
          <List>
            {more.map((item, index) => (
              <Item key={`more-${index}`}>{item}</Item>
            ))}
          </List>
        </Column>
      </Columns>
    </SkillsSection>
  );
};
