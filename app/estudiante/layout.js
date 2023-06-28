import NavBarEst from '../components/NavBarEst';

const Layout = ({ children }) => {
 
  return (
    <>
      <NavBarEst />
      <main>{children}</main>
      {/* Additional layout elements */}
    </>
  );
};

export default Layout;
