'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

function NavBarFiltro() {
const [selectedPage, setSelectedPage] = useState('');

const handlePageChange = (page) => {
  setSelectedPage(page);
};

const getInactiveClassName = (page) => {
  return selectedPage === page ? 'navbarfiltro-Active' : 'navbarfiltro-Inactive';
};

return (
    <div className='flex bg-transparent rounded-3xl'>
        <Link href='/test' className={`navbarfiltro-Active py-2 px-8 rounded-l-3xl text-base ${getInactiveClassName('admin')}`} onClick={() => handlePageChange('admin')}> Administrador </Link>

        <Link href='/test' className={`navbarfiltro-Inactive py-2 px-8 text-base ${getInactiveClassName('professor')}`} onClick={() => handlePageChange('professor')}> Profesor </Link>
        
        <Link href='/test' className={`navbarfiltro-Inactive py-2 px-8 rounded-r-3xl text-base ${getInactiveClassName('student')}`} onClick={() => handlePageChange('student')}>Estudiante</Link>
    </div>
);
}

export default NavBarFiltro;