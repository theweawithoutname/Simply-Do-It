import { useState, useEffect } from "react";
import { DndContext } from "@dnd-kit/core";
import { arrayMove, SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import "./global.css"
import Header from "./components/header/header"
import Card from "./components/Card"
import Button from "./components/Button"
import { Plus } from "lucide-react";

function App() {
  const [cards, setCards] = useState(() => {
    const storedCards = localStorage.getItem('todoCards');
    return storedCards ? JSON.parse(storedCards) : [{ id: Date.now(), title: "",text: "" }];
  });

  
  const addCard = () => {
    const newId = Date.now(); // ID único
    setCards([...cards, { id: newId, title: "", text: "" }]);
  };

  const deleteCard = (idToDelete) => {
    setCards(cards.filter((card) => card.id !== idToDelete));
  }

  const updateCardText = (idToUpdate, newText) => {
  const updatedCards = cards.map((card) =>
      card.id === idToUpdate ? { ...card, text: newText } : card
    );
    setCards(updatedCards);
  };

  useEffect(() => {
    localStorage.setItem('todoCards', JSON.stringify(cards));
  }, [cards]);

  const updateCardTitle = (idToUpdate, newTitle) => {
    const updatedCards = cards.map((card) =>
      card.id === idToUpdate ? { ...card, title: newTitle } : card
    );
    setCards(updatedCards);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      setCards((cards) => {
        const oldIndex = cards.findIndex((card) => card.id === active.id);
        const newIndex = cards.findIndex((card) => card.id === over.id);
        return arrayMove(cards, oldIndex, newIndex);
      });
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div>
        <Header />
        <div className="flex flex-wrap justify-start-center">
          <SortableContext items={cards.map(card => card.id)} strategy={verticalListSortingStrategy}>
            {cards.map((card) => (
              <Card
                key={card.id}
                id={card.id}
                title={card.title}
                text={card.text}
                onDelete={deleteCard}
                onTextChange={updateCardText}
                onTitleChange={updateCardTitle} />
            ))}
          </SortableContext>
          <Button
            className="mt-[30px]"
            startIcon={<Plus size={20} color="lime" />}
            onClick={addCard} />
        </div>
      </div>
    </DndContext>
  );
}

export default App;