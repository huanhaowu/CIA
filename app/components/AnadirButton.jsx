'use client'
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import AddIcon from '@mui/icons-material/Add';

function AnadirButton() { 
    return (
        <button class="shadow-lg bg-blue-500 hover:bg-blue-700 text-base text-white py-3 px-5 rounded-3xl m-2" >
            Añadir
            <AddIcon style={{ marginLeft: '0.5rem' }}/>
        </button>
    );
}

export default AnadirButton;