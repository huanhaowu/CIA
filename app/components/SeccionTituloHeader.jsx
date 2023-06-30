'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

function SeccionTituloHeader() { 
    return (

        // los textos de los div hay que modificarlos por atributos de un objeto asignatura
        // Filas de la interfaz seccion titulo header

        <div class='absolute bottom-100 left-3 w-3/4 bg-gray-500 rounded-lg flex justify-between px-9 py-1 text-center'>
            <div class='text-white text-xs m-1 flex'> 
                <div className='mx-3'> Sec </div>
                <div className='mx-3'> Aula </div>
            </div> 
            <div class='text-white inline text-xs m-1' > Docente </div>
            <div class='text-white text-xs m-1 flex'>
                <div className='mx-2'>Lun</div>
                <div className='mx-2'>Mar</div>
                <div className='mx-2'>Mier</div>
                <div className='mx-2'>Jue</div>
                <div className='mx-2'>Vie</div>
                <div className='mx-2'>Sab</div>
            </div>
            <div class='text-white inline text-xs m-1'> Acciones </div>
        </div>
    );
}

export default SeccionTituloHeader;