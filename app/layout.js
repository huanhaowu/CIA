import './globals.css'

export const metadata = {
  title: 'StudyMate',
  description: 'StudyMate',
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
