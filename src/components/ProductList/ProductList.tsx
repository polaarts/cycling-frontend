import React from 'react'
import Product from '../Product/Product'
import styles from './ProductList.module.css'

const ProductList = async ({ products }: { products: Products }) => {
  return (
    <div className={styles.products}>
    {products.map((product: Product) => (
        <Product {...product} key={product.id} />
    ))}
    </div>
  )
}

export default ProductList
