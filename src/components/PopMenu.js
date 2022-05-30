import React from "react";

export const PopMenu = ({
  position,
  getCharGuess,
  mortyFound,
  waldoFound,
  tomFound,
}) => {
  return (
    <div className="wrapper-pop-menu" style={position}>
      <div className="target-box">
        <div className="dropdown-menu">
          <div
            data-char={"morty"}
            className="target"
            id={mortyFound}
            onClick={(e) => getCharGuess(e)}
          >
            Morty
          </div>
          <div
            data-char={"waldo"}
            className="target"
            id={waldoFound}
            onClick={(e) => getCharGuess(e)}
          >
            Waldo
          </div>
          <div
            data-char={"tom"}
            className="target"
            id={tomFound}
            onClick={(e) => getCharGuess(e)}
          >
            Tom
          </div>
        </div>
      </div>
    </div>
  );
};
