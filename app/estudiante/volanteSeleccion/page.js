import Link from "next/link"

export default function Home() {
    return (
      <main className=" text-3xl">
        <button>
          <Link href="/estudiante/volanteSeleccion">Asignaturas</Link>
        </button>
      </main>
    )
  }