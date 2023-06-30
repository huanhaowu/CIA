'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation';
import BlueDivisionBar from '@/app/components/BlueDivisionBar';
import NavBarFiltro from '@/app/components/NavBarFiltro';
import SearchBar from "@/app/components/SearchBar"
import AddButton from "@/app/components/AddButton"
import AnadirButton from "@/app/components/AnadirButton";

const Layout = ({children}) => {
  const currentRoute = usePathname();
  const usuariosActive = currentRoute.includes('/admin/administrar/usuarios');
  const asignaturasActive = currentRoute.includes('/admin/administrar/asignaturas');
  const seccionesActive = currentRoute.includes('/admin/administrar/secciones');
  const aulasActive = currentRoute.includes('/admin/administrar/aulas');
  var titulo = "", rutaRegistrar = "";
  if (usuariosActive) {
    titulo = "Administrar usuarios"
    rutaRegistrar="/admin/registrar/usuarios"
  } else if (asignaturasActive){
    titulo = "Administrar asignaturas"
    rutaRegistrar = "/admin/registrar/asignaturas"
  } else if (seccionesActive){
    titulo = "Administrar secciones"
    rutaRegistrar = "/admin/registrar/secciones"
  } else if (aulasActive){
    titulo = "Administrar aulas"
    rutaRegistrar = "/admin/registrar/aulas"
  };
  
  return (
    <>
      
      {usuariosActive ? <NavBarFiltro /> : null}
      
      <main className="mt-20 flex flex-col items-left h-screen w-screen">
        <div className="mx-20">
          <div id="ParteArriba" className=" w-full h-20 mb-8 flex flex-col justify-between ">
            <h1 className="text-5xl font-bold mb-6" style={{}}>{titulo}</h1>
            <div className=" flex justify-between mb-2 ">
              <SearchBar/>
              {usuariosActive ? <div className="flex items-center justify-center mr-10"><Link href={rutaRegistrar}>  <AddButton prop={`inline`}/></Link> </div> : 
              <div> <Link href={rutaRegistrar}><AnadirButton /></Link> </div>}
            </div>
          </div>
          <div className={`mt-14 bg-blue-600 h-2 transform flex justify-center items-center rounded-xl`} ></div>
          <div id="ParteTablas" className=" w-full h-2/3 flex justify-center items-center pt-20">
            {children}
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;