import React from "react";
import morty from "../images/morty-cut.png";
import waldo from "../images/waldo-cut.png";
import tom from "../images/tom-cutt.png";

export const Header = ({ mortyFound, waldoFound, tomFound }) => {
  return (
    <div className="header">
      <div className="title-one">Where's Waldo?</div>
      <div className="timer">Timer </div>
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
    </div>
  );
};
