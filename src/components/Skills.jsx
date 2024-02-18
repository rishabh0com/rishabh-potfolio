import React from "react";
import styles from "../styles/Skills.module.css";

const Skill = ({ bColor, text }) => {
  return (
    <div
      className={styles.skillContainer}
      style={{ border: `1px solid ${bColor} ` }}>
      {text}
    </div>
  );
};

const Skills = () => {
  return (
    <div className={styles.container}>
      <h1>Skills</h1>
      <div className={styles.skills}>
        <div>
          <h2>Frontend</h2>
          <div className={styles.spread}>
            <Skill text={"HTML"} bColor={"none"} />
            {/* #fb5607 */}
            <Skill text={"CSS"} bColor={"none"} />
            {/* #4361ee */}
            <Skill text={"Javascript"} bColor={"#ffd500"} />
            {/* "#ffd500" */}
            <Skill text={"ReactJs"} bColor={"#7bdff2"} />
            <Skill text={"Redux"} bColor={"#8338ec"} />
          </div>
        </div>
        <div>
          <h2>Backend</h2>
          <div className={styles.spread}>
            <Skill text={"NodeJs"} bColor={"none"} />
            {/* #7ae582 */}
            <Skill text={"ExpressJs"} bColor={"#edf2f4"} />
            <Skill text={"MongoDB"} bColor={"#38b000"} />
          </div>
        </div>
        <div>
          <h2>Tools</h2>
          <div className={styles.spread}>
            <Skill text={"NPM"} bColor={"#e5383b"} />
            <Skill text={"Git & Github"} bColor={"none"} />
            {/* #dad7cd */}
            <Skill text={"Render"} bColor={"#6fffe9"} />
            <Skill text={"Postman"} bColor={"#ff4800"} />
            <Skill text={"Netlify"} bColor={"#04a29f"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
