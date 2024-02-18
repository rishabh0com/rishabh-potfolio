import React from "react";
import Navbar from "./Navbar";
import styles from "../styles/Home.module.css";
import Button from "./Button";
import About from "./About";
import Skills from "./Skills";

const Home = () => {
  return (
    <div className={styles.container}>
      {/* Navbar Section */}
      <Navbar />
      {/* Main Section */}
      <div className={styles.mainSection}>
        <div className={styles.mainleft}>
          <div className={styles.showText}>
            <p>Hey 👋, I' m</p>
            <p>Rishabh Tripathi</p>
            <p>Full Stack Engineer.</p>
            <Button text={"Resume"} />
          </div>
        </div>
        <div className={styles.mainright}>
          <div className={styles.blobs}>
            <div className={styles.profilePic}></div>
          </div>
        </div>
      </div>
      {/* About Section */}
      <About />
      {/* Skills Section */}
      <Skills />
    </div>
  );
};

export default Home;
