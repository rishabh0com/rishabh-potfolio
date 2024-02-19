import styles from "./App.module.css";
import { useContext } from "react";
import SideBar from "./components/SideBar.jsx";
import Home from "./components/Home.jsx";
import { DisplayContext } from "./context/display.context.jsx";

function App() {
  const { display , setDisplay } = useContext(DisplayContext);
  const screen = window.screen.width;
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      {display && (
        <div className={styles.responsive} onClick={()=> setDisplay(false) }>
          {" "}
          <SideBar />
        </div>
      )}
      {screen > 768 && <SideBar />}
      <Home />
    </div>
  );
}

export default App;
