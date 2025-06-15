import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'

export default function LayananPage() {
  return (
    <>
      <Header />
      <section className="section">
        <div className="section-title">
          <h2>Layanan</h2>
          <p>Berbagai pilihan layanan untuk memenuhi kebutuhan kuliner Anda</p>
        </div>
        
        <div className="service-container">
          <div className="service-item">
            <h3>Makan di Tempat</h3>
            <p>Nikmati suasana restoran kami yang nyaman dengan pelayanan terbaik dari staf kami.</p>
          </div>
          
          <div className="service-item">
            <h3>Pesan Antar</h3>
            <p>Pesanan Anda akan diantar dengan cepat dan tetap hangat sampai di tempat Anda.</p>
          </div>
          
          <div className="service-item">
            <h3>Catering</h3>
            <p>Layanan catering untuk acara keluarga, kantor, atau acara spesial lainnya.</p>
          </div>
          
          <div className="service-item">
            <h3>Reservasi</h3>
            <p>Reservasi meja untuk acara khusus atau rombongan besar.</p>
          </div>
        </div>
      </section>
    </>
  )
}
