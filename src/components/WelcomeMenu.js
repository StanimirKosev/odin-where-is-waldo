import React from "react";
import backgroundS3 from "../images/egor-klyuchnyk-s3.jpg";
import morty from "../images/morty-cut.png";
import waldo from "../images/waldo-cut.png";
import tom from "../images/tom-cutt.png";

export const WelcomeMenu = ({ whenGameStart }) => {
  return (
    <div className="overlay">
      <div className="welcome-menu">
        <img src={backgroundS3} alt="welcome-img" />
        <div className="welcome-menu-content">
          <div className="title-one-welcome">
            Where's Waldo?
            <div className="title-two-welcome">Cyberpunk edition</div>
          </div>
          <div className="credits">
            <a href="https://www.artstation.com/chekavo">
              Image by Egor Klyuchnyk
            </a>
          </div>
          <div className="char-container">
            <img src={morty} alt="welcome-char" />
            <div>Morty</div>
          </div>
          <div className="char-container">
            <img src={waldo} alt="welcome-char" />
            <div>Waldo</div>
          </div>
          <div className="char-container">
            <img src={tom} alt="welcome-char" />
            <div>Tom</div>
          </div>
          <button className="welcome-btn" onClick={whenGameStart}>
            START
          </button>
        </div>
      </div>
    </div>
  );
};
