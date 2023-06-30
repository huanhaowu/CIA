import Link from "next/link"
import SearchBar from "@/app/components/SearchBar"
import AnadirButton from "@/app/components/AnadirButton"
import TablaAula from "@/app/components/TablaAula";

export default function Home() {

  const headers = ['CLAVE', 'ASIGNATURA', 'CREDITOS','FECHA'];

  const data = [
    { CLAVE: 'IDS325', ASIGNATURA: 'Aseguramiento de la Calidad del Software', CREDITOS: '4', FECHA: '20 / 06 / 2013'},
    { CLAVE: 'IDS325', ASIGNATURA: 'Aseguramiento de la Calidad del Software', CREDITOS: '4', FECHA: '20 / 06 / 2013'},
    { CLAVE: 'IDS325', ASIGNATURA: 'Aseguramiento de la Calidad del Software', CREDITOS: '4', FECHA: '20 / 06 / 2013'},
    { CLAVE: 'IDS325', ASIGNATURA: 'Aseguramiento de la Calidad del Software', CREDITOS: '4', FECHA: '20 / 06 / 2013'},
    { CLAVE: 'IDS325', ASIGNATURA: 'Aseguramiento de la Calidad del Software', CREDITOS: '4', FECHA: '20 / 06 / 2013'},
    { CLAVE: 'IDS325', ASIGNATURA: 'Aseguramiento de la Calidad del Software', CREDITOS: '4', FECHA: '20 / 06 / 2013'},
    { CLAVE: 'IDS325', ASIGNATURA: 'Aseguramiento de la Calidad del Software', CREDITOS: '4', FECHA: '20 / 06 / 2013'},
    { CLAVE: 'IDS325', ASIGNATURA: 'Aseguramiento de la Calidad del Software', CREDITOS: '4', FECHA: '20 / 06 / 2013'},
    { CLAVE: 'IDS325', ASIGNATURA: 'Aseguramiento de la Calidad del Software', CREDITOS: '4', FECHA: '20 / 06 / 2013'},
    { CLAVE: 'IDS325', ASIGNATURA: 'Aseguramiento de la Calidad del Software', CREDITOS: '4', FECHA: '20 / 06 / 2013'},
    { CLAVE: 'IDS325', ASIGNATURA: 'Aseguramiento de la Calidad del Software', CREDITOS: '4', FECHA: '20 / 06 / 2013'},
    { CLAVE: 'IDS325', ASIGNATURA: 'Aseguramiento de la Calidad del Software', CREDITOS: '4', FECHA: '20 / 06 / 2013'},
    { CLAVE: 'IDS325', ASIGNATURA: 'Aseguramiento de la Calidad del Software', CREDITOS: '4', FECHA: '20 / 06 / 2013'},
    { CLAVE: 'IDS325', ASIGNATURA: 'Aseguramiento de la Calidad del Software', CREDITOS: '4', FECHA: '20 / 06 / 2013'},
  ];

    return (
      <>
        <TablaAula headers={headers} data={data}/>
      </>
    )
  }
