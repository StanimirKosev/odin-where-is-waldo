import React from "react";

export const GameOver = ({ whenGameStops, time }) => {
  whenGameStops();

  const playAgain = () => {
    window.location.reload();
  };
  return (
    <div className="overlay-endgame">
      <div className="end-game-menu">
        <div>Congrats! You found them all!</div>
        <div>
          Your Time:
          <span> </span>
          <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
          <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
        <button className="game-over-btn" onClick={playAgain}>
          Play Again?
        </button>
      </div>
    </div>
  );
};
