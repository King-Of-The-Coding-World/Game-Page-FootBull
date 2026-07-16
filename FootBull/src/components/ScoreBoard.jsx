import React from "react";
import "./ScoreBoard.css";
import movingFootBall from "../assets/movingFootBall.png";

const ScoreBoard = (props) => {
  return (
    <div className="containerDashboard">
      <div className="border1">
        <div className="border2">
          <div className="ScoreBoard">
            <h1 className="league">{props.league}</h1>
            <div className="teamNamePanel">
              <h2 className="team1Name">{props.team1}</h2>
              <span className="divider">{props.minutes}</span>
              <h2 className="team2Name">{props.team2}</h2>
            </div>
            <img
              src={props.team1Logo}
              alt={props.team1}
              className="team1Logo"
            />
            <div className="score">
              <span className="team1Score">{props.team1Score}</span> ◀▶{" "}
              <span className="team2Score">{props.team2Score}</span>
            </div>
            <img
              src={props.team2Logo}
              alt={props.team2}
              className="team2Logo"
            />
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
