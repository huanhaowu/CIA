import Link from "next/link"
import SearchBar from "@/app/components/SearchBar"
import AnadirButton from "@/app/components/AnadirButton"
import TablaAula from "@/app/components/TablaAula"
import Layout from "../layout"

export default function Home() {

  const headers = ['CLAVE', 'CAPACIDAD', 'FECHA'];

  const data = [
    { CLAVE: 'A100', CAPACIDAD: '15', FECHA: '20 / 06 / 2013'},
    { CLAVE: 'A100', CAPACIDAD: '25', FECHA: '20 / 06 / 2013'},
    { CLAVE: 'A100', CAPACIDAD: '25', FECHA: '20 / 06 / 2013'},
    { CLAVE: 'A100', CAPACIDAD: '25', FECHA: '20 / 06 / 2013'},
    { CLAVE: 'A100', CAPACIDAD: '25', FECHA: '20 / 06 / 2013'},
    { CLAVE: 'A100', CAPACIDAD: '25', FECHA: '20 / 06 / 2013'},
    { CLAVE: 'A100', CAPACIDAD: '25', FECHA: '20 / 06 / 2013'},
    { CLAVE: 'A100', CAPACIDAD: '25', FECHA: '20 / 06 / 2013'},
    { CLAVE: 'A100', CAPACIDAD: '25', FECHA: '20 / 06 / 2013'},
    { CLAVE: 'A100', CAPACIDAD: '25', FECHA: '20 / 06 / 2013'},
    { CLAVE: 'A100', CAPACIDAD: '25', FECHA: '20 / 06 / 2013'},
    { CLAVE: 'A100', CAPACIDAD: '25', FECHA: '20 / 06 / 2013'},
    { CLAVE: 'A100', CAPACIDAD: '25', FECHA: '20 / 06 / 2013'},
    { CLAVE: 'A100', CAPACIDAD: '25', FECHA: '20 / 06 / 2013'},
  ];

    return (
      <>
        <TablaAula headers={headers} data={data}/>
      </>

    //   <main className="flex items-center justify-center h-screen">
    //   {/* <div className="flex flex-col absolute left top-20">
    //     <h1 className="titulo">Aulas</h1>
    //     <SearchBar/>
    //   </div>

    //   <div className="anadirbuttonstyle">
    //     <Link href="./registrar">  <AnadirButton/></Link>
    //   </div> */}
    // </main>
    );
  };