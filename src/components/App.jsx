import React from "react";
import { NavBar } from "./NavBar.jsx";
import "../style/app.css";
import { useState, useEffect } from "react";
import { Card } from "./Card.jsx";
import { ScoreBoard } from "./ScoreBoard.jsx";
import { Modal } from "./Modal.jsx";

function App() {
  const [data, setData] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [lastClicked, setLastClicked] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          "https://api.giphy.com/v1/gifs/search?api_key=9Lp2DLxP9uadqg12skATmOg36DMI75bp&q=avatar&limit=12&offset=0&rating=g&lang=en&bundle=messaging_non_clips"
        );
        if (!response.ok) {
          const errorData = await response.json();
          console.log(errorData);
        } else {
          const dataFromServer = await response.json();

          setData(dataFromServer.data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    getData();
  }, []);

  const handleClick = (cardID) => {
    const shuffledData = [...data].sort(() => Math.random() - 0.5);
    setData(shuffledData);

    if (lastClicked.includes(cardID)) {
      alert("You already clicked this one! Try AGAIN");
      setScore(0);
      setLastClicked([]);
    } else {
      setScore(score + 1);
      setBestScore(Math.max(bestScore, score + 1));
      setLastClicked([...lastClicked, cardID]);
    }
  };

  return (
    <div className="app">
      <NavBar />
      <ScoreBoard score={score} bestScore={bestScore} />
      <h3>
        HOW SHARP IS YOUR MEMORY? GET POINTS BY CLICKING ON A CARD. HOWEVER, YOU
        CAN CLICK ON EACH CARD ONCE!
      </h3>
      <div className="cards__container">
        {data.map((item) => {
          return (
            <Card
              imageUrl={item.images.fixed_height.url}
              title={item.title}
              key={item.id}
              onClick={() => handleClick(item.id)}
            />
          );
        })}
      </div>
    </div>
  );
}

export { App };
