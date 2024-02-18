import "./App.css";
import SideBar from "./components/SideBar.jsx";
import Home from "./components/Home.jsx";

function App() {
  const screen = window.screen.width;
  return (
    <div style={{ display: "flex", height: "98vh" }}>
      {screen > 768 && <SideBar />}
      <Home />
    </div>
  );
}

export default App;
