'use client'
import Link from "next/link"
import TablaAula from "@/app/components/TablaAula"
import SearchBar from "@/app/components/SearchBar"
import BackButton from "@/app/components/BackButton"
import { useState } from 'react';
const { getSeccionesByProfId } = require('@/actions/profesor/buscarSecciones.js')

export default function Home() {

  const headers = ['UID', 'NOMBRE', 'CORREO','PROGRAMA'];
  

  return (
    <div className="mx-20">
          <div id="ParteArriba" className=" w-full h-auto mt-24 flex flex-col justify-between">
            <Link href={"/profesor/asignaturas"}> <BackButton/> </Link>
            <h1 className="text-5xl font-bold mb-6 ">Lista de estudiantes</h1>
            <div className="flex justify-between mb-6">
              <div id="izq" className="w-auto h-full bg-gray-100 py-2 px-6 m-2 rounded-lg"> 
                <h3> <strong>Asignatura:</strong>  Aseguramiento de la Calidad del Software</h3>
                <div className="flex mt-3"> 
                  <h3> <strong>Clave:</strong>  IDS350</h3>
                  <h3 className="ml-14"> <strong>Sección:</strong>  01</h3>
                </div>
              </div>
              <div id="der" className="flex justify-around items-end">
                <SearchBar/>
              </div>
            </div>
          </div>
        <div className={` bg-blue-600 w-full h-2 transform flex justify-center items-center rounded-xl`} ></div>
        <div id="ParteTablas" className=" w-full h-2/3 flex justify-center items-center py-6">
            <TablaAula headers={headers} data={data}/>
        </div>
      </div>
    
    // <main className=" text-3xl">
    //   <button className="w-screen h-screen flex justify-center items-center">
    //     <Link href="/">Pagina en progreso</Link>
    //   </button>
    // </main>
  )
}