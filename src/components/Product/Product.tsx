import Link from 'next/link'
import './Product.css'

const Product = (product: Product) => {
  const { name, id_tienda: store, price, image, url } = product
  return (

    <Link href={url} target="_blank" rel="noopener noreferrer" className='link card'>
      <div >
        <img
          src={image}
          alt="Bold typography"
          style={{

          }}
          className='image'
        />
      </div>
        <div>
          <h3 className='name'>
            {name}
          </h3>
        </div>

        <h4 className='store'>
              {store}
          </h4>
        <div className='price'>
            {price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}
        </div>
    </Link>
  )
}

export default Product
