import Link from "next/link"
import AddButton from "@/app/components/AddButton"

export default function Home() {
    return (
      <main className=" text-3xl">
        <button>
          <Link href="/admin/usuarios">Usuarios</Link>
        </button>

        <div className="w-6 fixed top-20 left-180 z-10">
        <Link href="/admin/usuarios/registrar">  <AddButton /></Link>
        </div>

      </main>
    )
  }