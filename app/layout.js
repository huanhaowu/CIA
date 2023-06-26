import './globals.css'

export const metadata = {
  title: 'CIA',
  description: 'Calculadora de Indice Academico',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='flex justify-center items-center h-screen w-screen bg-black'>
        <div className='bg-blue-600 absolute rounded-full h-56 w-72 blur-2xl opacity-60 animate-pulse'>
        </div>
        {children}
      </body>
    </html>
  )
}
