import { Box, Typography } from "@mui/material";
import { LocationOn, LinkedIn, Email } from "@mui/icons-material";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        width: "100%", // ✅ Full width fix
      }}
    >
      <Box
        sx={{
          width: "100%", // ✅ Fix width issue
          background: "#131A26",
          padding: "30px 0", // ✅ Proper spacing
          minHeight: "200px", // ✅ Proper height
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "100px",
          flexWrap: "wrap",
          boxShadow: "0px -5px 15px rgba(255,255,255,0.2)",
          position: "relative", // ✅ Ensures it stays within normal flow
          bottom: 0, // ✅ Ensures it sticks at bottom of content
        }}
      >
        {/* Address */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", color: "white" }}>
          <motion.div whileHover={{ scale: 1.2, rotate: 5 }} transition={{ type: "spring", stiffness: 200 }}>
            <LocationOn sx={{ fontSize: 50, color: "#38BDF8" }} />
          </motion.div>
          <Typography variant="h6" sx={{ marginTop: "5px" }}>Address</Typography>
          <Typography variant="body1">Bemetara, Chhattisgarh</Typography>
        </Box>

        {/* LinkedIn */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", color: "white" }}>
          <motion.div whileHover={{ scale: 1.2, rotate: 5 }} transition={{ type: "spring", stiffness: 200 }}>
            <LinkedIn sx={{ fontSize: 50, color: "#38BDF8" }} />
          </motion.div>
          <Typography variant="h6" sx={{ marginTop: "5px" }}>LinkedIn</Typography>
          <Typography variant="body1">
            <a href="http://www.linkedin.com/in/ina-dewangan" style={{ color: "#38BDF8", textDecoration: "none" }}>linkedin.com/in/ina-dewangan</a>
          </Typography>
        </Box>

        {/* Email */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", color: "white" }}>
          <motion.div whileHover={{ scale: 1.2, rotate: 5 }} transition={{ type: "spring", stiffness: 200 }}>
            <Email sx={{ fontSize: 50, color: "#38BDF8" }} />
          </motion.div>
          <Typography variant="h6" sx={{ marginTop: "5px" }}>Email</Typography>
          <Typography variant="body1">
            <a href="inadewangan23@navgurukul.org" style={{ color: "#38BDF8", textDecoration: "none" }}>
            inadewangan23@navgurukul.org
            </a>
          </Typography>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Footer;
