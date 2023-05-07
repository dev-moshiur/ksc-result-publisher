import React from "react";
import "./popupMessage.scss";


export default function PopupMessage({ popupActive, setPopupActive, message }) {
  return (
    <div className={popupActive ? "popupMessage active" : "popupMessage"}>
      <div className="container">
        <div className="text">{message}</div>
      </div>
      <div onClick={() => setPopupActive(false)} className="cross">
        <span></span>
        <span></span>
   
      </div>
    </div>
  );
}
