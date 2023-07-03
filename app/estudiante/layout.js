import NavBarEst from '../components/NavBarEst';



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

