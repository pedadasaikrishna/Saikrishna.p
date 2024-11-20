import React, { useState, useEffect } from "react";
import { Link as LinkR } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { Bio } from "../data/constants";
import { MenuRounded } from "@mui/icons-material";

// Styled Components
const Nav = styled.div`
  background-color: ${({ theme }) => theme.bg};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.bg_hover};
  }
`;

const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
`;

const NavLogo = styled(LinkR)`
  width: 80%;
  padding: 0 6px;
  font-weight: bold;
  font-size: 22px;
  letter-spacing: 1px;
  text-decoration: none;
  color: ${({ theme }) => theme.text_primary};
  transition: color 0.3s ease-in-out;



  
  text-decoration: none;
  transition: transform 0.2s ease, color 0.2s ease; /* Smooth transition */

  &:hover {
    color: ${({ theme }) => theme.primary}; /* Change color on hover */
  }
`;

const NavItems = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;
  list-style: none;
  animation: fadeIn 0.8s ease-in-out;

  @media screen and (max-width: 768px) {
    display: none;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  font-size: 18px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  &::before {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: ${({ theme }) => theme.primary};
    transition: all 0.3s ease-in-out;
  }

  &:hover::before {
    width: 100%;
  }

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GitHubButton = styled.a`
  border: 1px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 30px;
  cursor: pointer;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 600;
  transition: all 0.4s ease-in-out;
  text-decoration: none;
  background-color: ${({ theme }) => theme.bg_light};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);

  &:hover {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.text_primary};
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.3);
  }
`;

const MobileIcon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
  }
`;

const MobileMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  list-style: none;
  width: 100%;
  padding: 12px 40px 24px 40px;
  background: rgba(0, 0, 0, 0.9); /* Dark background for space effect */
  color: ${({ theme }) => theme.text_primary}; /* Light text color */
  position: absolute;
  top: 80px;
  right: 0;
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.2); /* Soft light shadow for depth */
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};

  /* Add hover effects for menu items */
  ${NavLink} {
    transition: color 0.3s ease-in-out;
    &:hover {
      color: ${({ theme }) => theme.primary}; /* Change color on hover */
    }
  }
`;

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useTheme();

  // Effect to close the mobile menu when the screen size exceeds the threshold
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false); // Close mobile menu on desktop
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="#">{Bio.name}</NavLogo>

        <MobileIcon onClick={() => setIsOpen(!isOpen)}>
          <MenuRounded
            style={{ fontSize: "2rem", color: theme.text_primary }}
          />
        </MobileIcon>

        <NavItems>
          <NavLink href="#About">About</NavLink>
          <NavLink href="#Skills">Skills</NavLink>
          <NavLink href="#Experience">Experience</NavLink>
          <NavLink href="#Projects">Projects</NavLink>
          <NavLink href="#Education">Education</NavLink>
          <NavLink href="#Contact">Contact</NavLink>
        </NavItems>

        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <NavLink onClick={() => setIsOpen(false)} href="#About">
              About
            </NavLink>
            <NavLink onClick={() => setIsOpen(false)} href="#Skills">
              Skills
            </NavLink>
            <NavLink onClick={() => setIsOpen(false)} href="#Experience">
              Experience
            </NavLink>
            <NavLink onClick={() => setIsOpen(false)} href="#Projects">
              Projects
            </NavLink>
            <NavLink onClick={() => setIsOpen(false)} href="#Education">
              Education
            </NavLink>
            <GitHubButton href={Bio.github} target="_blank">
              GitHub Profile
            </GitHubButton>
          </MobileMenu>
        )}

        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
            GitHub
          </GitHubButton>
        </ButtonContainer>
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
