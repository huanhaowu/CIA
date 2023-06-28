import Link from "next/link"
import SearchBar from "@/app/components/SearchBar"
import AnadirButton from "@/app/components/AnadirButton"

export default function Home() {
    return (
      <main className="flex items-center justify-center h-screen">
      <div className="flex flex-col absolute left top-20">
        <h1 className="titulo">Aulas</h1>
        <SearchBar/>
      </div>

      <div className="anadirbuttonstyle">
        <Link href="./registrar">  <AnadirButton/></Link>
      </div>

    </main>
    )
  }