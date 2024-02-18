import React from "react";
import styles from "../styles/Navbar.module.css";
import logo from "../assets/logo.png";
import Button from "./Button";

const Navbar = () => {
  const screen = window.screen.width;
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.right}>
        {screen > 768 ? (
          <Button text={`Contact Me `} />
        ) : (
          <span className={styles.hamburger}>
            <i class="fa-solid fa-bars"></i>
          </span>
        )}
      </div>
    </div>
  );
};

export default Navbar;
