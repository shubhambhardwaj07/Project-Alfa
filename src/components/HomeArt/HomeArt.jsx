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

      <div className={styles.imageContainer}>
        <Image
          width={1200}
          height={1200}
          src="/images/shubh-main.png"
          alt="Shubham Bhardwaj"
          className={styles.photo}
        />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.splash}>
          <h1 className={styles.name}>Shubham Bhardwaj</h1>
          <p className={styles.title}>Frontend Developer</p>
          {/* <p className={styles.description}>
            Crafting elegant and efficient user interfaces with a focus on
            modern web technologies.
          </p> */}
        </div>
      </div>
      <MouseScroll id="contribution-section" />
    </div>
  );
};
