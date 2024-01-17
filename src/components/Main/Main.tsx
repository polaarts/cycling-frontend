import ProductList from '../ProductList/ProductList'
import Footer from '../Footer/Footer'
import { getProducts } from '@/services/products'
import main from './Main.module.css'
import Header from '../Header/Header'

const Main = async () => {
  const result = await getProducts(1, 20)

  const products = result.products
  return (
    <main>
      <div className={main.container}>
          <Header/>
        <div className='grid'>
          <ProductList products={products}/>
        </div>
      </div>
      <Footer/>
    </main>
  )
}

export default Main
