import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navBarData } from "./navBarData";
// import styles
import "./NavBar.scss";
import NavBarTitle from "./NavBarTitle";
import NavBarMedia from "./NavBarMedia";

export default function NavigationBar() {
  return (
    <>
      <NavBarTitle />
      <hr />
      <ul className="nav-bar-items">
        {navBarData.map((item, index) => (
          <li key={index} className={item.cname}>
            <Link to={item.path}>
              {<item.icon />}
              <span>{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
      <NavBarMedia />
    </>
  );
}
