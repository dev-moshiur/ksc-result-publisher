import { Link, useLocation } from "react-router-dom";
import "./topBar.scss";
import React, { useState, useEffect } from "react";
import {
  Clear,
  Menu,
  SupervisedUserCircle,
  Code,
  Phone,
  WhatsApp,
} from "@material-ui/icons";
import image from "./best.png";

export default function TopBar() {
  const { pathname } = useLocation();
  const [activeToggleMenu, setActiveToggleMenu] = useState(false);
  const [showDeveloper, setShowDeveloper] = useState(false);
  useEffect(() => {
    setActiveToggleMenu(false);
  }, [pathname]);

  return (
    <div className="topBar">
      <div className="logo">KSC Result Publisher</div>
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
        <div
          onClick={() => {
            setShowDeveloper(true);
            setActiveToggleMenu(false);
          }}
        >
          <Code />
          <span>Developer</span>
        </div>
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
              <div
                onClick={() => {
                  setShowDeveloper(true);
                  setActiveToggleMenu(false);
                }}
              >
                <Code />
                <span>Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={showDeveloper ? "developerInfo active" : "developerInfo"}>
        <div className="container">
          <div className="header">Developer Information</div>
          <div className="hhh">

          
          <div className="imagentainer">
            <img src={image} alt="" />
          </div>
          </div>
          
          <div className="name">Md Moshiur Rahman Masud</div>
          <div className="links">
            <div className="item">
              <Phone className="icon" />
              <span>+8801885-355627</span>
            </div>
            <div className="item">
              <WhatsApp className="icon" />
              <span>+8801885-355627</span>
            </div>
          </div>
          <div className="about">
            Hello! My name is Md Moshiur Rahman Masud and I am a{" "}
            <strong> MERN stack developer</strong>. I began my journey in 2020
            during the challenging time of the COVID-19 pandemic. Since then, I
            have honed my skills in the{" "}
            <strong>
              {" "}
              MERN (MongoDB, Express.js, React.js, and Node.js) stack
            </strong>
            , which is a powerful and popular technology stack for building web
            applications. I have a strong foundation in front-end development
            with<strong>React.js</strong> and back-end development with{" "}
            <strong>Node.js and Express.js</strong> , as well as experience
            working with <strong>MongoDB(Mongoose)</strong> for database
            management. I am passionate about creating efficient and
            user-friendly web applications that provide a seamless experience
            for users. I am excited to continue my journey as a MERN stack
            developer and contribute to innovative projects in the tech
            industry.
            <br />
            <br />
            Feel free to contact me if you need a website on <strong> MERN stack
            technology</strong> and mobile apps on <strong>React Native</strong>
          </div>
        </div>
        <div className="clear" onClick={() => setShowDeveloper(false)}>
          <Clear />
        </div>
      </div>
    </div>
  );
}
