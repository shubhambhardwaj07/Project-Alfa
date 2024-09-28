"use client";

import { useState, useEffect } from "react";
import styles from "./MouseScroll.module.scss";

export const MouseScroll = ({ id }) => {
  const [opacity, setOpacity] = useState(1);

  const handleClick = () => {
    const nextSection = document.getElementById(id);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const scrollPosition = window?.scrollY;
    const windowHeight = window?.innerHeight;

    // Calculate new opacity based on scroll position
    const newOpacity = Math.max(0, 1 - scrollPosition / windowHeight);
    setOpacity(newOpacity);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={styles.mouseIcon}
      onClick={handleClick}
      style={{ opacity }} // Apply dynamic opacity
    >
      <div className={styles.dot} />
    </div>
  );
};
