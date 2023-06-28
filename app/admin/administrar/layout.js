'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation';
import BlueDivisionBar from '@/app/components/BlueDivisionBar';
import NavBarFiltro from '@/app/components/NavBarFiltro';
import SearchBar from "@/app/components/SearchBar"
import AnadirButton from "@/app/components/AnadirButton"

const Layout = ({}) => {
  const currentRoute = usePathname();
  const usuariosActive = currentRoute.includes('/admin/administrar/admin') 
  || currentRoute.includes('/admin/administrar/estudiante') 
  || currentRoute.includes('/admin/administrar/profesor');
  const asignaturasActive = currentRoute.includes('/admin/administrar/asignaturas');
  const seccionesActive = currentRoute.includes('/admin/administrar/secciones');
  const aulasActive = currentRoute.includes('/admin/administrar/aulas');
  var titulo = "";
  if (usuariosActive) {
    titulo = "Administrar usuarios"
  } else if (asignaturasActive){
    titulo = "Administrar asignaturas"
  } else if (seccionesActive){
    titulo = "Administrar secciones"
  } else if (aulasActive){
    titulo = "Administrar aulas"
  };
  
  return (
    <>
      <NavBarFiltro/>
      <BlueDivisionBar/>
      <main className="flex items-left  h-screen">
      <div className="flex flex-col absolute left top-20">
        <h1 className="titulo">{titulo}</h1>
        <SearchBar/>
      </div>

      <div className="anadirbuttonstyle">
        <Link href="./registrar">  <AnadirButton/></Link>
      </div>

    </main>
    </>
  );
};

export default Layout;