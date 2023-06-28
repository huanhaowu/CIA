import Link from "next/link"
import AddButton from "@/app/components/AddButton"
import BackButton from "@/app/components/BackButton"

export default function Home() {
    return (
      <main className=" text-3xl">
        <h1>Registrar</h1>

        <div className="w-6 fixed top-20 left-180 z-10">
        <Link href="/admin/aulas">  <BackButton /></Link>
        </div>
      </main>
      
    )
  }