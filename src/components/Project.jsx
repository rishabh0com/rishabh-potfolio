import React from "react";
import styles from "../styles/Project.module.css";

const Project = ({ imgSrc, title, techStack,github,live,summary }) => {
  const Vertical = () => {
    return (
      <div
        style={{
          height: "1rem",
          backgroundColor: "#14213d",
          width: ".4rem",
          marginRight: "1rem",
        }}></div>
    );
  };
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img className={styles.poster} src={imgSrc} alt="project image" />
      </div>
      <div className={styles.content}>
        <div className={styles.links}>
          <div>
            <a className={styles.route} href={github} target="_blank">
              <i class="fa-brands fa-github"></i>
            </a>
          </div>
          <div>
            <a className={styles.routee} href={live} target="_blank">
              <i class="fa-solid fa-up-right-from-square"></i>
            </a>
          </div>
        </div>
        <h2>{title}</h2>
        <div className={styles.summary}>
          {summary}
        </div>
        <div className={styles.techStack}>
          {techStack.map((ele, index) => (
            <div
              key={ele}
              style={{
                //                 border: "1px solid black",
                padding: "0",
                display: "flex",
                alignItems: "center",
                margin: "0",
              }}>
              <Vertical />
              <p
                style={{
                  margin: "0",
                  marginRight: "1rem",
                }}>
                {ele}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
