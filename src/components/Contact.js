import React from "react";
import Image from "../assets/images/liamo_headshot_01.JPG";
import "../style/Contact.css";
import NavBar from "./NavBar";

export default function Contact() {
  return (
    <>
      <NavBar />
      <div className="contactContainer">
        <div className="row">
          <div id="Contact" className="contactCollection">
            <div className="column-2">
              <img className="img" src={Image} alt="Headshot-WIP" />
            </div>
            <div className="desc_style">
              <h2>email - lokanedeveloper@gmail.com</h2>
              <h3>
                linkedIn - https://www.linkedin.com/in/liam-o-kane-b91517b7/
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
