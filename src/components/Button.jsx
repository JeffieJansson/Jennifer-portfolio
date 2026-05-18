import styled from "styled-components";

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  width: auto;
  padding: 9px 22px;
  border-radius: 999px;
  border: 1px solid rgba(201, 169, 110, 0.5);
  background: transparent;
  color: var(--gold);
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;

  svg {
    width: 13px;
    height: 13px;
  }

  &:hover {
    background: var(--gold);
    color: var(--bg);
    border-color: var(--gold);
  }
`;

export default Button;
