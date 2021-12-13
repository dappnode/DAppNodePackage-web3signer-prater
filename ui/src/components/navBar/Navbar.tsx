import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navBarData } from "./navBarData";
import NavBarMedia from "./NavBarMedia";
import { FaEthereum } from "react-icons/fa";
// import styles
import "./NavBar.scss";

export default function NavigationBar() {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [screenWidth]);

  return (
    <div className="nav-bar">
      <div className="nav-bar-header">
        <FaEthereum className="nav-bar-header-logo"></FaEthereum>
        <hr className="nav-bar-separator" />
      </div>

      <ul className="nav-bar-items">
        {navBarData.map((item, index) => (
          <li key={index} className={item.cname}>
            <Link to={item.path}>
              {<item.icon />}
              {screenWidth > 480 && <span>{item.title}</span>}
            </Link>
          </li>
        ))}
      </ul>

      <div className="nav-bar-footer">
        <hr className="nav-bar-separator" />
        <NavBarMedia />
      </div>
    </div>
  );
}
