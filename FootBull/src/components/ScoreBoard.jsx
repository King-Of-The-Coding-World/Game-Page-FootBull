import React from "react";
import "./ScoreBoard.css";
import team1Logo from "../assets/team1Logo.png";
import team2Logo from "../assets/team2Logo.png";
import movingFootBall from "../assets/movingFootBall.png";

const ScoreBoard = () => {
  return (
    <div className="containerDashboard">
      <div className="border1">
        <div className="border2">
          <div className="Dashboard">
            <h1 className="league">UEFA Champions League</h1>
            <div className="teamNamePanel">
              <h2 className="team1Name">Manchester City</h2>
              <span className="divider">78'</span>
              <h2 className="team2Name"> Real Madrid </h2>
            </div>
            <img
              src={team1Logo}
              alt="Manchester City Logo"
              className="team1Logo"
            />
            <div className="score">
              <span className="team1Score">2</span> ◀▶{" "}
              <span className="team2Score">1</span>
            </div>
            <img src={team2Logo} alt="Real Madrid Logo" className="team2Logo" />
            <div className="footballAnimContainer">
              <img
                src={movingFootBall}
                alt="football"
                className="movingFootBall"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
