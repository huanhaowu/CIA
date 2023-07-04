'use client'
import TablaAula from "@/app/components/TablaAula"

import Dropdown from "@/app/components/DropDown"
import SaveButton from "@/app/components/SaveButton"

export default function Home() {
  const headers = ['CLAVE', 'SEC', 'AULA', 'CRED', 'ASIGNATURA', 'DOCENTE', 'CALIF', 'LETRA'];

  const data = [
    { CLAVE: 'IDS325', SEC: '01', AULA: 'A100', CRED: '4', ASIGNATURA: 'Aseguramiento de la Calidad del Software', DOCENTE: 'Francia Odalis Mejia', CALIF: '100', LETRA: 'A'},
    { CLAVE: 'IDS325', SEC: '01', AULA: 'A100', CRED: '4', ASIGNATURA: 'Aseguramiento de la Calidad del Software', DOCENTE: 'Francia Odalis Mejia', CALIF: '100', LETRA: 'A'}, 
    { CLAVE: 'IDS325', SEC: '01', AULA: 'A100', CRED: '4', ASIGNATURA: 'Aseguramiento de la Calidad del Software', DOCENTE: 'Francia Odalis Mejia', CALIF: '100', LETRA: 'A'}, 
    { CLAVE: 'IDS325', SEC: '01', AULA: 'A100', CRED: '4', ASIGNATURA: 'Aseguramiento de la Calidad del Software', DOCENTE: 'Francia Odalis Mejia', CALIF: '100', LETRA: 'A'}, 
    { CLAVE: 'IDS325', SEC: '01', AULA: 'A100', CRED: '4', ASIGNATURA: 'Aseguramiento de la Calidad del Software', DOCENTE: 'Francia Odalis Mejia', CALIF: '100', LETRA: 'A'}, 
    { CLAVE: 'IDS325', SEC: '01', AULA: 'A100', CRED: '4', ASIGNATURA: 'Aseguramiento de la Calidad del Software', DOCENTE: 'Francia Odalis Mejia', CALIF: '100', LETRA: 'A'}, 
    { CLAVE: 'IDS325', SEC: '01', AULA: 'A100', CRED: '4', ASIGNATURA: 'Aseguramiento de la Calidad del Software', DOCENTE: 'Francia Odalis Mejia', CALIF: '100', LETRA: 'A'}, 
    { CLAVE: 'IDS325', SEC: '01', AULA: 'A100', CRED: '4', ASIGNATURA: 'Aseguramiento de la Calidad del Software', DOCENTE: 'Francia Odalis Mejia', CALIF: '100', LETRA: 'A'}, 
    { CLAVE: 'IDS325', SEC: '01', AULA: 'A100', CRED: '4', ASIGNATURA: 'Aseguramiento de la Calidad del Software', DOCENTE: 'Francia Odalis Mejia', CALIF: '100', LETRA: 'A'}, 
  ];


    return (
      <div className="mx-20">
          <div id="ParteArriba" className=" w-full h-20 mb-8 flex flex-col justify-between ">
            <h1 className="text-5xl font-bold mb-6" style={{}}>Calificaciones</h1>
            <div className=" flex justify-between mb-2 ">
              <div id="izq" className="w-1/3 h-full bg-gray-100 p-2 rounded-lg"> 
                <h3> <strong>ID:</strong> 1000000</h3>
                <h3> <strong>Nombre:</strong> Huan Hao Wu</h3>
                <h3> <strong>Programa:</strong> IDS</h3>
              </div>
              <div id="der" className="flex justify-around items-center">
                <div id="ano" className="mx-4 flex items-center ">
                  <h3 className="mr-8"> <strong> Año:</strong></h3>
                  <Dropdown/>
                </div>
                <div id="periodo" className="mx-4 flex items-center ">
                  <h3> <strong> Periodo:</strong></h3>
                  <Dropdown/>
                </div>
                <div id="boton" className="">
                  <SaveButton texto="Buscar"/>
                </div>
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