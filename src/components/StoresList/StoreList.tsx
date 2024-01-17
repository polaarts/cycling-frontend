import styles from './StoreList.module.css'

const StoresList = async ({ stores }: { stores: Stores }) => {
  return (
    <div className={styles.stores}>
    {stores.map((store: Store) => (
        <span className={styles.store} key={store.id}>{store.name}</span>
    ))}
    </div>
  )
}

export default StoresList
