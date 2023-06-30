import TablaAula from "@/app/components/TablaAula"
import YearDropdown from "@/app/components/YearDropdown"
import Link from "next/link"

export default function Home() {
  const headers = ['CLAVE', 'SEC','NOMBRE', 'CREDITOS'];
  const id = 1000000;
  const nombre = "Johan Abiel Contreras";
  const carrera = "Ingeniería de Software"

  const data = [
    { ID: 'IDS325', SEC: '01', NOMBRE: 'Aseguramiento de la Calidad del Software', CREDITOS: '4'}, 
    { ID: 'IDS325', SEC: '01', NOMBRE: 'Aseguramiento de la Calidad del Software', CREDITOS: '4'}, 
    { ID: 'IDS325', SEC: '01', NOMBRE: 'Aseguramiento de la Calidad del Software', CREDITOS: '4'}, 
    { ID: 'IDS325', SEC: '01', NOMBRE: 'Aseguramiento de la Calidad del Software', CREDITOS: '4'}, 
    { ID: 'IDS325', SEC: '01', NOMBRE: 'Aseguramiento de la Calidad del Software', CREDITOS: '4'}, 
    { ID: 'IDS325', SEC: '01', NOMBRE: 'Aseguramiento de la Calidad del Software', CREDITOS: '4'}, 
    { ID: 'IDS325', SEC: '01', NOMBRE: 'Aseguramiento de la Calidad del Software', CREDITOS: '4'}, 
    { ID: 'IDS325', SEC: '01', NOMBRE: 'Aseguramiento de la Calidad del Software', CREDITOS: '4'}, 
    { ID: 'IDS325', SEC: '01', NOMBRE: 'Aseguramiento de la Calidad del Software', CREDITOS: '4'}, 
  ];
    return (
      <div className="mx-20">
          <div id="ParteArriba" className=" w-full h-20 mb-8 flex flex-col justify-between ">
            <h1 className="text-5xl font-bold mb-6" style={{}}>Volantes</h1>
            <div className=" flex justify-between mb-2 ">
              <div id="izq" className="w-80 h-24 p-3 bg-gray-200 rounded-lg"> 
                <b>ID: </b> {id} <br/>
                <b>NOMBRE: </b>{nombre} <br/>
                <b>CARRERA: </b>{carrera}
              </div>

              <div id="der" className="w-1/2">

              </div>
            </div>
          </div>
        <div className={`mt-24 bg-blue-600 w-full h-2 transform flex justify-center items-center rounded-xl`} ></div>
          <div id="ParteTablas" className=" w-full h-2/3 flex justify-center items-center pt-20">
          <TablaAula headers={headers} data={data}/>
          </div>
       
      </div>
      
      
    )
  }