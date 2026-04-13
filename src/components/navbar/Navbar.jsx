import React from "react";
import logo from "../../assets/GPT-3.svg";
import { HiMenu } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import "./navbar.css";
import { useState } from "react";

const Menu = () => {
  return (
    <>
      <p>
        <a href="#home">Home</a>
      </p>
      <p>
        <a href="#wgpt">WhatisGPT?</a>
      </p>
      <p>
        <a href="#openai">OpenAi</a>
      </p>
      <p>
        <a href="#studies">Case Studies</a>
      </p>
      <p>
        <a href="#library">Library</a>
      </p>
    </>
  );
};

function Navbar() {
  const [toggle, settoggle] = useState(false);
  return (
    <div className="navbar">
      <div className="navbar__links">
        <div className="navbar__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="navbar__links-container">
          <Menu />
        </div>
      </div>
      <div className="navbar-bar">
        <div className="navbar__sign">
          <p>
            <a href="#sign-in">Sign in</a>
          </p>
          <button className="navbar__signup">Sign up</button>
        </div>
        <div className="navbar-menu ">
          {toggle ? (
            <IoCloseSharp
              color="#fff"
              size={27}
              onClick={() => {
                settoggle(false);
              }}
            />
          ) : (
            <HiMenu
              color="#fff"
              size={27}
              onClick={() => {
                settoggle(true);
              }}
            />
          )}
          {toggle && (
            <div className="navbar-menu_container scale-up-center">
              <div className="navbar-menu_container-links ">
                <Menu />
                <div className="navbar-menu-sign_container">
                  <p>
                    <a href="#sign-in">Sign in</a>
                  </p>
                  <button className="navbar__signup">Sign up</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
