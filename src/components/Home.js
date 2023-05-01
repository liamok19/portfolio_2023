import "../style/HomeStyle.css";
import NavBar from "../components/NavBar";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import Contact from "./Contact";
import Projects from "./Projects";

export default function Home() {
  // let component;
  // switch (window.location.pathname) {
  //   case "/":
  //     component = <Home />
  //     break;
  //   case "/aboutMe":
  //     component = <AboutMe />
  //     break;
  //   case "/projects":
  //     component = <Projects />
  //     break;
  //   case "/contact":
  //     component = <Contact />
  //     break;
  // }
  return (
    <div>
      <NavBar />
      {/* {component} */}
      <Footer />
    </div>
  );
}
