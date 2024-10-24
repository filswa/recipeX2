//import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="py-8">
      <ul className="flex justify-between">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/recipes">Recipes</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <div>  
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/settings">Settings</Link>
          </li>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar