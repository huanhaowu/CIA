import Link from "next/link"

export default function Home() {
  return (
    <main className="mx-20 mt-24 flex items-center justify-between">
      <div className="w-2/4 flex flex-col gap-4">
        <h1 className="text-5xl pr-36 font-semibold mb-8"> Bienvenido a StudyMate</h1>
        <p> Tu dedicación y pasión por la enseñanza son un faro de inspiración para tus estudiantes. Cada día, compartes tu sabiduría y les brindas las herramientas necesarias para que alcancen su máximo potencial.</p>
        <p> Tu compromiso con el crecimiento intelectual de tus alumnos es invaluable. Tus palabras y acciones les infunden confianza y les ayudan a superar desafíos. Eres un guía atento y comprensivo, siempre dispuesto a escuchar y apoyar a aquellos que necesitan orientación.</p>
      </div>
      <div>
        <img src="../img-profesor-home.png" width="600" height="400"></img>
      </div>
      {/* <button className="w-screen h-screen flex justify-center items-center">
        <Link href="/">Home profesor</Link>
      </button> */}
    </main>
  )
}