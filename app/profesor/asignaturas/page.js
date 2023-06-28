import Link from "next/link"

export default function Home() {
    return (
      <main className=" text-3xl">
        <button>
          <Link href="/profesor/asignaturas">Asignaturas</Link>
        </button>
      </main>
    )
  }