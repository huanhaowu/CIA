import NavBarProf from '../components/NavBarProf';
import { getCookie } from "cookies-next";

const Layout = ({ children }) => {
  const currentUserId = getCookie("userId");
  return (
    <>
      <NavBarProf id={currentUserId}/>
      <main>{children}</main>
      {/* Additional layout elements */}
    </>
  );
};

export default Layout;
