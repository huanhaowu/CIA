'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';

const AsignaturaItemList = ({AsignaturaClave, NombreAsig, Cred}) => { 
    return (

        // los textos de los div hay que modificarlos por atributos de un objeto asignatura
        // Filas de la interfaz asignaturas
        
        <div class='absolute bottom-60 left-3 w-3/4 bg-gray-100 rounded-lg flex justify-between px-9 py-1 text-center'>
            <div class='inline text-xs m-1'> {AsignaturaClave} </div> 
            <div class='inline text-xs m-1 font-semibold' > {NombreAsig} </div>
            <div class='inline text-xs m-1'> {Cred} </div>
            <div class='inline text-xs m-1'> 20 / 06 / 2013 </div>
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

export default AsignaturaItemList;