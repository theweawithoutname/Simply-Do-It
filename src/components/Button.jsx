// Button.jsx
function Button({ startIcon, className, onClick, children }) {
    const baseClasses = "flex flex-wrap justify-center items-center m-[5px] size-[30px] bg-yellow-600 hover:bg-yellow-700 text-white font-bold rounded";
    const combinedClassName = `${baseClasses} ${className || ''}`;
  
    return (
      <button 
        className={combinedClassName} 
        onClick={onClick}>
        {startIcon}
        {children}
      </button>
    );
  }
  
  export default Button;