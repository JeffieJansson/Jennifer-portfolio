import styled from "styled-components";
import { SeeMoreIcon } from "./Icons";

const SeeMoreButtonBase = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 9px 22px;
  border-radius: 999px;
  border: 1px solid rgba(201, 169, 110, 0.35);
  background: transparent;
  color: var(--cream-dim);
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.8px;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease;

  svg {
    width: 13px;
    height: 13px;
    transition: transform 0.2s ease;
  }

  &:hover {
    background: var(--gold);
    color: var(--bg);
    border-color: var(--gold);

    svg {
      transform: translateY(2px);
    }
  }
`;

export const SeeMoreButton = ({ label, ...props }) => {
  return (
    <SeeMoreButtonBase type="button" {...props}>
      <SeeMoreIcon />
      <span>{label}</span>
    </SeeMoreButtonBase>
  );
};
