import React, { useState, useEffect } from "react";
import styles from "./style.module.scss";
import { Patterns } from "./pattern";
import Square from "./square.jsx";
const TicTacToe = () => {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({ winner: "none", state: "none" });
  const [gameEnd, setGameEnd] = useState(false);

  useEffect(() => {
    checkIfTie();
    checkWin();

    if (player === "X") {
      setPlayer("O");
    } else {
      setPlayer("X");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [board]);

  useEffect(() => {
    if (result.state !== "none") {
      setGameEnd(true);
    }
  }, [result]);

  const chooseSquare = (square) => {
    if (board[square] === "") {
      setBoard(
        board.map((value, idx) => {
          if (idx === square && value === "") {
            return player;
          }
          return value;
        })
      );
    }
  };

  const resetGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("0");
    setResult({ winner: "none", state: "none" });
    setGameEnd(false);
  };

  const checkWin = () => {
    Patterns.forEach((currentPattern) => {
      const firstPlayer = board[currentPattern[0]];
      if (firstPlayer === "") return;
      let foundWinningPattern = true;
      currentPattern.forEach((idx) => {
        if (board[idx] !== firstPlayer) {
          foundWinningPattern = false;
        }
      });
      if (foundWinningPattern) {
        setResult({ winner: player, state: "Won" });
      }
    });
  };

  const checkIfTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square === "") {
        filled = false;
      }
    });
    if (filled) {
      setResult({ winner: "No one, it's a Tie!", state: "Tie" });
    }
  };
  return (
    <>
      {!gameEnd && (
        <div className={styles.board}>
          <div className={styles.row}>
            <Square value={board[0]} chooseSquare={() => chooseSquare(0)} />
            <Square value={board[1]} chooseSquare={() => chooseSquare(1)} />
            <Square value={board[2]} chooseSquare={() => chooseSquare(2)} />
          </div>
          <div className={styles.row}>
            <Square value={board[3]} chooseSquare={() => chooseSquare(3)} />
            <Square value={board[4]} chooseSquare={() => chooseSquare(4)} />
            <Square value={board[5]} chooseSquare={() => chooseSquare(5)} />
          </div>
          <div className={styles.row}>
            <Square value={board[6]} chooseSquare={() => chooseSquare(6)} />
            <Square value={board[7]} chooseSquare={() => chooseSquare(7)} />
            <Square value={board[8]} chooseSquare={() => chooseSquare(8)} />
          </div>
        </div>
      )}
      {gameEnd && (
        <>
          <div className={styles.result}>
            Game Finished ! Winning Player: {result.winner} <br />
            {result.winner === "X" && (
              <div className={styles.taunt}>
                (Come on O, how did you lose a TicTacToe game..?)
              </div>
            )}
            {result.winner === "O" && (
              <div className={styles.taunt}>
                (Come on X, how did you lose a TicTacToe game..?)
              </div>
            )}
          </div>

          <div className={styles.letsPlay} onClick={resetGame}>
            Play Again !
          </div>
        </>
      )}
    </>
  );
};

export default TicTacToe;
