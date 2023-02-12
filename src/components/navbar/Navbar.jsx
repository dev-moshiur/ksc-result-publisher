import { ArrowDownward, Menu } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";

export default function Navbar() {
  return (
    <div className="navber">
      <div className="depertment">
        <div className="main">
          <Menu className="menu" />
          <span>Shop By Depertment</span>
        </div>
        <div className="toggle">
          <div className="wrapper"></div>
        </div>
      </div>
      <div className="navLinks">
        <div className="links">
          <div className="link">
            <div className="top">
              <Link to="#">Home</Link>
              <ArrowDownward className="arrow" />
            </div>
            <div className="toggle">
              <div className="wrapper">
                <Link to="#">Link one</Link>
                <Link to="#">Link Two</Link>
                <Link to="#">Link Three</Link>
                <Link to="#">Link Four</Link>
                <Link to="#">Link Five</Link>
              </div>
            </div>
          </div>
          <div className="link">
            <div className="top">
              <Link to="#">Shop</Link>
            </div>
            <div className="toggle">
              <div className="wrapper">
                <Link to="#">Link one</Link>
                <Link to="#">Link Two</Link>
                <Link to="#">Link Three</Link>
                <Link to="#">Link Four</Link>
                <Link to="#">Link Five</Link>
              </div>
            </div>
          </div>
          <div className="link">
            <div className="top">
              <Link to="#">Page</Link>
            </div>
            <div className="toggle">
              <div className="wrapper">
                <Link to="#">Link one</Link>
                <Link to="#">Link Two</Link>
                <Link to="#">Link Three</Link>
                <Link to="#">Link Four</Link>
                <Link to="#">Link Five</Link>
              </div>
            </div>
          </div>
          <div className="link">
            <div className="top">
              <Link to="#">Blog</Link>
            </div>
            <div className="toggle">
              <div className="wrapper">
                <Link to="#">Link one</Link>
                <Link to="#">Link Two</Link>
                <Link to="#">Link Three</Link>
                <Link to="#">Link Four</Link>
                <Link to="#">Link Five</Link>
              </div>
            </div>
          </div>
          <div className="link">
            <div className="top">
              <Link to="#">About</Link>
            </div>
            <div className="toggle">
              <div className="wrapper">
                <Link to="#">Link one</Link>
                <Link to="#">Link Two</Link>
                <Link to="#">Link Three</Link>
                <Link to="#">Link Four</Link>
                <Link to="#">Link Five</Link>
              </div>
            </div>
          </div>
          <div className="link">
            <div className="top">
              <Link to="#">Contact Us</Link>
            </div>
            <div className="toggle">
              <div className="wrapper">
                <Link to="#">Link one</Link>
                <Link to="#">Link Two</Link>
                <Link to="#">Link Three</Link>
                <Link to="#">Link Four</Link>
                <Link to="#">Link Five</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text">Spent 120$ and get free sheeping</div>
    </div>
  );
}
