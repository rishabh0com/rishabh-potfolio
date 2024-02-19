import React from "react";
import Navbar from "./Navbar";
import styles from "../styles/Home.module.css";
import Button from "./Button";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import masys from "../assets/Macys.png";
import bestBuy from "../assets/bestBuy.png";
import weather from "../assets/weather.png";

const Home = () => {
  return (
    <div className={styles.container}>
      <span id="home"></span>
      {/* Navbar Section */}
      <div style={{ height: "7rem" }}>
        <Navbar />
      </div>
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
      <span id="skills">
        {" "}
        <Skills />
      </span>
      {/* Project Section */}
      <span id="projects">
        <h1>Projects</h1>
        <div className={styles.projectSection}>
          <Project
            techStack={["HTML", "CSS", "Javascript", "Open Weather API"]}
            title={"Weather Forecast App"}
            imgSrc={weather}
          />
          <Project
            techStack={[
              "ReactJs",
              "NodeJs",
              "JWT",
              "Mongo Altas",
              "Bcrypt",
              "Login",
              "Logout",
              "Cart",
            ]}
            title={"Mcay's Ecommerce Clone"}
            imgSrc={masys}
            // github={"https://github.com/rishabh0com/server_macysEcommerce"}
          />
          <Project
            techStack={[
              "ReactJs",
              "CSS",
              "Login",
              "Logout",
              "LocalStorage",
              "Cart",
            ]}
            title={"Best Buy Clone"}
            imgSrc={bestBuy}
            // github={"https://github.com/rishabh0com/bestbuy/tree/main/BestBuyApp"}
          />
        </div>
      </span>
      <div className={styles.contact}>
        <h1>Get In Touch</h1>
        <p>
          Actively looking for new opportunities, in full-stack web development.
        </p>
        <p>Phone: +91 9026128712</p>
        <p>Email: rishabhtripathi587@gmai.com</p>
        <p>Location: Kanpur (U.P.) , India</p>
        <div id="contact" className={styles.linkLogo}>
          <a href="tel:+919026128712">
            {" "}
            <i class="fa-solid fa-phone"></i>
          </a>
          <a href="mailto:rishabhtripathi587@gmai.com">
            <i class="fa-regular fa-envelope"></i>
          </a>
          <a href="https://www.linkedin.com/in/rishabh-tripathi0703" target="blank">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
