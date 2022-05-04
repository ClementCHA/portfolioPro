import React, { useState, useEffect } from "react";
import "./style.scss";
import { Letters } from "./util.js";

const rdmWords = require("random-words");

const HangMan = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [randomWord, setRandomWord] = useState("");
  const [nbOfMistake, setNbOfMistake] = useState(0);
  const [render, setRender] = useState(0);
  //const [result, setResult] = useState("");
  const [alphabet, setAlphabet] = useState(Letters);

  const startPlaying = () => {
    setIsPlaying(true);
    setRandomWord(rdmWords(1)[0].toUpperCase());
  };

  const clickOnLetter = (l) => {
    const letterValue = l?.key.toUpperCase();
    const index = alphabet.indexOf(
      alphabet.filter((e) => e?.key === letterValue)[0]
    );
    let alphaCopy = alphabet;
    let itemChange = alphaCopy[index];

    itemChange.isClicked = true;

    alphaCopy[index] = itemChange;
    setAlphabet(alphaCopy);

    if (randomWord.indexOf(letterValue) !== -1) {
      setRender(render + 1);
    } else {
      setNbOfMistake(nbOfMistake + 1);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", clickOnLetter);
    return () => document.removeEventListener("keydown", clickOnLetter);
  });

  console.log(randomWord);
  console.log(nbOfMistake);
  return (
    <>
      {!isPlaying && (
        <div className="button" onClick={startPlaying}>
          {" "}
          Generate Word
        </div>
      )}
      {isPlaying && (
        <div className="hangManContent">
          <div className="letters">
            {alphabet?.map((l) => (
              <div className="letter" key={l.key}>
                <div
                  className={
                    !l.isClicked ? "letterContent" : "letterContentClicked"
                  }
                  onClick={!l.isClicked ? () => clickOnLetter(l) : undefined}
                >
                  {l.key}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default HangMan;
