import "../style/HomeStyle.css";
import NavBar from "../components/NavBar";
import AboutMe from "../components/AboutMe";

export default function Home() {
  return (
      <div className="home">
        <NavBar />
        <AboutMe />
      </div>
  );
}
