'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import KeyboardArrowDownOutlined from '@mui/icons-material/KeyboardArrowDownOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

function MateriaTituloHeader() { 
    return (

        // los textos de los div hay que modificarlos por atributos de un objeto asignatura
        // Filas de la interfaz aulas

        <div class='absolute bottom-140 left-3 w-3/4 bg-blue-500 rounded-lg flex justify-between px-9 py-1 text-center'>
            <div class='text-white inline text-xs m-1'> IDS325 </div> 
            <div class='text-white inline text-xs m-1' > Aseguramiento de la Calidad del Software </div>
            <div class='text-white inline text-xs m-1'> 4 </div>
            <div class='text-white inline text-xs m-1'> 
                <AddCircleOutlineOutlinedIcon className='w-5 h-5' style={{ marginRight: '1.5rem' }}/>
                <KeyboardArrowDownOutlined className='w-5 h-5'/>
            </div>
        </div>
    );
}

export default MateriaTituloHeader;