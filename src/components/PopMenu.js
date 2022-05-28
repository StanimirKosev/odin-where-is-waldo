import React from "react";

export const PopMenu = ({ position }) => {
  return (
    <div className="wrapper-pop-menu" style={position}>
      <div className="target-box">
        <div className="dropdown-menu">
          <ul>
            <li>Morty</li>
            <li>Waldo</li>
            <li>Tom</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
