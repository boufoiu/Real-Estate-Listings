import React from 'react'
import "./styles/Navbar.css"

export default function Navbar() {
  return (
      <nav>
        <div className='logo-img'></div>
        <ul>
          <li> <a href = "#">Location</a></li>
          <li> <a href = "#">Vente</a></li>
          <li> <a href = "#">Echange</a></li>
          <li> <a href = "#">A propos</a></li>
        </ul>
        <div>
          <a className = 'sign-up' href = "#">Sign up</a>
          <button className='connect-button'>Connexion</button>
        </div>
      </nav>
  )
}
