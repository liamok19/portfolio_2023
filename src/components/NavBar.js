import React, { useState } from "react";
import { MenuData } from "./MenuData";
import "../../src/style/NavBarStyle.css";

export default function NavBar() {
  const [isMenuclicked, setisMenuClicked] = useState(false);

  const handleClick = () => {
    setisMenuClicked(!isMenuclicked);
  };

  return (
    <nav className="NavbarItems">
      <h1 className="NavbarTitle">Liam O'Kane</h1>
      <div className="menu-icons" onClick={handleClick}>
        <i className={isMenuclicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={isMenuclicked ? "nav-menu active" : "nav-menu"}>
        {MenuData.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.url} className={item.cName}>
                <i className={item.icon}></i>
                {item.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
