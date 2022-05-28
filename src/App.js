import "./App.css";
import React, { useState } from "react";
import background from "./images/background.jpg";
import { PopMenu } from "./components/PopMenu";

function App() {
  const [popMenu, setPopMenu] = useState(false);
  const [popMenuPosition, setPopMenuPosition] = useState();
  // func for valid click
  // identify each char and save to database
  // time

  const clickImg = (e) => {
    /*const rect = e.target.getBoundingClientRect(); 
     const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top;*/
    const coordX = e.pageX;
    const coordY = e.pageY;
    setPopMenuPosition({ top: `${coordY - 35}px`, left: `${coordX - 40}px` });
    setPopMenu(!popMenu);
  };

  return (
    <div>
      <img
        src={background}
        alt="background-img"
        onClick={(e) => {
          clickImg(e);
        }}
      />
      {popMenu ? <PopMenu position={popMenuPosition} /> : null}
    </div>
  );
}

export default App;
