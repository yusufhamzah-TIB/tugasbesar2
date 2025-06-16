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
          <div className="contact-card">
            <div className="contact-icon">
              <Image 
                src="/map-marker.png" 
                width={40} 
                height={40} 
                alt="Map marker"
              />
            </div>
            <h3>Lokasi Kami</h3>
            <div className="contact-detail">
              <p>Jl. Kuliner No. 123, Jakarta</p>
              <p className="description">Restoran kami terletak di pusat kota Jakarta, mudah dijangkau dari mana saja.</p>
            </div>
          </div>
          
          <div className="contact-card">
            <div className="contact-icon">
              <Image 
                src="/clock.png" 
                width={40} 
                height={40} 
                alt="Opening hours"
              />
            </div>
            <h3>Jam Buka</h3>
            <div className="contact-detail">
              <p><strong>Senin - Jumat:</strong> 10:00 - 22:00</p>
              <p><strong>Sabtu - Minggu:</strong> 09:00 - 23:00</p>
            </div>
          </div>
          
          <div className="contact-card">
            <div className="contact-icon">
              <Image 
                src="/phone-email.png" 
                width={40} 
                height={40} 
                alt="Contacts"
              />
            </div>
            <h3>Kontak</h3>
            <div className="contact-detail">
              <p className="contact-method">
                <Image 
                  src="/phone.png" 
                  width={20} 
                  height={20} 
                  alt="Phone"
                  className="method-icon"
                />
                (021) 1234-5678
              </p>
              <p className="contact-method">
                <Image 
                  src="/email.png" 
                  width={20} 
                  height={20} 
                  alt="Email"
                  className="method-icon"
                />
                info@kulikarta.com
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
