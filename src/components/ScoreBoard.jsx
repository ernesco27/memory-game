import React from "react";
import "../style/score.css";

function ScoreBoard({ score, bestScore }) {
  return (
    <div className="score__board">
      <div className="player1__div">
        <div>Current Score</div>
        <div>{score}</div>
      </div>
      <div className="player2__div">
        <div>Best Score</div>
        <div>{bestScore}</div>
      </div>
    </div>
  );
}

export { ScoreBoard };
