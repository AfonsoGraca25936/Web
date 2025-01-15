import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
    <div className='navbar'>
       <img src="\src\assets\bola_champions.png" alt="Champions League Ball" />

        <ul className="navbar-menu">
            <li>Página Inicial</li>
            <li>Acessórios</li>
            <li>Chuteiras</li>
            <li>Camisolas</li>
        </ul>
        <div className="navbar-right">
            <img src="\src\assets\1490793870-user-interface25_82355.webp" alt="Pesquisa" />
            <div className="navbar-search-icon"></div>
            <img src="\src\assets\126510-removebg-preview.png" alt="Pesquisa" />
            <div className="dot"></div>    
        </div>
        <button>Sign in</button>
    </div>
  )
}

export default Navbar
