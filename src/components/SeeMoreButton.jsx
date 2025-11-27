// src/components/SeeMoreButton.jsx
import styled from "styled-components";
import { SeeMoreIcon } from "./Icons";

// Wrapper 
const SeeMoreButtonBase = styled.button`
  display: flex;
  width: 303px;
  height: 48px;
  gap: 16px;
  padding: 0 16px;
  align-items: center;
  border-radius: 12px;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
  color: #000;
  background: #fff;
  cursor: pointer;   
  outline: 2px solid #000;         
  transition: background 0.2s, transform 0.1s;

  &:hover {
    background: #000;
    color: #fff;   
          
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
