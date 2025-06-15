import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kulikarta - Makanan Enak & Berkualitas',
  description: 'Nikmati pengalaman kuliner terbaik dengan hidangan lezat dari bahan-bahan pilihan terbaik',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
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