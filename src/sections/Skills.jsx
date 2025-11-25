// src/sections/Skills.jsx
import styled from "styled-components";
import skillsData from "../data/skills.json";
import { media } from "../data/media.js";

// main section for skills
const SkillsSection = styled.section`
  background: #000;
  display: flex;
  padding: 128px 0;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  font-family: Poppins;

   @media ${media.tablet} {
    padding: 96px 16px;
  }

  @media ${media.mobile} {
    padding: 64px 16px;
  }

`;

// title skills
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

//container for all columns
const Columns = styled.div`
  display: flex;
  width: 982px;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;

  @media ${media.tablet} {
    flex-wrap: wrap;
    justify-content: center;
  }

  @media ${media.mobile} {
    flex-direction: column;
    align-items: center;
    gap: 32px;
  }
`;

// each column
const Column = styled.div`
  color: #FFF;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px; /* 177.778% */

    @media ${media.mobile} {
    align-items: center;
    text-align: center;
  }
`;

// 4) TAG –  "Code", "Toolbox", osv.
const Tag = styled.div`
  display: flex;
  height: 28px;
  padding: 2px 6px;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  width:177px;

  border-radius: 4px;
  border: 1px solid #FFF;
  background: #000;

  @media ${media.mobile} {
    width: 100%;
    max-width: 220px;
  }
`;

// text inside tag ("Code", "Toolbox", ...)
const TagTitle = styled.span`
color: #FFF;
font-size: 16px;
font-style: normal;
font-weight: 500;
line-height: normal;
 
`;

// all list under each tag
const List = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
`;
// separate list for each tag
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
}


