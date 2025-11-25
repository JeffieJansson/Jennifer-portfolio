// src/sections/Contact.jsx
import styled from "styled-components";
import { media } from "../data/media.js";
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  StackOverflowIcon,
} from "../components/Icons.jsx";
import footerImage from "../assets/footer.png"; // 

// Wrapper 
const ContactSection = styled.section`
  background: #000;
  display: flex;
  padding: 128px 0;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  font-family: Poppins;

 @media ${media.tablet} {
    padding: 96px 16px;
  }

  @media ${media.mobile} {
    padding: 64px 16px;
  }
`;

// Title
const ContactTitle = styled.h2`
  color: #FFF;
  text-align: center;
  font-size: 80px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

    @media ${media.tablet} {
    font-size: 56px;
  }

  @media ${media.mobile} {
    font-size: 40px;
  }
`;

// Footer avatar (picture)
const Avatar = styled.img`
  width: 164px;
  height: 164px;
  border-radius: 50%;
  object-fit: cover;

   @media ${media.mobile} {
    width: 128px;
    height: 128px;
  }
`;

// contact info
const Info = styled.div`
  text-align: center;
  margin-top: 16px;

  p {
    color: #fff;
    font-size: 30px;
    margin: 8px 0;
  }

  a {
    text-decoration: none;
    color: #fff;
  }

   @media ${media.tablet} {
    p {
      font-size: 24px;
    }
  }

  @media ${media.mobile} {
    p {
      font-size: 18px;
    }
  }
`;

//  Social icons row
const SocialRow = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 32px;
  margin-top: 24px;

  a {
    color: inherit;
    text-decoration: none;
  }

  svg {
    width: 32px;
    height: 32px;
    fill: #ffffff;
  }

   @media ${media.mobile} {
    gap: 16px;
    flex-wrap: wrap;
    justify-content: center;

    svg {
      width: 28px;
      height: 28px;
    }
  }
`;

export const Contact = () => {
  return (
    <ContactSection id="contact" aria-labelledby="contact-heading">
      <ContactTitle id="contact-heading">Let’s Talk</ContactTitle>

      <Avatar
        src={footerImage}
        alt="Portrait of Jennifer Jansson"
      />

      <Info>
        <p>Jennifer Jansson</p>
        <p>
          <a href="tel:+46763141262">+46 76 314 12 62</a>
        </p>
        <p>
          <a href="mailto:jenniferjansson92@gmail.com">
            jenniferjansson92@gmail.com
          </a>
        </p>
      </Info>

      <SocialRow aria-label="Social media links">
        <a
          href="https://www.linkedin.com/in/jennifer-jansson"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInIcon />
        </a>

        <a
          href="https://github.com/jeffiejansson"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        >
          <GitHubIcon />
        </a>

        <a
          href="https://stackoverflow.com/jenniferjansson"
          target="_blank"
          rel="noreferrer"
          aria-label="Stack Overflow"
        >
          <StackOverflowIcon />
        </a>

        <a
          href="https://www.instagram.com/_jenniferjansson_/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
        >
          <InstagramIcon />
        </a>
      </SocialRow>
    </ContactSection>
  );
}
