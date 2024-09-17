"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./Contribution.module.scss";

export const Contribution = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom >= 0;
        setInView(isInView);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const text =
    "I have worked on some resources and tools; mostly for designers and developers like myself, you should checkout TINTS AND SHADES, NIGERIAN LOGOS and BAVATARS.";
  const words = text.split(" ");

  return (
    <div id="contribution-section" className={styles.contributionContainer}>
      <div
        ref={ref}
        className={`${styles.contributionSection} ${
          inView ? styles.visible : ""
        }`}
      >
        <h2>COMMUNITY CONTRIBUTIONS</h2>
        <p className={styles.animatedText}>
          {words.map((word, index) => (
            <span
              key={index}
              className={`${styles.word} ${inView ? styles.visibleWord : ""}`}
              style={{ transitionDelay: `${index * 90}ms` }}
            >
              {word}&nbsp;
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};
