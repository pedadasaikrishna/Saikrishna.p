


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { hackathons } from '../../data/imagesforalbum';
import { styled, ThemeProvider } from 'styled-components';
import { darkTheme } from '../../utils/Themes';

const AlbumContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
  background: rgba(17, 25, 40, 0.95);
  border-radius: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const AlbumTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: #4f46e5;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 8px rgba(79, 70, 229, 0.5);
  text-transform: capitalize;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;
const AlbumImages = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${({ $minWidth }) => $minWidth}, 1fr));
  gap: 1.5rem;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;  /* Forces all images to be in a single column on small screens */
    gap: 1rem;
  }

  @media (max-width: 480px) {
    gap: 0.75rem;
  }
`;


const AlbumImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
  }

  &:hover div {
    opacity: 1;
  }
`;

const AlbumImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  transition: transform 0.5s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0.5rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  color: white;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const StyledHR = styled.hr`
  border: none;
  height: 3px;
  width: 80%;
  background: linear-gradient(
    90deg,
    #4f46e5, #6ee7b7, #facc15, #fb7185, #38bdf8, #a78bfa, #4f46e5
  );
  background-size: 300%;
  animation: gradient-move 2s linear infinite;
  margin: 1.5rem auto;
  border-radius: 50px;

  @keyframes gradient-move {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const Body = styled.div`
  margin: 0;
  padding: 0;
  min-height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.bg};
  color: ${({ theme }) => theme.text_primary};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
`;

const Album = () => {
  const { hackathonName } = useParams();
  const images = hackathons[hackathonName] || [];
  const [imageSize, setImageSize] = useState(hackathons[`${hackathonName}Size`] || ['300px', 'auto']);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setImageSize(hackathons[`${hackathonName}SizeSmall`] || ['150px', 'auto']);
      } else {
        setImageSize(hackathons[`${hackathonName}Size`] || ['300px', 'auto']);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [hackathonName]);

  return (
    <ThemeProvider theme={darkTheme}>
      <Body>
        <AlbumContainer>
          <AlbumTitle>{hackathonName} Album</AlbumTitle>
          <StyledHR />
          <AlbumImages $minWidth={imageSize[0]}>
            {images.map((imageUrl, index) => (
              <AlbumImageWrapper key={index}>
                <AlbumImage
                  src={imageUrl}
                  alt={`hackathon-image-${index}`}
                />
                <Overlay>Image {index + 1}</Overlay>
              </AlbumImageWrapper>
            ))}
          </AlbumImages>
        </AlbumContainer>
      </Body>
    </ThemeProvider>
  );
};

export default Album;
