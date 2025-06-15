import Image from 'next/image'

interface MenuItemProps {
  item: {
    id: number
    name: string
    description: string
    price: string
    image: string
  }
}

export default function MenuItem({ item }: MenuItemProps) {
  return (
    <div className="menu-item">
      <div className="menu-img">
        <Image 
          src={item.image} 
          alt={item.name}
          width={300}
          height={200}
          className="menu-image"
        />
      </div>
      <div className="menu-content">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <div className="price">{item.price}</div>
      </div>
    </div>
  )
}