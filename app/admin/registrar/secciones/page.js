'use client'
import Image from "next/image"
const adminSubjects = require('@/public/registrarAsignaturasImage.png')
import FormComponent from '@/app/components/formComponent.js'
import AddButton from "@/app/components/AddButton"
import { useState } from "react";


const { useMediaQuery } = require('@/app/components/useMediaHook.jsx')

const fields1 = {
  'CLAVE ASIG.': 'text',
  NUMERO: 'number',
  "TRIMESTRE ID": 'number',
  'DOCENTE ID': 'number',
  'MODALIDAD ID': 'number',
  AULA: 'text',
  'HORARIO DIA 1': 'number',
}

const fields2 = {
  'CLAVE ASIG.': 'text',
  NUMERO: 'number',
  "TRIMESTRE ID": 'number',
  'DOCENTE ID': 'number',
  'MODALIDAD ID': 'number',
  AULA: 'text',
  'HORARIO DIA 1': 'number',
  'HORARIO DIA 2': 'number',
}

const fields3 = {
  'CLAVE ASIG.': 'text',
  NUMERO: 'number',
  "TRIMESTRE ID": 'number',
  'DOCENTE ID': 'number',
  'MODALIDAD ID': 'number',
  AULA: 'text',
  'HORARIO DIA 1': 'number',
  'HORARIO DIA 2': 'number',
  'HORARIO DIA 3': 'number',
}

export default function Home() {
  const [dias, setDias] = useState('1dia')
  const isSmallScreen = useMediaQuery('(max-width: 640px)')

  const buttonState = 'text-sm p-3 px-10 animate duration-300 hover:bg-[#4B63FD] hover:text-white'

  const buttonColor1 = dias === '1dia' ? 'bg-[#4B63FD] text-white' : 'bg-[#D0D5DD]'
  const buttonColor2 = dias === '2dias' ? 'bg-[#4B63FD] text-white' : 'bg-[#D0D5DD]'
  const buttonColor3 = dias === '3dias' ? 'bg-[#4B63FD] text-white' : 'bg-[#D0D5DD]'

  const action = "seccion";

  let fields;

  if (dias === '1dia') {
    fields = fields1
  } else if (dias === '2dias') { 
    fields = fields2 } 
    else {fields = fields3 }

      const handleSubmit = (data) => {
    if (data.AULA === '') {
      delete data.AULA;
    }}

    return (
      <div className="flex flex-row justify-center items-center h-screen w-screen">
      <div className="flex flex-col justify-center items-center p-10 h-4/5 relative lg:w-full md:w-full">
        <div className=" relative flex flex-col mt-20 h-full w-5/6 justify-center items-center">
          <div className="relative flex flex-col justify-center items-center mb-4 space-y-5">
            <h1 className=" text-center lg:text-6xl md:text-5xl sm:text-5xl max-sm:text-4xl font-bold translate-x-5">Registrar secciones</h1>
          </div>
          <div className="mb-6 font-mono">
            <button className={`${buttonState} ${buttonColor1} rounded-l-lg`} onClick={() => setDias('1dia')}>1 dia</button>
            <button className={`${buttonState} ${buttonColor2}`} onClick={() => setDias('2dias')}>2 dias</button>
            <button className={`${buttonState} ${buttonColor3} rounded-r-lg`} onClick={() => setDias('3dias')}>3 dias</button>
          </div>
          <div className="relative flex p-10  w-full h-full rounded-xl bg-[#F8F8F8] animate duration-500" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}>
            <FormComponent action={action} fields={fields} showPlaceholder={isSmallScreen ? true : false} 
            style={'p-2 short:p-1 short:m-1 m-3 w-1/2 drop-shadow-xl rounded-xl bg-white '} buttonText='Guardar'
             buttonStyle={' rounded-full bg-[#4B63FD] p-4 m-4 ml-[65%] px-10 text-white '} showFieldTitles={isSmallScreen ? false : true} 
             h2={'md:min-w-fill sm:min-w-[200px] xl:ml-20 lg:ml-10 md:ml-14 sm:ml-10 text-sm'}  />
          </div>
        </div>
      </div>
      <div className="relative h-full xl:w-11/12 lg:w-1/2 md:w-0 sm:w-0">
        <Image src={adminSubjects} alt="adminSubjects" layout="fill" objectFit="cover" objectPosition="center bottom" />
      </div>
    </div>
      
    )
  }