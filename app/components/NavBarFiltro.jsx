'use client'
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

function NavBarFiltro() {
  const [navbar, setNavbar] = useState(false);
  const inactiveStyle = "bg-gray-200";
  const activeStyle = "active bg-blue-600 text-white ";
  const currentRoute = usePathname();
  
  return (
    <div className="navbarfiltro">
      <nav className="navbarfiltro w-full bg-gray-200 flex top-40 left-0 right-0 z-10">
        <div className="justify-between items-center px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-1 md:py-1 md:block">
              <div className="flex items-center">
                <div className="h-screen md:h-auto items-center justify-start md:flex">
                  <Link className={currentRoute === '/admin/administrar/admin' ? activeStyle : inactiveStyle} href="/admin/administrar/admin" onClick={() => setNavbar(!navbar)}>
                    <span className="mr-4">Administrador</span>
                    <div className="absolute left-0 bottom-0 w-0 h-1 transition-all bg-blue-600 group-hover:w-full"></div>
                  </Link>
                </div>
                <div className="h-screen md:h-auto items-center justify-start md:flex">
                  <Link className={currentRoute === "/admin/administrar/profesor" ? activeStyle : inactiveStyle} href="/admin/administrar/profesor" onClick={() => setNavbar(!navbar)}>
                    <span className="mr-4">Profesor</span>
                    <div className="absolute left-0 bottom-0 w-0 h-1 transition-all bg-blue-600 group-hover:w-full"></div>
                  </Link>
                </div>
                <div className="h-screen md:h-auto items-center justify-start md:flex">
                  <Link className={currentRoute === "/admin/administrar/estudiante"  ? activeStyle : inactiveStyle} href="/admin/administrar/estudiante" onClick={() => setNavbar(!navbar)}>
                    <span className="mr-4">Estudiante</span>
                    <div className="absolute left-0 bottom-0 w-0 h-1 transition-all bg-blue-600 group-hover:w-full"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* Rest of the code... */}
        </div>
      </nav>
    </div>
  );
}

export default NavBarFiltro;
