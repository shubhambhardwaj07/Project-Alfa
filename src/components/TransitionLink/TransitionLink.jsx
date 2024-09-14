"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { TransitionLoader } from "../TransitionLoader/TransitionLoader";
import styles from "./TransitionLink.module.scss"; // Import the SCSS module

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink = ({ children, href, ...props }) => {
  const router = useRouter();
  const [showSleepTransition, setShowSleepTransition] = useState(false);

  const handleTransition = async (e) => {
    e.preventDefault();

    setShowSleepTransition(true); // Show the sleep transition with background image

    await sleep(2000); // Wait for the sleep animation to finish
    props?.parentClickHandler();
    router.push(href); // Navigate to the new page

    setShowSleepTransition(false); // Hide the sleep transition after navigation
  };

  return (
    <>
      <Link {...props} href={href} onClick={handleTransition}>
        {children}
      </Link>
      {showSleepTransition && (
        <div className={styles["sleep-transition"]}>
          {" "}
          {/* Apply the module class */}
          <TransitionLoader />
          <h1>Ruko Zara Wait Karo..</h1>
        </div>
      )}
    </>
  );
};
