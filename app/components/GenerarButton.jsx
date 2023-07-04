"use client";
const { generarVolante} = require('@/actions/estudiante/generarVolante.js')

const GenerarButton = ({ texto = "Generar", fields={}}) => {
    let acc
    acc = generarVolante
  return (

    <form>
         <button
         formAction={async () => { 
          await generarVolante(fields)
      }}
      style={{ boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
      className=" bg-blue-500 hover:bg-blue-700 text-base text-white font-bold py-3 px-6 rounded-3xl m-2"
      
    >
      {texto}
    </button>
    </form>
   
  );
}

export default GenerarButton;
