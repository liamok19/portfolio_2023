import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "../src/components/Footer";

function App() {
  const styles = {
    ribbon: {
      borderTop: "50px solid black",
    },
    middleRibbon: {
      borderTop: "25px solid white",
    },
    btmRibbon: {
      borderTop: "10px solid black",
    },
  };
  return (
    <>
      <div style={styles.ribbon}>
        <div style={styles.middleRibbon} />
        <div style={styles.btmRibbon} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
