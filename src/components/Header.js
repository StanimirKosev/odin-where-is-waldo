import React from "react";
import morty from "../images/morty.png";
import waldo from "../images/waldo.png";
import tom from "../images/tom.png";

export const Header = () => {
  return (
    <div className="header">
      <div className="title-one">Where's Waldo?</div>
      <div className="timer">Timer </div>
      <div className="image-container">
        <img className="header-img" src={morty} alt="morty-img" />
        <img className="header-img" src={waldo} alt="waldo-img" />
        <img className="header-img" src={tom} alt="tom-img" />
      </div>
      <div className="title-two">Cyberpunk edition</div>
    </div>
  );
};
