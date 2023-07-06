import Link from "next/link"

export default function Home() {
  return (
    <main className="mx-20 mt-24 flex items-center justify-between">
      <div className="w-2/4 flex flex-col gap-4">
        <h1 className="text-5xl pr-36 font-semibold mb-8"> Bienvenido a StudyMate</h1>
        <p> Tu trabajo detrás de escena es fundamental para el éxito de esta institución educativa. Con tu dedicación, organización y atención a los detalles, mantienes todo en orden y garantizas un entorno académico eficiente y efectivo.</p>
        <p> Eres el engranaje que mantiene todo en movimiento, coordinando recursos, supervisando procesos y asegurando que todas las partes trabajen en armonía. Tu capacidad para gestionar múltiples tareas y resolver problemas con rapidez y eficiencia es verdaderamente admirable.</p>
        <p>Tu labor es fundamental para el bienestar de estudiantes, profesores y personal administrativo. Gracias a tu trabajo diligente, todos pueden concentrarse en sus roles y responsabilidades sin preocuparse por los aspectos logísticos y administrativos.</p>
      </div>
      <div>
        <img src="../img-admin-home.png" width="600" height="400"></img>
      </div>
      {/* <button className="w-screen h-screen flex justify-center items-center">
        <Link href="/">Home admin</Link>
      </button> */}
    </main>
  )
}