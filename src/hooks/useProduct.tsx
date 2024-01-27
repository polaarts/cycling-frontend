import { useEffect, useState } from 'react'

const useProducts = () => {
  const [paginationData, setPaginationData] = useState({
    totalPages: 1,
    currentPage: 1
  })
  const [products, setProducts] = useState([])

  const { currentPage } = paginationData

  const handlePrevPage = () => {
    setPaginationData((prevData) => ({
      ...prevData,
      currentPage: Math.max(prevData.currentPage - 1, 1)
    }))
  }

  const handleNextPage = () => {
    setPaginationData((prevData) => ({
      ...prevData,
      currentPage: Math.min(prevData.currentPage + 1, prevData.totalPages)
    }))
  }

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3001/products?page=${currentPage}&quantity=20`)
      const data = await res.json()

      setProducts(data.products)
      setPaginationData({
        totalPages: data.totalPages,
        currentPage: data.page
      })
    }

    fetchData()
  }, [currentPage])

  console.log('hook', products)
  return {
    products,
    paginationData,
    handlePrevPage,
    handleNextPage
  }
}

export default useProducts
