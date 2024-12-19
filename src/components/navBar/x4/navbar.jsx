import React, { useState } from 'react';
import './navbar.css';
//iconos awesome font
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync,faUser,faUserTimes,faArrowCircleRight,faUserCheck,faUserSecret,faUserShield,faUserCog,faUserTie,faUserGraduate,faClipboardList,faBook,faEllipsisH,faUserLock,faSignInAlt} from '@fortawesome/free-solid-svg-icons';


const Navbar = ({onNavClick}) => {
  const [activeMenu, setActiveMenu] = useState(null); // Estado para controlar qué submenú está activo

  const toggleSubMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu); // Alterna entre mostrar/ocultar el submenú
  };

  return (
    <header className="navbar-container">

     <div className='elementTop'> 

      <div className="title-container">
        <h1>Sistema de Gestión Universitaria</h1>
      </div>
      

      <div className="social-icons">
         <FontAwesomeIcon icon={faUser} size="2x" color="rgb(0, 174, 240)" />
        <h4>Mark Zuckerberg</h4>
      </div>

      </div>
      {/* <div className="social-icons">
        <a id='firstfoto' href="#"><img className='socialIcon' src="fb.png" alt="Facebook" /></a>
        <a  href="#"><img className='socialIcon' src="X_icon.svg.png" alt="Twitter" /></a>
        <a  href="#"><img className='socialIcon' src="ig.png" alt="Instagram" /></a>
      </div> */}
      <nav className="navbar">
        <div className="navbar-logo">
          <img src="/icon/logo.png" alt="Logo" className="logo" />
        </div>
        <ul className='listaD'>
          {/* Menú Instituto */}
          <li className='LImenuPrincipal'>
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
          <li className='LImenuPrincipal'>
            <a href="#" onClick={() => toggleSubMenu('Usuarios')}>Usuarios</a>
            <ul className={`sub-menu ${activeMenu === 'Usuarios' ? 'show' : ''}`}>
              <li><a style={{ fontSize: "medium" }} href="#">Registrar usuario</a></li>
              <li><a onClick={()=>onNavClick('Grupos de usuarios')} style={{ fontSize: "medium" }} href="#">Grupos de usuarios</a></li>

              <li>
              <a onClick={()=> onNavClick('Administración de usuarios')} style={{ fontSize: "medium" }} href='#'>Administración de usuarios</a>
              </li>
              
              <li><a style={{ fontSize: "medium" }} href="#">Control de acceso</a></li>
            </ul>
          </li>

          {/* Menú Procesos */}
          <li className='LImenuPrincipal'>
            <a href="#" onClick={() => toggleSubMenu('Procesos')}>Procesos</a>
            <ul className={`sub-menu ${activeMenu === 'Procesos' ? 'show' : ''}`}>
              <li><a style={{ fontSize: "medium" }} href="#">Registrar procesos</a></li>
              <li><a style={{ fontSize: "medium" }} href="#">Administrar procesos</a></li>

              <li><a onClick={()=> onNavClick('Registro Periodo')} style={{ fontSize: "medium" }} href="#">Registro Periodo</a></li>
              <li><a onClick={()=> onNavClick('Registro Tipo de Autoridad')} style={{ fontSize: "medium" }} href="#">Tipo de autoridad</a></li>

            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
