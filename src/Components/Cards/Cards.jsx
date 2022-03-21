import "./Cards.css";
import "../../App.css";

import { useState } from "react";

function Cards({ cards, deleteCard }) {
  return (
    <>
      <div className="Cards">
        {cards.map((card, i) => (
          <div className="Cards__item" key={i}>
            <div className="wrapper">
              <div className="Cards__item-wrapper">
                <h5>{card.id}</h5>
                <p>Name: {card.name}</p>
                <p>Username: {card.username}</p>
              </div>

        
            </div>
            <button onClick={() => deleteCard(card.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-x-circle"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
          </div>

        ))}
      </div>
    </>
  );
}

export default Cards;
