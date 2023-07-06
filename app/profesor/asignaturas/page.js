'use client'
import { getCookie } from "cookies-next";
import SearchBar from "@/app/components/SearchBar"
import TablaAula from "@/app/components/TablaAula";
import { useState, useEffect} from 'react';
const { getSeccionesByProfId, prepararDataSecciones } = require("@/actions/profesor/buscarSecciones");

export default function Home() {

  const headers = ['CLAVE', 'SEC','ASIGNATURA', 'CREDITOS', 'LISTA', 'CALIFICAR'];
  const [data, setData] = useState([]);
  const currentUserId = getCookie("userId");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("entro al use effect");
    const fetchData = async () => {
      try {
        const seccionesData = await getSeccionesByProfId(Number(currentUserId));
        const preparedData = await prepararDataSecciones(seccionesData);
        setData(preparedData);
        console.log("Data secciones:", data);
      } catch (error) {
        console.error('Error buscando secciones:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once

 
    return (
      // <main className="mt-24 flex flex-col items-left h-screen w-screen">
      
        <div className="mx-20 mt-24 h-screen">
          <div id="ParteArriba" className=" w-full h-20 mb-8 flex flex-col justify-between ">
            <h1 className="text-5xl font-bold mb-6" style={{}}>Asignaturas</h1>
            <div className=" flex justify-between mb-4 ">
              <SearchBar/>
            </div>
          </div>
          <div className={`mt-16 bg-blue-600 h-2 transform flex justify-center items-center rounded-xl`} ></div>
          <div id="ParteTablas" className=" w-full h-auto flex justify-center items-center pt-8">
          {isLoading ? (
                  <div>Cargando...</div>
                ) : (
                  <>
                    <TablaAula headers={headers} data={data} />
                  </>
                )}
          </div>
        </div>
      // </main>
    )
  }