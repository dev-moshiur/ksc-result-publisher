import { Link,useLocation } from "react-router-dom";
import "./topBar.scss";
import React from "react";

export default function TopBar() {
  const {pathname} = useLocation()
  return (
    <div className="topBar">
      <div className="left">
        <Link className={pathname=='/' ? 'active' : ''} to="/">Publish Result</Link>
        <Link className={pathname=='/search' ? 'active' : ''} to="/search">Search</Link>
      </div>

      <div className="main">
        <a href="https://school-management-beta.vercel.app/" target="_blank">
          Visit Main Website
        </a>
      </div>
    </div>
  );
}
