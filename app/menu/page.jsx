import Header from '../components/Header'
import Footer from '../components/Footer'
import MenuItem from '../components/MenuItem'

const menuItems = [
  {
    id: 1,
    name: "Batagor",
    description: "Alamak, ada batagor! Mana tahannnnnnnnnn",
    price: "Rp 15.000",
    image: "/tugasbesar2/batagor.jpg"
  },
  {
    id: 2,
    name: "Mie Ayam",
    description: "Uwoooooooooooooooooooooh Mie Ayaaaaaaaaaaam",
    price: "Rp 13.000",
    image: "/tugasbesar2/Miayam.JPG"
  },
  {
    id: 3,
    name: "Bakso",
    description: "Baksooooo, mengunggah selera banget Cihuyyyy",
    price: "Rp 16.000",
    image: "/tugasbesar2/Bakso.jpg"
  },
  {
    id: 4,
    name: "Seblak",
    description: "Omaigaddd, Byutiful, Emeyzing, ini yang mama cari selama ini",
    price: "Rp 15.000",
    image: "/tugasbesar2/Seblak.jpg"
  },
  {
    id: 5,
    name: "Nasi Goreng",
    description: "Nasgor gorengnya kelihatan enak banget yah",
    price: "Rp 13.000",
    image: "/tugasbesar2/Nasgor.jpg"
  },
  {
    id: 6,
    name: "Minuman Segar",
    description: "Berbagai pilihan minuman, termasuk Es Teh cuyyy",
    price: "Rp 5.000 +",
    image: "/tugasbesar2/teh.jpg"
  }
]

export default function MenuPage() {
  return (
    <>
      <Header />
      <section className="section">
        <div className="section-title">
          <h2>Menu Spesial Kami</h2>
          <p>Pilihan hidangan terbaik yang disiapkan oleh chef profesional kami</p>
        </div>
        
        <div className="menu-grid">
          {menuItems.map(item => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </section>
    </>
  )
}