import NavBarAdm from '../components/NavBarAdm';
import NavBarFiltro from '../components/NavBarFiltro';

const Layout = ({ children }) => {
 
  return (
    <>
      <NavBarAdm />
      <NavBarFiltro/>
      <main>{children}</main>
      {/* Additional layout elements */}
    </>
  );
};

export default Layout;
