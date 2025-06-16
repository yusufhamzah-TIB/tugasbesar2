import Image from 'next/image'

export default function MenuItem({ item }) {
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
