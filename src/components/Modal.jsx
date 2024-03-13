import React from "react";
import "../style/modal.css";

function Modal({ text, btnName, onClick }) {
  return (
    <div className="modal__backdrop">
      <div className="modal">
        <p>{text}</p>
        <button onClick={onClick}>{btnName}</button>
      </div>
    </div>
  );
}

export { Modal };
