'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

function ListCalificaciones() { 
    return (
        // los textos de los div hay que modificarlos por atributos de un objeto asignatura
        // Filas de la interfaz usuarios
        
        <div class='my-10 absolute bottom-20 left-3 w-3/4 bg-gray-100 rounded-lg flex justify-between px-9 py-1 text-center'>
            <div class='inline text-xs m-1'> 1000000 </div> 
            <div class='inline text-xs m-1 font-semibold' > Gleidy Joselin Espinal Hernandez </div>
            <div class='inline text-xs m-1'> GleidyEspinal@gmail.com </div>
            <div class='inline text-xs m-1'>  IDS </div>
            <div class='inline text-xs bg-white px-2 py-0.5 font-semibold rounded-md'>
                100
            </div>
        </div>
    );
}

export default ListCalificaciones;