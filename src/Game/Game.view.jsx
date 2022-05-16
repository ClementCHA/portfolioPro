import React, { useState } from "react";

import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

import TicTacToe from "./TicTacToe/morpion";
import SimonSay from "./SimonSay";
import HangMan from "./HangMan";
import { FloatingButton } from "../FloattingButton";

import styles from "./style.module.scss";

const GameView = () => {
  const [value, setValue] = useState(null);

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className={styles.app}>
        <div className={styles.title}> GAMES</div>

        <Tabs
          value={value}
          onChange={handleTabChange}
          textColor="white"
          className={styles.tabulation}
          indicatorColor="none"
          TabIndicatorProps={{ style: { textDecoration: "none" } }}
          sx={{
            "& .MuiTabs-flexContainer": {
              flexWrap: "wrap",
              justifyContent: "center",
            },
          }}
        >
          <Tab label={<span className={styles.tabs}>Tic-Tac-Toe</span>} />
          <Tab label={<span className={styles.tabs}>Simon says</span>} />
          <Tab label={<span className={styles.tabs}>Hang-Man</span>} />
        </Tabs>
        <div className={styles.gameContent}>
          {value === null && (
            <>
              <ArrowUpwardIcon style={{ fontSize: "80px" }} />
              <div className={styles.letsPlay}>Choose a game up there !</div>
            </>
          )}
          {value === 0 && <TicTacToe />}
          {value === 1 && <SimonSay />}
          {value === 2 && <HangMan />}
        </div>
        <FloatingButton />
      </div>
    </>
  );
};

export default GameView;
