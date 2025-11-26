// src/components/Button.jsx
import styled from "styled-components";

// Styled button component for links
const Button = styled.a`
  display: flex;
  width: 303px;
  height: 48px;
  gap: 16px;
  padding: 0 16px;
  align-items: center;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 500;
  color: #fff;
  background: #000;
  cursor: pointer;            
  transition: background 0.2s, transform 0.1s;

  &:hover {
    background: #fff;
    color: #000;   
    outline: 2px solid #000;       
  }

  &:focus-visible {
    outline: 2px solid #fff; 
    outline-offset: 2px;
  }
`;

export default Button;
