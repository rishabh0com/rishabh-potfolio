import React from "react";
import Navbar from "./Navbar";
import styles from "../styles/Home.module.css";
import Button from "./Button";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import masys from "../assets/Macys.png";
import jscalc from "../assets/calculator.png";
import weather from "../assets/weather.png";
import quest from "../assets/quest.png";

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
            <Button />
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
      <div id="skills"> </div> <Skills />
      {/* Project Section */}
      <h1 id="projects">Projects</h1>
      <div className={styles.projectSection}>
        <Project
          techStack={["HTML", "CSS", "Javascript", "DOM"]}
          title={"JS Calculator"}
          imgSrc={jscalc}
          summary={
            "A responsive JavaScript Calculator built with HTML, CSS, and JS, featuring basic arithmetic operations and clear/backspace functionality."
          }
          github={"https://github.com/rishabh0com/JS_Calculator"}
          live={"https://jscalculator0com.netlify.app/"}
        />

        <Project
          techStack={["HTML", "CSS", "Javascript", "Open Weather API"]}
          title={"Weather Forecast App"}
          imgSrc={weather}
          summary={
            "A Weather App providing live weather updates and a three-day forecast, built with HTML, CSS, and JavaScript for a responsive design."
          }
          github={"https://github.com/rishabh0com/weather_app/tree/master"}
          live={"https://weather-forecast-app-0723.netlify.app"}
        />
        <Project
          techStack={["React", "Tailwind CSS","Responsive Web Design"]}
          title={"Quest AI Clone"}
          imgSrc={quest}
          summary={
            "A Quest.ai clone using React, Tailwind, HTML, CSS, and React Router DOM, featuring responsive design and great UI."
          }
          github={"https://github.com/rishabh0com/weather_app/tree/master"}
          live={"https://weather-forecast-app-0723.netlify.app"}
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
          title={"Mcay's Ecommerce"}
          imgSrc={masys}
          summary={
            "A Macy's eCommerce clone created using the MERN stack, featuring user authentication, product catalog, shopping cart, and responsive layout"
          }
          github={"https://github.com/rishabh0com/QuestLab_Clone"}
          live={"https://quest-ai-clone.vercel.app/"}
        />
      </div>
      <div className={styles.contact}>
        <h1>Get In Touch</h1>
        <p>
          Actively looking for new opportunities, in full-stack web development.
        </p>
        <p>Phone: +91 9026128712</p>
        <p>Email: rishabhtripathi587@gmail.com</p>
        <p>Location: Kanpur (U.P.) , India</p>
        <div id="contact" className={styles.linkLogo}>
          <a href="tel:+919026128712">
            {" "}
            <i class="fa-solid fa-phone"></i>
          </a>
          <a href="mailto:rishabhtripathi587@gmai.com">
            <i class="fa-regular fa-envelope"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/rishabh-tripathi0703"
            target="blank">
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
