import React from "react";

export const GameOver = ({ whenGameStops, time }) => {
  whenGameStops();
  return (
    <div className="welcome-menu">
      <div>CONGRATS!!</div>
      <div>
        Your Time:
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
    </div>
  );
};
