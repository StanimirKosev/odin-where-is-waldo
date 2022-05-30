import React from "react";

export const WelcomeMenu = ({ whenGameStart }) => {
  return (
    <div className="welcome-menu">
      <button onClick={whenGameStart}>Play!</button>
    </div>
  );
};
