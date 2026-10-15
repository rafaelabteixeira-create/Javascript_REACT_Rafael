// PONTO DE PARTIDA DA AULA 4
//
// É exatamente onde o professor acabou o live coding do Bloco 1:
// uma app React criada com o Vite, já sem o código de exemplo.
//
// Para pôr a correr (dentro da pasta client/ do teu repo):
//     npm install
//     npm run dev
// e abrir http://localhost:5173
//
// Tarefa 1: substitui este array vazio pelo array cards do teu server
// (o que fizeste na aula 2).
import { useState } from "react";
import Card from "./Card.jsx";
import "./index.css";

const cards = [
  { name: "Dragão de Cobalto", type: "Criatura", attack: 7, defense: 5 },
  { name: "Guardiã das Marés", type: "Criatura", attack: 4, defense: 8 },
  { name: "Jovem Maligno", type: "Mago MAU", attack: 12, defense: 3 },
  { name: "Russo Comunista", type: "Comunista", attack: 7, defense: 9 },
  { name: "Americano Obeso Mórbido", type: "Obeso", attack: 20, defense: 409 },
  { name: "Americano Obeso ProMAX", type: "Obeso", attack: 20, defense: 4209 },
];


function App() {
  const [filter, setFilter] = useState("Todas");
  const [search, setSearch] = useState("");
  const [randomCard, setRandomCard] = useState(null);
 

  function chooseRandomCard() {
    if (cards.length === 0) return;
    const index = Math.floor(Math.random() * cards.length);
    setRandomCard(cards[index]);
  }



  const visible = cards.filter(
    (card) =>
      (filter === "Todas" || card.type === filter) &&
      card.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main>
      <h1>A minha coleção</h1>

      <p>Tenho {cards.length} cartas</p>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Pesquisar" />
      <div>
        <button onClick={() => setFilter("Todas")}>Todas</button>
        <button onClick={() => setFilter("Criatura")}>Criaturas</button>
        <button onClick={() => setFilter("Obeso")}>Obesos</button>
        <button onClick={() => chooseRandomCard()}>Sorte</button>
        
        </div>

      {randomCard && (
        <div className="sorte">
          <h2>Carta à sorte</h2>
          <Card {...randomCard} />
        </div>
      )}
      
      <ul>
        
        {visible.map((card) => (
          <div className="title">
          <Card
            key={card.id}
            name={card.name}
            attack={card.attack}
            type={card.type}
            
          /></div>
          
        ))} 

      </ul>

    </main>
  );

}

export default App;
