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
              <div className="flex gap-[20px] mb-[50px] justify-center max-h-full">
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
                <MomentBoard
                  trendingTexts={[
                    "🔥 City’s 78’ Goal",
                    "🚨 Madrid Red Card",
                    "⚡ Haaland’s Dribble",
                  ]}
                  trendingDescrip={[
                    "Lewandowski equalizes with a thunderous strike, sending Etihad into chaos.",
                    "A reckless challenge leaves Los Blancos down to 10 men.",
                    "Haaland beats two defenders with raw pace and power, igniting the crowd.",
                  ]}
                  latestTexts={[
                    "⏱ Kickoff at Acrisure",
                    "🔔 Half-time whistle",
                    "📸 Fans celebrating",
                  ]}
                  latestDescrip={[
                    "The whistle blows, and the clash begins under floodlights.",
                    "Both sides head to the tunnel with tension brewing.",
                    "Supporters erupt in chants and flares after the equalizer.",
                  ]}
                />
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
                <MomentBoard
                  trendingTexts={[
                    "🔥 Lewandowski’s Equalizer",
                    "👑 Griezmann’s Early Goal",
                    "⚖️ Orsato’s Key Decision",
                  ]}
                  trendingDescrip={[
                    "Barça striker smashes home at 65’, leveling the score.",
                    "Atletico’s talisman silences Camp Nou with a clinical finish.",
                    "Referee’s controversial call sparks heated protests from both benches.",
                  ]}
                  latestTexts={[
                    "🎶 Camp Nou Crowd Chants",
                    "⚔️ Midfield Battle",
                    "📊 Draw Status (1–1, 65’) ",
                  ]}
                  latestDescrip={[
                    "The stadium roars with synchronized chants as tension builds.",
                    "Frenkie de Jong and Koke lock horns, dictating the tempo.",
                    "Scoreboard shows 1–1 at 65 minutes, both sides pushing for a winner.",
                  ]}
                />
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
                <MomentBoard
                  trendingTexts={[
                    "⚽ Liverpool’s Opening Strike",
                    "🔥 Salah Seals the Win",
                    "📊 Final Result: Liverpool Victory",
                  ]}
                  trendingDescrip={[
                    "The Reds take control early at Old Trafford, stunning the home crowd.",
                    "Mohamed Salah’s decisive finish makes it 2–0, confirming Liverpool’s dominance.",
                    "The scoreboard shows 0–2, with Liverpool winning by two clear goals under Michael Oliver’s officiating.",
                  ]}
                  latestTexts={[
                    "⏱ Kickoff at Old Trafford",
                    "🔔 Half-time Whistle",
                    "📸 Fans Reacting to Defeat",
                  ]}
                  latestDescrip={[
                    "The whistle blows and the clash begins under the lights, with fans roaring from the stands.",
                    "United trail 0–1 at the break, with Liverpool controlling possession and tempo.",
                    "The home crowd grows restless as Liverpool extend their lead, while away supporters celebrate loudly.",
                  ]}
                />
              </div>
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
