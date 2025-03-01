import React from "react";
import { Box, Grid, Typography, Card, CardContent, Container } from "@mui/material";
import { motion } from "framer-motion";
import WebIcon from "@mui/icons-material/Web";
import ApiIcon from "@mui/icons-material/Api";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

// Animation Variants
const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

// Heading Animation Variant
const headingFadeIn = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const DevelopmentStack = () => {
    const services = [
        {
            title: "Frontend Web Development",
            description: "Building responsive, high-performance, and visually appealing web applications using modern frontend technologies like React.js, HTML, CSS, and JavaScript.",
            icon: <WebIcon sx={{ fontSize: 50, color: "#38BDF8" }} />,
        },
        {
            title: "API Integration & Dynamic Web Apps",
            description: "Connecting frontend with powerful backend services through REST and GraphQL APIs, creating seamless and dynamic user experiences.",
            icon: <ApiIcon sx={{ fontSize: 50, color: "#38BDF8" }} />,
        },
        {
            title: "Version Control & Deployment",
            description: "Using Git, GitHub, and CI/CD pipelines for efficient code management, automated testing, and deploying projects on cloud platforms.",
            icon: <CloudUploadIcon sx={{ fontSize: 50, color: "#38BDF8" }} />,
        },
    ];

    return (
        <Box
            id="services"
            sx={{
                backgroundColor: "#131A26", // Background pura width me dikhega
                padding: "100px 0", // Horizontal padding hataya
                minHeight: "70vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center", // Centered content
                position: "relative", // Keeps it correctly placed
                left: 0, // Ensures no unwanted margin
                width: "100vw", // Ensures full width
            }}
        >
            <Container maxWidth="lg"> {/* Container use kiya taki width control ho */}
                {/* Heading Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    variants={headingFadeIn}
                    viewport={{ once: true }}
                >
                    <Typography
                        variant="h5"
                        sx={{ color: "#38BDF8", fontWeight: 600, letterSpacing: "2px", textAlign: "center", mb: 2, mt: 1 }}
                    >
                        My Development Stack
                    </Typography>
                    <Typography variant="h4" fontWeight={700} sx={{ color: "white", textAlign: "center", mb: 7 }}>
                        Innovative solutions that transform ideas into reality
                    </Typography>
                </motion.div>

                {/* Services Grid */}
                <Grid container spacing={4} justifyContent="center">
                    {services.map((service, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <motion.div
                                variants={fadeInUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <Card
                                    sx={{
                                        backgroundColor: "#131A26",
                                        color: "white",
                                        padding: "30px",
                                        borderRadius: "12px",
                                        border: "2px solid #38BDF8",
                                        textAlign: "center",
                                        transition: "0.3s",
                                        "&:hover": { transform: "translateY(-10px)", boxShadow: "0px 10px 20px rgba(0,0,0,0.3)" },
                                    }}
                                >
                                    {service.icon}
                                    <CardContent>
                                        <Typography variant="h6" fontWeight={600} sx={{ mt: 2 }}>
                                            {service.title}
                                        </Typography>
                                        <Typography variant="body2" sx={{ mt: 1, color: "#CBD5E1" }}>
                                            {service.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default DevelopmentStack;
