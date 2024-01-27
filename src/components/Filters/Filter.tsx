'use client'

import React, { useState } from 'react'
import styles from './Filter.module.css'
import StoresList from '../StoresList/StoreList'
import Pagination from '../Pagination/Pagination'
import Search from '../Search/Search'

const Filters = () => {
  const [showStores, setShowStores] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const stores = [
    {
      name: '5norte',
      url: 'https://www.amazon.com',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Amazon_logo_plain.svg/1024px-Amazon_logo_plain.svg.png'
    },
    {
      name: 'Crossmountain',
      url: 'https://www.falabella.com',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Amazon_logo_plain.svg/1024px-Amazon_logo_plain.svg.png'
    },
    {
      name: 'Decathlon',
      url: 'https://www.paris.cl',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Amazon_logo_plain.svg/1024px-Amazon_logo_plain.svg.png'
    }
  ]

  const displayStores = () => {
    setShowStores(!showStores)
  }

  const displaySearch = () => {
    setShowSearch(!showSearch)
  }

  const storeIcon =
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
    </svg>

  const searchIcon =
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

  return (
    <div className={styles.menu}>
        <div className={styles.toolbar}>
        <div>
                <button onClick={displaySearch} className={styles.button}>{searchIcon}</button>
                <button onClick={displayStores} className={styles.button}>{storeIcon}</button>
            </div>
            <Pagination />
        </div>

        {showSearch && <Search />}
        {showStores && <StoresList stores={stores} />}
    </div>
  )
}

export default Filters
