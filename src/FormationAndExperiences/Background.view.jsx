import React from "react";
import styles from "./style.module.scss";

import Css from "./../images/css.svg";
import ReactLogo from "./../images/react.svg";
import ES6 from "./../images/es6.svg";
import HTML from "./../images/html5.svg";
import Javascript from "./../images/javascript.svg";
import SASS from "./../images/sass.svg";

import CV from "./Charles_Clement_CV.pdf";

import CircleIcon from "@mui/icons-material/Circle";

const BackgroundView = () => {
  return (
    <>
      <div className={styles.backGround}>
        <p className={styles.title}> Training and Experiences </p>
        <div className={styles.app}>
          <div className={styles.block}>
            <p className={styles.blockTitle}>
              {" "}
              <span className={styles.lineBefore}></span>Training
              <span className={styles.lineAfter}>{""}</span>
            </p>
            <div className={styles.training}>
              <p className={styles.trainingSteps}>
                {" "}
                <CircleIcon
                  fontSize="small"
                  style={{ marginLeft: "-12px" }}
                />{" "}
                <span className={styles.traininStepsTitle}>
                  {" "}
                  2021 - O'Clock Coding School
                </span>
              </p>
              <p className={styles.traininStepsContent}>
                {" "}
                FullStack Javascript training, React JS specialization - 6
                intensive months
              </p>
              <p className={styles.trainingSteps}>
                {" "}
                <CircleIcon
                  fontSize="small"
                  style={{ marginLeft: "-12px" }}
                />{" "}
                <span className={styles.traininStepsTitle}>
                  {" "}
                  2015 - Advanced technician's certificate, Manager Assistant
                </span>
              </p>
              <p className={styles.traininStepsContent}>
                {" "}
                Intern and extern communication and relation, action's
                organization, learn to decide in a professional way.
              </p>
              <p className={styles.traininStepsContent}>
                {" "}
                Intern at the "French Film Festival of Edinburgh" at Edinburg -
                Scotland.
              </p>
              <p className={styles.trainingSteps}>
                {" "}
                <CircleIcon
                  fontSize="small"
                  style={{ marginLeft: "-12px" }}
                />{" "}
                <span className={styles.traininStepsTitle}>
                  {" "}
                  2012 - Economic High School Diploma
                </span>
              </p>
              <p className={styles.traininStepsContent}>
                Law, economy, philosophy - English specialization
              </p>
            </div>
            <div className={styles.logos}>
              <img src={Css} alt="Css Logo" className={styles.logo} />
              <img src={ReactLogo} alt="ReactLogo" className={styles.logo} />
              <img src={ES6} alt="ES6" className={styles.logo} />
              <img src={HTML} alt="HTML" className={styles.logo} />
              <img src={Javascript} alt="Javascript" className={styles.logo} />
              <img src={SASS} alt="SASS" className={styles.logo} />
            </div>
          </div>
          <div className={styles.block}>
            <p className={styles.blockTitle}>
              {" "}
              <span className={styles.lineBefore}></span>Experiences
              <span className={styles.lineAfter}>{""}</span>
            </p>
            <div className={styles.training}>
              <p className={styles.trainingSteps}>
                {" "}
                <CircleIcon
                  fontSize="small"
                  style={{ marginLeft: "-12px" }}
                />{" "}
                <span className={styles.traininStepsTitle}>
                  {" "}
                  07-2021 / 02-2022 - Origins Digital
                </span>
              </p>
              <p className={styles.traininStepsContent}>
                {" "}
                Trainee at Origins Digital - Biarritz
              </p>
              <p className={styles.traininStepsContent}>
                {" "}
                Front-end developer working on rewritting parts of an existing
                back office and creating a component's library
              </p>
              <p className={styles.trainingSteps}>
                {" "}
                <CircleIcon
                  fontSize="small"
                  style={{ marginLeft: "-12px" }}
                />{" "}
                <span className={styles.traininStepsTitle}>
                  {" "}
                  06/2021 - Creation of "Picky".
                </span>
              </p>
              <p className={styles.traininStepsContent}>
                {" "}
                Movies and TV Shows Website.
              </p>

              <p className={styles.trainingSteps}>
                {" "}
                <CircleIcon
                  fontSize="small"
                  style={{ marginLeft: "-12px" }}
                />{" "}
                <span className={styles.traininStepsTitle}>
                  {" "}
                  08/2018-03/2019 - Creation of the project“Riddle Virtual Bar”
                </span>
              </p>
              <p className={styles.traininStepsContent}>
                Crowdfunding, market research business plan, marketing research,
                search and negociation for a commercial place to settle down,
                social Network communication, bank canvass
              </p>
            </div>
            <div className={styles.logos}>
              {" "}
              <a
                href={CV}
                rel="noreferrer"
                target="_blank"
                className={styles.cv}
              >
                Download my CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BackgroundView;
