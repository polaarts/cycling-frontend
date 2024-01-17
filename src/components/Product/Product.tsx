import Link from 'next/link'
import style from './Product.module.css'

const Product = (product: Product) => {
  const { name, id_tienda: store, price, image, url } = product
  return (

    <Link href={url} target="_blank" rel="noopener noreferrer" className={style.card}>
      <div >
        <img
          src={image}
          alt="Bold typography"
          style={{

          }}
          className={style.image}
        />
      </div>
        <div>
          <h3 className={style.name}>
            {name}
          </h3>
        </div>

        <h4 className={style.store}>
              {store}
          </h4>
        <div className={style.price}>
            {price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP' })}
        </div>
    </Link>
  )
}

export default Product
