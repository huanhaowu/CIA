'use client'
import Image from "next/image"
const loginImage = require('@/public/loginImage.png')
import FormComponent from '@/app/formComponent.js'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'



export default function lonIn() {

  const fields = {
    ID: 'text',
    Password: 'password'
  };

  return (
    <div className="flex flex-row justify-center items-center h-screen w-screen">
      <div className="flex flex-col justify-center items-center p-10 h-1/2 relative lg:w-5/6 md:w-full">
        <div className="flex flex-col justify-center items-center space-y-10">
          <div className="flex flex-col justify-center items-center space-y-5">
            <h1 className="text-7xl font-bold">Welcome back</h1>
            <h2 className="text-xl">Log in to Calculadora Indice Academico </h2>
          </div>
          <div className="w-full">
            <FormComponent fields={fields} showPlaceholder={true} style={'border border-2 border-black p-4 w-full rounded-lg'} />
          </div>
          <AddCircleOutlineIcon />
        </div>
      </div>
      <div className="relative h-full lg:w-full md:w-4/6 sm:w-0">
        <Image src={loginImage} alt="loginImage" layout="fill" objectFit="cover" objectPosition="center bottom" />
      </div>
    </div>
  )
}
