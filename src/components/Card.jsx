// Card.jsx
import { Plus, Trash, EllipsisVertical } from "lucide-react";
import Button from "./Button.jsx";

function Card({id, onDelete}) {
  return (
    <div className="m-[30px] mr-[15px] p-0">
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
        <input className="mx-[10%] mt-[5%] w-[80%] h-[10%] bg-transparent border-none outline-none text-center text-white font-bold text-2xl" type="text" placeholder="Titulo..."></input>
        <div className="mx-[10%] w-[80%] mt-[15px] h-[2px] bg-cyan-200 border-none outline-none text-center text-white text-[20px]"></div>
        <textarea className="mx-[10%] mt-[10px] w-[80%] h-[60%] bg-transparent border-none resize-none outline-none text-center text-white text-[20px]" type="text" placeholder="Descripcion..."></textarea>
      </div>
    </div>
  );
}

export default Card;

