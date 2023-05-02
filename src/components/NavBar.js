import React, { useState } from "react";
import "../../src/style/NavBarStyle.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/project_images/Group 2.png";

export default function NavBar() {
  const [isMenuclicked, setisMenuClicked] = useState(false);

  const handleClick = () => {
    setisMenuClicked(!isMenuclicked);
  };

  return (
    <>
      <nav className="NavbarItems">
        <h1 className="NavbarTitle" />
        <div className="menu-icons" onClick={handleClick}>
          <i className={isMenuclicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={isMenuclicked ? "nav-menu active" : "nav-menu"}>
          <CustomLink to="/AboutMe">
            About Me<i id="navStyle" className="fa-solid fa-house-user"></i>
          </CustomLink>
          <CustomLink to="/Projects">
            Projects<i id="navStyle" className="fa-solid fa-briefcase"></i>
          </CustomLink>
          <CustomLink to="/Contact">
            Conatct<i id="navStyle" className="fa-solid fa-address-book"></i>
          </CustomLink>
        </ul>
      </nav>
      <img className="logoStyle" src={logo} alt="LogoLO" />
    </>
  );
}

function CustomLink({ to, children, ...props }) {
  const path = window.location.pathname;

  return (
    <li className={path === to ? "active" : ""}>
      <Link className="navStyle" to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
