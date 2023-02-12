import { Link, useLocation } from "react-router-dom";
import "./topBar.scss";
import React, { useState, useEffect } from "react";
import { Clear, Menu, SupervisedUserCircle } from "@material-ui/icons";

export default function TopBar() {
  const { pathname } = useLocation();
  const [activeToggleMenu, setActiveToggleMenu] = useState(false);
  useEffect(() => {
    setActiveToggleMenu(false);
  }, [pathname]);

  return (
    <div className="topBar">
      <div className="logo">Rana Result Publisher</div>
      <div className="left">
        <Link className={pathname == "/" ? "active" : ""} to="/">
          Home
        </Link>
        <Link className={pathname == "/faq" ? "active" : ""} to="/faq">
          FAQ
        </Link>
        <Link className={pathname == "/contact" ? "active" : ""} to="/contact">
          Contact Us
        </Link>
        <Link className={pathname == "/admin" ? "active" : ""} to="/admin">
          <SupervisedUserCircle />
          <span>Admin</span>
        </Link>
      </div>
      <div className="menuBar">
        <div className="top">
          <div
            className="menu"
            onClick={() => setActiveToggleMenu((pre) => !pre)}
          >
            {activeToggleMenu && <Clear />}
            {!activeToggleMenu && <Menu />}
          </div>
          <div className={activeToggleMenu ? "toggle active" : "toggle"}>
            <div className="wrapper">
              <Link className={pathname == "/" ? "active" : ""} to="/">
                Home
              </Link>
              <Link className={pathname == "/faq" ? "active" : ""} to="/faq">
                FAQ
              </Link>
              <Link
                className={pathname == "/contact" ? "active" : ""}
                to="/contact"
              >
                Contact Us
              </Link>
              <Link
                className={pathname == "/admin" ? "active" : ""}
                to="/admin"
              >
                <SupervisedUserCircle />
                <span>Admin</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
