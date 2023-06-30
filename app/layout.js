import './globals.css'

export const metadata = {
  title: 'CIA',
  description: 'Calculadora de Indice Academico',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='flex justify-center items-center h-full w-screen'>
        {children}
      </body>
    </html>
  )
}
