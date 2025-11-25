import styled from "styled-components";

// (HTML, CSS, API…)
export const TagsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 0.5rem 0;
`;

// single tag
export const Tag = styled.span`
  display: flex;
  width: 142px;
  padding: 2px 6px;
  justify-content: center;
  align-items: flex-start;
  border-radius: 4px;
  border: 1px solid #000;
  background: #FFF;
`;