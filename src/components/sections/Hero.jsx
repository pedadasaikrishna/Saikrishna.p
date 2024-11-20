import React from "react";
import styled from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";
import HeroImg from "../../images/sai.jpg";

import { Tilt } from "react-tilt";

const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding: 80px 30px;
  z-index: 1;
  margin-bottom: 50px; /* Add spacing to avoid overlap */

  @media (max-width: 960px) {
    padding: 66px 16px;
    margin-bottom: 40px; /* Adjust for smaller screens */
  }

  @media (max-width: 640px) {
    padding: 32px 16px;
    margin-bottom: 30px;
  }

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroInnerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1100px;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const HeroLeftContainer = styled.div`
  width: 100%;
  order: 1;
  @media (max-width: 960px) {
    order: 2;
    margin-bottom: 30px;
    display: flex;
    gap: 6px;
    flex-direction: column;
    align-items: center;
  }
`;
const HeroRightContainer = styled.div`
  width: 100%;
  order: 2;
  display: flex;
  justify-content: end;
  @media (max-width: 960px) {
    order: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-contents: center;
    margin-bottom: 80px;
  }

  @media (max-width: 640px) {
    margin-bottom: 30px;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 50px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 40px;
    line-height: 48px;
    margin-bottom: 8px;
  }
`;

const TextLoop = styled.div`
  font-weight: 600;
  font-size: 32px;
  display: flex;
  gap: 12px;
  color: ${({ theme }) => theme.text_primary};
  line-height: 68px;

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 22px;
    line-height: 48px;
    margin-bottom: 16px;
  }
`;

const Span = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`;

const SubTitle = styled.div`
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 42px;
  color: ${({ theme }) => theme.text_primary + 95};

  @media (max-width: 960px) {
    text-align: center;
  }

  @media (max-width: 960px) {
    font-size: 16px;
    line-height: 32px;
  }
`;
const ResumeButton = styled.a`
  display: inline-block;
  text-decoration: none;
  color: white;
  text-align: center;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  background: linear-gradient(225deg, #6a0dad, #9b59b6); /* Purple gradient */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
  transition: transform 0.2s ease, box-shadow 0.2s ease; /* Smooth hover effect */

  &:hover {
    transform: scale(1.05); /* Slight zoom-in effect */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); /* Deeper shadow on hover */
  }

  @media (max-width: 640px) {
    font-size: 14px;
    padding: 10px 20px;
  }
`;

// const ResumeButton = styled.a`
//   appearance: button;
//   text-decoration: none;
//   width: 95%;
//   max-width: 300px;
//   text-align: center;
//   padding: 16px 0;
//   margin-top: 20px; /* Add margin for spacing */

//   background: linear-gradient(
//     225deg,
//     hsla(271, 100%, 50%, 1) 0%,
//     hsla(294, 100%, 50%, 1) 100%
//   );
//   box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
//   border-radius: 50px;
//   font-weight: 600;
//   font-size: 20px;
//   color: white;

//   &:hover {
//     transform: scale(1.05);
//     transition: all 0.4s ease-in-out;
//     box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
//   }

//   @media (max-width: 640px) {
//     padding: 12px 0;
//     font-size: 18px;
//     margin-top: 15px; /* Ensure consistent spacing on mobile */
//   }
// `;

const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: auto; /* Change height to auto for better aspect ratio */
  max-width: 400px;
  max-height: 350px;
  border: 2px solid ${({ theme }) => theme.primary};
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Add shadow for depth */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Add transition for hover effects */

  @media (max-width: 640px) {
    max-width: 280px;
    max-height: 280px;
  }

  &:hover {
    transform: scale(1); /* Slightly scale the image on hover */
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3); /* Increase shadow on hover */
  }
`;

const Hero = () => {
  return (
    <section id="About">
      <HeroContainer id="About">
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title>
              Hi, i am <br /> {Bio.name}
            </Title>
            <TextLoop>
              I am a
              <Span>
                <Typewriter
                  options={{
                    strings: Bio.roles,
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 60,
                    typeSpeed: 65,
                  }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target="_blank">
              Check Resume
            </ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer>
            <Tilt
              options={{
                max: 10,
                scale: 1.03,
                speed: 300,
                glare: true,
                "max-glare": 0.5,
                reverse: false,
                easing: "cubic-bezier(.03,.98,.52,.99)",
              }}
            >
              <Img src={HeroImg} alt={Bio.name} />
            </Tilt>
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </section>
  );
};
export default Hero;
