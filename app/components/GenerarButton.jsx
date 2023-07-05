"use client";
const { generarVolante, prepararData} = require('@/actions/estudiante/generarVolante.js')
const { generarBoletin, prepararDataCalificacion} = require('@/actions/estudiante/generarBoletin.js')
const prisma = require('../../api/api.js')
import { useState } from 'react';

const GenerarButton = ({ texto = "Generar", input, setData, action}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerarClick = async () => {
    setIsLoading(true);
    if (action=="generarVolante") {
      const year = input.year;
      const period = input.period;
      const id = input.id;
      const secciones= await generarVolante(year, period, id);
      const data = await prepararData(secciones);
      setData(data);
    }
    else if (action=="generarBoletin") {
      const year = input.year;
      const period = input.period;
      const id = input.id;
      const secciones= await generarBoletin(year, period, id);
      const data = await prepararDataCalificacion(secciones);
      setData(data);
    }
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

