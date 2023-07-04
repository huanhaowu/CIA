import Link from "next/link"
import SearchBar from "@/app/components/SearchBar"
import TablaAula from "@/app/components/TablaAula";

export default function Home() {

  const headers = ['CLAVE', 'SEC','NOMBRE', 'CREDITOS', 'LISTA', 'CALIF'];

  const data = [
    { ID: 'IDS325', SEC: '01', NOMBRE: 'Aseguramiento de la Calidad del Software', CREDITOS: '4', LISTA: 'LISTA', CALIF: 'CALIF'}, 
  ];

    return (
      // <main className="mt-24 flex flex-col items-left h-screen w-screen">
        <div className="mx-20 mt-24 h-screen">
          <div id="ParteArriba" className=" w-full h-20 mb-8 flex flex-col justify-between ">
            <h1 className="text-5xl font-bold mb-6" style={{}}>Asignaturas</h1>
            <div className=" flex justify-between mb-4 ">
              <SearchBar/>
            </div>
          </div>
          <div className={`mt-16 bg-blue-600 h-2 transform flex justify-center items-center rounded-xl`} ></div>
          <div id="ParteTablas" className=" w-full h-auto flex justify-center items-center pt-8">
            <TablaAula headers={headers} data={data}/>
          </div>
        </div>
      // </main>
    )
  }