"use client";
const SaveButton = ({ texto = "Guardar", action = null, onClick }) => {
  return (
    <button
      style={{ boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
      className=" bg-blue-500 hover:bg-blue-700 text-base text-white font-bold py-3 px-6 rounded-3xl m-2"
      onClick={onClick}
    >
      {texto}
    </button>
  );
};

export default SaveButton;
