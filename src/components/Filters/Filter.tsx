import React from 'react'
import styles from './Filter.module.css'
import StoresList from '../StoresList/StoreList'
import Pagination from '../Pagination/Pagination'

const Filters = async () => {
  const stores = [
    {
      id: 1,
      name: 'Amazon',
      url: 'https://www.amazon.com',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Amazon_logo_plain.svg/1024px-Amazon_logo_plain.svg.png'
    },
    {
      id: 2,
      name: 'Falabella',
      url: 'https://www.falabella.com',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Amazon_logo_plain.svg/1024px-Amazon_logo_plain.svg.png'
    },
    {
      id: 3,
      name: 'Paris',
      url: 'https://www.paris.cl',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Amazon_logo_plain.svg/1024px-Amazon_logo_plain.svg.png'
    },
    {
      id: 4,
      name: 'Amazon',
      url: 'https://www.amazon.com',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Amazon_logo_plain.svg/1024px-Amazon_logo_plain.svg.png'
    },
    {
      id: 5,
      name: 'Falabella',
      url: 'https://www.falabella.com',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Amazon_logo_plain.svg/1024px-Amazon_logo_plain.svg.png'
    },
    {
      id: 6,
      name: 'Paris',
      url: 'https://www.paris.cl',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Amazon_logo_plain.svg/1024px-Amazon_logo_plain.svg.png'
    },
    {
      id: 7,
      name: 'Amazon',
      url: 'https://www.amazon.com',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Amazon_logo_plain.svg/1024px-Amazon_logo_plain.svg.png'
    },
    {
      id: 8,
      name: 'Falabella',
      url: 'https://www.falabella.com',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Amazon_logo_plain.svg/1024px-Amazon_logo_plain.svg.png'
    },
    {
      id: 9,
      name: 'Paris',
      url: 'https://www.paris.cl',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Amazon_logo_plain.svg/1024px-Amazon_logo_plain.svg.png'
    },
    {
      id: 10,
      name: 'Amazon',
      url: 'https://www.amazon.com',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Amazon_logo_plain.svg/1024px-Amazon_logo_plain.svg.png'
    },
    {
      id: 11,
      name: 'Falabella',
      url: 'https://www.falabella.com',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Amazon_logo_plain.svg/1024px-Amazon_logo_plain.svg.png'
    },
    {
      id: 12,
      name: 'Paris',
      url: 'https://www.paris.cl',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Amazon_logo_plain.svg/1024px-Amazon_logo_plain.svg.png'
    },
    {
      id: 13,
      name: 'Amazon',
      url: 'https://www.amazon.com',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Amazon_logo_plain.svg/1024px-Amazon_logo_plain.svg.png'
    },
    {
      id: 14,
      name: 'Falabella',
      url: 'https://www.falabella.com',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Amazon_logo_plain.svg/1024px-Amazon_logo_plain.svg.png'
    },
    {
      id: 15,
      name: 'Paris',
      url: 'https://www.paris.cl',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Amazon_logo_plain.svg/1024px-Amazon_logo_plain.svg.png'
    }
  ]

  const tools = [
    {
      id: 1,
      icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
    </svg>,
      text: 'Ver tiendas'
    }
  ]

  return (
    <div className={styles.menu}>
        <div className={styles.toolbar}>
            <div>
            {tools.map((store) => (
                <button className={styles.button} key={store.id}>{store.icon}</button>
            ))}
            </div>
            <div><Pagination /></div>
        </div>
        <StoresList stores={stores}/>
    </div>
  )
}

export default Filters
