import React from "react";
import styles from "../styles/Sidebar.module.css";

const SideBar = () => {
    const screen = window.screen.width;

  return (
    <div className={styles.container}>
      {screen > 768 && (
        <div className={styles.upperSection}>
          <div></div>
          <div></div>
        </div>
      )}
      <div className={styles.lowerSection}>
        <div className={styles.routeSection}>
          <div>
            <a href="#home">
              <i class="fa-solid fa-house"></i> <span>Home</span>
            </a>
          </div>
          <div>
            <a href="#skills">
              <i class="fa-solid fa-code"></i> <span>Skills</span>
            </a>
          </div>
          <div>
            <a href="#projects">
              <i class="fa-solid fa-diagram-project"></i> <span>Projects</span>
            </a>
          </div>
          <div>
            <a href="#contact">
              <i class="fa-solid fa-user"></i> <span>Contact</span>
            </a>
          </div>
        </div>
        <div className={styles.socialSection}>
          <div>
            <a
              href="https://github.com/rishabh0com"
              target="_blank"
              className={styles.github}>
              <i class="fa-brands fa-github"></i> <span>Github</span>
            </a>
          </div>
          <div className={styles.linked}>
            <a
              href="https://www.linkedin.com/in/rishabh-tripathi0703"
              target="_blank"
              className={styles.linkedIn}>
              {" "}
              <i class="fa-brands fa-linkedin"></i> <span>LinkedIn</span>
            </a>
          </div>
          <div>
            <a
              className={styles.insta}
              href="https://www.instagram.com/_rishabh_0703/"
              target="_blank">
              <i class="fa-brands fa-instagram"></i> <span>Instagram</span>
            </a>
          </div>
          <div>
            <a
              href="https://twitter.com/Rishabh78419250"
              target="_blank"
              className={styles.x}>
              {" "}
              <i class="fa-brands fa-x-twitter"></i> <span>Twitter</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
