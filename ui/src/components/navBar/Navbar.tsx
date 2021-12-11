import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { navBarData } from "./navBarData";
// import styles
import "./NavBar.scss";
import NavBarTitle from "./NavBarTitle";
import NavBarMedia from "./NavBarMedia";

export default function NavigationBar() {
  const [screenWidth, setScreenWidth] = useState(window.screen.width);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [screenWidth]);

  return (
    <>
      <NavBarTitle />
      <hr className="nav-bar-separator" />
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
      <NavBarMedia />
    </>
  );
}
