import NavBarEst from '../components/NavBarEst';
import BlueDivisionBar from "@/app/components/BlueDivisionBar"
import PeriodosDropDown from "@/app/components/PeriodosDropDown"
import YearDropDown from "@/app/components/YearDropDown"

const Layout = ({ children }) => {
  
  
  return (
    <>
      <NavBarEst />
      <main className="mt-20 flex flex-col items-left h-screen w-screen">
        {children}
      </main>
      
    </>
  );
};

export default Layout;

