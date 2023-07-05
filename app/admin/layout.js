import NavBarAdm from '../components/NavBarAdm';
import { getCookie } from "cookies-next";

const Layout = ({ children }) => {
  const currentUserId = getCookie("userId");
  return (
    <>
      <NavBarAdm id={currentUserId}/>
      <main>{children}</main>
      {/* Additional layout elements */}
    </>
  );
};

export default Layout;
