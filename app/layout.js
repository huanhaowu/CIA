import './globals.css'

export const metadata = {
  title: 'Study Mate',
  description: 'Study Mate',
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
