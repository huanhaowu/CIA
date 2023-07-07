'use client'
import Link from "next/link"
import TablaAula from "../components/TablaAula";
import { useState, useEffect, useRef } from 'react';
import { getCookie } from "cookies-next";
const { buscarEstudianteHome } = require('@/actions/estudiante/buscarEstudiante.js')

export default function Home() {
  
  const headers = ['Carrera', 'ID', 'Nombre', 'Indice', 'Honor'];

  const data = [
    { Carrera: 'IDS', ID: '1104326', Nombre: 'Gleidy Joselin Espinal Hernandez', Indice: '4.0', Honor: 'Summa Cum laude'},
    { Carrera: 'CIV', ID: '1104256', Nombre: 'Angel Gabriel Moreno Reyes', Indice: '4.0', Honor: 'Summa Cum laude'},
    { Carrera: 'IDS', ID: '1105328', Nombre: 'Johan Abiel Contreras Cepeda', Indice: '4.0', Honor: 'Summa Cum laude'},
    { Carrera: 'LBT', ID: '1104982', Nombre: 'Alejandro Blanco Hidalgo', Indice: '4.0', Honor: 'Summa Cum laude'},
    { Carrera: 'IND', ID: '1105227', Nombre: 'Diego Ivan de la Cruz Maldonado', Indice: '4.0', Honor: 'Summa Cum laude'},
    { Carrera: 'MEC', ID: '1106021', Nombre: 'Nilo Ezequiel Reyes Carmona', Indice: '4.0', Honor: 'Summa Cum laude'},
    { Carrera: 'IMC', ID: '1104666', Nombre: 'Alfredo Rodriguez Mejia', Indice: '4.0', Honor: 'Summa Cum laude'},
    { Carrera: 'MED', ID: '1105312', Nombre: 'Juan Pepito García Concha', Indice: '4.0', Honor: 'Summa Cum laude'},
    { Carrera: 'INQ', ID: '1106254', Nombre: 'María Laura Rodriguez Marte', Indice: '4.0', Honor: 'Summa Cum laude'},
    { Carrera: 'IDS', ID: '1104952', Nombre: 'Carlos Emanuel López Féliz', Indice: '4.0', Honor: 'Summa Cum laude'},
    { Carrera: 'SIS', ID: '1105016', Nombre: 'Ana Marie Morales Sánchez', Indice: '4.0', Honor: 'Summa Cum laude'},
  ];

  const currentUserId = getCookie("userId");
  const [dataEstudiante, setDataEstudiante] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const estudianteData = await buscarEstudianteHome(Number(currentUserId));
        setDataEstudiante(estudianteData);
        let creditosAprobados = dataEstudiante.creditos;
        let creditosTotal = dataEstudiante.programa.creditos;
      } catch (error) {
        console.error('Error fetching student data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (currentUserId) {
      fetchData();
    }
  }, [currentUserId]);

  console.log("Data estudiante:", dataEstudiante);
  let creditosAprobados = 144;
  let creditosTotal = 278;

  return (
    <main className="mx-20 mt-10">
      <div id="ParteArriba" className=" h-2/5">
        <h1 className="text-4xl font-bold text-center"> Bienvenido a StudyMate </h1>
        <div id="container padre" className="flex justify-between my-9 h-60 ">
          <div className=" w-1/4  h-fill flex flex-col gap-3 px-4 py-1 rounded-xl shadow-xl">
            {isLoading ? ( <div> Cargando... </div> ) : (
              <>
                <h2 className="text-xl font-bold"> Datos generales </h2>
                <p className="text-sm text-slate-400"> <strong>ID:</strong> {dataEstudiante.est_id} </p>
                <p className="text-sm text-slate-400"> <strong>Nombre:</strong> {dataEstudiante.nombres + ' ' + dataEstudiante.apellidos} </p>
                <p className="text-sm text-slate-400"> <strong>Programa:</strong> {dataEstudiante.programa.nombre} </p>
                <p className="text-sm text-slate-400"> <strong>Carrera:</strong> {dataEstudiante.carrera.nombre} </p>
                <p className="text-sm text-slate-400"> <strong>Periodo Ingreso:</strong> Aug - Oct 2021 </p>
              </>
            )}
          </div>

          <div className=" w-4/12 h-fill flex flex-col p-2 gap-2 rounded-xl shadow-xl">
            {isLoading ? ( <div> Cargando... </div> ) : ( <>
              <div id="container" className="flex flex-col px-4 py-1">
                <div className="flex justify-between">
                  <h2 className="font-bold text-base"> Trimestres cursados </h2>
                  <h2 className="font-bold text-base"> 8 </h2>
                </div>
                <div id="ProgressBar" className="w-full h-2 rounded-md bg-gray-200 ">
                  <div className="w-2/6 bg-blue-500 h-full rounded-md"></div>
                </div>
                <p className="text-xs pt-1 text-slate-500"> 13 trimestres restantes</p>
              </div>

              <div id="container" className="flex flex-col w-400 h-400 px-4 py-1 gap-1">
                <div className="flex justify-between">
                  <h2 className="font-bold text-base"> Asignaturas aprobadas </h2>
                  <h2 className="font-bold text-base"> 61 </h2>
                </div>
                <div id="ProgressBar" className="w-full h-2 rounded-md bg-gray-200 ">
                  <div className="w-4/6 bg-blue-500 h-full rounded-md"></div>
                </div>
                <p className="text-xs pt-1 text-slate-500"> 51 asignaturas restantes</p>
              </div>

              <div id="container" className="flex flex-col w-400 h-400 px-4 py-1 gap-1">
                <div className="flex justify-between">
                  <h2 className="font-bold text-base"> Créditos aprobados </h2>
                  <h2 className="font-bold text-base"> 144
                  {/* { Number.isInteger({creditosAprobados}) ? ({creditosAprobados}) : (0)}*/} </h2> 
                </div>
                <div id="ProgressBar" className="w-full h-2 rounded-md bg-gray-200 ">
                  <div className={`w-2/6 bg-blue-500 h-full rounded-md`}></div>
                </div>
                <p className="text-xs pt-1 text-slate-500"> 134 créditos restantes </p>  
                {/* {dataEstudiante.programa.creditos - dataEstudiante.creditos_aprobados}  */}
              </div>
            </>)}
          </div>

          <div className=" w-4/12 h-100 p-4 flex flex-col gap-4 rounded-xl shadow-xl">
          {isLoading ? ( <div> Cargando... </div> ) : ( <>
            <div id="indices" className="flex gap-3 justify-center items-end">
              <div id="ind trimestral" className="flex flex-col items-center">
                <p className="text-[10px]"> INDICE TRIMESTRAL</p>
                <div className=" border-black border rounded-lg w-20 h-20 p-2 flex items-center justify-center mt-1">
                  <p className="text-3xl"> 4.0 </p>
                </div>
              </div>
              <div id="ind general" className="flex flex-col items-center">
                <p className="text-[10px]"> INDICE GENERAL DE 4</p>
                <div className=" border-blue-500 border-[3px] rounded-lg w-32 h-32 p-2 flex items-center justify-center mt-1">
                  <p className="text-6xl"> {dataEstudiante.indice.toFixed(1)} </p>
                </div>
              </div>
              <div id="ind general 2" className="flex flex-col items-center">
                <p className="text-[10px]"> INDICE GEN ANT</p>
                <div className=" border-black border rounded-lg w-20 h-20 p-2 flex items-center justify-center mt-1">
                  <p className="text-3xl"> 4.0 </p>
                </div>
              </div>
            </div>
            <div id="ProgressBar" className="w-full h-3 rounded-md bg-gray-200">
              <div className="w-60 bg-blue-500 h-full rounded-md"></div>
            </div>
            </>)}
          </div>
        </div>
      </div>
      <div className={`mt-6 bg-blue-600 w-full h-2 transform flex justify-center items-center rounded-xl`} ></div>
      <div id="ParteTablas" className=" w-full h-2/3 flex justify-center items-center">
        <TablaAula headers={headers} data={data}/>
      </div>

      {/* <button className="w-screen h-screen flex justify-center items-center">
        <Link href="/">Home estudiante</Link>
      </button> */}
    </main>
  )
}