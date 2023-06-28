'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

function NavBarAdm() {
  const [navbar, setNavbar] = useState(false);

  return (
    <div>
      <nav className="w-full bg-gray-600 fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-1 md:py-1 md:block">
              <div className="flex items-center">
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-xl text-white py-3 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Inicio
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-3  md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#about" onClick={() => setNavbar(!navbar)}>
                    Usuarios
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-3  px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                    Asignaturas
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-3  px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                    Secciones
                  </Link>
                </li>
                <li className="pb-6 text-xl text-white py-3  px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                  <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                    Aulas
                  </Link>
                </li>
              </ul>
                
              </div>
            </div>
          </div>
          {/* Rest of the code... */}
        </div>
      </nav>
    </div>
  );
}

export default NavBarAdm;

