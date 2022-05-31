import "./App.css";
import React, { useState } from "react";
import background from "./images/background.jpg";
import { PopMenu } from "./components/PopMenu";
import { Header } from "./components/Header";
import { initializeApp } from "firebase/app";
import { config } from "./firebase-config";
import {
  query,
  collection,
  getFirestore,
  getDocs,
} from "firebase/firestore/lite";

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

  // on guessChar - check backend
  const checkBackend = () => {
    queryForDocuments();
  };

  async function queryForDocuments() {
    const chars = query(collection(getFirestore(), "chars-coords"));
    const querySnapshot = await getDocs(chars);
    querySnapshot.forEach((snap) => checkGuess(snap));
  }

  function checkGuess(snap) {
    if (
      snap.data().Xmin < guessCoords.X &&
      snap.data().Xmax > guessCoords.X &&
      snap.data().Ymin < guessCoords.Y &&
      snap.data().Ymax > guessCoords.Y &&
      `${snap.id}` === guessChar
    ) {
      if (snap.id === "morty") setMortyFound("char-found");
      if (snap.id === "waldo") setWaldoFound("char-found");
      if (snap.id === "tom") setTomFound("char-found");
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
      {guessChar ? checkBackend() : null}
    </div>
  );
}

export default App;
initializeApp(config);
