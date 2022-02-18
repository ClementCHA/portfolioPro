import React, { useState } from "react";

import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import TicTacToe from "./TicTacToe";
import { FloatingButton } from "../FloattingButton";

import styles from "./style.module.scss";

const GameView = () => {
  const [value, setValue] = useState(null);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };
  console.log(value);
  return (
    <>
      <div className={styles.app}>
        <div className={styles.title}> GAMES</div>

        <Tabs
          value={value}
          onChange={handleTabChange}
          textColor="inherit"
          className={styles.tabulation}
        >
          <Tab label="Tic-Tac-Toe" className={styles.tabs} />
          <Tab label="Simon" className={styles.tabs} />
          <Tab label="The hangman" className={styles.tabs} />
        </Tabs>
        <div className={styles.gameContent}>
          {value === null && (
            <>
              <ArrowUpwardIcon style={{ fontSize: "80px" }} />
              <div className={styles.letsPlay}>Choose a game up there !</div>
            </>
          )}
          {value === 0 && <TicTacToe />}
        </div>
        <FloatingButton />
      </div>
    </>
  );
};

export default GameView;
