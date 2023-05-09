import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="navbar">
    <div className="web-logo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        className="website-logo"
        alt="website logo"
      />
    </div>
    <ul className="nav-list">
      <li className="nav-list-item">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </li>
      <li className="nav-list-item">
        <Link to="/products" className="nav-link">
          Products
        </Link>
      </li>
      <li className="nav-list-item">
        <Link to="/cart" className="nav-link">
          Cart
        </Link>
      </li>
      <li className="nav-list-item active-link">
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
