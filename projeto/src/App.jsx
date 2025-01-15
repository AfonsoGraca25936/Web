import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from 'react-router-dom'; 
import PaginaInicial from './Paginas/PáginaInicial/PaginaInicial';
import Carrinho from './Paginas/Carrinho/Carrinho';
import Compras from './Paginas/Compras/Compras';
const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
       
        <Route path="/" element={<PaginaInicial />} /> {/* Definir a rota para a página inicial */}
        <Route path="/acessorios" element={<Carrinho />} />
        <Route path="/chuteiras" element={<Compras />} />  
      </Routes>
    </div>
  );
}

export default App;
