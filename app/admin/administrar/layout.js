'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation';
import BlueDivisionBar from '@/app/components/BlueDivisionBar';
import NavBarFiltro from '@/app/components/NavBarFiltro';
import SearchBar from "@/app/components/SearchBar"
import AddButton from "@/app/components/AddButton"

const Layout = ({}) => {
  const currentRoute = usePathname();
  const usuariosActive = currentRoute.includes('/admin/administrar/admin') 
  || currentRoute.includes('/admin/administrar/estudiante') 
  || currentRoute.includes('/admin/administrar/profesor');
  const asignaturasActive = currentRoute.includes('/admin/administrar/asignaturas');
  const seccionesActive = currentRoute.includes('/admin/administrar/secciones');
  const aulasActive = currentRoute.includes('/admin/administrar/aulas');
  var titulo = "", rutaRegistrar = "";
  if (usuariosActive) {
    titulo = "Administrar usuarios"
    if (currentRoute.includes('/admin/administrar/admin')) {
      rutaRegistrar = "/admin/registrar/admin"
    } else if (currentRoute.includes('/admin/administrar/estudiante')){
      rutaRegistrar = "/admin/registrar/estudiante"
    } else if (currentRoute.includes('/admin/administrar/profesor')){
      rutaRegistrar = "/admin/registrar/profesor"
    }
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

      <div >
        <Link className="addbutton" href={rutaRegistrar}>  <AddButton/></Link>
      </div>

    </main>
    </>
  );
};

export default Layout;