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
        <Link className={pathname=='/faq' ? 'active' : ''} to="/faq">FAQ</Link>
        <Link className={pathname=='/contact' ? 'active' : ''} to="/contact">Contact Us</Link>
      </div>

      <div className="main">
      </div>
    </div>
  );
}
