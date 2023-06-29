'use client'
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

function NavBarFiltro() { 
    return (
        <div className='flex bg-transparent rounded-3xl'>
            <div className='navbarfiltro-Active py-2 px-8 rounded-l-3xl text-base'>Administrador</div>
            <div className='navbarfiltro-Inactive py-2 px-8 text-base'>Profesor</div>
            <div className='navbarfiltro-Inactive py-2 px-8 rounded-r-3xl text-base'>Estudiante</div>
        </div> 
    );
}

export default NavBarFiltro;