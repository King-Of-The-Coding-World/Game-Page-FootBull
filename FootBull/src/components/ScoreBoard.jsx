import React from "react";
import "./ScoreBoard.css";
import movingFootBall from "../assets/movingFootBall.png";
import { color } from "framer-motion";

const ScoreBoard = (props) => {
  return (
    <div className="containerDashboard">
      <div className="info">
        <div className="date">{props.date}</div>
        <div className="stadium">{props.stadium}</div>
        <div className="referee">{props.referee}</div>
      </div>
      <div className={`border1 ${props.disableBorderAnim ? "no-anim" : ""}`}>
        <div className={`border2 ${props.disableBorderAnim ? "no-anim" : ""}`}>
          <div
            className={`border3 ${props.disableBorderAnim ? "no-anim" : ""}`}
          >
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
                className={`team1Logo ${props.specificCSSForLogo1 ?? ""}`}
              />
              <div className="score">
                <span className="team1Score">{props.team1Score}</span> ◀▶{" "}
                <span className="team2Score">{props.team2Score}</span>
              </div>
              <img
                src={props.team2Logo}
                alt={props.team2}
                className={`team2Logo ${props.specificCSSForLogo2 ?? ""}`}
              />
              <div
                className={`footballAnimContainer ${props.disableFootballAnim ? "no-football-anim" : ""}`}
              >
                <img
                  src={movingFootBall}
                  alt="football"
                  className="movingFootBall"
                />
              </div>
              <div
                className={`gameResult ${props.disableFootballAnim ? "" : "no-status"} ${props.draw ? "drawStyle" : ""}`}
              >
                {props.winTeam} {props.status} {props.winBy}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
