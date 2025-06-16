import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-col">
          <h3>Tentang KuliKarta</h3>
          <p>Restoran dengan konsep tradisional dan santai yang menyajikan hidangan lezat dari bahan-bahan pilihan terbaik.</p>
          <div className="social-links">
            <a href="#"><Image src="/tugasbesar2/facebook.png" alt="Facebook" width={40} height={40} className="social-icon" /></a>
            <a href="#"><Image src="/tugasbesar2/instagram.png" alt="Instagram" width={40} height={40} className="social-icon" /></a>
            <a href="#"><Image src="/tugasbesar2/twitter.png" alt="Twitter" width={40} height={40} className="social-icon" /></a>
          </div>
        </div>
        
        <div className="footer-col">
          <h3>Jam Buka</h3>
          <p>Senin - Jumat: 10:00 - 22:00</p>
          <p>Sabtu - Minggu: 09:00 - 23:00</p>
        </div>
        
        <div className="footer-col">
          <h3>Kontak Kami</h3>
          <p><Image src="/tugasbesar2/map marker.png" width={20} height={20} className="icon" alt="Map marker" /> Jl. Kuliner No. 123, Jakarta</p>
          <p><Image src="/tugasbesar2/phone.png" width={20} height={20} className="icon" alt="Phone" /> (021) 1234-5678</p>
          <p><Image src="/tugasbesar2/email.png" width={20} height={20} className="icon" alt="Email" /> info@kulikarta.com</p>
        </div>
      </div>
      
      <div className="copyright">
        <p>&copy; 2025 KuliKarta. All Rights Reserved.</p>
      </div>
    </footer>
  )
}