'use client'
import TablaAula from "@/app/components/TablaAula";
import { useEffect, useState } from "react";
import { getAllSecciones } from '@/actions/admin/getSecciones.js'
import {prepararData} from '@/actions/estudiante/generarVolante.js'

export default function Home() {

  const headers = ['CLAVE', 'SEC', 'AULA', 'CRED', 'ASIGNATURA', 'DOCENTE', 'Lun', 'Mar', 'Mier', 'Jue', 'Vie', 'Sab', 'MOD', 'DEL'];
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    console.log("Buscando todas las secciones...");
    const fetchData = async () => {
      try {
        const secciones = await getAllSecciones();
        const preparedData = await prepararData(secciones, 'admin');
        setData(preparedData);
        console.log("Data secciones:", data);
      } catch (error) {
        console.error('Error buscando secciones:', error);
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
          <TablaAula headers={headers} data={data} entity="secciones"/>
          </>
        )}
      </>
    )
  }