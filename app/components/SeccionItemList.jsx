'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';

const SeccionItemList = ({sec, aula, NomProfesor, lun, mar, mier, jue, vie, sab}) =>{ 
    return (

        // los textos de los div hay que modificarlos por atributos de un objeto asignatura
        // Filas de la interfaz secciones

        <div class='absolute bottom-80 left-3 w-3/4 bg-gray-100 rounded-lg flex justify-between px-9 py-1 text-center'>
            <div class='flex flex-row text-xs m-1'> 
                <div class='mx-3'> {sec} </div>
                <div class='mx-3'> {aula} </div>
            </div> 
            <div class='inline text-xs m-1 font-semibold' > {NomProfesor} </div>
            <div class='text-xs m-1 flex flex-row'> 
                <div class='mx-1'>{lun}</div>
                <div class='mx-1'>{mar}</div>
                <div class='mx-1'>{mier}</div>
                <div class='mx-1'>{jue}</div>
                <div class='mx-1'>{vie}</div>
                <div class='mx-1'>{sab}</div>
            </div>
            <div class='inline text-xs m-1'> 
                <div class=''> 
                    <Link href="/admin" onClick={() => console.log("hola")}> 
                        <CreateIcon className='w-4 h-4' style={{ marginRight: '1.5rem' }}/> 
                    </Link>
                    <Link href="/admin" onClick={() => console.log("hola")}> 
                        <DeleteIcon className='w-4 h-4'/> 
                    </Link>
                </div> 
            </div>
        </div>
    );
}

export default SeccionItemList;