

function Card() {

  return (

    <div className="m-[30px] p-0">
      <div className="items-center bg-cyan-600 shadow-md rounded min-w-[250px] max-w-[300px] h-[300px]">
      <input className="mx-[10%] mt-[10%] w-[80%] h-[10%] bg-transparent border-none outline-none text-center text-white font-bold text-2xl" type="text" placeholder="Titulo..."></input>
      <div className="mx-[10%] w-[80%] mt-[15px] h-[2px] bg-cyan-200 border-none outline-none text-center text-white text-[20px]"></div>
      <textarea className="mx-[10%] mt-[10px] w-[80%] h-[60%] bg-transparent border-none resize-none outline-none text-center text-white text-[20px]" type="text" placeholder="Descripcion..."></textarea>
      </div>
    </div>
      )
}

export default Card