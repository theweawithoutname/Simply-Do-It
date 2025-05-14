// Card.jsx
import { Trash, EllipsisVertical } from "lucide-react";
import Button from "./Button.jsx";
import { useState, useRef } from "react";
import { useDraggable, useDroppable } from "@dnd-kit/core";


  function Card({ id, text, title, onDelete, onTextChange, onTitleChange }) {
  const [localText, setLocalText] = useState(text || ""); // Estado local para el texto del textarea
  const [localTitle, setLocalTitle] = useState(title || "");
  const cardRef = useRef(null); // Creamos una ref para el div principal de la Card

  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({
    id: id,
  });

  const { isOver, setNodeRef: setDropRef } = useDroppable({
    id: id,
  });

  setNodeRef((node) => {
    setDropRef(node);
    cardRef.current = node; // También asignamos la ref local para otros usos si es necesario
  });

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setLocalText(newText); // Actualiza el estado local
    onTextChange(id, newText); // Llama a la función en App para actualizar el estado global
  }; 

  const handleTitleChange = (event) => {
    const newTitle = event.target.value;
    setLocalTitle(newTitle); // Actualiza el estado local del título
    onTitleChange(id, newTitle); // Llama a la función en App para actualizar el título
  };

  const style = {
    opacity: isDragging ? 0.5 : 1,
    cursor: 'grab',
    border: isOver ? '2px dashed lime' : 'none', // Cambié el color para que coincida con tu botón Plus
  };




  return (
    <div ref={setNodeRef}>
    <div  style={style} {...attributes} {...listeners} className="m-[30px] mr-[15px] p-0">
      <div className="items-center bg-yellow-600 shadow-md rounded min-w-[250px] max-w-[300px] h-[300px]">
        {/* Contenedor flex para los botones en la parte superior */}
        <div className="flex justify-between items-start p-[5px]"> {/* Added padding for spacing */}
          {/* Contenedor para los botones Plus y Trash (lado izquierdo) */}
          <div className="flex">
            <Button startIcon={<Trash size={24} color="red" />} onClick={() => onDelete(id)}/>
          </div>
          <div>
            <Button startIcon={<EllipsisVertical size={24} />} />
          </div>
        </div>

        {/* Resto del contenido de la tarjeta */}
        <input 
            className="mx-[10%] mt-[5%] w-[80%] h-[10%] bg-transparent outline-none  text-center text-white font-bold text-2xl" 
            type="text" 
            placeholder="Titulo..."
            value={localTitle} // Usa el estado local
            onChange={handleTitleChange}
            /> 
        <div className="mx-[10%] w-[80%] mt-[15px] h-[2px] bg-cyan-200 outline-none  text-center text-white text-[20px]"></div>
        <textarea 
            className="mx-[10%] mt-[10px] w-[80%] h-[60%] bg-transparent  outline-none  resize-none text-center text-white text-[20px]" 
            type="text" 
            placeholder="Descripcion..."
            value={localText}
            onChange={handleTextChange}/>
      </div>
    </div>
    </div>
  );
}

export default Card;

