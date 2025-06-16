import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="logo"><Kulikarta></Kulikarta></div>
        <nav>
          <ul>
            <li><Link href="/">Beranda</Link></li>
            <li><Link href="/menu">Menu</Link></li>
            <li><Link href="/layanan">Layanan</Link></li>
            <li><Link href="/kontak">Kontak</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}