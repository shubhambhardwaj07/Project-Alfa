import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./InitialLoader.module.scss";
import { BubbleLoader } from "../BubbleLoader/BubbleLoader";

export const InitialLoader = () => {
  const greetings = [
    "Namaste",
    "Hola",
    "Bonjour",
    "Ciao",
    "Hallo",
    "こんにちは",
  ];
  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [displayedText, setDisplayedText] = useState(""); // To handle the typewriter effect
  const [charIndex, setCharIndex] = useState(0); // To track current character

  // Typewriter effect logic
  useEffect(() => {
    const typeInterval = setInterval(() => {
      setDisplayedText(greetings[currentGreeting].slice(0, charIndex + 1));
      setCharIndex((prevIndex) => prevIndex + 1);

      if (charIndex >= greetings[currentGreeting].length) {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentGreeting((prev) => (prev + 1) % greetings.length);
          setCharIndex(0);
          setDisplayedText("");
        }, 1000); // Pause for 1 second before changing the greeting
      }
    }, 100); // Typing speed (adjust as needed)

    return () => clearInterval(typeInterval);
  }, [charIndex, currentGreeting, greetings]);

  return (
    <div className={styles.loadingContainer}>
      {/* Add the personal image with mix-blend effect */}
      <div className={styles.imageOverlay}></div>

      {/* Loader positioned at the bottom-left */}
      <div className={styles.bubbleLoaderWrapper}>
        <BubbleLoader />
      </div>

      {/* Animated greeting with typewriter effect */}
      <div className={styles.greetingsWrapper}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentGreeting}
            className={styles.greeting}
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {displayedText}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
