import React, {useState} from 'react';

import './Navbar.css'


const Navbar = () => {
    const [menu,setMenu] = useState("Página Inicial");
  return (
    <div className='navbar'>
       <img src="\src\assets\bola_champions.png" alt="Champions League Ball" className='logo' />

        <ul className="navbar-menu">
            <li onClick={()=>setMenu("Página Inicial")} className={menu==="Página Inicial"?"active":""} >Página Inicial</li>
            <li onClick={()=>setMenu("Acessórios")} className={menu==="Acessórios"?"active":""}>Acessórios</li>
            <li onClick={()=>setMenu("Chuteiras")} className={menu==="Chuteiras"?"active":""}>Chuteiras</li>
            <li onClick={()=>setMenu("Camisolas")} className={menu==="Camisolas"?"active":""}>Camisolas</li>
        </ul>
        <div className="navbar-right">
            <img src="\src\assets\1490793870-user-interface25_82355.webp" alt="Pesquisa" className='lupa' />
            <div className="navbar-search-icon"></div>
            <img src="\src\assets\126510-removebg-preview.png" alt="Pesquisa" />
            <div className="dot"></div>    
        </div>
        <button>Sign in</button>
    </div>
  )
}

export default Navbar
