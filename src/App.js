import "./App.css";
import React, { useState } from "react";
import background from "./images/background.jpg";
import { PopMenu } from "./components/PopMenu";
import { Header } from "./components/Header";

function App() {
  const [showPopMenu, setShowPopMenu] = useState(false);
  const [popMenuPosition, setPopMenuPosition] = useState();
  const [guessCoords, setGuessCoords] = useState();
  const [guessChar, setGuessChar] = useState();
  const [mortyFound, setMortyFound] = useState();
  const [waldoFound, setWaldoFound] = useState();
  const [tomFound, setTomFound] = useState();

  // places target/popMenu and guesses coords
  const popMenu = (e) => {
    const coordX = e.pageX - 40;
    const coordY = e.pageY - 35;
    setPopMenuPosition({ left: `${coordX}px`, top: `${coordY}px` });
    setShowPopMenu(!showPopMenu);
    setGuessCoords({ X: coordX, Y: coordY });
  };

  const getCharGuess = (e) => {
    setGuessChar(e.target.dataset.char);
    setShowPopMenu(!popMenu);
  };

  const checkCoords = () => {
    const coords = [
      {
        id: "morty",
        Xmax: 675,
        Xmin: 600,
        Ymax: 5774,
        Ymin: 5752,
      },
      {
        id: "waldo",
        Xmax: 1225,
        Xmin: 1195,
        Ymax: 12458,
        Ymin: 12410,
      },

      {
        id: "tom",
        Xmax: 1309,
        Xmin: 1255,
        Ymax: 13220,
        Ymin: 13152,
      },
    ];

    coords.forEach((char) => checkGuess(char));
  };

  function checkGuess(char) {
    if (
      char.Xmin < guessCoords.X &&
      char.Xmax > guessCoords.X &&
      char.Ymin < guessCoords.Y &&
      char.Ymax > guessCoords.Y &&
      `${char.id}` === guessChar
    ) {
      if (char.id === "morty") setMortyFound("char-found");
      if (char.id === "waldo") setWaldoFound("char-found");
      if (char.id === "tom") setTomFound("char-found");
    } else {
      setGuessChar();
    }
  }

  return (
    <div>
      <Header
        mortyFound={mortyFound}
        tomFound={tomFound}
        waldoFound={waldoFound}
      />
      <img
        src={background}
        alt="background-img"
        onClick={(e) => {
          popMenu(e);
        }}
      />
      {showPopMenu ? (
        <PopMenu
          position={popMenuPosition}
          getCharGuess={getCharGuess}
          mortyFound={mortyFound}
          tomFound={tomFound}
          waldoFound={waldoFound}
        />
      ) : null}
      {guessChar ? checkCoords() : null}
    </div>
  );
}

export default App;
