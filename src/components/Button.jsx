import React from "react";
import styles from "../styles/Button.module.css";
import resume from "../assets/resume.pdf";

const Button = () => {
  return (
    <a
      download={resume}
      href={resume}
      target="_blank">
      <button className={styles.container}>Resume</button>
    </a>
  );
};

export default Button;
