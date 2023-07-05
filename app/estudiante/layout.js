import NavBarEst from '../components/NavBarEst';
import { getCookie } from "cookies-next";


const Layout = ({ children }) => {
  const currentUserId = getCookie("userId");

  return (
    <>
      <NavBarEst  id={currentUserId} />
      <main className="mt-20 flex flex-col items-left h-screen w-screen">
        {children}
      </main>

    </>
  );
};

export default Layout;

