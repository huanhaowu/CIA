'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';

function SeccionItemList() { 
    return (

        // los textos de los div hay que modificarlos por atributos de un objeto asignatura

        <div class='absolute bottom-40 left-3 w-3/4 bg-gray-100 rounded-lg flex justify-between px-9 py-1 text-center'>
            <div class='flex flex-row text-xs m-1'> 
                <div class='mx-3'> 01 </div>
                <div class='mx-3'> A100 </div>
            </div> 
            <div class='inline text-xs m-1 font-semibold' > Francia Odalis Mejía </div>
            <div class='text-xs m-1 flex flex-row'> 
                <div class='mx-1'>00/00</div>
                <div class='mx-1'>00/00</div>
                <div class='mx-1'>00/00</div>
                <div class='mx-1'>00/00</div>
                <div class='mx-1'>00/00</div>
                <div class='mx-1'>00/00</div>
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