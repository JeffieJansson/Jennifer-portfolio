import styled from "styled-components";

export const TagsRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px 8px;
  align-self: stretch;
`;

export const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 4px 10px;
  border-radius: 4px;
  border: 1px solid rgba(201, 169, 110, 0.28);
  background: transparent;
  color: var(--cream-muted);
  font-family: 'Poppins', sans-serif;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  white-space: nowrap;
`;
