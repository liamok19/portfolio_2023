import React from "react";
import "../style/Projects.css";
import eHealth from "../assets/images/project_images/eHealthNSW_Logo.png";
import eatCake from "../assets/images/project_images/Let_Them_Eat_Cake.gif";
import cryptoMuggles from "../assets/images/project_images/final-look.gif";
import pwGenerator from "../assets/images/project_images/Password Generator.gif";
import whatIf from "../assets/images/whatif_2021.jpg";
import MTB3 from "../assets/images/project_images/mayathebee3_logo.png";
import Winchester from "../assets/images/project_images/winchester_img.jpg";
import UnderWorld from "../assets/images/project_images/Underworld-blood-wars-movie-logo.png";
import hundredWolf from "../assets/images/project_images/100_wolf_film.png";
import NavBar from "./NavBar";

export default function Projects() {
  return (
    <>
      <NavBar />
      <div className="page_container">
        <div className="container_prj">
          <div className="arrow_gong">
            <div className="arrow" />
            <div className="line" />
            <div className="dot" />
          </div>
          <div className="year_line">
            <h2>
              2023
              <div className="desc_prj">
                <h3>INP</h3>
                <h3>INP</h3>
                <h3>NSW Health App - Front End Developer</h3>
                <h3>
                  Dance Captain - Noteable Theatre Company (Kinky Boots
                  Production)
                </h3>
              </div>
            </h2>
            <h2>
              2022
              <div className="desc_prj">
                <h3>100% Wolf: Book of Hath - In Progress</h3>
              </div>
            </h2>
            <h2>
              2021
              <div className="desc_prj">
                <h3>Flying Bark Social Media Account </h3>
                <h3>What if...?</h3>
              </div>
            </h2>
            <h2>
              2020
              <div className="desc_prj">
                <h3>Maya The Bee - The Golden Orb </h3>
              </div>
            </h2>
            <h2>
              2019
              <div className="desc_prj">
                <h3>100% Wolf</h3>
              </div>
            </h2>
            <h2>
              2018
              <div className="desc_prj">
                <h3>A-X-L</h3>
                <h3>Laughing Under the Clouds: Gaiden Part 1 & 2</h3>
                <h3>Upgrade</h3>
                <h3>Winchester</h3>
                <h3>7 Guardians of the Tomb</h3>
                <h3>Swinging Safari</h3>
              </div>
            </h2>
            <h2>
              2017
              <div className="desc_prj">
                <h3>2:22</h3>
                <h3>Janet King</h3>
              </div>
            </h2>
            <h2>
              2016
              <div className="desc_prj">
                <h3>Underworld: Blood Wars </h3>
              </div>
            </h2>
          </div>
          <div className="img_box">
            <div className="innerBox">
              <a
                id="boxStyle"
                href={
                  "https://www.ehealth.nsw.gov.au/solutions/patient-experience/digital/nsw-health-app"
                }
              >
                <img src={eHealth} alt="nswHealthApp" className="firstBox" />
              </a>
              <a
                id="boxStyle"
                href={"https://github.com/liamok19/cakeECommerce"}
              >
                <img src={eatCake} alt="LetThemEatCake" className="secondBox" />
              </a>
              <a
                id="boxStyle"
                href={"https://github.com/liamok19/Crypto-Muggles"}
              >
                <img
                  src={cryptoMuggles}
                  alt="CryptoMuggles"
                  className="thirdBox"
                />
              </a>
              <a
                id="boxStyle"
                href={"https://github.com/liamok19/passwordGeneratorJS"}
              >
                <img
                  src={pwGenerator}
                  alt="pwgenerator"
                  className="fourthBox"
                />
              </a>
              <a id="boxStyle" href={"https://www.imdb.com/title/tt10168312/"}>
                <img src={whatIf} alt="whatIf" className="fifthBox" />
              </a>
              <a
                id="boxStyle"
                href={
                  "https://www.imdb.com/title/tt11792512/?ref_=nv_sr_srsg_0"
                }
              >
                <img src={MTB3} alt="MTB3" className="sixthBox" />
              </a>
              <a
                id="boxStyle"
                href={"https://www.imdb.com/title/tt1072748/?ref_=nv_sr_srsg_3"}
              >
                <img src={Winchester} alt="Winchester" className="seventhBox" />
              </a>
              <a
                id="boxStyle"
                href={"https://www.imdb.com/title/tt3717252/?ref_=fn_al_tt_1"}
              >
                <img src={UnderWorld} alt="UnderBlood" className="eigthBox" />
              </a>
              <a
                id="boxStyle"
                href={"https://www.imdb.com/title/tt8774798/?ref_=fn_al_tt_1"}
              >
                <img src={hundredWolf} alt="100Wolf" className="ninthBox" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
