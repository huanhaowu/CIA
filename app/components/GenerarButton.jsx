"use client";
const { generarVolante} = require('@/actions/estudiante/generarVolante.js')
import { useState } from 'react';

const GenerarButton = ({ texto = "Generar", year, period, id, setData}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerarClick = async () => {
    setIsLoading(true);
    const secciones= await generarVolante(year, period, id);
    const data = secciones.map((item) => {
      return{
        CLAVE: item.asignatura_clave,
        SEC: item.numero.toString().padStart(2, '0'),
        AULA: item.aula_clave,
        CRED: 4, // Add the credit value here
        ASIGNATURA: 'DISEÑO DE SOFTWARE', // Add the subject name here
        DOCENTE: 'Bernardo Batista', // Add the professor name here
        Lun: '00/00',
        Mar: '00/00',
        Mier: '00/00',
        Jue: '00/00',
        Vie: '00/00',
        Sab: '00/00'
      };
    });
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

