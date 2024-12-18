// import React ,{useState,useEffect}from 'react';
// import { useParams } from 'react-router-dom'; // Import useParams to capture URL params
// import { hackathons } from '../../data/imagesforalbum'; // Assuming this holds the data
// import {styled,ThemeProvider} from 'styled-components';
// import { darkTheme } from '../../utils/Themes';
// const AlbumContainer = styled.div`
//   width: 90%;
//   max-width: 1200px;
//   margin: 0 auto;
//   padding: 30px;
//   background-color: rgba(17, 25, 40, 0.9);
//   border-radius: 15px;
//   box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
//   text-align: center;

//   @media (max-width: 768px) {
//     padding: 15px; /* Reduce padding for smaller screens */
//   }

//   @media (max-width: 480px) {
//     padding: 10px;
//   }
// `;

// const AlbumTitle = styled.h2`
//   font-size: 2.8rem;
//   font-weight: bold;
//   color: #4f46e5;
//   margin-bottom: 40px;
//   text-shadow: 2px 2px 4px rgba(79, 70, 229, 0.3);
//   text-transform: capitalize;
//     @media (max-width: 768px) {
//     font-size: 25px;
//     margin-top: 12px;
//   }
// `;
// const AlbumImages = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(${({ $minWidth }) => $minWidth}, 1fr));
//   gap: 20px; /* Slightly reduce the gap on smaller screens */

//   @media (max-width: 1024px) {
//     grid-template-columns: repeat(3, 1fr); /* 3 images per row on medium screens */
//   }

//   @media (max-width: 768px) {
//     grid-template-columns: repeat(2, 1fr); /* 2 images per row on smaller screens */
//     gap: 15px;
//   }

//   @media (max-width: 480px) {
//     grid-template-columns: 1fr; /* Single column on very small screens */
//     gap: 10px;
//   }
// `;



// const AlbumImageWrapper = styled.div`
//   position: relative;
//   overflow: hidden;
//   border-radius: 15px;
//   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
//   transition: transform 0.3s ease, box-shadow 0.3s ease;

//   &:hover {
//     transform: scale(1.01);
//     box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
//   }
// `;

// const AlbumImage = styled.img`
//   width: 100%;
//   height: ${({ $height }) => $height};
//   object-fit: cover;

//   @media (max-width: 768px) {
//     height: 200px; /* Set a fixed height for smaller screens */
//   }

//   @media (max-width: 480px) {
//     height: 150px; /* Smaller height for very small screens */
//   }
// `;

// const Overlay = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: rgba(177, 173, 255, 0.3);
//   opacity: 0;
//   transition: opacity 0.3s ease;

//   &:hover {
//     opacity: 1;
//   }
// `;

// const ImageText = styled.div`
//   position: absolute;
//   bottom: 20px;
//   left: 20px;
//   color: #fff;
//   font-size: 1.1rem;
//   font-weight: bold;
//   text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
// `;
// const Body = styled.div`
//   margin: 0;
//   padding: 0;
//   min-height: 100vh; /* Ensures it covers the full height */
//   width: 100%;
//   background: ${({ theme }) => theme.bg};
//   color: ${({ theme }) => theme.text_primary};
//   display: flex;
//   align-items: center; /* Center vertically */
//   justify-content: center; /* Center horizontally */
// `;

// const Album = () => {
//   const { hackathonName } = useParams();
//   const images = hackathons[hackathonName] || [];
//   const [imageSize, setImageSize] = useState(hackathons[`${hackathonName}Size`]);

//   // Adjust image size dynamically for smaller screens
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth <= 768) {
//         setImageSize(hackathons[`${hackathonName}SizeSmall`] || ['150px', '150px']);
//       } else {
//         setImageSize(hackathons[`${hackathonName}Size`] || ['300px', '300px']);
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     handleResize(); // Trigger on mount

//     return () => window.removeEventListener('resize', handleResize);
//   }, [hackathonName]);

//   return (
//     <ThemeProvider theme={darkTheme}>
//       <Body>
//         <AlbumContainer>
//           <AlbumTitle>{hackathonName} Album</AlbumTitle>
//           <AlbumImages $minWidth={imageSize[0]}>
//             {images.map((imageUrl, index) => (
//               <AlbumImageWrapper key={index}>
//                 <AlbumImage
//                   src={imageUrl}
//                   alt={`hackathon-image-${index}`}
//                   style={{
//                     width: '100%',
//                     height: imageSize[1],
//                     objectFit: 'cover',
//                   }}
//                 />
//                 <Overlay>
//                   <ImageText>Image {index + 1}</ImageText>
//                 </Overlay>
//               </AlbumImageWrapper>
//             ))}
//           </AlbumImages>
//         </AlbumContainer>
//       </Body>
//     </ThemeProvider>
//   );
// };
// export default  Album





import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { hackathons } from '../../data/imagesforalbum';
import { styled, ThemeProvider } from 'styled-components';
import { darkTheme } from '../../utils/Themes';

const AlbumContainer = styled.div`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 30px;
  background-color: rgba(17, 25, 40, 0.9);
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  text-align: center;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const AlbumTitle = styled.h2`
  font-size: 2.8rem;
  font-weight: bold;
  color: #4f46e5;
  // margin-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(79, 70, 229, 0.3);
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 25px;
    margin-top: 12px;
  }
`;

const AlbumImages = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(${({ $minWidth }) => $minWidth}, 1fr));
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 10px;
  }
`;

const AlbumImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
  }

  &:hover img {
    transform: scale(1.1);
  }

  &:hover div {
    opacity: 1;
    background: linear-gradient(180deg, rgba(79, 70, 229, 0.7) 0%, rgba(17, 25, 40, 0.9) 100%);
  }
`;

const AlbumImage = styled.img`
  width: 100%;
  height: ${({ $height }) => $height};
  object-fit: cover;
  transition: transform 0.5s ease;

  @media (max-width: 768px) {
    height: 200px;
  }

  @media (max-width: 480px) {
    height: 150px;
  }
`;

const Overlay = styled.div`
  position: absolute;
  bottom: 10px;
  left: 15px;
  color: #fff;
  font-size: 1.2rem;
  // font-weight: bold;
  // text-shadow: 0 2px 4px rgba(0, 0, 0, 0); /* Slight shadow for visibility */
  z-index: 2; /* Ensures the text is above other elements */
  transition: opacity 1.6s ease;
 opacity: 0;
  ${AlbumImageWrapper}:hover & {
    opacity: 1;
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
`;

const GradientOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 25%; /* Gradient covers only the bottom part */
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
  opacity: 1; /* Always visible */
  pointer-events: none; /* Ensures the gradient doesn't block interactions */
`;
const StyledHR = styled.hr`
  border: none;
  height: 3px;
  width: 80%; /* Adjust the width as needed */
  background: linear-gradient(
    90deg,
    #4f46e5,  /* Indigo */
    #6ee7b7,  /* Emerald */
    #facc15,  /* Amber */
    #fb7185,  /* Rose */
    #38bdf8,  /* Sky */
    #a78bfa,  /* Violet */
    #4f46e5   /* Indigo (repeat for smooth looping) */
  );
  background-size: 400%; /* Adjusted for smoother animation */
  animation: gradient-move 1.5s ease-in-out infinite;
  
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

  margin: 15px auto; /* Centers the HR horizontally */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow for 3D effect */
  border-radius: 15px; /* More rounded edges */
`;

const Album = () => {
  const { hackathonName } = useParams();
  const images = hackathons[hackathonName] || [];
  const [imageSize, setImageSize] = useState(hackathons[`${hackathonName}Size`]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setImageSize(hackathons[`${hackathonName}SizeSmall`] || ['150px', '150px']);
      } else {
        setImageSize(hackathons[`${hackathonName}Size`] || ['300px', '300px']);
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
                  $height={imageSize[1]}
                />
                <GradientOverlay />
                <Overlay>
                  Image {index + 1}
                </Overlay>
              </AlbumImageWrapper>
            ))}
          </AlbumImages>
        </AlbumContainer>
      </Body>
    </ThemeProvider>
  );
};

export default Album;
