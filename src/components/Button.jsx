// src/components/Button.jsx
import styled from "styled-components";

// Styled button component for links
const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  padding: 0.5rem 1rem;
  border-radius: 12px;
  border: 1px solid #000;

  text-decoration: none;
  font-weight: 600;
  color: #000;
  background: #fff;
`;

export default Button;
