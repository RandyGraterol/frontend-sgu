import React, { useState, useEffect, useRef } from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faChevronDown, faBars, faTimes, faBell } from '@fortawesome/free-solid-svg-icons';

const Navbar = ({ onNavClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [openMenus, setOpenMenus] = useState({});
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [userRole, setUserRole] = useState('Superuser'); // Por defecto "Superuser"

  const navBarRef = useRef(null);
  const profileButtonRef = useRef(null);

  const handleMenuItemClick = (menu) => {
    setOpenMenus((prevState) => {
      const newState = {};
      Object.keys(prevState).forEach((key) => {
        newState[key] = false; // Cierra todos los menús
      });
      newState[menu] = !prevState[menu]; // Alterna el estado del menú clicado
      return newState;
    });
  };

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDocumentClick = (e) => {
    if (
      navBarRef.current &&
      !navBarRef.current.contains(e.target) &&
      e.target.className !== 'fa-bars'
    ) {
      setIsMenuOpen(false);
      setOpenMenus({}); // Cierra todos los submenús

    }
    if (
      profileButtonRef.current &&
      !profileButtonRef.current.contains(e.target)
    ) {
      setIsProfileMenuOpen(false);
    }
  };

  const toggleSubMenu = (menu) => {
    setActiveSubMenu(activeSubMenu === menu ? null : menu);
  };

  const toggleProfileMenu = (e) => {
    e.stopPropagation();
    setIsProfileMenuOpen(!isProfileMenuOpen);
  };

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  const handleRoleChange = (e) => {
    setUserRole(e.target.value);
    setIsMenuOpen(false); // Cierra el menú al cambiar de rol
  };



  return (
    <header id='cabecera'>
      <div className='app'>
        <nav>
          <FontAwesomeIcon
            icon={isMenuOpen ? faTimes : faBars}
            className="fa-bars"
            id="ham-menu"
            onClick={toggleMenu}
          />

          <a href="#home" id="logo">
            <img className="image" src="/icon/logo.png" alt="Logo" />
          </a>

          <ul id="nav-bar" className={isMenuOpen ? 'active' : ''} ref={navBarRef}>
            {userRole === 'Superuser' && (
              <>
                <li className={openMenus['Instituto'] ? 'active' : ''}>
                  <a
                    href="#instituto"
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuItemClick('Instituto');
                    }}
                  >
                    Instituto <span className="arrow">▶</span>
                  </a>
                  {openMenus['Instituto'] && (
                    <ul
                    ref={(el) => {
                      if (el) {
                        el.style.height = openMenus['Instituto'] ? `${el.scrollHeight}px` : '0';
                      }
                    }}
                    className="submenu"
                    style={{
                      overflow: 'hidden',
                      transition: 'height 0.4s ease-in-out',
                    }}
                  >
                      <li><a onClick={() => onNavClick('Registro Instituto')} href="#registro-instituto">Registro instituto</a></li>
                      <li><a onClick={() => onNavClick('Registrar carreras')} href="#registrar-carreras">Registrar carreras</a></li>
                      <li><a onClick={() => onNavClick('Pensum')} href="#pensum">Pensum</a></li>
                      <li><a onClick={() => onNavClick('Registrar áreas')} href="#registrar-areas">Registrar áreas</a></li>
                      <li><a onClick={() => onNavClick('Asignar sede-carrera')} href="#asignar-sede-carrera">Asignar sede-carrera</a></li>
                      <li><a onClick={() => onNavClick('Registrar autoridades')} href="#registrar-autoridades">Registrar autoridades</a></li>
                      <li><a onClick={() => onNavClick('Registro Tipo de Autoridad')} href="#tipo-autoridad">Tipo de autoridad</a></li>
                    </ul>
                  )}
                </li>
                <li className={openMenus['Usuarios'] ? 'active' : ''}>
                  <a
                    href="#usuarios"
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuItemClick('Usuarios');
                    }}
                  >
                    Usuarios <span className="arrow">▶</span>
                  </a>
                  {openMenus['Usuarios'] && (
                    <ul
                    ref={(el) => {
                      if (el) {
                        el.style.height = openMenus['Usuarios'] ? `${el.scrollHeight}px` : '0';
                      }
                    }}
                    className="submenu"
                    style={{
                      overflow: 'hidden',
                      transition: 'height 0.4s ease-in-out',
                    }}
                  >
                      <li><a onClick={() => onNavClick('Registrar Usuario')} href="#registrar-usuario">Registrar usuario</a></li>
                      <li><a onClick={() => onNavClick('Grupos de usuarios')} href="#grupos-usuarios">Grupos de usuarios</a></li>
                      <li><a onClick={() => onNavClick('Administración de usuarios')} href="#administracion-usuarios">Administración de usuarios</a></li>
                      <li><a onClick={() => onNavClick('Control de Acceso')} href="#control-acceso">Control de acceso</a></li>
                    </ul>
                  )}
                </li>
                <li className={openMenus['Procesos'] ? 'active' : ''}>
                  <a
                    href="#procesos"
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuItemClick('Procesos');
                    }}
                  >
                    Procesos <span className="arrow">▶</span>
                  </a>
                  {openMenus['Procesos'] && (
                    <ul
                    ref={(el) => {
                      if (el) {
                        el.style.height = openMenus['Procesos'] ? `${el.scrollHeight}px` : '0';
                      }
                    }}
                    className="submenu"
                    style={{
                      overflow: 'hidden',
                      transition: 'height 0.4s ease-in-out',
                    }}
                  >
                      <li><a onClick={() => onNavClick('Registrar Procesos')} href="#registrar-procesos">Registrar procesos</a></li>
                      <li><a onClick={() => onNavClick('Administrar procesos')} href="#administrar-procesos">Administrar procesos</a></li>
                      <li><a onClick={() => onNavClick('Periodo Academico')} href="#registro-periodo">Registro periodo</a></li>
                    </ul>
                  )}
                </li>
                <li className={openMenus['CodigoBarra'] ? 'active' : ''}>
                  <a
                    href="#codigo-barras"
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuItemClick('CodigoBarra');
                    }}
                  >
                    Escanear codigo de barras <span className="arrow">▶</span>
                  </a>
                  {openMenus['CodigoBarra'] && (
                    <ul
                    ref={(el) => {
                      if (el) {
                        el.style.height = openMenus['CodigoBarra'] ? `${el.scrollHeight}px` : '0';
                      }
                    }}
                    className="submenu"
                    style={{
                      overflow: 'hidden',
                      transition: 'height 0.4s ease-in-out',
                    }}
                  >
                <li>
                  <input className="CB" placeholder="Ingrese código de barras" />
                  <button className="CBB" type="submit">Confirmar</button>
                </li>
              </ul>
            )}
          </li>
              </>
            )}

            {userRole === 'Estudiante' && (
              <>
                {/* Menú Estudiante */}
                <li className={openMenus['Perfil'] ? 'active' : ''}>
                  <a
                    href="#perfil"
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuItemClick('Perfil');
                    }}
                  >
                    Perfil <span className="arrow">▶</span>
                  </a>
                  {openMenus['Perfil'] && (
                  <ul
                    ref={(el) => {
                      if (el) {
                        el.style.height = openMenus['Perfil'] ? `${el.scrollHeight}px` : '0';
                      }
                    }}
                    className="submenu"
                    style={{
                      overflow: 'hidden',
                      transition: 'height 0.4s ease-in-out',
                    }}
                  >
                    <li><a href="#">Carrera activa: Ingeniería Informática</a></li>
                  </ul>
                )}
                </li>
                <li className={openMenus['Procesos'] ? 'active' : ''}>
                  <a
                    href="#procesos"
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuItemClick('Procesos');
                    }}
                  >
                    Procesos <span className="arrow">▶</span>
                  </a>
                  {openMenus['Procesos'] && (
                  <ul    
                    ref={(el) => {
                      if (el) {
                        el.style.height = openMenus['Procesos'] ? `${el.scrollHeight}px` : '0';
                      }
                    }}
                    className="submenu"
                    style={{
                      overflow: 'hidden',
                      transition: 'height 0.4s ease-in-out',
                    }}
                  >
                    <li><a href="#">Inscripción</a></li>
                  </ul>
                )}
                </li>
                <li className={openMenus['Reportes'] ? 'active' : ''}>
                  <a
                    href="#reportes"
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuItemClick('Reportes');
                    }}
                  >
                    Reportes <span className="arrow">▶</span>
                  </a>
                  {openMenus['Reportes'] && (
                  <ul
                    ref={(el) => {
                      if (el) {
                        el.style.height = openMenus['Reportes'] ? `${el.scrollHeight}px` : '0';
                      }
                    }}
                    className="submenu"
                    style={{
                      overflow: 'hidden',
                      transition: 'height 0.4s ease-in-out',
                    }}
                  >
                    <li><a href="#">Descargar pensum</a></li>
                    <li><a href="#">Planilla de inscripción</a></li>
                    <li><a href="#">Constancia de Estudios</a></li>
                    <li><a href="#">Constancia de Buena Conducta</a></li>
                    <li><a href="#">Record Academico</a></li>
                  </ul>
                )}
                </li>
                <li className={openMenus['CodigoBarra'] ? 'active' : ''}>
                  <a
                    href="#codigo-barras"
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuItemClick('CodigoBarra');
                    }}
                  >
                    Escanear codigo de barras <span className="arrow">▶</span>
                  </a>
                  {openMenus['CodigoBarra'] && (
                    <ul
                    ref={(el) => {
                      if (el) {
                        el.style.height = openMenus['CodigoBarra'] ? `${el.scrollHeight}px` : '0';
                      }
                    }}
                    className="submenu"
                    style={{
                      overflow: 'hidden',
                      transition: 'height 0.4s ease-in-out',
                    }}
                  >
                <li>
                  <input className="CB" placeholder="Ingrese código de barras" />
                  <button className="CBB" type="submit">Confirmar</button>
                </li>
              </ul>
            )}
          </li>
              </>
            )}
          </ul>
                    {/* Perfil del Usuario */}
                    <div id="profile-container" ref={profileButtonRef}>
                    <div id="not-button">
              <FontAwesomeIcon icon={faBell} />
            </div>
            <div id="profile-button" onClick={toggleProfileMenu}>
              <FontAwesomeIcon icon={faUser} />
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
            {isProfileMenuOpen && (
              <div id="profile-menu">
                <h3 className="nombre">Rafael Oliveros</h3>
                <select value={userRole} onChange={handleRoleChange}>
                  <option value="Superuser">Superuser</option>
                  <option value="Estudiante">Estudiante</option>
                </select>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
