import React from "react";
import logo from "../pic/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <div className="navlink">
            <ul className="f_flex">
              <li>
                <a href="#home">home</a>
              </li>
              <li>
                <a href="#features">features</a>
              </li>
              <li>
                <a href="#portfolio">portfolio</a>
              </li>
              <li>
                <a href="#resume">resume</a>
              </li>
              <li>
                <a href="#clients">clients</a>
              </li>
              <li>
                <a href="#blog">blog</a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>
              <li>
                <button className="home-btn">Buy Now</button>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
