import Link from "next/link"
import AddButton from "@/app/components/AddButton"
import SearchBar from "@/app/components/SearchBar"

export default function Home() {
    return (
      <main className="flex items-center justify-center h-screen">
        <div className="w-6 fixed top-20 left-180 z-10">
        <Link href="/admin/usuarios/registrar">  <AddButton /></Link>
        </div>
        <div className="flex flex-col absolute left top-20">
        <h1 className="titulo">Usuarios</h1>
        <SearchBar/>
      </div>
      </main>
    )
  }