import Link from "next/link"

export default function Home() {
  return (
    <main className="text-white z-0 text-3xl">
      <button>
        <Link href="/">Home</Link>
      </button>
    </main>
  )
}