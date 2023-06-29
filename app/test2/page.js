import Link from "next/link"

import AsignaturasDocente from "../components/AsignaturasDocente"
import ListEstudianteDocente from "../components/ListEstudianteDocente"
import ListCalificacionesDocente from "../components/ListCalificacionesDocente"
import VolanteSeleccionRegistro from "../components/VolanteSeleccionRegistro"
import VolanteCalificacionRegistro from "../components/VolanteCalificacionRegistro"
import PeriodosDropDown from "../components/PeriodosDropDown"

export default function Home() {
  return (
    <main className=" text-3xl">
        <button>
            <Link href="/">TEST 2</Link>
            <AsignaturasDocente/>
            <ListEstudianteDocente/>
            <ListCalificacionesDocente/>
            <VolanteSeleccionRegistro/>
            <VolanteCalificacionRegistro/>
            <br/>
            <PeriodosDropDown/>
        </button>
    </main>
  )
}