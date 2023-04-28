import "../style/HomeStyle.css";
import NavBar from "../components/NavBar";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import Contact from "./Contact";
import Projects from "./Projects";

export default function Home() {
  return (
    <div className="home">
      <NavBar />
      {/* <AboutMe /> */}
      {/* <Contact /> */}
      <Projects />
      <Footer />
    </div>
  );
}
