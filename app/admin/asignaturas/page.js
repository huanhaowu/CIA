import Link from "next/link";
import SearchBar from "@/app/components/SearchBar.jsx";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <div className="flex flex-col absolute left top-20">
        <h1 className="titulo">Asignaturas</h1>
        <SearchBar />
      </div>
    </main>
  );
}
