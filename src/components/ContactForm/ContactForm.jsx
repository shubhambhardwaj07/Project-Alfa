"use client";

import { useState } from "react";
import styles from "./ContactForm.module.scss";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Reset form
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setMessage("");
    }, 3000); // Reset after animation finishes
  };

  return (
    <div className={styles.container}>
      {/* Left side - form */}
      <div className={styles.formContainer}>
        <h2 className={styles.heading}>Contact Us</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label className={styles.label}>Name</label>
          <input
            className={styles.input}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />

          <label className={styles.label}>Message</label>
          <textarea
            className={styles.textarea}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message"
          ></textarea>

          <button className={styles.submitButton} type="submit">
            Submit
          </button>
        </form>
      </div>

      {/* Right side - letter template */}
      <div
        className={`${styles.letterContainer} ${
          submitted ? styles.animated : ""
        }`}
      >
        <div className={styles.letter}>
          <p className={styles.fairyHand}>Dear {name || "Your Name"},</p>
          <p className={styles.fairyHand}>
            {message || "Your message will appear here as you type."}
          </p>
        </div>
      </div>
    </div>
  );
};
