import Link from "next/link"

import AsignaturasDocente from "../components/AsignaturasDocente"
import ListEstudianteDocente from "../components/ListEstudianteDocente"
import ListCalificacionesDocente from "../components/ListCalificacionesDocente"
import VolanteSeleccionRegistro from "../components/VolanteSeleccionRegistro"
import VolanteCalificacionRegistro from "../components/VolanteCalificacionRegistro"
import PeriodosDropDown from "../components/PeriodosDropDown"
import TablaAula from "@/app/components/TablaAula"

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
    <main className=" text-3xl">
        <button>
            <Link href="/">TEST 2</Link>
            <TablaAula headers={headers} data={data}/>

            {/* <AsignaturasDocente/>
            <ListEstudianteDocente/>
            <ListCalificacionesDocente/>
            <VolanteSeleccionRegistro/>
            <VolanteCalificacionRegistro/>
            <br/>
            <PeriodosDropDown/> */}
        </button>
    </main>
  )
}