import NavBarEst from '../components/NavBarEst';
import BlueDivisionBar from "@/app/components/BlueDivisionBar"

const Layout = ({ children }) => {
  return (
    <>
      <NavBarEst/>
      <main>{children}</main>
      <div className="flex flex-row  items-left h-screen w-screen"> {/*Pantalla completa */}
        <div className="flex flex-row relative left-10 top-24 items-left  p-8 h-10  lg:w-96 md:w-64"> {/*Contenedor de titulo*/}
          <h1 className="titulosty">Titulo</h1>
        </div>
        
        <div className="flex relative bg-gray-100 top-40 items-left h-20 lg:w-96 md:w-64 rounded-lg"> {/*Contenedor de info seccion*/}
        </div>
        <BlueDivisionBar/>

        <div className="">

        </div>
      </div>
    </>
  );
};

export default Layout;
