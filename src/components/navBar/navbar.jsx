import React, { useState } from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ onNavClick }) => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [userRole, setUserRole] = useState('Superuser'); // Estado para el rol del usuario

  const toggleSubMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const handleRoleChange = (e) => {
    setUserRole(e.target.value);
  };

  return (
    <header className="navbar-container">
      <div className='elementTop'>
        <div className="title-container">
          <h1>Sistema de Gestión Universitaria</h1>
        </div>
        <div className="social-icons">
          <FontAwesomeIcon icon={faUser} style={{ height: 30 }} color="rgb(0, 174, 240)" />
          <h4>
            Rafael Oliveros<br />
            <div className="custom-select">
          <select name="select" onChange={handleRoleChange} value={userRole}>
            <option value="Superuser">Superuser</option>
            <option value="Estudiante">Estudiante</option>
          </select>
        </div>

          </h4>
        </div>
      </div>

      {userRole !== 'Estudiante' ? (
        <nav className="navbar">
        
        <ul className='listaD'>
          {/* Menú Instituto */}
          <li>
            <a href="#" onClick={() => toggleSubMenu('Instituto')}>Instituto</a>
            <ul className={`sub-menu ${activeMenu === 'Instituto' ? 'show' : ''}`}>
              <li><a style={{ fontSize: "medium" }} href="#">Registrar sedes</a></li>
              <li><a onClick={()=> onNavClick('Registrar carreras')} style={{ fontSize: "medium" }} href="#">Registrar carreras</a>
              <ul className="nested-sub-menu">
            <li><a onClick={()=>onNavClick('Pensum')} href="#">Pensum</a></li>
              </ul>
              </li>

              <li>
              <a onClick={()=>onNavClick('Registro Áreas')} style={{ fontSize: "medium" }} href="#">Registrar Áreas
              </a>
              </li>

              <li><a style={{ fontSize: "medium" }} href="#">Asignar sede-carrera</a></li>
              <li><a style={{ fontSize: "medium" }} href="#">Registrar autoridades</a>
              <ul className="nested-sub-menu">
            <li><a onClick={()=> onNavClick('Registro Tipo de Autoridad')} style={{ fontSize: "medium" }} href="#">Tipo de autoridad</a></li>
              </ul>
              </li>
               <li><a onClick={()=>onNavClick('Registro Instituto')} style={{ fontSize: "medium" }}>Registro Instituto</a></li>
            </ul>
          </li>

          {/* Menú Usuarios */}
          <li className='LImenuPrincipal'>
            <a href="#" onClick={() => toggleSubMenu('Usuarios')}>Usuarios</a>
            <ul className={`sub-menu ${activeMenu === 'Usuarios' ? 'show' : ''}`}>
              <li><a onClick={()=>onNavClick('Registrar usuario')} style={{ fontSize: "medium" }} href="#">Registrar usuario</a></li>
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

              <li><a onClick={()=> onNavClick('Periodo Academico')} style={{ fontSize: "medium" }} href="#">Periodo Academico</a></li>
            </ul>
          </li>
        </ul>
      </nav>
      ) : (
        <nav className="navbar">
       
        <ul className='listaD'>
          {/* Menú Instituto */}
          <li>
            <a href="#" onClick={() => toggleSubMenu('Instituto')}>Perfil</a>
            <ul className={`sub-menu ${activeMenu === 'Instituto' ? 'show' : ''}`}>
              <li><a style={{ fontSize: "medium" }} href="#">Carrera activa: ingenieria informatica</a></li>
            </ul>
          </li>

          {/* Menú Usuarios */}
          <li className='LImenuPrincipal'>
            <a href="#" onClick={() => toggleSubMenu('Usuarios')}>Procesos</a>
            <ul className={`sub-menu ${activeMenu === 'Usuarios' ? 'show' : ''}`}>
              <li><a style={{ fontSize: "medium" }} href="#">Inscripcion</a></li>

            </ul>
          </li>

          {/* Menú Procesos */}
          <li className='LImenuPrincipal'>
            <a href="#" onClick={() => toggleSubMenu('Procesos')}>Reportes</a>
            <ul className={`sub-menu ${activeMenu === 'Procesos' ? 'show' : ''}`}>
            <li><a style={{ fontSize: "medium" }} href="#">Descargar pensum</a></li>
            <li><a style={{ fontSize: "medium" }} href="#">Planilla de incripcion</a></li>
            <li><a style={{ fontSize: "medium" }} href="#">Constancia de Estudios</a></li>
            <li><a style={{ fontSize: "medium" }} href="#">Constancia de Buena Conducta</a></li>
            <li><a style={{ fontSize: "medium" }} href="#">Record Académico</a></li>
            </ul>
          </li>
        </ul>
      </nav>
      )}
    </header>
  );
};

export default Navbar;
