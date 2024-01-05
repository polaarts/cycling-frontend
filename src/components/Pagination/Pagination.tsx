import usePagination from '@/hooks/usePagination'

const Pagination = () => {
  const { page, setPage, totalPages } = usePagination()

  const handlePageChange = (page: number) => {
    setPage(page)
  }

  return (
        <div className="pagination">
        <button
            className="pagination__button"
            onClick={() => { handlePageChange(page - 1) }}
            disabled={page === 1}
        >
            Previous
        </button>
        <span className="pagination__page">{page}</span>
        <button
            className="pagination__button"
            onClick={() => { handlePageChange(page + 1) }}
            disabled={page === totalPages}
        >
            Next
        </button>
        </div>
  )
}
