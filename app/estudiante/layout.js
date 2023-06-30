import NavBarEst from '../components/NavBarEst';
import BlueDivisionBar from "@/app/components/BlueDivisionBar"
import PeriodosDropDown from "@/app/components/PeriodosDropDown"
import YearDropDown from "@/app/components/YearDropDown"

const Layout = ({ children}) => {
  const titulo = "Volantes"
  return (
    <>
      <NavBarEst/>
      <main>{children}</main>
      <div className="flex flex-row  items-left h-screen w-screen"> {/*Pantalla completa */}
        <div className="flex flex-row relative left-10 top-24 items-left  p-8 h-10  lg:w-96 md:w-64"> {/*Contenedor de titulo*/}
          <h1 className="titulosty">{titulo}</h1>
        </div>
        
        <div className="flex relative bg-gray-100 top-40 items-left right-1/4 h-20 lg:w-96 md:w-64 rounded-lg"> {/*Contenedor de info seccion*/}
        </div>

        <BlueDivisionBar/>
        <div className="flex relative top-40 items-bottom right-1/6 h-10 lg:w-96 md:w-64 rounded-lg">
        <PeriodosDropDown/>
        </div>
        <div className="flex relative top-40 items-bottom right-1/2 h-10 lg:w-96 md:w-64 rounded-lg">
        <YearDropDown/>
        </div>
      </div>
    </>
  );
};

export default Layout;

