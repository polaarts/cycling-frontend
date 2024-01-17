import styles from './Pagination.module.css'

const Pagination = () => {
  return (
        <div className={styles.pagination}>
        <button
            className={styles.button}

        >
            Previous
        </button>
        <span className={styles.page}>1</span>
        <button className={styles.button}>
            Next
        </button>
        </div>
  )
}

export default Pagination
