import React from 'react'
import Product from '../Product/Product'
import './ProductList.css'

const ProductList = async ({ products }: { products: Products }) => {
  return (
    <div className='products'>
    {products.map((product: Product) => (
        <Product {...product} key={product.id} />
    ))}
    </div>
  )
}

export default ProductList
