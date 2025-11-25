import styled from "styled-components";
import PortraitImg from "../assets/portrait.png";

const IntroWrapper = styled.header`
  display: flex;
  height: 1289px;
  padding: 128px 0 64px 0;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  align-self: stretch;
`;

const IntroText = styled.section`
    
    h3 {
      color: #000;
      text-align: center;
      font-family: Poppins;
      font-size: 30px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }

    h1 {
      color: #000;
      text-align: center;
      font-family: Poppins;
      font-size: 100px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;

    }

    p {
      color: #202020;
      text-align: center;
      font-family: Poppins;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 32px; /* 177.778% */
 
    }
`;

const PortraitImage = styled.img`
width: 475px;
height: 398px;
flex-shrink: 0;
aspect-ratio: 475/398;
  `;

export const Hero = () => {
    return (
        <IntroWrapper>
            <IntroText>
                <h3>Hi there,I'm</h3>
                <h1>Jennifer <br /> Jansson</h1>
                <PortraitImage src={PortraitImg} alt="Portrait of Jennifer" />
                <h3>Frontend Developer & Digital Analytics Specialst</h3>
                <p>
                  I love bridging the gap between design, data, and technology. I have
                  enjoyed understanding user behavior and uncovering insights, but now I
                  have realized that I don&apos;t just want to analyze digital experiences —
                  I want to build them. Today, that passion drives me to create
                  intuitive, accessible and meaningful digital products that deliver
                  real value for real users.
                </p>
            </IntroText>
        </IntroWrapper>
    )
}
