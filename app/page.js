'use client'
import Image from "next/image"
const loginImage = require('@/public/loginImage.png')
import FormComponent from '@/app/components/formComponent.js'
import Link from "next/link"
import { useState } from "react"
import MessageOverlay from "./components/Messager"


export default function LonIn() {

  const fields = {
    ID: 'text',
    Password: 'password'
  };

  return (
    <div className="flex flex-row justify-center items-center h-screen w-screen">
      <div className="flex flex-col justify-center items-center p-10 h-1/2 relative lg:w-5/6 md:w-full">
        <div className="flex flex-col h-full justify-center items-center">
          <div className="flex flex-col justify-center items-center mb-12 space-y-5">
            <h1 className="text-center lg:text-7xl md:text-6xl text-4xl font-bold">Bienvenido de vuelta</h1>
            <h2 className="text-xl text-center">Inicia sesión en StudyMate </h2>
          </div>
          <div className="w-full h-full">
            <FormComponent fields={fields} showPlaceholder={true} style={'border border-2 border-black p-4 w-full rounded-lg mb-8'} buttonText='Log in' buttonStyle={' w-full rounded-full bg-[#4B63FD] p-4 m-4 text-white'} action={'logIn'} />

            <div className="flex justify-center w-full">
              <Link className="text-lg cursor-pointer font-light decoration-1" href='/password'>Quieres cambiar tu contraseña?</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-full lg:w-full md:w-1/2 sm:w-0">
        <Image src={loginImage} alt="loginImage" layout="fill" objectFit="cover" objectPosition="center bottom" />
      </div>
    </div>
  )
}
