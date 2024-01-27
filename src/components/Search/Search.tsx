'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import style from './Search.module.css'

const Search = () => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')
  const handleSearch = () => {
    router.push('/search?')
  }

  const handleInputChange = (event: any) => { setSearchTerm(event.target.value) }
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') handleSearch()
  }

  return (
<div className={style.menu}>
<label className={style.search_label}>
        <input type="search" className={style.searchbar} placeholder="Escribe y presiona enter para buscar"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}/>

      </label>
</div>
  )
}
export default Search
