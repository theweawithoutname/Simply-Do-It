import { useState } from "react";
import "./global.css"
import Header from "./components/header/header"
import Card from "./components/Card"
import Button from "./components/Button"
import { Plus } from "lucide-react";

function App() {
  // Estado para almacenar la lista de Cards
  const [cards, setCards] = useState([{ id: Date.now }]); // Inicia con una Card

  // Función para agregar nueva Card
  const addCard = () => {
    const newId = Date.now(); // ID único
    setCards([...cards, { id: newId }]);
  };

  return (
    <div>
      <Header />
      <div className="flex flex-wrap justify-start-center">
        {/* Mapear todas las Cards */}
        {cards.map((card) => (<Card key={card.id} />))}
        
        {/* Botón para agregar nuevas Cards */}
        <Button
          className="mt-[30px]"
          startIcon={<Plus size={20} color="lime" />}
          onClick={addCard}
        />
      </div>
    </div>
  );
}

export default App;