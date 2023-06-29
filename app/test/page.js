import Link from "next/link"
import NavBarFiltro from "../components/NavBarFiltro"
import CancelButton from "../components/CancelButton"
import SaveButton from "../components/SaveButton"
import AnadirButton from "../components/AnadirButton"

import AulaItemList from "../components/AulaItemList"
import SeccionItemList from "../components/SeccionItemList"
import AsignaturaItemList from "../components/AsignaturaItemList"
import EstudianteItemList from "../components/EstudianteItemList"

export default function Home() {
  return (
    <main className=" text-3xl">
        <button>
            <Link href="/">TEST</Link>
            <NavBarFiltro/>
            <CancelButton />
            <SaveButton />
            <AnadirButton />
            <br/>
            <AulaItemList/>
            <br/>
            <SeccionItemList/>
            <br/>
            <AsignaturaItemList/>
            <br/>
            <EstudianteItemList />
        </button>
    </main>
  )
}