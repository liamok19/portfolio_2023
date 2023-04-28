import React from "react";
import Github from "../assets/images/github_icon.png";
import LinkedIn from "../assets/images/linkedin_icon.png";
import Email from "../assets/images/email_icon.png";

export default function Footer() {
  const styles = {
    footer: {
      borderTop: "3px solid black",
      // backgroundColor: "purple",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      borderBottom: "1px solid black",
    },
    img: {
      width: "35px",
      height: "35px",
      padding: "30px 10px 30px 10px",
    },
  };

  let gitHubURL = "https://github.com/liamok19";
  let linkedinURL = "https://www.linkedin.com/in/liam-o-kane-b91517b7/";
  let emailURL = "mailto:lokanedeveloper@gmail.com";

  return (
    <>
      <div style={styles.footer}>
        <a href={gitHubURL}>
          <img style={styles.img} src={Github} alt="Github"></img>
        </a>
        <a href={linkedinURL}>
          <img style={styles.img} src={LinkedIn} alt="Linkedin"></img>
        </a>
        <a href={emailURL}>
          <img style={styles.img} src={Email} alt="Email"></img>
        </a>
      </div>
    </>
  );
}
