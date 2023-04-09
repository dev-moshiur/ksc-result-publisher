import { Link, useLocation } from "react-router-dom";
import "./topBar.scss";
import React, { useState, useEffect } from "react";
import { Clear, Menu, SupervisedUserCircle,Code, Phone, WhatsApp } from "@material-ui/icons";

export default function TopBar() {
  const { pathname } = useLocation();
  const [activeToggleMenu, setActiveToggleMenu] = useState(false);
  const [showDeveloper, setShowDeveloper] = useState(false)
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
        <div onClick={()=>{setShowDeveloper(true);setActiveToggleMenu(false)}} >
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
              <div onClick={()=>{setShowDeveloper(true);setActiveToggleMenu(false)}} >
                <Code />
                <span>Developer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={showDeveloper ? "developerInfo active":'developerInfo'}>
        <div className="container">


          <div className="header">
            Developer Information
          </div>
          <div className="imageCntainer">
            <img src="https://scontent.fdac157-1.fna.fbcdn.net/v/t39.30808-6/324866215_1228281747798031_6510996264689325032_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGyxFyoQIlx7Du8otqgBbLl4DWPJt23YCngNY8m3bdgKamYLmF8PTWXa2B1w-t-vTEb2cpcpXwihWPnhj_i2rP_&_nc_ohc=FinzhSB-YkgAX_piq2R&_nc_ht=scontent.fdac157-1.fna&oh=00_AfBX40mv-G6XzgeJVZ-E82-L3m0Hn9oBDhfWNpGAfiP9_Q&oe=643866D1" alt="" />
          </div>
          <div className="name">
            Md Moshiur Rahman Masud
          </div>
          <div className="links">
            <div className="item">
              <Phone className="icon"/>
              <span>+8801885-355627</span>
            </div>
            <div className="item">
              <WhatsApp className="icon"/>
              <span>+8801885-355627</span>
            </div>
          </div>
          <div className="about">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt aliquid quidem nostrum quisquam obcaecati atque ipsum quo. Ipsam, voluptatibus! Consequatur magni,  culpa quisquam
            
          </div>        
        </div>
        <div className="clear" onClick={()=>setShowDeveloper(false)} >
          
          <Clear/>
        </div>
      </div>
    </div>
  );
}
