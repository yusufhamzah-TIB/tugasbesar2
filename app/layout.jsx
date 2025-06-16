import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Metadata } from 'next'

export default function RootLayout({ children })
{
  return (
    <html lang="id">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}