import NavBarEst from '../components/NavBarEst';
import BlueDivisionBar from "@/app/components/BlueDivisionBar"

const Layout = ({ children }) => {
  return (
    <>
      <NavBarEst/>
      <main>{children}</main>
      <div className="flex flex-row bg-gray-500 items-left h-screen w-screen"> {/*Pantalla completa */}
        <div className="flex flex-row relative bg-gray-400 left-10 top-24 items-left p-10 h-10  lg:w-96 md:w-64"> {/*Contenedor de titulo*/}
          <h1 className="titulosty">Titulo</h1>
        </div>
        
        <div className="flex flex-row relative bg-gray-300 left-10 top-48 items-left p-10 h-40  lg:w-96 md:w-64 rounded-lg"> {/*Contenedor de info seccion*/}
        </div>
        <BlueDivisionBar/>
      </div>
    </>
  );
};

export default Layout;
