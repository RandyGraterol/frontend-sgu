import React, { useState } from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Navbar = ({ onNavClick }) => {
  const [activeMenu, setActiveMenu] = useState(null); // Estado para controlar qué submenú está activo

  const toggleSubMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu); // Alterna entre mostrar/ocultar el submenú
  };

  return (
    <header className="navbar-container">

      <div className="Divlogin">
       <FontAwesomeIcon icon={faSignInAlt} className='loginIcon' title='Iniciar Sesión' color='blue' size='2x' />
      </div>

      <div className='divMain'>

      <div className="navbar-logo">
          <img src="/icon/logo.png" alt="Logo" className="logo" />
      </div>
         
        <h1 className="tituloNav">Sistema de gestión Universitario</h1>  

         <nav className="navbar">
        <ul>
          {/* Menú Instituto */}
          <li>
            <a href="#" onClick={() => toggleSubMenu('Instituto')}>Instituto</a>
            <ul className={`sub-menu ${activeMenu === 'Instituto' ? 'show' : ''}`}>
              <li><a style={{ fontSize: "medium" }} href="#">Registrar sedes</a></li>
              <li><a style={{ fontSize: "medium" }} href="#">Registrar carreras</a></li>
              <li><a style={{ fontSize: "medium" }} href="#">Registrar Áreas</a></li>
              <li><a style={{ fontSize: "medium" }} href="#">Asignar sede-carrera</a></li>
              <li><a style={{ fontSize: "medium" }} href="#">Registrar autoridades</a></li>
            </ul>
          </li>

          {/* Menú Usuarios */}
          <li>
            <a href="#" onClick={() => toggleSubMenu('Usuarios')}>Usuarios</a>

            <ul className={`sub-menu ${activeMenu === 'Usuarios' ? 'show' : ''}`}>

              <li>
              <a onClick={()=> onNavClick('Registrar usuario')} style={{ fontSize: "medium" }} href="#">Registrar usuario</a>
              </li>

              <li><a style={{ fontSize: "medium" }} href="#">Grupos de usuarios</a></li>

              <li>
              <a onClick={()=> onNavClick('Administración de usuarios')} style={{ fontSize: "medium" }} href="#">Administración de usuarios</a>
              </li>
              
              <li><a style={{ fontSize: "medium" }} href="#">Control de acceso</a></li>
            </ul>

          </li>

          {/* Menú Procesos */}
          <li>
            <a href="#" onClick={() => toggleSubMenu('Procesos')}>Procesos</a>
            <ul className={`sub-menu ${activeMenu === 'Procesos' ? 'show' : ''}`}>
              <li><a style={{ fontSize: "medium" }} href="#">Registrar procesos</a></li>
              <li><a style={{ fontSize: "medium" }} href="#">Administrar procesos</a></li>
            </ul>
          </li>
        </ul>
      </nav>
      </div>

      
    </header>
  );
};

export default Navbar;
