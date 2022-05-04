import "./style.scss";
import { useState, useEffect } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";

import ColorCard from "./colorCard";
import timeout from "./util";

const App = () => {
  const [isOn, setIsOn] = useState(false);

  const colorList = ["green", "red", "yellow", "blue"];

  const initPlay = {
    isDisplay: false,
    colors: [],
    score: 0,
    userPlay: false,
    userColors: [],
  };

  const [play, setPlay] = useState(initPlay);
  const [flashColor, setFlashColor] = useState("");
  const [milliSecond, setMilliSecond] = useState(1000);

  const startHandle = () => {
    setIsOn(true);
  };

  useEffect(() => {
    if (isOn) {
      setPlay({ ...initPlay, isDisplay: true });
    } else {
      setPlay(initPlay);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOn]);

  useEffect(() => {
    if (isOn && play.isDisplay) {
      let newColor = colorList[Math.floor(Math.random() * 4)];

      const copyColors = [...play.colors];
      copyColors.push(newColor);
      setPlay({ ...play, colors: copyColors });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOn, play.isDisplay]);

  useEffect(() => {
    if (isOn && play.isDisplay && play.colors.length) {
      displayColors();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOn, play.isDisplay, play.colors.length]);

  const displayColors = async () => {
    await timeout(milliSecond);
    for (let i = 0; i < play.colors.length; i++) {
      setFlashColor(play.colors[i]);
      await timeout(milliSecond);
      setFlashColor("");
      await timeout(milliSecond);

      if (i === play.colors.length - 1) {
        const copyColors = [...play.colors];

        setPlay({
          ...play,
          isDisplay: false,
          userPlay: true,
          userColors: copyColors.reverse(),
        });
      }
    }
  };

  const cardClickHandle = async (color) => {
    if (!play.isDisplay && play.userPlay) {
      const copyUserColors = [...play.userColors];
      const lastColor = copyUserColors.pop();
      setFlashColor(color);

      if (color === lastColor) {
        if (copyUserColors.length) {
          setPlay({ ...play, userColors: copyUserColors });
        } else {
          await timeout(milliSecond);
          setPlay({
            ...play,
            isDisplay: true,
            userPlay: false,
            score: play.colors.length,
            userColors: [],
          });
        }
      } else {
        await timeout(milliSecond);
        setPlay({ ...initPlay, score: play.colors.length });
      }
      await timeout(milliSecond);
      setFlashColor("");
    }
  };

  const closeHandle = () => {
    setIsOn(false);
    setMilliSecond(1000);
  };

  const onChangeRadioValue = (value) => {
    if (value === "easy") {
      setMilliSecond(1000);
    }
    if (value === "medium") {
      setMilliSecond(500);
    }
    if (value === "hard") {
      setMilliSecond(250);
    }
  };
  return (
    <>
      {!isOn && !play.score && (
        <div className="inputRadio">
          <FormControl>
            <RadioGroup
              row
              defaultValue="easy"
              onChange={(e) => onChangeRadioValue(e.target.value)}
            >
              <FormControlLabel
                value="easy"
                control={<Radio sx={{ color: "white" }} size="small" />}
                label={
                  <span
                    style={{ fontSize: "10px", textTransform: "uppercase" }}
                  >
                    {" "}
                    Easy Mode
                  </span>
                }
              />
              <FormControlLabel
                value="medium"
                control={<Radio sx={{ color: "white" }} size="small" />}
                label={
                  <span
                    style={{ fontSize: "10px", textTransform: "uppercase" }}
                  >
                    {" "}
                    Medium Mode
                  </span>
                }
              />
              <FormControlLabel
                value="hard"
                control={<Radio sx={{ color: "white" }} size="small" />}
                label={
                  <span
                    style={{ fontSize: "10px", textTransform: "uppercase" }}
                  >
                    {" "}
                    Hard Mode
                  </span>
                }
              />
            </RadioGroup>
          </FormControl>
        </div>
      )}

      <div className="cardWrapper">
        {colorList &&
          colorList.map((v, i) => (
            <ColorCard
              key={i}
              onClick={() => {
                cardClickHandle(v);
              }}
              flash={flashColor === v}
              color={v}
            ></ColorCard>
          ))}
      </div>

      {isOn && !play.isDisplay && !play.userPlay && play.score && (
        <div className="lost">
          <div className="finalScore">Final-Score: {play.score}</div>
          <div className="closeButton">
            <button className="closeButtonContent" onClick={closeHandle}>
              Play Again !
            </button>
          </div>
        </div>
      )}
      {!isOn && !play.score && (
        <button onClick={startHandle} className="startButton">
          Start
        </button>
      )}
      {isOn && (play.isDisplay || play.userPlay) && (
        <div className="score">{play.score}</div>
      )}
    </>
  );
};

export default App;
