import React from "react";

import "./loading.scss";

import load from "./loading.gif";

export default function Loading({ loading }) {
  return (
    <div className={loading ? "loading active" : "loading"}>
      <img src={load} alt="" />
    </div>
  );
}
