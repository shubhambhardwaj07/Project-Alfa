import Link from "next/link";
import { TransitionLink } from "../TransitionLink/TransitionLink";
import styles from "./Navbar.module.scss";
import { useEffect, useState } from "react";

const Logo = ({ backgroundColor = "transparent" }) => {
  const [isDarkBackground, setIsDarkBackground] = useState(false);

  useEffect(() => {
    const checkBackground = () => {
      const backgroundColor = window.getComputedStyle(
        document.body
      ).backgroundColor;
      const rgb = backgroundColor.match(/\d+/g); // Get RGB values
      const brightness = rgb
        ? 0.299 * rgb[0] + 0.587 * rgb[1] + 0.114 * rgb[2]
        : 0;

      setIsDarkBackground(brightness < 128); // Adjust threshold as needed
    };

    checkBackground();
    window.addEventListener("resize", checkBackground);
    return () => window.removeEventListener("resize", checkBackground);
  }, []);

  return (
    <div
      className={styles.logoContainer}
      style={{ backgroundColor, color: isDarkBackground ? "white" : "black" }} // Adjust text color based on background
    >
      <div className={styles.logoText}>
        <span>My SB</span>
        <span className={styles.uiDeveloper}>UI Developer</span>
      </div>
      <div className={styles.logoIcon}>
        <img src="/path/to/your/logo.png" alt="Logo" />
      </div>
    </div>
  );
};

export const NavBar = () => {
  return (
    <TransitionLink href="/">
      <Logo />
    </TransitionLink>
  );
};
