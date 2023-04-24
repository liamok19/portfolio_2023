import React from "react";
import "../style/AboutMe.css";
import Image from "../assets/images/liamo_headshot_01_Copy.JPG";

export default function AboutMe() {
  return (
    <div className="aboutMeContainer">
      <div className="row">
        <h1 id="AboutMe" className="bioDesc">
          Bio
        </h1>
        <div className="column-1">
          <h2 className="introDescription">
            Aloha, I'm Liam, Li, Leeham and my list of nicknames continues to
            grow. I'm a Full Stack Developer with extensive experience with
            server side and client side applications.I attended the University
            of Sydney and Trinity College Education and completed a certificate
            in Full Stack Web Development. I have a creative flare and I owe
            that to working in the VFX and Animation Industry for over 8 years.
            From this I have a wealth of experience managing productions
            involving Artists, Directors, Admin, Production, and Marketing team
            members. During the Full Stack Web Development course I learnt best
            practices for designing powerful mobile-friendly websites and
            applications.
          </h2>
          <h3 className="additionalText">
            A fabulous thing about me is that I have traded dancing on stage for
            dancing in the kitchen. Despite the fact that it has no relevance to
            programming, it contributes to the upbeat nature I bring to the
            working environment.
          </h3>
        </div>
        <div className="column-2">
          <img className="img" src={Image} alt="Headshot" />
        </div>
      </div>
    </div>
  );
}
