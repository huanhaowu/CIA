'use client'
import NavBarFiltro from '@/app/components/NavBarFiltro';

const Layout = ({ children }) => {
 
  return (
    <>
      <NavBarFiltro />
      <main>{children}</main>
      {/* Additional layout elements */}
    </>
  );
};

export default Layout;
