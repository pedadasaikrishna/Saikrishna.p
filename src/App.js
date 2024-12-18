// import styled, { ThemeProvider } from "styled-components";
// import { darkTheme } from "./utils/Themes";
// import Navbar from "./components/Navbar";
// import { BrowserRouter } from "react-router-dom";
// import Hero from "./components/sections/Hero";
// import Skills from "./components/sections/Skills";
// import Projects from "./components/sections/Projects";
// import Education from "./components/sections/Education";
// import Contact from "./components/sections/Contact";
// import Experience from "./components/sections/Experience";
// import Footer from "./components/sections/Footer";

// const Body = styled.div`
//   background-color: ${({ theme }) => theme.bg};
//   width: 100%;
//   overflow-x: hidden;
//   position: relative;
// `;

// const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 0 20px;
//   margin-top: 20px;
// `;


// function App() {
//   return (
//     <ThemeProvider theme={darkTheme}>
//       <BrowserRouter>
//         <Navbar />
//         <Body>
//           <Wrapper>
//             <Hero />
//             </Wrapper>
//             <Skills />
          

//           <Experience />
//           <Projects />
//           <Education />
//           <Contact />
//           <Footer />
      
//         </Body>
//       </BrowserRouter>
//     </ThemeProvider>
//   );
// }

// export default App;











import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Import necessary routing utilities
import { darkTheme } from './utils/Themes';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import Experience from './components/sections/Experience';
import Footer from './components/sections/Footer';
import Album from './components/sections/Album.jsx'; // Import the Album component

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  margin-top: 20px;
`;

// Define the routes in createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ThemeProvider theme={darkTheme}>
        <Navbar />
        <Body>
          <Wrapper>
            <Hero />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Contact />
            <Footer />
          </Wrapper>
        </Body>
      </ThemeProvider>
    ),
  },
  {
    path: "/album/:hackathonName", 
    element: <Album />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
