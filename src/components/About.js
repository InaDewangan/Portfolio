import React from "react";
import { Box, Typography, Grid, Card, CardContent, Button } from "@mui/material";
import { motion } from "framer-motion";
import DownloadIcon from "@mui/icons-material/Download";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

// Animation Variants
const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } },
};

const About = () => {
  // ✅ Download CV Function
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/InaDewangan_CV.pdf"; // Make sure this file exists in `public` folder
    link.download = "InaDewangan_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Box
      id="about"
      sx={{
        backgroundColor: "#131A26",
        padding: { xs: "60px 20px", md: "100px 0" },
        minHeight: "50vh",
        marginTop: "50px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Grid container spacing={4} maxWidth="lg">
        {/* Left Side - About Me */}
        <Grid item xs={12} md={6} sx={{ textAlign: { xs: "center", md: "left" }, px: { xs: 2, md: 0 } }}>
          <motion.div initial="hidden" whileInView="visible" variants={fadeInLeft} viewport={{ once: true }}>
            <Typography variant="h5" sx={{ color: "#38BDF8", fontWeight: 600, letterSpacing: "2px", mb: 3 }}>
              ABOUT ME
            </Typography>
            <Typography variant="h4" fontWeight={700} sx={{ color: "white", mb: 2 }}>
              I am a self-motivated frontend developer
            </Typography>
            <Typography variant="body1" sx={{ color: "#CBD5E1", mb: 3 }}>
              I have a strong foundation in HTML, CSS, JavaScript, and React (Basic). My journey into programming began with curiosity, and I have since developed a deep interest in web development and UI/UX design.
            </Typography>
            <Button variant="contained" startIcon={<DownloadIcon />} sx={{ backgroundColor: "#38BDF8", color: "black", fontWeight: 700 }} onClick={handleDownloadCV}>
              Download CV
            </Button>
          </motion.div>
        </Grid>

        {/* Right Side - What I Love Doing */}
        <Grid item xs={12} md={6}>
          <motion.div initial="hidden" whileInView="visible" variants={fadeInRight} viewport={{ once: true }}>
            <Typography variant="h5" sx={{ color: "#38BDF8", fontWeight: 600, letterSpacing: "3px", mb: 3, textAlign: { xs: "center", md: "left" } }}>
              WHAT I LOVE DOING
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "center", md: "flex-start" } }}>
              {[
                "Building interactive web applications",
                "Learning new technologies and frameworks",
                "Solving problems through clean and efficient code",
                "Collaborating with teams to create impactful solutions",
              ].map((item, index) => (
                <Card
                  key={index}
                  sx={{
                    backgroundColor: "#1A2233",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    padding: "12px 20px",
                    borderRadius: "12px",
                    mb: 2,
                    width: { xs: "90%", sm: "80%", md: "100%" }, // Responsive width
                    boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateX(10px)",
                      boxShadow: "0px 6px 15px rgba(0,0,0,0.3)",
                    },
                  }}
                >
                  <CheckCircleIcon sx={{ color: "#38BDF8", mr: 2 }} />
                  <CardContent sx={{ padding: "8px 0" }}>
                    <Typography variant="body1">{item}</Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;



