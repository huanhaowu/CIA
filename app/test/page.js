import Link from "next/link"
import NavBarFiltro from "../components/NavBarFiltro"
import CancelButton from "../components/CancelButton"
import SaveButton from "../components/SaveButton"
import AnadirButton from "../components/AnadirButton"

import AulaItemList from "../components/AulaItemList"
import SeccionItemList from "../components/SeccionItemList"
import AsignaturaItemList from "../components/AsignaturaItemList"
import EstudianteItemList from "../components/EstudianteItemList"
import MateriaTituloHeader from "../components/MateriaTituloHeader"
import SeccionTituloHeader from "../components/SeccionTituloHeader"

export default function Home() {

  const nuevaFecha = new Date().toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }); //

  return (
    <main className=" text-3xl">
        <button>
            <Link href="/">TEST</Link>
            <NavBarFiltro/>
            <CancelButton />
            <SaveButton />
            <AnadirButton />
            <br/>
            <AulaItemList aula={'B250'} capacidad={40} fecha={nuevaFecha}/>
            <br/>
            <SeccionItemList sec={'02'} aula={'B226'} NomProfesor={'Francia Odalis Mejía'} lun={'00/00'} mar={'00/00'} mier={'00/00'} jue={'00/00'} vie={'00/00'} sab={'00/00'}/>
            <br/>
            <AsignaturaItemList AsignaturaClave={'IDS331'} NombreAsig={'Aseguramiento de la calidad del software'} Cred={10}/>
            <br/>
            <EstudianteItemList id={1104326} nombreEst={'Huan Hao Wu Wu'} correoEst={'HuanHaoWu@gmail.com'} />
            <br/>
            <MateriaTituloHeader />
            <br/>
            <SeccionTituloHeader/>
        </button>
    </main>
  )
}