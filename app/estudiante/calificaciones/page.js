import Link from "next/link"

export default function Home() {
    return (
      <main className=" text-3xl">
        <button>
          <Link href="/estudiante/calificaciones">Asignaturas</Link>
        </button>
      </main>
    )
  }