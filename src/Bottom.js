import React, { useState, useEffect } from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from "../src/assets/images/github_icon.png";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const styles = {
    icon: {
      backgroundColor: "pink",
      width: "10rem",
      height: "10rem",
    },
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Collapse id="basic-navbar-nav">
          <span className="navbarText">
            <div className="social_icon">
              <a href="https://github.com/liamok19">
                <img style={styles.icon} src={logo} alt="placeholder Logo" />
              </a>
              <a href="https://github.com/liamok19">
                <img style={styles.icon} src={logo} alt="placeholder Logo" />
              </a>
              <a href="https://github.com/liamok19">
                <img style={styles.icon} src={logo} alt="placeholder Logo" />
              </a>
            </div>
            <button className="vvd" onClick={() => console.log("connect")}>
              <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
