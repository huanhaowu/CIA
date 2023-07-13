'use client'
import { useEffect, useState } from "react";
import TablaAula from "@/app/components/TablaAula";
import { getAllAsignaturas } from "@/actions/admin/getAsignaturas";

export default function Home() {

  const headers = ['CLAVE', 'ASIGNATURA', 'CREDITOS','FECHA', 'MOD', 'DEL'];
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    console.log("Buscando todas las asignaturas...");
    const fetchData = async () => {
      try {
        const preparedData = await getAllAsignaturas();
        setData(preparedData);
        console.log("Data asignaturas:", data);
      } catch (error) {
        console.error('Error buscando asignaturas:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

    return (
      <>
        {isLoading ? (<p>Cargando...</p>) : (
          <>
          <TablaAula headers={headers} data={data} entity="asignaturas"/>
          </>
        )}
      </>
    )
  }
