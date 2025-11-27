// src/components/SeeMoreButton.jsx
import styled from "styled-components";
import { SeeMoreIcon } from "./Icons";

// Wrapper 
const SeeMoreButtonBase = styled.button`
  border-radius: 12px;
  border: 2px solid #000;
  background: #FFF;
  padding: 0;
  cursor: pointer;
  

  display: inline-flex;
  align-items: center;
  justify-content: center;
  outline: none;

  svg {
    display: block;
  }
`;

export const SeeMoreButton = ({ label, ...props }) => {
  return (
    <SeeMoreButtonBase type="button" {...props}>
      {/* SVG contains whole button, so label only needing for screen readers*/}
      <SeeMoreIcon />
      <span className="sr-only">{label}</span>
    </SeeMoreButtonBase>
  );
};
