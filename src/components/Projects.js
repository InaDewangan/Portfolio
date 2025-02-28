import React from "react";
import { Box, Grid, Typography, Card, Container, Button } from "@mui/material";
import { motion } from "framer-motion";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const headingAnimation = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } },
};

const projects = [
  {
    title: "Jungle Flip Game",
    liveLink: "https://github.com/InaDewangan/Jungle-Flip-Game",
    image: "jungleFlipGame.png",
  },
  {
    title: "Country Explorer",
    liveLink: "https://github.com/InaDewangan/CountryExplorer",
    image: "countryExplorer.png",
  },
  {
    title: "Data Visualization Dashboard",
    liveLink: "https://github.com/InaDewangan/Data-Visualization-Dashboard",
    image: "visualizationDashboard.png",
  },
];

const ProjectsSection = () => {
  return (
    <Box
      id="projects"
      sx={{
        backgroundColor: "#131A26",
        padding: "100px 0",
        minHeight: "70vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
      }}
    >
      <Container maxWidth="lg">
        {/* Animated Heading */}
        <motion.div variants={headingAnimation} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Typography
            variant="h5"
            sx={{ color: "#38BDF8", fontWeight: 600, letterSpacing: "2px", textAlign: "center", mb: 2 }}
          >
            MY PROJECTS
          </Typography>
          <Typography variant="h4" fontWeight={700} sx={{ color: "white", textAlign: "center", mb: 7 }}>
            Bringing ideas to life through code
          </Typography>
        </motion.div>

        {/* Projects Grid */}
        <Grid container spacing={4} justifyContent="center">
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <Box sx={{ position: "relative" }}>
                  <Card
                    sx={{
                      backgroundColor: "#131A26",
                      color: "white",
                      borderRadius: "12px 12px 0 0",
                      textAlign: "center",
                      position: "relative",
                      overflow: "hidden",
                      transition: "0.3s",
                      height: "280px",
                      "&:hover": { transform: "translateY(-10px)", boxShadow: "0px 10px 20px rgba(0,0,0,0.3)", border: "2px solid #38BDF8" },
                    }}
                  >
                    {/* Project Image */}
                    <Box
                      component="img"
                      src={project.image}
                      alt={project.title}
                      target="_blank"
                      sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />

                    {/* Overlay (Half Covering) */}
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "50%", // Only half the card
                        background: "rgba(56, 189, 248, 0.85)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        opacity: 0,
                        transition: "opacity 0.4s ease-in-out",
                        "&:hover": { opacity: 1 },
                      }}
                    >
                      <Button
                        variant="contained"
                        sx={{ background: "white", color: "#131A26", fontWeight: "bold" }}
                        href={project.liveLink}
                      >
                        View Project
                      </Button>
                    </Box>
                  </Card>

                  {/* White Strip for Project Title */}
                  <Box
                    sx={{
                      backgroundColor: "white",
                      textAlign: "center",
                      padding: "15px",
                      borderRadius: "0 0 12px 12px",
                      borderTop: "none",
                    }}
                  >
                    <Typography variant="h6" fontWeight={600} sx={{ color: "#131A26" }}>
                      {project.title}
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ProjectsSection;
