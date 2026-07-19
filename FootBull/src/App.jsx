import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import NavBar from "./components/NavBar";
import Community from "./components/Community";
import ScoreBoard from "./components/ScoreBoard";
import MomentBoard from "./components/momentBoard";
import Blog from "./components/Blog";

import "./App.css";
import "./index.css";

import MCLogo from "./assets/MCLogo.png";
import RMLogo from "./assets/RMLogo.png";
import BarcaLogo from "./assets/BarcaLogo.png";
import AtletiLogo from "./assets/AtletiLogo.png";
import UnitedLogo from "./assets/UnitedLogo.png";
import LiverpoolLogo from "./assets/LiverpoolLogo.png";

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
              <div className="flex gap-[20px] mb-[50px] justify-center">
                <ScoreBoard
                  date="July 19, 2026"
                  stadium="Acrisure"
                  referee="Istvan Kovacs"
                  league="UEFA Champions League"
                  team1="Manchester City"
                  minutes="78'"
                  team2=" Real Madrid "
                  team1Logo={MCLogo}
                  team2Logo={RMLogo}
                  team1Score="2"
                  team2Score="1"
                  disableBorderAnim={false}
                  disableFootballAnim={false}
                  draw={false}
                />
                <MomentBoard />
              </div>
              <div className="flex gap-[20px] mb-[50px] justify-center">
                <ScoreBoard
                  date="July 17, 2026"
                  stadium="Camp Nou"
                  referee="Daniele Orsato"
                  league="UEFA Champions League"
                  team1="FC Barcelona"
                  minutes="65'"
                  team2="Atletico Madrid"
                  team1Logo={BarcaLogo}
                  team2Logo={AtletiLogo}
                  team1Score="1"
                  team2Score="1"
                  disableBorderAnim={true}
                  disableFootballAnim={true}
                  status="- - - Draw - - -"
                  draw={true}
                  specificCSSForLogo1="!w-full !h-full !self-center !justify-self-center"
                />
                <MomentBoard />
              </div>
              <div className="flex gap-[20px] mb-[50px] justify-center">
                <ScoreBoard
                  date="July 15, 2026"
                  stadium="Old Trafford"
                  referee="Michael Oliver"
                  league="UEFA Champions League"
                  team1="Manchester United"
                  minutes="42'"
                  team2="Liverpool"
                  team1Logo={UnitedLogo}
                  team2Logo={LiverpoolLogo}
                  team1Score="0"
                  team2Score="2"
                  disableBorderAnim={true}
                  disableFootballAnim={true}
                  winTeam='"Liverpool"'
                  status="won by"
                  winBy="2 goals"
                />
                <MomentBoard />
              </div>

              {/* <ScoreBoard
                date="October 21, 2026"
                stadium="Allianz Arena"
                referee="Felix Brych"
                league="Bundesliga"
                team1="Bayern Munich"
                minutes="88'"
                team2="Borussia Dortmund"
                team1Logo={BayernLogo}
                team2Logo={DortmundLogo}
                team1Score="3"
                team2Score="2"
                disableBorderAnim={true}
                disableFootballAnim={true}
                winTeam="Real Madrid"
                winBy="2 goals"
              />

              <ScoreBoard
                date="November 5, 2026"
                stadium="Parc des Princes"
                referee="Clément Turpin"
                league="UEFA Europa League"
                team1="Paris Saint-Germain"
                minutes="74'"
                team2="AC Milan"
                team1Logo={PSGLogo}
                team2Logo={MilanLogo}
                team1Score="2"
                team2Score="2"
                disableBorderAnim={true}
                disableFootballAnim={true}
                winTeam="Real Madrid"
                winBy="2 goals"
              /> */}
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
