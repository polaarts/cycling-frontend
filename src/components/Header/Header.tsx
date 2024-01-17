import header from './Header.module.css'
import Search from '../Search/Search'
import Filters from '../Filters/Filter'

const Header = () => {
  return (
    <div className={header.header}>
    <Search />
    <Filters />
    </div>
  )
}

export default Header
