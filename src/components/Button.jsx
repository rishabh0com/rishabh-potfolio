import React from "react";
import styles from "../styles/Button.module.css";

const Button = ({ text,link }) => {
  return (
    <a href={link} target="_blank">
      {" "}
      <button className={styles.container}>{text}</button>
    </a>
  );
};

export default Button;
