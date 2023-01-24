import React from "react";

import "./loading.scss";

import load from "../Loading_2.gif";

export default function Loading() {
  return (
    <div className="loading">
      <img src={load} alt="" />
    </div>
  );
}
