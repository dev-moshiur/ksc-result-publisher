import React from "react";
import "./popUpLoading.scss";
import loadinGif from "./loadingtwo.gif";
export default function PopUpLoading() {
  return (
    <div className="popUpLoading fadeIn">
      <div className="container">
        <img src={loadinGif} alt="loading" />
      </div>
    </div>
  );
}
