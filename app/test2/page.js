import Link from "next/link"

import AsignaturasDocente from "../components/AsignaturasDocente"
import ListEstudianteDocente from "../components/ListEstudianteDocente"
import ListCalificaciones from "../components/ListCalificaciones"
import VolanteSeleccionRegistro from "../components/VolanteSeleccionRegistro"

export default function Home() {
  return (
    <main className=" text-3xl">
        <button>
            <Link href="/">TEST 2</Link>
            <AsignaturasDocente/>
            <ListEstudianteDocente/>
            <ListCalificaciones/>
            <VolanteSeleccionRegistro/>
        </button>
    </main>
  )
}