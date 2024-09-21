import React from "react";
import styles from "./BubbleLoader.module.scss";

export const BubbleLoader = () => {
  return (
    <div className={styles.loader}>
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className={styles.bubble}
          style={{ animationDelay: `${(index + 1) * 200}ms` }}
        />
      ))}
    </div>
  );
};
