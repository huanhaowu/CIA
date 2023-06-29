'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation';
import BlueDivisionBar from '@/app/components/BlueDivisionBar';
import NavBarFiltro from '@/app/components/NavBarFiltro';
import SearchBar from "@/app/components/SearchBar"
import AddButton from "@/app/components/AddButton"
import AnadirButton from "@/app/components/AnadirButton";

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
    rutaRegistrar="/admin/registrar/usuarios"
  } else if (asignaturasActive){
    titulo = "Administrar asignaturas"
    rutaRegistrar = "/admin/registrar/asignatura"
  } else if (seccionesActive){
    titulo = "Administrar secciones"
    rutaRegistrar = "/admin/registrar/seccion"
  } else if (aulasActive){
    titulo = "Administrar aulas"
    rutaRegistrar = "/admin/registrar/aula"
  };
  
  return (
    <>
      
      {usuariosActive ? <NavBarFiltro /> : null}
      {usuariosActive ? <div ><Link className="addbutton" href={rutaRegistrar}>  <AddButton/></Link> </div> : 
        <div className="anadirbuttonstyle">
        <Link href={rutaRegistrar}>  <AnadirButton /></Link>
      </div>}
      
      <BlueDivisionBar/>
      <main className="flex items-left  h-screen">
      <div className="flex flex-col absolute left top-20">
        <h1 className="titulo">{titulo}</h1>
        <SearchBar/>
      </div>

      

    </main>
    </>
  );
};

export default Layout;