import Nav from './components/Nav'
import './globals.css'


export const metadata = {
  title: 'ML Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className=''>
      
      <Nav />
      {children}
      </body>
    </html>
  )
}
