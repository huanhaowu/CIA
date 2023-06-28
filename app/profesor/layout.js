import NavBarProf from '../components/NavBarProf';

const Layout = ({ children }) => {
 
  return (
    <>
      <NavBarProf />
      <main>{children}</main>
      {/* Additional layout elements */}
    </>
  );
};

export default Layout;
