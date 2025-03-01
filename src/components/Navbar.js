import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileOpen(false); // Menu close after clicking
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#111827", padding: "10px 0" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo */}
        <Typography variant="h5" sx={{ fontWeight: 700, color: "#38BDF8" }}>
          PORTFOLIO
        </Typography>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Button sx={{ color: "white", mx: 1 }} onClick={() => scrollToSection("home")}>Home</Button>
          <Button sx={{ color: "white", mx: 1 }} onClick={() => scrollToSection("about")}>About</Button>
          <Button sx={{ color: "white", mx: 1 }} onClick={() => scrollToSection("education-skills")}>Skills</Button>
          <Button sx={{ color: "white", mx: 1 }} onClick={() => scrollToSection("projects")}>Projects</Button>
          <Button sx={{ color: "white", mx: 1 }} onClick={() => scrollToSection("contact")}>Contact</Button>
        </Box>

        {/* Mobile Menu Button */}
        <IconButton sx={{ color: "white", display: { xs: "block", md: "none" } }} onClick={() => setMobileOpen(true)}>
          <MenuIcon />
        </IconButton>

        {/* Mobile Drawer */}
        <Drawer anchor="right" open={mobileOpen} onClose={() => setMobileOpen(false)}
          sx={{
            "& .MuiDrawer-paper": { 
              backgroundColor: "#111827", // Same as navbar
              color: "white", // Text color white
              width: 220 // Slightly bigger for better UI
            },
          }}>
          <List>
            {["home", "about", "services", "projects", "contact"].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton 
                  onClick={() => scrollToSection(text)}
                  sx={{ "&:hover": { backgroundColor: "#1E293B" } }} // Hover effect
                >
                  <ListItemText 
                    primary={text.charAt(0).toUpperCase() + text.slice(1)} 
                    sx={{ textAlign: "center", fontWeight: "bold", color: "#38BDF8" }} // Blue text
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
