'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';

function AsignaturasDocente() { 
    return (

        // los textos de los div hay que modificarlos por atributos de un objeto asignatura
        // Filas de la interfaz asignaturas del PROFESOR

        <div class='absolute bottom-10 left-3 w-3/4 bg-gray-100 rounded-lg flex justify-between px-9 py-1 text-center'>
            <div class='flex flex-row text-xs m-1'> 
                <div class='mr-8'> IDS325 </div>
                <div class='mx-2'> 01 </div>
            </div> 
            <div class='inline text-xs m-1'> Aseguramiento de la Calidad del Software </div>
            <div class='text-xs m-1 flex flex-row'> 4 </div>
            <div class='inline text-xs m-1'> 
                <div class=''> 
                    <Link href="/test2" onClick={() => console.log("hola")}> 
                        <FormatListBulletedOutlinedIcon  className='w-4 h-4' style={{ marginRight: '2rem' }}/> 
                    </Link>
                    <Link href="/test2" onClick={() => console.log("hola")}> 
                        <AssignmentTurnedInOutlinedIcon className='w-4 h-4'/> 
                    </Link>
                </div> 
            </div>
        </div>
    );
}

export default AsignaturasDocente;