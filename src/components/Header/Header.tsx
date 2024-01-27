import header from './Header.module.css'
import Filters from '../Filters/Filter'

const Header = () => {
  return (
    <div className={header.header}>
    <Filters />
    </div>
  )
}

export default Header
