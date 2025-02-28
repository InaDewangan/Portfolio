import React from "react";
import { Box, Grid, Typography, TextField, Button, Container } from "@mui/material";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Contact = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url('https://backiee.com/static/wallpapers/560x315/367998.jpg')",
        backgroundSize: "cover",
        backgroundAttachment: "fixed", // ✅ Background image fixed कर दी
        backgroundPosition: "center",
        padding: "100px 0",
        minHeight: "60vh",
        width: "100vw",
      }}
    >
      <Container maxWidth="md">
        {/* Contact Heading */}
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Typography
            variant="h5"
            sx={{ color: "#38BDF8", fontWeight: 600, letterSpacing: "2px", textAlign: "center", mb: 2 }}
          >
            CONTACT ME
          </Typography>
          <Typography variant="h4" fontWeight={700} sx={{ color: "white", textAlign: "center", mb: 7 }}>
            Let’s Connect and Collaborate!
          </Typography>
        </motion.div>

        {/* Contact Form */}
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} md={8}>
              <TextField
                fullWidth
                label="Enter Your Name"
                variant="outlined"
                sx={{
                  background: "transparent",
                  borderRadius: "8px",
                  input: { color: "white" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#38BDF8" },
                    "&:hover fieldset": { borderColor: "#1E90FF" },
                    "&.Mui-focused fieldset": { borderColor: "#1E90FF" },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <TextField
                fullWidth
                label="Enter Your Email"
                variant="outlined"
                sx={{
                  background: "transparent",
                  borderRadius: "8px",
                  input: { color: "white" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#38BDF8" },
                    "&:hover fieldset": { borderColor: "#1E90FF" },
                    "&.Mui-focused fieldset": { borderColor: "#1E90FF" },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={8}>
              <TextField
                fullWidth
                label="Enter Your Message"
                multiline
                rows={4}
                variant="outlined"
                sx={{
                  background: "transparent",
                  borderRadius: "8px",
                  input: { color: "white" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#38BDF8" },
                    "&:hover fieldset": { borderColor: "#1E90FF" },
                    "&.Mui-focused fieldset": { borderColor: "#1E90FF" },
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} md={8} textAlign="center">
              <Button
                variant="contained"
                fullWidth
                sx={{
                  background: "#38BDF8",
                  fontWeight: "bold",
                  padding: "12px",
                  "&:hover": { background: "#1E90FF" },
                }}
              >
                Send Message
              </Button>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;
