"use client"; // Ensures this is a client component

import React from "react";
import { motion } from "framer-motion";
import styles from "./HomeArt.module.scss";
import Image from "next/image";
import { MouseScroll } from "../MouseScroll/MouseScroll";

export const HomeArt = () => {
  return (
    <div className={styles.container}>
      {/* Background text "SHUBH" for visual effect */}
      <div className={styles.backgroundText}>SHUBH</div>

      <motion.div
        className={styles.imageContainer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Image
          width={1200}
          height={1200}
          src="/images/shubh-main.png"
          alt="Shubham Bhardwaj"
          className={styles.photo}
        />
      </motion.div>
      <motion.div
        className={styles.textContainer}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className={styles.splash}>
          <h1 className={styles.name}>Shubham Bhardwaj</h1>
          <p className={styles.title}>Frontend Developer</p>
          {/* <p className={styles.description}>
            Crafting elegant and efficient user interfaces with a focus on
            modern web technologies.
          </p> */}
        </div>
      </motion.div>
      <MouseScroll id="contribution-section" />
    </div>
  );
};
