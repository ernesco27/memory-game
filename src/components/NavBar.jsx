import React from "react";
import { ScoreBoard } from "./ScoreBoard";
import "../style/navbar.css";

function NavBar() {
  return (
    <div className="nav__bar">
      <div className="nav__text">Smart Mind</div>
      {/* <ScoreBoard score={score} bestScore={bestScore} /> */}
    </div>
  );
}

export { NavBar };
