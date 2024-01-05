import ProductList from '../ProductList/ProductList'
import Menu from '../Menu/Menu'
import Footer from '../Footer/Footer'
import { getProducts } from '@/services/products'
import './Main.css'

const Main = async () => {
  const result = await getProducts(1, 20)
  const products = result.products
  return (
    <main>
      <div className='container'>
        <div className='grid'>
          <Menu/>
          <ProductList products={products}/>
        </div>
      </div>
      <Footer/>
    </main>
  )
}

export default Main
