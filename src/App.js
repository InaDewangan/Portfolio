import React from "react";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import About from "./components/About";  // ✅ New Import
import EducationSkills from "./components/EducationSkills";
import ScrollingText from "./components/HorizontalLine";
import ProjectsSection from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Box sx={{ backgroundColor: "#0A0E17", minHeight: "100vh", color: "white", overflowX: "hidden" }}>
      <Navbar />
      <Box id="home">
        <Home />
      </Box>
      <Box id="about">
        <About />  {/* ✅ About Section Added */}
      </Box>
      <Box id="services">
        <Services />
      </Box>
      <Box id="education-skills">
        <EducationSkills />  {/* ✅ Education & Skills Section Added */}
      </Box>
      <Box id="horizontal-line">
        <ScrollingText />
      </Box>
      <Box>
        <ProjectsSection ud="projects" />  {/* ✅ Projects Section Added */}
      </Box>
      <Box id="contact">
        <Contact />
      </Box>
      <Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default App;
