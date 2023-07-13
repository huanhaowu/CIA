'use client'
import TablaAula from "@/app/components/TablaAula";
import { useEffect, useState } from "react";
import { getAllData } from '@/actions/admin/getUsuarios.js'

export default function Home() {

  const headers = ['USER_ID', 'NOMBRE', 'CORREO','FECHA', 'MOD', 'DEL'];
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    console.log("Buscando todos los usuarios...");
    const fetchData = async () => {
      try {
        const preparedData = await getAllData();
        setData(preparedData);
        console.log("Data usuarios:", data);
      } catch (error) {
        console.error('Error buscando usuarios:', error);
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
          <TablaAula headers={headers} data={data} entity="usuarios"/>
          </>
        )}
      </>
    )
  }