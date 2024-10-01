"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { TransitionLoader } from "../TransitionLoader/TransitionLoader";
import styles from "./TransitionLink.module.scss"; // Import the SCSS module
import { Portal } from "../Portal/Portal";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink = ({ children, href, ...props }) => {
  const router = useRouter();
  const [showSleepTransition, setShowSleepTransition] = useState(false);

  const handleTransition = async (e) => {
    setShowSleepTransition(true);
    props?.parentClickHandler && props?.parentClickHandler();
    e.preventDefault();

    // Show the sleep transition with background image
    await sleep(1000);
    router.push(href);
    await sleep(2500); // Wait for the sleep animation to finish

    // Navigate to the new page

    setShowSleepTransition(false); // Hide the sleep transition after navigation
  };

  return (
    <>
      <Link {...props} href={href} onClick={handleTransition}>
        {children}
      </Link>
      {showSleepTransition && (
        <Portal containerId="portal-root">
          <div className={styles["sleep-transition"]}>
            {" "}
            {/* Apply the module class */}
            <TransitionLoader />
            <h1>Ruko Zara Wait Karo..</h1>
          </div>
        </Portal>
      )}
    </>
  );
};
