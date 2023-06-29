import BackButton from "@/app/components/BackButton"
import { usePathname } from 'next/navigation';
const Layout = ({ children }) => {
    const currentRoute = usePathname();
    const usuariosActive = currentRoute.includes('/admin/registrar/admin') 
  || currentRoute.includes('/admin/registrar/estudiante') 
  || currentRoute.includes('/admin/registrar/profesor');
  const asignaturasActive = currentRoute.includes('/admin/registrar/asignaturas');
  const seccionesActive = currentRoute.includes('/admin/registrar/secciones');
  const aulasActive = currentRoute.includes('/admin/registrar/aulas');

  var ruta = "";
  if (usuariosActive) {
    ruta = "/admin/administrar/usuarios"
  } else if (asignaturasActive){
    ruta = "/admin/administrar/asignatura"
  } else if (seccionesActive){
    ruta = "/admin/administrar/seccion"
  } else if (aulasActive){
    ruta = "/admin/administrar/aula"
  };
 
  return (
    <>
        <Link href={ruta}>
        <BackButton/>
        </Link>
      <main>{children}</main>
      {/* Additional layout elements */}
    </>
  );
};

export default Layout;