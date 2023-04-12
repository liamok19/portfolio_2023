import NavBar from "./NavBar";
import Bottom from "./Bottom";

function App() {
  const styles = {
    mainframe: {
      // backgroundColor: "#36454F",
      backgroundImage: `url("../src/assets/images/portfoliobg.png")`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  };
  return (
    <div
      style={{ backgroundImage: `url("../src/assets/images/portfoliobg.png")` }}
    >
      <NavBar />
      <Bottom />
    </div>
  );
}

export default App;
