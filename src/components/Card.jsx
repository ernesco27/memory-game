import React from "react";
import "../style/card.css";

function Card({ imageUrl, title, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <div className="img__container">
        <img src={imageUrl} alt="" />
      </div>
      <div className="title__div">
        <p>{title}</p>
      </div>
    </div>
  );
}

export { Card };
