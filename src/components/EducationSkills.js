
import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";

// Animation Variants
const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const progressVariants = {
    hidden: { width: "0%" },
    visible: (custom) => ({
        width: custom,
        transition: { duration: 1.5, ease: "easeInOut" },
    }),
};

// Education Data
const educationData = [
    { title: "Computer Programming Course", place: "NavGurukul Foundation", year: "Aug 2023 – Present" },
    { title: "Bachelor of Science", place: "Hemchand Yadav Vishwavidyalaya, Durg", year: "Aug 2023 – Present" },
    { title: "ITI - Computer Operator & Programming Assistant", place: "Late Chandulal Chandrakar Govt. ITI", year: "2022 – 2023 (88.6%)" },
    { title: "12th Grade", place: "Govt. Girls Higher Secondary School, Bemetara", year: "2021 – 2022 (67%)" },
];

// Updated Skills Data
const skills = [
    { name: "HTML", level: 70 },
    { name: "CSS", level: 60 },
    { name: "JavaScript", level: 60 },
    { name: "React", level: 30 },
    { name: "Git & GitHub", level: 50 },
    { name: "REST API", level: 50 },
];

const EducationSkills = () => {
    return (
        <Box
            id="education-skills"
            sx={{
                backgroundColor: "#0A0E17",
                padding: { xs: "60px 20px", md: "100px 0" },
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100vw",
            }}
        >
            {/* Section Heading */}
            <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
                <Typography variant="h5" sx={{ color: "#38BDF8", fontWeight: 600, letterSpacing: "2px", mb: 1, textAlign: "center" }}>
                    EDUCATION & SKILLS
                </Typography>
                {/* ✅ Second Heading Updated & Responsive */}
                <Typography 
                    variant="h4" 
                    fontWeight={700} 
                    sx={{ 
                        color: "white", 
                        mb: 6, 
                        textAlign: "center", 
                        px: { xs: 2, sm: 4, md: 6 } 
                    }}
                >
                    Empowering growth through learning & expertise
                </Typography>
            </motion.div>

            <Grid container spacing={4} maxWidth="lg">
                {/* Education Section */}
                <Grid item xs={12}>
                    <Grid container spacing={3}>
                        {educationData.map((edu, index) => (
                            <Grid item xs={12} md={6} key={index}>
                                <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
                                    <Card
                                        sx={{
                                            backgroundColor: "#0A0E17",
                                            color: "white",
                                            padding: "15px",
                                            mb: 2,
                                        }}
                                    >
                                        <CardContent>
                                            <Typography variant="body2" sx={{
                                                color: "#38BDF8", 
                                                fontWeight: 600, 
                                                backgroundColor: "#0A0E17",
                                                padding: "20px",
                                                borderRadius: "5px",
                                                border: "1px solid #38BDF8",
                                                textAlign: "center",
                                                display: "inline",
                                                transition: "0.3s",
                                                "&:hover": { transform: "translateY(-10px)", boxShadow: "0px 10px 20px rgba(0,0,0,0.3)" },
                                            }}>
                                                {edu.year}
                                            </Typography>
                                            <Typography variant="h6" fontWeight={700} sx={{ color: "white", mt: 4 }}>
                                                {edu.title}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: "#CBD5E1" }}>
                                                {edu.place}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>

                {/* Skills Section */}
                <Grid container spacing={3} maxWidth="lg" marginTop={10}>
                    {skills.map((skill, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <motion.div initial="hidden" whileInView="visible" variants={fadeInUp} viewport={{ once: true }}>
                                <Card
                                    sx={{
                                        backgroundColor: "#1A2233",
                                        color: "white",
                                        padding: "15px",
                                        borderRadius: "5px",
                                        mb: 2,
                                        transition: "0.3s",
                                        "&:hover": {
                                            transform: "translateY(-5px)",
                                            boxShadow: "0px 6px 15px rgba(0,0,0,0.3)",
                                        },
                                    }}
                                >
                                    <CardContent>
                                        <Typography variant="h6" sx={{ color: "white", fontWeight: 600, mb: 2 }}>
                                            {skill.name}
                                        </Typography>

                                        {/* Progress Bar Container (Fixed Size) */}
                                        <Box sx={{ width: "100%", height: "8px", backgroundColor: "#334155", borderRadius: "5px", overflow: "hidden", position: "relative" }}>
                                            {/* Animated Fill */}
                                            <motion.div
                                                initial="hidden"
                                                whileInView="visible"
                                                viewport={{ once: true }}
                                                custom={`${skill.level}%`}
                                                variants={progressVariants}
                                                style={{
                                                    height: "100%",
                                                    backgroundColor: "#38BDF8",
                                                    position: "absolute",
                                                    top: 0,
                                                    left: 0,
                                                }}
                                            />
                                        </Box>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Box>
    );
};

export default EducationSkills;
