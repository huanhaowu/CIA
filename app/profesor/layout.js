import NavBarProf from '../components/NavBarProf';
import { cookies } from 'next/headers'

const Layout = ({ children }) => {
  const cookieStore = cookies();
  const currentUserId = cookieStore.get("userId").value;
  return (
    <>
      <NavBarProf id={currentUserId}/>
      <main>{children}</main>
      {/* Additional layout elements */}
    </>
  );
};

export default Layout;
