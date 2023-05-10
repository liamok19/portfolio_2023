import "../style/HomeStyle.css";

import "../style/HomeStyle.css";
import { Link } from "react-router-dom";
import Icon from "../components/Icon";

export default function Home() {
  return (
    <div className="homeContainer">
      <h1 className="header"> Liam O'Kane</h1>
      <div className="buttonContainer">
        <CustomLink id="listStyle" to="/AboutMe">
          <button className="button-56">Click to Enter</button>
        </CustomLink>
      </div>
      <Icon />
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
