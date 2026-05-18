import { useState } from "react";
import styled from "styled-components";
import { media } from "../data/media.js";

const Tag = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 14px;
  border-radius: 6px;
  border: 1px solid rgba(201, 169, 110, 0.2);
  background: rgba(255, 255, 255, 0.02);
  color: var(--cream-dim);
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 400;
  overflow: hidden;
  cursor: default;
  transition: border-color 0.25s ease, background 0.25s ease, color 0.25s ease;

  &:hover {
    border-color: rgba(201, 169, 110, 0.5);
    background: rgba(201, 169, 110, 0.06);
    color: var(--cream);
  }

  img {
    width: 20px;
    height: 20px;
    object-fit: contain;
    flex-shrink: 0;
  }

  @media ${media.mobile} {
    font-size: 12px;
    padding: 6px 12px;

    img {
      width: 16px;
      height: 16px;
    }
  }
`;

const BarWrap = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: rgba(201, 169, 110, 0.1);
  opacity: ${({ $hovered }) => ($hovered ? 1 : 0)};
  transition: opacity 0.2s;
`;

const Bar = styled.div`
  height: 100%;
  width: ${({ $hovered, $pct }) => ($hovered ? `${$pct}%` : "0%")};
  background: var(--gold);
  transition: width 0.5s ease;
`;

export const TechBadge = ({ tech }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Tag
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {tech.image && <img src={tech.image} alt={tech.name} />}
      {tech.name}
      {tech.pct && (
        <BarWrap $hovered={hovered}>
          <Bar $hovered={hovered} $pct={tech.pct} />
        </BarWrap>
      )}
    </Tag>
  );
};
