import React from "react";  
import "./HorizontalLine.css";
import { motion } from "framer-motion";

const words = ["JAVASCRIPT", "REACT", "WEB DEVELOPMENT", "WORLD"];

const ScrollingText = () => {
  return (
    <div className="scroll-container">
      <motion.div
        className="scrolling-text"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 15, // Slow Speed
          ease: "linear",
        }}
      >
        {[...words, ...words].map((word, index) => (
          <span key={index}>{word} ✶ </span>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingText;
