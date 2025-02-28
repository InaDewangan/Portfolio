import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Grid, Container } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { motion } from "framer-motion";

const roles = ["Frontend Developer", "Creative Designer", "Web Enthusiast"];

const Home = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // ✅ Download CV Function
  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/InaDewangan_CV.pdf"; // Make sure this file exists in `public` folder
    link.download = "InaDewangan_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // ✅ Watch Video Function (Placeholder)
  const handleWatchVideo = () => {
    window.open("https://www.youtube.com/watch?v=DFmhX5h6Lig", "_blank"); // Yaha apna video link dalen  };
  };
  return (
    <Container maxWidth="lg" sx={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
    <Grid
      container
      spacing={2}
      alignItems="center"
      justifyContent="center"
      sx={{
        flexDirection: { xs: "column-reverse", md: "row" },
        textAlign: { xs: "center", md: "left" },
      }}
    >  
        {/* Left Content */}
        <Grid item xs={12} md={6}>
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1 }}>
            <Typography variant="h3" fontWeight={700} sx={{ color: "white", fontSize: { xs: "2rem", md: "3rem" } }}>
              Hi, I'm <span style={{ color: "#38BDF8" }}>Ina Dewangan!</span>
            </Typography>
            <Typography variant="h4" fontWeight={700} sx={{ color: "#38BDF8", mt: 1, fontSize: { xs: "1.5rem", md: "2rem" } }}>
              {roles[roleIndex]}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, color: "#CBD5E1", maxWidth: "500px", mx: { xs: "auto", md: "0" } }}>
              I'm a passionate frontend developer, skilled in JavaScript, React, and web design.
            </Typography>
            <Box sx={{ mt: 4, display: "flex", justifyContent: { xs: "center", md: "flex-start" }, gap: "15px" }}>
              <Button
                variant="contained"
                startIcon={<DownloadIcon />}
                sx={{ backgroundColor: "#38BDF8", color: "black", fontWeight: 700 }}
                onClick={handleDownloadCV}
              >
                Download CV
              </Button>
              <Button
                variant="outlined"
                sx={{ borderColor: "#38BDF8", color: "#38BDF8", fontWeight: 700 }}
                onClick={handleWatchVideo}
              >
                Watch The Video
              </Button>
            </Box>
          </motion.div>
        </Grid>

        {/* Right Side - Image */}
        <Grid item xs={12} md={6} sx={{ display: "flex", justifyContent: "center" }}>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
            <Box
              sx={{
                width: { xs: "250px", md: "300px" }, // ✅ Responsive Image Size
                height: { xs: "250px", md: "300px" },
                borderRadius: "20px",
                overflow: "hidden",
                border: "5px solid #38BDF8",
              }}
            >
              <img src="inaDewangan.jpeg" alt="Ina Dewangan" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
