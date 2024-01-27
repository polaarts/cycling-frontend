import useProducts from './useProduct'
const usePagination = () => {
  const { paginationData } = useProducts()

  return {
    paginationData
  }
}

export default usePagination
