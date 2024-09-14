"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./Hamburger.module.scss";
import { TransitionLink } from "../TransitionLink/TransitionLink";

// Define menu items
const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

export const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close menu on link click
  };

  return (
    <div className={styles.container}>
      <div
        className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
        onClick={toggleMenu}
      >
        <div className={`${styles.line} ${styles.line1}`} />
        <div className={`${styles.line} ${styles.line2}`} />
        <div className={`${styles.line} ${styles.line3}`} />
      </div>

      {/* Sliding Menu */}
      <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <ul className={styles.menuItems}>
          {menuItems.map((item) => (
            <li
              key={item.path}
              className={styles.menuItem}
              //   onClick={handleLinkClick}
            >
              <TransitionLink
                href={item.path}
                parentClickHandler={handleLinkClick}
              >
                {item.name}
                <div className={styles.hoverEffect} />
              </TransitionLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
