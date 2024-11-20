import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { Bio } from "../../data/constants";

// Styled components
const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text_primary};
  padding: 20px;
  text-align: center;
`;

const IconsContainer = styled.div`
  margin-top: 10px;
`;

const IconLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  margin: 0 10px;
  font-size: 24px;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const Copyright = styled.div`
  margin-top: 15px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
`;
const Tagline = styled.div`
  font-size: 16px;
  margin-bottom: 15px;
  color: ${({ theme }) => theme.text_secondary};
  font-weight: 500;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Tagline>
        "🌐 Crafting Digital Experiences | 💻 Full-Stack Dev | 💡 Turning Ideas
        into Code | 🔧 Problem Solver | 🌟 All-Round Creative!"
      </Tagline>
      <IconsContainer>
        <IconLink href={Bio.github} target="_blank">
          <FaGithub />
        </IconLink>
        <IconLink href={Bio.linkedin} target="_blank">
          <FaLinkedin />
        </IconLink>
        <IconLink href={Bio.insta} target="_blank">
          <FaInstagram />
        </IconLink>
      </IconsContainer>
      <Copyright>
        © {new Date().getFullYear()} Sai Krishna. All Rights Reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
