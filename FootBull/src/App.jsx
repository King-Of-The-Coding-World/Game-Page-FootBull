import { useState } from "react";
import NavBar from "./components/NavBar";
import Community from "./components/Community";
import ScoreBoard from "./components/ScoreBoard";
import Blog from "./components/Blog";
import "./App.css";

function App() {
  const [team1, setTeam1] = useState();

  return (
    <>
      <NavBar />
      <div id="live">
        <ScoreBoard />
      </div>

      <div className="blog">
        <Blog />
      </div>

      <div className="community">
        <Community />
      </div>
    </>
  );
}

export default App;
