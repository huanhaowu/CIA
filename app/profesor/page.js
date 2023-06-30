import Link from "next/link"

export default function Home() {
  return (
    <main className=" text-3xl">
      <button className="w-screen h-screen flex justify-center items-center">
        <Link href="/">Home profesor</Link>
      </button>
    </main>
  )
}