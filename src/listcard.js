import React, { useState, useEffect } from "react";
import uniqid from "uniqid";
import Card from "./card";
import Score from "./score";
import Reset from "./reset";

const ListCard = (props) => {
  const [listeDisplay, setlisteDisplay] = useState([]);
  const [carteSelected, setcarteselected] = useState([]);
  const [score, setscore] = useState(0);
  const [gameover, setgameover] = useState(false);
  const [listeCard, setlisteCard] = useState([]);

  useEffect(() => {
    if (listeCard.length === 0) {
      const maliste = [];
      fetch(
        "https://gateway.marvel.com:443/v1/public/characters/1009165/comics?limit=29&apikey=2f336d6ed425b8bb4bc1b4740acd4648"
      )
        .then((response) => response.json())
        .then((response) => response.data.results)
        .then((response) => {
          response.forEach((element) => {
            //console.log(element);
            maliste.push({
              id: element["id"],
              nom: element["title"],
              image: element["thumbnail"]["path"] + "/portrait_uncanny.jpg",
            });
          });
          setlisteCard(maliste);
          initliste(maliste);
        });
    }
  }, [listeCard]);

  const changeScore = (newscore) => {
    setscore(newscore);
  };

  const hasCard = (card) => {
    const index = carteSelected.findIndex((cardId) => cardId === card.id);
    if (index === -1) {
      const ncartes = carteSelected;
      ncartes.push(card.id);
      setcarteselected(ncartes);
      setgameover(false);
    } else {
      setgameover(true);
    }
  };
  const controlChange = (card) => {
    hasCard(card);
    gameover ? alert("Game Over") : changeliste();
  };

  const changeliste = () => {
    changeScore(score + 1);
    console.log(carteSelected);
    initliste(listeCard);
  };

  const initliste = (list) => {
    const newliste = [];
    while (newliste.length !== 8) {
      const hazard = parseInt(Math.random() * 24);

      const index = newliste.findIndex((card) => card.id === list[hazard].id);
      if (index === -1) {
        newliste.push(list[hazard]);
      }
    }
    setlisteDisplay(newliste);
  };

  const resetCarteSelected = () => {
    setcarteselected([]);
  };
  const reset = (e) => {
    e.preventDefault();
    changeScore(0);
    resetCarteSelected();
    setgameover(false);
  };

  return (
    <>
      <div className="container h-100">
        <Score className="col-12 text-center mb-3 mb-1">{score}</Score>
        <div className="row justify-content-center ">
          {listeCard.length === 0 ? (
            <div>
              <h1 className="text-center fw-normal my-5">Chargement...</h1>
            </div>
          ) : !gameover ? (
            listeDisplay.map((card) => (
              <Card
                className="col-6 col-md-3 text-center py-1"
                changeliste={controlChange}
                key={uniqid()}
                carte={card}
              />
            ))
          ) : (
            <div className="text-center my-5">
              <h1>Game Over</h1>
            </div>
          )}
          <Reset newgame={reset}>Nouvelle Partie</Reset>
        </div>
      </div>
    </>
  );
};

export default ListCard;
