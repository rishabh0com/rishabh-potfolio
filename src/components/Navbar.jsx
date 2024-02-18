import React from "react";
import styles from "../styles/Navbar.module.css";
import logo from "../assets/logo.png";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.right}>
        <Button text={`Contact Me `} />
      </div>
    </div>
  );
};

export default Navbar;
