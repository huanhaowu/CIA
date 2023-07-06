import NavBarEst from '../components/NavBarEst';
import { cookies } from 'next/headers'


const Layout = ({ children }) => {
  const cookieStore = cookies();
  const currentUserId = cookieStore.get("userId").value;
  console.log("Current User Id:", currentUserId);

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

