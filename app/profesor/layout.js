import NavBarProf from '../components/NavBarProf';
import { cookies } from 'next/headers'

const Layout = ({ children }) => {
  const cookieStore = cookies();
  const currentUserId = cookieStore.get("userId").value;
  console.log("Current User Id:", currentUserId);
  return (
    <>
      <NavBarProf id={currentUserId}/>
      <main>{children}</main>
      {/* Additional layout elements */}
    </>
  );
};

export default Layout;
