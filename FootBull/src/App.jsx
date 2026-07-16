import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Community from "./components/Community";
import ScoreBoard from "./components/ScoreBoard";
import Blog from "./components/Blog";
import "./App.css";

import MCLogo from "./assets/MCLogo.png";
import RMLogo from "./assets/RMLogo.png";

function App() {
  return (
    <Router>
      {/* NavBar always visible */}
      <NavBar />

      {/* Page content changes here */}
      <Routes>
        {/* Default redirect to LIVE */}
        <Route path="/" element={<Navigate to="/live" replace />} />

        <Route
          path="/live"
          element={
            <div>
              <ScoreBoard
                league="UEFA Champions League"
                team1="Manchester City"
                minutes="78'"
                team2="Real Madrid"
                team1Logo={MCLogo}
                team2Logo={RMLogo}
                team1Score="2"
                team2Score="1"
              />
            </div>
          }
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </Router>
  );
}

export default App;
