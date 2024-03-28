import React from "react";
import styles from "../styles/Button.module.css";

const Button = ({ text,link,targetPage }) => {
  return (
    <a href={link} target={targetPage}>
      {" "}
      <button className={styles.container}>{text}</button>
    </a>
  );
};

export default Button;
