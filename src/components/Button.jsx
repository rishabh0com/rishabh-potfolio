import React from "react";
import styles from "../styles/Button.module.css";
import resume from "../assets/Rishabh_Tripathi_Resume.pdf";

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
