'use client'
import Link from "next/link"
import BlueDivisionBar from '@/app/components/BlueDivisionBar';
import NavBarFiltro from '@/app/components/NavBarFiltro';
import SearchBar from "@/app/components/SearchBar"
import AnadirButton from "@/app/components/AnadirButton"

const Layout = ({}) => {
 
  return (
    <>
      <NavBarFiltro />
      <BlueDivisionBar/>
      <main className="flex items-center justify-center h-screen">
      <div className="flex flex-col absolute left top-20">
        <h1 className="titulo"></h1>
        <SearchBar/>
      </div>

      <div className="anadirbuttonstyle">
        <Link href="./registrar">  <AnadirButton/></Link>
      </div>

    </main>
    </>
  );
};

export default Layout;