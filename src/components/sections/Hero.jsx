


import React from "react";
import styled,{keyframes } from "styled-components";
import { Bio } from "../../data/constants";
import Typewriter from "typewriter-effect";

// New avatar image URL
const AvatarImg = "https://mattfarley.ca/img/mf-avatar.svg";

// Main container for the Hero section
const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 30px;
  z-index: 1;
  margin-bottom: 50px;
  position: relative;

  @media (max-width: 960px) {
    padding: 60px 20px;
    margin-bottom: 40px;
  }

  @media (max-width: 640px) {
    padding: 40px 16px;
    margin-bottom: 30px;
  }

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;

const HeroInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  gap: 40px;

  @media (max-width: 960px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const HeroLeftContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;

  @media (max-width: 960px) {
    align-items: center;
    order: 2; /* Move the left container below on mobile */
  }
`;

const HeroRightContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 960px) {
    justify-content: center;
    order: 1; /* Move the right container above on mobile */
  }
`;

const Title = styled.h1`
  font-size: clamp(36px, 5vw, 50px);
  font-weight: 500;
  color: ${({ theme }) => theme.text_primary};
  line-height: 1.3;

  @media (max-width: 960px) {
    text-align: center;
  }
`;

const TextLoop = styled.div`
  font-size: clamp(20px, 4vw, 32px);
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  gap: 8px;
  line-height: 1.5;

  @media (max-width: 960px) {
    text-align: center;
  }
`;
const cycleColors = keyframes`
  0% { color: #6a11cb; } /* Purple */
  25% { color: #2575fc; } /* Blue */
  50% { color: #a4e2d7; } /* Light Turquoise */
  75% { color: #f9c85e; } /* Soft Yellow */
  100% { color: #6a11cb; } /* Back to Purple */
`;

const Span = styled.span`
  display: inline-block;
  animation: ${cycleColors} 5s ease-in-out infinite; /* Smooth, gentle transition */
  font-weight: normal; /* Not bold */
  text-shadow: none; /* No shadow */
`;



// Define the keyframes for cycling colors


const SubTitle = styled.p`
  font-size: clamp(16px, 3vw, 20px);
  line-height: 1.5;
  color: ${({ theme }) => theme.text_primary}99;
  margin-bottom: 32px;

  @media (max-width: 960px) {
    text-align: center;
  }
`;


const ResumeButton = styled.a`
  display: inline-block;
  background: linear-gradient(135deg, #6a0dad, #9b59b6);
  color: white;
  padding: 12px 24px;
  font-size: clamp(14px, 2.5vw, 16px);
  font-weight: 600;
  border-radius: 8px;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 960px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;

const Img = styled.img`
  border-radius: 50%;
  width: 100%;
  height: auto;
  max-width: 350px;
  max-height: 350px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  @media (max-width: 640px) {
    max-width: 250px;
    max-height: 250px;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }
`;
const blink = keyframes`
  50% {
    opacity: 0.5;
  }
`;
const Icon = styled.svg`
  width: 2.5rem; /* Adjust the size as needed */
  height: 2.5rem;
  fill: none;
  margin-left:20px;
  stroke:rgb(82, 84, 249); /* Indigo color */
  stroke-width: 2;
  animation: ${blink} 2s infinite;
`;

const Hero = () => {
  return (
    <section id="About">
      <HeroContainer id="About">
        <HeroInnerContainer>
          <HeroLeftContainer>
          <Title>    Hi, I am <br /> {Bio.name}
      <Icon
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="lucide lucide-sparkles"
      >
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></path>
        <path d="M20 3v4"></path>
        <path d="M22 5h-4"></path>
        <path d="M4 17v2"></path>
        <path d="M5 18H3"></path>
      </Icon>
  
    </Title>
    <TextLoop>
      I am a{' '}
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
            <Img src={AvatarImg} alt={Bio.name} />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </section>
  );
};

export default Hero;
