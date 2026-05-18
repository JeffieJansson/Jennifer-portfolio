import styled from "styled-components";
import { media } from "../data/media.js";

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: var(--bg);
  border-bottom: 1px solid rgba(201, 169, 110, 0.1);
  padding: 16px 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  @media ${media.mobile} {
    padding: 12px 16px;
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 40px;
  align-items: center;

  @media ${media.tablet} {
    gap: 24px;
  }

  @media ${media.mobile} {
    gap: 16px;
  }

  @media (max-width: 375px) {
    gap: 9px;
  }
`;

const MenuItem = styled.li`
  list-style: none;

  a {
    color: var(--cream-muted);
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    text-decoration: none;
    transition: color 0.25s ease;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 1px;
      background: var(--gold);
      transition: width 0.3s ease;
    }

    &:hover {
      color: var(--gold);

      &::after {
        width: 100%;
      }
    }
  }

  @media ${media.mobile} {
    a {
      font-size: 10px;
    }
  }
`;

export const Navigation = () => {
  return (
    <Nav>
      <Menu>
        <MenuItem>
          <a href="#home" onClick={() => window.dataLayer?.push({ event: "click_nav_home" })}>
            Home
          </a>
        </MenuItem>
        <MenuItem>
          <a href="#about" onClick={() => window.dataLayer?.push({ event: "click_nav_about" })}>
            About
          </a>
        </MenuItem>
        <MenuItem>
          <a href="#projects" onClick={() => window.dataLayer?.push({ event: "click_nav_projects" })}>
            Projects
          </a>
        </MenuItem>
        <MenuItem>
          <a href="#skills" onClick={() => window.dataLayer?.push({ event: "click_nav_skills" })}>
            Skills
          </a>
        </MenuItem>
        <MenuItem>
          <a href="#contact" onClick={() => window.dataLayer?.push({ event: "click_nav_contact" })}>
            Contact
          </a>
        </MenuItem>
      </Menu>
    </Nav>
  );
};
