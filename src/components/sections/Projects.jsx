// Projects.js
import React from "react";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 24px;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 20px;
`;

const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  padding: 24px;
  background-color: rgba(17, 25, 40, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.125);
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-9px); /* Slight lift */
    background-color: rgba(23, 92, 230, 0.1); /* Subtle background color change */
    box-shadow: 
      0 0 20px rgba(23, 92, 230, 0.6), /* Glow effect */
      0 0 30px rgba(23, 92, 230, 0.5), /* Inner glow */
      rgba(23, 92, 230, 0.4) 0px 8px 32px; /* Increased shadow */
  }
`;

const ProjectTitle = styled.h2`
  font-size: 24px;
  color: ${({ theme }) => theme.text_primary};
  margin-bottom: 8px;
`;

const ProjectDescription = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 12px;
`;

const ProjectTags = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  font-size: 14px;
  background-color: ${({ theme }) => theme.primary + "20"};
  color: ${({ theme }) => theme.primary};
  padding: 4px 8px;
  border-radius: 8px;
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Link = styled.a`
  color: inherit; /* Inherit the color from Tag component */
  text-decoration: none; /* Remove underline */

  &:hover {
    color: white; /* Change to white on hover */
    text-decoration: none; /* Ensure no underline on hover */
  }
`;

// Projects Component
const Projects = () => {
  return (
    <Container id="Projects">
      <Wrapper>
        <Title>Projects</Title>
        <ProjectCard>
          <ProjectTitle>Innovative Lab</ProjectTitle>
          <ProjectDescription>
            🌐 Remote Team Collaboration Tool A web-based platform designed to
            empower remote teams with collaborative features like chat, video
            calls, task management, file sharing, and a real-time coding
            playground. Built with React.js and styled-components, the platform
            integrates seamlessly with MySQL for efficient data management,
            providing a streamlined, engaging experience for remote team
            productivity. 🚀
          </ProjectDescription>
          <ProjectTags>
            <Tag>React</Tag>
            <Tag>JavaScript</Tag>
            <Tag>Node.js</Tag>
            <Tag>MySQL</Tag>
            <Tag>Responsive Design</Tag>
            {/* <Tag><Link href="#">Link</Link></Tag> */}
          </ProjectTags>
        </ProjectCard>

        <ProjectCard>
          <ProjectTitle>Quiz App</ProjectTitle>
          <ProjectDescription>
            An interactive quiz application built with React to test knowledge
            on various topics.
          </ProjectDescription>
          <ProjectTags>
            <Tag>React</Tag>
            <Tag>Quiz Features</Tag>
            {/* <Tag><Link href="#">Link</Link></Tag> */}
          </ProjectTags>
        </ProjectCard>
        <ProjectCard>
  <ProjectTitle style={{ textAlign: "center" }}>
    <span style={{ background: "linear-gradient(to right, #ff8a00, #e52e71)", color: "white", padding: "6px 12px", borderRadius: "12px", display: "inline-block" }}>
      🌟 Mini Projects 🌟
    </span>
  </ProjectTitle>
  <ProjectDescription  >
    <ul>
      <li style={{ marginLeft: "20px" }}>🔗 <Link href="https://qrgeneratorbysaikrishna.netlify.app" target="_blank">QR Code Generator</Link></li>
      <li style={{ marginLeft: "20px" }}>😂 <Link href="https://jokegeneratorbysaikrishna.netlify.app" target="_blank">Joke Generator</Link></li>
    </ul>
  </ProjectDescription>
</ProjectCard>
      
      </Wrapper>
    </Container>
  );
};

export default Projects;
