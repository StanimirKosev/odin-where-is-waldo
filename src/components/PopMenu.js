import React from "react";

export const PopMenu = ({ position, checkCharGuess }) => {
  return (
    <div className="wrapper-pop-menu" style={position}>
      <div className="target-box">
        <div className="dropdown-menu">
          <div
            id={"morty"}
            className="target"
            onClick={(e) => checkCharGuess(e)}
          >
            Morty
          </div>
          <div
            id={"waldo"}
            className="target"
            onClick={(e) => checkCharGuess(e)}
          >
            Waldo
          </div>
          <div id={"tom"} className="target" onClick={(e) => checkCharGuess(e)}>
            Tom
          </div>
        </div>
      </div>
    </div>
  );
};
