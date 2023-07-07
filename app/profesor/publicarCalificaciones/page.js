'use client'
// Home.js

import Link from "next/link";
import TablaCalificacion from "@/app/components/TablaCalificacion";
import SearchBar from "@/app/components/SearchBar";
import BackButton from "@/app/components/BackButton";
import { useState } from "react";

export default function Home() {
  const headers = ["ESTUDIANTE_ID", "NOMBRE", "CORREO", "PROGRAMA", "CALIFICACION", "LETRA"];

  const [data, setData] = useState([
    { ID: 1000000, NOMBRE: "Gleidy Joselin Espinal Hernandez", CORREO: "GleidyEspinal@gmail.com", PROGRAMA: "IDS", CALIFICACION: 100, LETRA: '-' },
    // ... other data rows
  ]);

  const [activeCell, setActiveCell] = useState(null);

  const handleInputChange = (rowIndex, columnIndex, newValue) => {
    const newData = [...data];
    const rowData = newData[rowIndex];
    const columnKey = Object.keys(rowData)[columnIndex];
    rowData[columnKey] = newValue;
    setData(newData);
  };

  const handleFormSubmit = (e, rowIndex, columnIndex) => {
    e.preventDefault();
    setActiveCell(null); // Reset activeCell when the form is submitted
    console.log("Form submitted!");
  };

  const handleCellClick = (rowIndex, columnIndex) => {
    setActiveCell({ rowIndex, columnIndex }); // Set activeCell on cell click
  };

  return (
    <div className="mx-20">
      <div id="ParteArriba" className="w-full h-auto mt-24 flex flex-col justify-between">
        <Link href={"/profesor/asignaturas"}>
          <BackButton />
        </Link>
        <h1 className="text-5xl font-bold mb-6 ">Calificaciones</h1>
        <div className="flex justify-between mb-6">
          <div id="izq" className="w-auto h-full bg-gray-100 py-2 px-6 m-2 rounded-lg">
            <h3>
              <strong>Asignatura:</strong> Aseguramiento de la Calidad del Software
            </h3>
            <div className="flex mt-3">
              <h3>
                <strong>Clave:</strong> IDS350
              </h3>
              <h3 className="ml-14">
                <strong>Sección:</strong> 01
              </h3>
            </div>
          </div>
          <div id="der" className="flex justify-around items-end">
            <SearchBar />
          </div>
        </div>
      </div>
      <div className={`bg-blue-600 w-full h-2 transform flex justify-center items-center rounded-xl`}></div>
      <div id="ParteTablas" className="w-full h-2/3 flex justify-center items-center py-6">
        <TablaCalificacion
          headers={headers}
          data={data}
          activeCell={activeCell}
          onInputChange={handleInputChange}
          onFormSubmit={handleFormSubmit}
          onCellClick={handleCellClick}
        />
      </div>
    </div>
  );
}
