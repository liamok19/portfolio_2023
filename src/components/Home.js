import "../style/HomeStyle.css";
// import NavBar from "../components/NavBar";
// import AboutMe from "../components/AboutMe";
// import Footer from "../components/Footer";
// import Contact from "./Contact";
// import Projects from "./Projects";

import "../style/HomeStyle.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1 className="header"> Liam O'Kane</h1>
      <div className="buttonContainer">
        <CustomLink id="listStyle" to="/AboutMe">
          <button className="button-56">Click to Enter</button>
        </CustomLink>
      </div>
    </div>
  );
}

function CustomLink({ to, children }) {
  const path = window.location.pathname;

  return (
    <div id="listStyle" className={path === to ? "active" : ""}>
      <Link className="listStyle" to={to}>
        {children}
      </Link>
    </div>
  );
}
