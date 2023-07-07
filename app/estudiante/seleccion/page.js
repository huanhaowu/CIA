'use client'
import Link from "next/link";
import SearchBar from "@/app/components/SearchBar";
import SaveButton from "@/app/components/SaveButton";
import CancelButton from "@/app/components/CancelButton";
import BlueBar from "@/app/components/BlueDivisionBar";
import TablaInfinita from "@/app/components/tableComponent/firstComponent";
import ThirdTable from "@/app/components/tableComponent/thirdComponent";
import { useEffect, useState } from "react";
import { getAsignaturas } from "@/actions/estudiante/buscarSecciones.js";
import { addSeccionToEstudiante } from '@/actions/estudiante/agregarSeccion.js'
import Spinner from '@/app/components/Spinner.jsx'
import MessageOverlay from '@/app/components/Messager.jsx'
import { getCookie } from "cookies-next";

export default function Home() {
  const [asignaturas, setAsignaturas] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState(null);
  const currentUserId = getCookie("userId");

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const data = await getAsignaturas();
      setAsignaturas(data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  const handleRowSelect = (row) => {
    const alreadySelected = selectedRows.some(
      (r) => r.asignatura_clave === row.asignatura_clave && r.Id === row.Id
    );

    console.log("Row data:", row);
    console.log("Already selected:", alreadySelected);
    console.log("Current state:", selectedRows);

    if (alreadySelected) {
      setSelectedRows((prev) =>
        prev.filter((r) => !(r.asignatura_clave === row.asignatura_clave && r.Id === row.Id))
      );
    } else {
      setSelectedRows((prev) => [...prev, row]);
    }
  };


  const handleSaveButtonClick = async () => {
    try {
      console.log(selectedRows);
      if (selectedRows.length === 0) {
        throw new Error("selectedRows is empty");
      }

      const allPromises = selectedRows.map((sec) => {
        return addSeccionToEstudiante(currentUserId, sec.Sec);
      });

      Promise.all(allPromises).then((results) => {
        if (results.every((result) => result === true)) {
          setSuccessMessage("Operación completada con éxito.");
        } else {
          setSuccessMessage("Hubo un error en la operacion");
        }
      });
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };


  const handleCancelButtonClick = () => {
    setSelectedRows([]);
  };

  return (
    <div className="p-24 space-y-4 pt-40 flex flex-col justify-start h-screen w-screen">
      {successMessage && <MessageOverlay message={successMessage} />}
      <div className="relative xl:text-7xl lg:text-7xl md:text-5xl sm:text-4xl font-bold">
        Seleccion de asignaturas
      </div>
      <div className="flex flex-col w-full h-full">
        <div className="flex flex-col md:flex-row relative justify-between items-center p-2 w-full h-1/6 ">
          <SearchBar
            style={"flex items-center bg-white p-3 px-8 rounded-xl"}
          />
          <div className="flex relative items-center h-full">
            <SaveButton onClick={handleSaveButtonClick} />
            <CancelButton onClick={handleCancelButtonClick} />
          </div>
        </div>
        <BlueBar />
        <div className="flex flex-col space-y-4 w-full h-full">
          <div
            className="relative h-56 max-h-56 w-full rounded-xl p-5 overflow-scroll"
            style={{
              boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            }}
          >
            {isLoading ? (
              <Spinner />
            ) : (
              asignaturas.length > 0 && (
                <TablaInfinita
                  data={asignaturas}
                  onRowSelect={handleRowSelect}
                  parentData={asignaturas[0]}
                />
              )
            )}
          </div>
          <div
            className="relative h-56 max-h-56 w-full rounded-xl p-5 overflow-scroll"
            style={{
              boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
            }}
          >


            {isLoading ? (
              <Spinner />
            ) : (
              selectedRows.length > 0 ? (
                <ThirdTable data={selectedRows} />
              ) : null
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
