'use client'
import ProductList from '../ProductList/ProductList'
import Footer from '../Footer/Footer'
import main from './Main.module.css'
import Header from '../Header/Header'
import useProducts from '@/hooks/useProduct'

const Main = () => {
  const { products, paginationData, handlePrevPage, handleNextPage } = useProducts()

  return (
    <main>

      <div className={main.container}>
        <Header />
        <div className={main.pagination}>
        <button
            className={main.button} onClick={handlePrevPage}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>

        </button>
        <span className={main.page}>{paginationData.currentPage} de {paginationData.totalPages}</span>
        <button className={main.button} onClick={handleNextPage}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>

        </button>
        </div>
        <div>
          <ProductList products={products} />
        </div>
        <div className={main.pagination}>
        <button
            className={main.button} onClick={handlePrevPage}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>

        </button>
        <span className={main.page}>{paginationData.currentPage} de {paginationData.totalPages}</span>
        <button className={main.button} onClick={handleNextPage}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>

        </button>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default Main
