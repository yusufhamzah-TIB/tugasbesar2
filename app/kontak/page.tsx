import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'

export default function KontakPage() {
  return (
    <>
      <Header />
      <section className="section">
        <div className="section-title">
          <h2>Hubungi Kami</h2>
          <p>Kami siap melayani Anda kapan saja</p>
        </div>
        
        <div className="contact-container">
          <div className="contact-info">
            <h3>Lokasi Kami</h3>
            <p>
              <Image 
                src="/foto/map marker.png" 
                width={20} 
                height={20} 
                alt="Map marker"
                className="icon"
              />
              Jl. Kuliner No. 123, Jakarta
            </p>
            <p>Restoran kami terletak di pusat kota Jakarta, mudah dijangkau dari mana saja.</p>
          </div>
          
          <div className="contact-info">
            <h3>Jam Buka</h3>
            <p>Senin - Jumat: 10:00 - 22:00</p>
            <p>Sabtu - Minggu: 09:00 - 23:00</p>
          </div>
          
          <div className="contact-info">
            <h3>Kontak</h3>
            <p>
              <Image 
                src="/foto/phone.png" 
                width={20} 
                height={20} 
                alt="Phone"
                className="icon"
              />
              (021) 1234-5678
            </p>
            <p>
              <Image 
                src="/foto/email.png" 
                width={20} 
                height={20} 
                alt="Email"
                className="icon"
              />
              info@kulikarta.com
            </p>
          </div>
        </div>
      </section>
    </>
  )
}