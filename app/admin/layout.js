import NavBarAdm from '../components/NavBarAdm';

const Layout = ({ children }) => {
  return (
    <>
      <NavBarAdm />
      <main>{children}</main>
      {/* Additional layout elements */}
    </>
  );
};

export default Layout;
