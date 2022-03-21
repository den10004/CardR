import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Cards from "./Components/Cards/Cards";


function App() {
  const [cards, setCards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(96);

  useEffect(() => {
    const getCards = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setCards(res.data);
    };
    getCards();
  }, []);

  const lastCardIndex = currentPage * cardsPerPage;
  const firstCardIndex = lastCardIndex - cardsPerPage;
  const currentCountry = cards.slice(firstCardIndex, lastCardIndex);

  function deleteCard(id) {
    const idx = cards.findIndex((item) => item.id === id);
    const newCards = [...cards.slice(0, idx), ...cards.slice(idx + 1)];
    setCards(newCards);
  }

  function decrease() {
    let res = [...cards].sort((a, b) => (a["id"] < b["id"] ? 1 : -1));
    setCards(res);
  }

  function increase() {
    let res = [...cards].sort((a, b) => (a["id"] > b["id"] ? 1 : -1));
    setCards(res);
  }

  return (
    <div className="App w-95 mt-5">
      <div className="p-10 mb-3">
        Сортировка по Id
        <button className="btn btn-primary ms-2" onClick={decrease}>
          По убыванию
        </button>
        <button className="btn btn-primary ms-2" onClick={increase}>
          По возрастанию
        </button>
      </div>
      <Cards cards={currentCountry} deleteCard={deleteCard} />
    </div>
  );
}

export default App;
