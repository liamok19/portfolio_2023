import React from "react";
import HTML from "../assets/images/HTML.png";
import CSS from "../assets/images/CSS.png";
import JS from "../assets/images/Javascript.png";
import Mongo from "../assets/images/MongoDB-Emblem.png";
import ReactLogo from "../assets/images/React.png";
import SQL from "../assets/images/SQL.png";
import ThreeJS from "../assets/images/threejs.png";

export default function Icon() {
  const styles = {
    logo: {
      alignItems: "center",
    },
    imgStyling: {
      width: "50px",
      height: "50px",
    },
    rowStyle: {
      display: "flex",
      flexDriection: "row",
      backgroundColor: "#c2c2c2b0",
      justifyContent: "space-around",
    },
  };
  return (
    <div class="container">
      <div style={styles.rowStyle}>
        <div style={styles.logo}>
          <img style={styles.imgStyling} src={HTML} alt="html" />
        </div>
        <div style={styles.logo}>
          <img style={styles.imgStyling} src={CSS} alt="css" />
        </div>
        <div style={styles.logo}>
          <img style={styles.imgStyling} src={JS} alt="js" />
        </div>
        <div style={styles.logo}>
          <img style={styles.imgStyling} src={ThreeJS} alt="threejs" />
        </div>
        <div style={styles.logo}>
          <img style={styles.imgStyling} src={ReactLogo} alt="react" />
        </div>
        <div style={styles.logo}>
          <img style={styles.imgStyling} src={SQL} alt="sql" />
        </div>
      </div>
    </div>
  );
}
