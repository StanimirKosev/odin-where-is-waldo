import "./App.css";
import React, { useState } from "react";
import background from "./images/background.jpg";
import { PopMenu } from "./components/PopMenu";
import { Header } from "./components/Header";
import { initializeApp } from "firebase/app";
import { query, collection, getFirestore, getDocs } from "firebase/firestore";

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

initializeApp({
  apiKey: "AIzaSyB05JPVGC3DS99c9JrrwuNRba9M9e7LYgI",
  authDomain: "where-is-waldo-54ae0.firebaseapp.com",
  projectId: "where-is-waldo-54ae0",
  storageBucket: "where-is-waldo-54ae0.appspot.com",
  messagingSenderId: "923487993900",
  appId: "1:923487993900:web:f52d00b34dec8d07c19189",
});
