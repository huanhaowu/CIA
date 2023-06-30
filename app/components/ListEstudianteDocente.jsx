'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

function ListEstudianteDocente() { 
    return (

        // los textos de los div hay que modificarlos por atributos de un objeto asignatura
        // Filas de la interfaz usuarios
        
        <div class='absolute bottom-20 left-3 w-3/4 bg-gray-100 rounded-lg flex justify-between px-9 py-1 text-center'>
            <div class='inline text-xs m-1'> 1000000 </div> 
            <div class='inline text-xs m-1 font-semibold' > Gleidy Joselin Espinal Hernandez </div>
            <div class='inline text-xs m-1'> GleidyEspinal@gmail.com </div>
            <div class='inline text-xs m-1'>  IDS </div>
        </div>
    );
}

export default ListEstudianteDocente;