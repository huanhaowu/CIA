import Link from "next/link"
import NavBarFiltro from "../components/NavBarFiltro"

export default function Home() {
  return (
    <main className=" text-3xl">
      <button>
        <Link href="/">TEST</Link>
        <NavBarFiltro/>
      </button>
    </main>
  )
}