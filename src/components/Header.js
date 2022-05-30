import React, { useEffect, useState } from "react";
import morty from "../images/morty-cut.png";
import waldo from "../images/waldo-cut.png";
import tom from "../images/tom-cutt.png";
import { WelcomeMenu } from "./WelcomeMenu";
import { GameOver } from "./GameOver";

export const Header = ({ mortyFound, waldoFound, tomFound }) => {
  const [time, setTime] = useState(0);
  const [gameStart, setGameStart] = useState(false);
  const [showWelcomeMenu, setShowWelcomeMenu] = useState(true);

  useEffect(() => {
    let interval;
    if (gameStart) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!gameStart) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [gameStart]);

  const whenGameStart = () => {
    setShowWelcomeMenu(!showWelcomeMenu);
    setGameStart(!gameStart);
  };

  const whenGameStops = () => {
    setGameStart(!gameStart);
  };

  return (
    <div className="header">
      <div className="title-one">Where's Waldo?</div>
      <div className="timer">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
      <div className="image-container">
        <div className="container-char" id={mortyFound}>
          <img className="char-img" src={morty} alt="morty-img" />
          <div className="char-title">Morty</div>
        </div>
        <div className="container-char" id={waldoFound}>
          <img className="char-img" src={waldo} alt="waldo-img" />
          <div className="char-title">Waldo</div>
        </div>
        <div className="container-char" id={tomFound}>
          <img className="char-img tom-img" src={tom} alt="tom-img" />
          <div className="char-title">Tom</div>
        </div>
      </div>
      <div className="title-two">Cyberpunk edition</div>
      {showWelcomeMenu ? <WelcomeMenu whenGameStart={whenGameStart} /> : null}
      {mortyFound && waldoFound && tomFound ? (
        <GameOver whenGameStops={whenGameStops} time={time} />
      ) : null}
    </div>
  );
};
