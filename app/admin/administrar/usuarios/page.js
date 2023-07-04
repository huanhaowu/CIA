import Link from "next/link"
import SearchBar from "@/app/components/SearchBar"
import TablaAula from "@/app/components/TablaAula";

export default function Home() {

  const headers = ['ID', 'NOMBRE', 'CORREO','FECHA', 'MOD', 'DEL'];
  
  const data = [
    { ID: 1000000, NOMBRE: 'Gleidy Joselin Espinal Hernandez', CORREO: 'GleidyEspinal@gmail.com', FECHA: '20 / 06 / 2013', MOD: 'MOD', DEL: 'DEL'}, 

  ];

    return (
      <>
        <TablaAula headers={headers} data={data} entity="estudiante"/>
      </>
    )
  }