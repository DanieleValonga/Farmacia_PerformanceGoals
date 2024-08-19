import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import logo from '../../assets/img/logo.jpg'; // Atualize para o caminho correto

import './Navbar.css'; // Importa o CSS

function Navbar() {
  const navigate = useNavigate();
  const { handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert('Usuário deslogado com sucesso');
    navigate('/login');
  }

  return (
    <div className='navbar'>
      <div className='navbar-container'>
        <div className='navbar-title-container'>
          <img src={logo} alt="Logo" className='navbar-logo' />
          <Link to='/home' className='navbar-title'>DaniFarma</Link>
        </div>

        <div className='navbar-menu'>
          <Link to='/postagens' className='navbar-item'>Produtos</Link>
          <Link to='/temas' className='navbar-item'>Categorias</Link>
          <Link to='/cadastroTema' className='navbar-item'>Cadastrar Produto</Link>
          <Link to='/perfil' className='navbar-item'>Contato</Link>
          <Link to='' onClick={logout} className='navbar-item'>Sair</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;