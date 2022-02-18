import React, { useState } from "react";

import ScienceIcon from "@mui/icons-material/Science";
import Fab from "@mui/material/Fab";
import Tooltip from "@mui/material/Tooltip";

import ReactIco from "../images/react.svg";
import SassIco from "../images/sass.svg";
import JavascriptIco from "../images/javascript.png";
import Html from "../images/html.png";
import Css from "../images/css.png";

import styles from "./style.module.scss";

export const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const arrayOfTechnoUsed = [
    { ico: ReactIco, style: styles.position1, name: "React" },
    { ico: JavascriptIco, style: styles.position2, name: "Javascript" },
    { ico: Html, style: styles.position3, name: "Html" },
    { ico: SassIco, style: styles.position4, name: "Sass" },
    { ico: Css, style: styles.position5, name: "Css" },
  ];

  //components should be an Array

  return (
    <>
      <div className={styles.position}>
        <Tooltip title="Page's Stack" placement="left-start">
          <Fab
            size="small"
            className={styles.circleMenu}
            onClick={() => setIsOpen(!isOpen)}
            sx={{ boxShadow: "0px 0px 15px white" }}
          >
            <ScienceIcon />
          </Fab>
        </Tooltip>
      </div>
      {isOpen &&
        arrayOfTechnoUsed.map((t) => {
          return (
            <div className={t.style}>
              <Tooltip title={t.name} placement="left-start">
                <Fab
                  key={t}
                  size="small"
                  className={styles.circleMenu}
                  sx={{ boxShadow: "0px 0px 15px white" }}
                >
                  <img src={t.ico} alt={t.toString()} className={styles.logo} />
                </Fab>
              </Tooltip>
            </div>
          );
        })}
    </>
  );
};
