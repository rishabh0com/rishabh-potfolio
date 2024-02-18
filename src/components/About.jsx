import React from "react";
import Styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={Styles.container}>
      <h1 className={Styles.h1}>About Me</h1>
      <p className={Styles.para}>
        Passonate full-stack engineer with a passion for creating efficient and
        user-centric web solutions. Extensive experience in both front-end and
        back-end development using the MERN stack. Well-versed in utilizing the
        latest technologies and best practices. Adept at implementing robust
        security measures and optimizing performance. Committed to delivering
        high-quality, impactful solutions for a seamless user experience.
      </p>
    </div>
  );
};

export default About;
