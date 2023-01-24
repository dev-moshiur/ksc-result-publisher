import { Link } from "react-router-dom";
import "./topBar.scss";
import React from "react";

export default function TopBar() {
  return (
    <div className="topBar">
      <div className="left">
        <Link to="/">Publish Result</Link>
      </div>

      <div className="main">
        <a href="https://school-management-beta.vercel.app/" target="_blank">
          Visit Main Website
        </a>
      </div>
    </div>
  );
}
