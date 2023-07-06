'use client'
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import LogOutButton from './LogOutButton';

function NavBarProf({id}) {
  console.log(id);
  const [navbar, setNavbar] = useState(false);
  const inactiveStyle = "group relative pb-6 text-xl text-white py-3 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-900 border-purple-900   md:hover:bg-transparent";
  const activeStyle = "active pb-6 text-xl text-white py-3 md:px-6 text-center border-b-10";
  const currentRoute = usePathname();
  const username = id.toString();
  return (
    <div>
      <nav className="w-full bg-gray-600 fixed top-0 left-0 right-0 z-30">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-1 md:py-1 md:block">
              <div className="flex items-center">
                
                <ul className="h-screen md:h-auto items-center justify-center md:flex">
                  <li className={currentRoute === '/profesor' ? activeStyle : inactiveStyle}>
                    <Link  href="/profesor" onClick={() => setNavbar(!navbar)}>
                      <span>Inicio</span>
                      <div className="absolute left-0 bottom-0 w-0 h-1 transition-all bg-[#4B63FD] group-hover:w-full"></div>
                    </Link>
                  </li>
                  <li className={currentRoute === '/profesor/asignaturas' ? activeStyle : inactiveStyle}>
                    <Link  href="/profesor/asignaturas" onClick={() => setNavbar(!navbar)}>
                      <span>Asignaturas</span>
                      <div className="absolute left-0 bottom-0 w-0 h-1 transition-all bg-[#4B63FD] group-hover:w-full"></div>
                    </Link>
                  </li>
                  <li className={currentRoute === '/profesor/publicarCalificaciones' ? activeStyle : inactiveStyle}>
                    <Link  href="/profesor/publicarCalificaciones" onClick={() => setNavbar(!navbar)}>
                    <span>Publicar calificaciones</span>
                      <div className="absolute left-0 bottom-0 w-0 h-1 transition-all bg-[#4B63FD] group-hover:w-full"></div>
                    </Link>
                  </li>
                </ul>
                <div className="ml-auto" > {/* Pushes LogOutButton to the right */}
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    <LogOutButton username={username} />
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

export default NavBarProf;
