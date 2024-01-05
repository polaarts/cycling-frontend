'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import './Menu.css'

const Menu = () => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')
  const handleSearch = () => {
    router.push('/hola')
  }

  const handleInputChange = (event: any) => { setSearchTerm(event.target.value) }
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') handleSearch()
  }

  return (
<div className="menu">
<label className="search-label">
        <input type="search" placeholder="Busca un producto"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}/>
        <button onClick={handleSearch}>
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884
             10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11
              6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
               fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
          </svg>
        </button>

      </label>
</div>
  )
}
export default Menu
