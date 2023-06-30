'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

function VolanteSeleccionRegistro() { 
    return (

        // los textos de los div hay que modificarlos por atributos de un objeto asignatura
        // Filas de la interfaz secciones

        <div class='my-20 absolute bottom-20 left-3 w-3/4 bg-gray-100 rounded-lg flex justify-between px-9 py-1 text-center'>
            <div class='flex flex-row text-xs m-1'> 
                <div class='mx-3'> IDS325 </div>
                <div class='mx-3'> 01 </div>
                <div class='mx-3'> A100 </div>
                <div class='mx-3'> 4 </div>
            </div> 
            <div class='inline text-xs m-1'> Aseguramiento de la Calidad del Software </div>
            <div class='inline text-xs m-1' > Francia Odalis Mejía </div>
            <div class='text-xs m-1 flex flex-row'> 
                <div class='mx-1'>00/00</div>
                <div class='mx-1'>00/00</div>
                <div class='mx-1'>00/00</div>
                <div class='mx-1'>00/00</div>
                <div class='mx-1'>00/00</div>
                <div class='mx-1'>00/00</div>
            </div>
        </div>
    );
}

export default VolanteSeleccionRegistro;