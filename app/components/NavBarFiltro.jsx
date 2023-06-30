'use client'
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

function NavBarFiltro() {
  const [navbar, setNavbar] = useState(false);
  const inactiveStyle = "bg-gray-600";
  const activeStyle = "active bg-blue-600 ";
  const currentRoute = usePathname();
  
  return (
    <div>
      <nav className="w-full bg-gray-600 flex top-40 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-1 md:py-1 md:block">
              <div className="flex items-center">
                
                  <ul className="h-screen md:h-auto items-center justify-start md:flex"> {/* Updated alignment to 'justify-start' */}
                    <li className={currentRoute === '/admin/usuarios/admin' ? activeStyle : inactiveStyle}>
                      <Link  href="/admin/usuarios/admin" onClick={() => setNavbar(!navbar)}>
                        <span>Administrador</span>
                        <div className="absolute left-0 bottom-0 w-0 h-1 transition-all bg-blue-600 group-hover:w-full"></div>
                      </Link>
                    </li>
                    <li className={currentRoute === '/admin/usuarios' ? activeStyle : inactiveStyle}>
                      <Link  href="/admin/usuarios" onClick={() => setNavbar(!navbar)}>
                        <span>Profesor</span>
                        <div className="absolute left-0 bottom-0 w-0 h-1 transition-all bg-blue-600 group-hover:w-full"></div>
                      </Link>
                    </li>
                    <li className={currentRoute === '/admin/asignaturas' ? activeStyle : inactiveStyle}>
                      <Link  href="/admin/asignaturas" onClick={() => setNavbar(!navbar)}>
                      <span>Estudiante</span>
                        <div className="absolute left-0 bottom-0 w-0 h-1 transition-all bg-blue-600 group-hover:w-full"></div>
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

export default NavBarFiltro;
