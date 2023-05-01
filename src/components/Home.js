import "../style/HomeStyle.css";
import NavBar from "../components/NavBar";
import AboutMe from "../components/AboutMe";
import Footer from "../components/Footer";
import Contact from "./Contact";
import Projects from "./Projects";
import "../style/HomeStyle.css";

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1 className="header"> Liam O'Kane</h1>
      <button className="button-56">Click to Enter</button>
      {/* <Footer /> */}
    </div>
  );
}
