
import Link from "next/link"
import SearchBar from "@/app/components/SearchBar.jsx"

export default function Home() {
    return (
      <main className=" text-3xl">
        <h1>Asignaturas</h1>

      <div className="placeholder:">
        <SearchBar/>
      </div>
      </main>
    )
  }