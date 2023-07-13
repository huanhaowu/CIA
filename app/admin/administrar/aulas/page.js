'use client'
import Link from "next/link"
import SearchBar from "@/app/components/SearchBar"
import AnadirButton from "@/app/components/AnadirButton"
import TablaAula from "@/app/components/TablaAula"
import Layout from "../layout"
import { getAllAulas } from "@/actions/admin/getAulas"
import { useEffect, useState } from "react"

export default function Home() {

  const headers = ['CLAVE', 'CAPACIDAD', 'FECHA', 'MOD', 'DEL'];
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("Buscando todas las aulas...");
    const fetchData = async () => {
      try {
        const preparedData = await getAllAulas();
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
          <TablaAula headers={headers} data={data} entity="aulas"/>
          </>
        )}
      </>
    );
  };