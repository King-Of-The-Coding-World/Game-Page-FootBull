import { useState } from "react";
import NavBar from "./components/NavBar";
import scorePanel from "./components/scorePanel";
import chatPanel from "./components/chatPanel";

function App() {
  const [team1, setTeam1] = useState();

  return (
    <>
      <NavBar />
      <scorePanel />
      <chatPanel />
    </>
  );
}

export default App;
