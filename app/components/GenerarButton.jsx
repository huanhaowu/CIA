"use client";
const { generarVolante} = require('@/actions/estudiante/generarVolante.js')
import { useState } from 'react';

const GenerarButton = ({ texto = "Generar", year, period, id, setData}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerarClick = async () => {
    setIsLoading(true);
    const data = await generarVolante(year, period, id, setData);
    setData(data);
    setIsLoading(false);
  };

  return (
    <form>
      <button
        onClick={handleGenerarClick}
        style={{ boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
        className="bg-blue-500 hover:bg-blue-700 text-base text-white font-bold py-3 px-6 rounded-3xl m-2"
        disabled={isLoading}
      >
        {isLoading ? "Cargando..." : texto}
      </button>
    </form>
  );
};

export default GenerarButton;

