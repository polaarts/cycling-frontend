import { useState } from 'react'

const usePagination = (initialPage = 1, initialLimit = 20) => {
  const [page, setPage] = useState(initialPage)
  const [limit, setLimit] = useState(initialLimit)
  const totalPages = Math.ceil(100 / limit)

  const handlePageChange = (page: number) => {
    setPage(page)
  }

  const handleLimitChange = (limit: number) => {
    setLimit(limit)
  }

  return {
    page,
    limit,
    setPage: handlePageChange,
    setLimit: handleLimitChange,
    totalPages
  }
}

export default usePagination
