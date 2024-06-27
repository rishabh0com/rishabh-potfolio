import React, { useContext, useEffect } from "react";
import styles from "../styles/Navbar.module.css";
import logo from "../assets/logo.png";
import Button from "./Button";
import { DisplayContext } from "../context/display.context";

const Navbar = () => {
  const { display, setDisplay } = useContext(DisplayContext);
  const handleDisplay = () => {
      setDisplay(!display);
  };

  const screen = window.screen.width;
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.right}>
        {screen > 768 ? (
          <Button          />
        ) : (
          <span onClick={handleDisplay} className={styles.hamburger}>
            <i class="ri-menu-4-fill"></i>
          </span>
        )}
      </div>
    </div>
  );
};

export default Navbar;
