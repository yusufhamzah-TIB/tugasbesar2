import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-image-container">
        <Image
          src="/foto/Munik Restoran.jpg"
          alt="Restoran Kulikarta"
          fill
          priority
          quality={100}
          className="hero-image"
          style={{
            objectFit: 'cover',
            objectPosition: 'center'
          }}
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="hero-content">
        <h1>Selamat Datang di Kulikarta</h1>
        <p>Nikmati pengalaman kuliner terbaik dengan hidangan lezat</p>
        <Link href="/menu" className="btn">Lihat Menu</Link>
      </div>
    </section>
  )
}