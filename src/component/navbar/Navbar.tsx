
import { Link } from 'react-router-dom'

export function Navbar() {
  return (
    <nav>
        <Link to="/">home</Link>
        <ul>
            <li><Link to="pricing">pricing</Link></li>
            <li><Link to="about">about</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar