import { useState } from "react";
import NavBar from "./components/NavBar";
import Trending from "./components/Trending";
import Dashboard from "./components/Dashboard";
import Moments from "./components/Moments";
import "./App.css";

function App() {
  const [team1, setTeam1] = useState();

  return (
    <>
      <NavBar />
      <Dashboard />
      <Moments />
      <Trending />
    </>
  );
}

export default App;
