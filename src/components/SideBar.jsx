import React from "react";
import styles from "../styles/Sidebar.module.css";

const SideBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.upperSection}></div>
      <div className={styles.lowerSection}></div>
    </div>
  );
};

export default SideBar;
