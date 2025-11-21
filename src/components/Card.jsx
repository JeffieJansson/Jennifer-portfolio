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
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  border: 1px solid #000;
  font-size: 0.75rem;
`;