import Nav from './components/Nav'
import './globals.css'


export const metadata = {
  title: 'Open Source Chef',
  description: 'We Love Food',
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
