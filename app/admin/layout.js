import NavBarAdm from '../components/NavBarAdm';
import { cookies } from 'next/headers'

const Layout = ({ children }) => {
  const cookieStore = cookies();
  const currentUserId = cookieStore.get("userId").value;
  console.log("Current User Id:", currentUserId);
  return (
    <>
      <NavBarAdm id={currentUserId}/>
      <main>{children}</main>
      {/* Additional layout elements */}
    </>
  );
};

export default Layout;
