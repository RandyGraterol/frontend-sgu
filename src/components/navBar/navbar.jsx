import React, { useState, useEffect, useRef } from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { faUser,
  faChevronDown,
  faBars,
  faTimes,
  faBell,
  faUniversity,
  faUsers,
  faTasks,
  faChartBar,
  faDownload,
  faFileAlt,
  } from '@fortawesome/free-solid-svg-icons';


const Navbar = ({ onNavClick, login }) => {

   const navegar = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('access_token'); // Elimina el token
    navegar('/login'); // Redirige al login
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

useEffect(() => {
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 767);
  };

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

  const style = {
    display: login ? 'none' : 'flex',
  };
  const style2 = {
    display: login ? 'flex' : 'none',
    fontFamily : ''
  };
  const style3 = {
    ...(isMobile && { display: login ? 'none' : 'block' }), // Si es móvil, aplica el estilo
  };
  const style4 = {
    ...(isMobile && { display: login ? 'flex' : 'none' }), // Si es móvil, aplica el estilo
  };

  const style5 = {
    ...(isMobile && { display: login ? 'none' : 'flex' }), // Si es móvil, aplica el estilo
  };
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const [openMenus, setOpenMenus] = useState({});
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const [userRole, setUserRole] = useState('Superuser'); // Por defecto "Superuser"
  const [profileData, setProfileData] = useState({ periodo: '', estatus: '' });
  const [error, setError] = useState(null);

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

        // Llamada a la API para obtener datos del perfil
        useEffect(() => {
          const fetchProfileData = async () => {
            const query = `
              query MyQuery {
                item(id: "20241") {
                  periodo
                  estatus
                }
              }
            `;

            try {
              const response = await fetch('https://sgu.casacam.net/graphql', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlbHJhbmR5Z3JhdGVyb2xAZ21haWwuY29tIiwiZXhwIjoxNzM3NzQyMzMzfQ.wVs_GlgNdWev_y0qrvc5TI9kEV1NXTHh2iVKXI1LAwM',
                },
                body: JSON.stringify({ query }),
              });
      
              const result = await response.json();
              if (result.data) {
                setProfileData(result.data.item);
              } else {
                throw new Error('No data found');
              }
            } catch (err) {
              setError(err.message);
            }
          };
      
          fetchProfileData();
        }, []);
  

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
  const styles = {
    fontFamily: 'Work Sans, serif',
    fontOpticalSizing: 'auto',
    fontWeight: 900,
    fontStyle: 'normal'
};

// Nueva función para cerrar todos los submenús cuando se hace clic en una opción
const handleSubMenuClick = (section) => {
  setOpenMenus({}); // Cierra todos los submenús
  onNavClick(section); // Llama a la función original de navegación
};

  return (
    <header id='cabecera'>
      <div className='app'>
        <div className='nombre'>
      <div className='containerLogo'>
           <a href=""><img className="image" src="/icon/logo.png" alt="Logo" /></a>
          </div>
          <div className='titulo' style={style4} >
            <h1>Sistema de Gestión Universitaria</h1>
            </div>     
                            {/* Perfil del Usuario */}
                            <div id="profile-container" ref={profileButtonRef}>
                    <div id="not-button" style={style}>
              <a  onClick={() => onNavClick('Notificacion')} href="#Notificacion">
              <FontAwesomeIcon icon={faBell} />
              </a>
              </div>
              <div className="social-media_" style={style2}>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
                <img className='fb' src="icon/fb.png" alt="Facebook logo" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
                <img className='tt' src="icon/x.png" alt="Twitter logo" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
                <img className='ig' src="icon/ig.png" alt="Instagram logo" />
              </a>
              </div>
            <div id="profile-button" onClick={toggleProfileMenu} style={style}>
              <FontAwesomeIcon icon={faUser} />
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
            {isProfileMenuOpen && (
              <div className={`profile-menu ${isProfileMenuOpen ? 'isactive' : ''}`}>
                <h4 className="carrera">rafaeloliveros@gmail.com</h4>
                <img src="/userPerfil.jpg" alt=""/>
                <div className="descriptionUser">
                  <h3 >Hola, Rafael Oliveros</h3>
                  <h4 className="carrera">Carrera activa: "Ingenieria informatica"</h4>
                </div>
                {/* <h4 className="carrera">Periodo: {profileData.periodo || 'Cargando...'}</h4>
                <h4 className="carrera">Estatus: {profileData.estatus || 'Cargando...'}</h4>
                {error && <p style={{ color: 'red' }}>Error: {error}</p>} */}
                {/*<a onClick={() => onNavClick('Perfil')} href="#perfil"><h4 className="carrera">Perfil</h4></a>  */}
                <select value={userRole} onChange={handleRoleChange}>
                  <option value="Superuser">SuperUser</option>
                  <option value="Estudiante">Estudiante</option>
                  <option value="Admin">Admin</option>
                  <option value="Operador">Operador</option>
              </select>
              <a onClick={() => handleSubMenuClick('Perfil')} href="#ChangePasword"><h4 className="carrera">Perfil</h4></a> 

              <a href="#ChangePasword"><h4 className="carrera">Cambiar contraseña</h4></a> 
              <a href='#' onClick={handleLogout}>Cerrar Sesión</a>
              </div>
            )}

          </div>
          
          </div>

          <nav>
          <FontAwesomeIcon
            style={style3}
            icon={isMenuOpen ? faTimes : faBars}
            className={isMenuOpen ? 'fa-bara' : ''}
            id="ham-menu"
            onClick={toggleMenu}
          />
          <div className='titulo2' style={style5}>
          <h4>Sistema de Gestión Universitaria</h4>
          </div>     

          <div className="social-media_2" style={style5}>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
                <img className='fb' src="fbblue.png" alt="Facebook logo" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" title="Twitter">
                <img className='tt' src="xblue.png" alt="Twitter logo" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
                <img className='ig' src="igblue.png" alt="Instagram logo" />
              </a>
              </div>
          <ul style={style} id="nav-bar" className={isMenuOpen ? 'active' : ''} ref={navBarRef}>
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
                    <FontAwesomeIcon icon={faUniversity} />Instituto <span className="arrow">▶</span>
                  </a>


                  {openMenus['Instituto'] && (
                    <ul
                    ref={(el) => {
                        if (el && window.innerWidth >= 767) {
                          el.style.height = openMenus['Instituto'] ? `${el.scrollHeight}px` : '0';
                      }
                    }}
                    className="submenu"
                    style={{
                      overflow: 'hidden',
                      transition: 'height 0.4s ease-in-out',
                    }}
                  >
                  <li><a onClick={() => handleSubMenuClick('Registro Instituto')} href="#registro-instituto">Registro instituto</a></li>
                  <li><a onClick={() => handleSubMenuClick('Registrar carreras')} href="#registrar-carreras">Registrar carreras</a></li>
                  <li><a onClick={() => handleSubMenuClick('Pensum')} href="#pensum">Pensum</a></li>
                  <li><a onClick={() => handleSubMenuClick('Registrar áreas')} href="#registrar-areas">Registrar áreas</a></li>
                  <li><a onClick={() => handleSubMenuClick('Asignar sede-carrera')} href="#asignar-sede-carrera">Asignar sede-carrera</a></li>
                  <li><a onClick={() => handleSubMenuClick('Registrar autoridades')} href="#registrar-autoridades">Registrar autoridades</a></li>
                  <li><a onClick={() => handleSubMenuClick('Registro Tipo de Autoridad')} href="#tipo-autoridad">Tipo de autoridad</a></li>
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
                    <FontAwesomeIcon icon={faUsers} />Usuarios <span className="arrow">▶</span>
                  </a>
                  {openMenus['Usuarios'] && (
                    <ul
                    ref={(el) => {
                        if (el && window.innerWidth >= 767) {
                          el.style.height = openMenus['Usuarios'] ? `${el.scrollHeight}px` : '0';
                      }
                    }}
                    className="submenu"
                    style={{
                      overflow: 'hidden',
                      transition: 'height 0.4s ease-in-out',
                    }}
                  >
                      <li><a onClick={() => handleSubMenuClick('Registrar Usuario')} href="#registrar-usuario">Registrar usuario</a></li>
                      <li><a onClick={() => handleSubMenuClick('Grupos de usuarios')} href="#grupos-usuarios">Grupos de usuarios</a></li>
                      <li><a onClick={() => handleSubMenuClick('Control de Acceso')} href="#control-acceso">Control de acceso</a></li>
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
                    <FontAwesomeIcon icon={faTasks} />Procesos <span className="arrow">▶</span>
                  </a>
                  {openMenus['Procesos'] && (
                    <ul
                    ref={(el) => {
                        if (el && window.innerWidth >= 767) {
                          el.style.height = openMenus['Procesos'] ? `${el.scrollHeight}px` : '0';
                      }
                    }}
                    className="submenu"
                    style={{
                      overflow: 'hidden',
                      transition: 'height 0.4s ease-in-out',
                    }}
                  >
                      <li><a onClick={() => handleSubMenuClick('Periodo Academico')} href="#registro-periodo">Periodo Académico</a></li>
                      <li><a onClick={() => handleSubMenuClick('Administrar procesos')} href="#proceso-inscripcion">Proceso de Inscripción</a></li>
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
                    <FontAwesomeIcon icon={faChartBar} />Reportes <span className="arrow">▶</span>
                  </a>
                  {openMenus['Reportes'] && (
                    <ul
                    ref={(el) => {
                        if (el && window.innerWidth >= 767) {
                          el.style.height = openMenus['Reportes'] ? `${el.scrollHeight}px` : '0';
                      }
                    }}
                    className="submenu"
                    style={{
                      overflow: 'hidden',
                      transition: 'height 0.4s ease-in-out',
                    }}
                  >
                      <li><a onClick={() => handleSubMenuClick('Reporte inscripciones')} href="#reporte-inscripciones">Reporte de inscripciones</a></li>
                      {/* <li><a href="#listado-estudiantes">Listado de estudiantes por secciones</a></li> */}
                      </ul>
                  )}
                </li>
                {/* <li className={openMenus['CodigoBarra'] ? 'active' : ''}>
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
                        if (el && window.innerWidth >= 767) {
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
          </li> */}
              </>
            )}

            {userRole === 'Estudiante' && (
              <>
                {/* Menú Estudiante */}

                <li className={openMenus['Procesos'] ? 'active' : ''}>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuItemClick('Procesos');
                    }}
                  >
                     <span className="arrow">▶</span>Procesos
                  </a>
                  {openMenus['Procesos'] && (
                  <ul    
                    ref={(el) => {
                        if (el && window.innerWidth >= 767) {
                          el.style.height = openMenus['Procesos'] ? `${el.scrollHeight}px` : '0';
                      }
                    }}
                    className="submenu"
                    style={{
                      overflow: 'hidden',
                      transition: 'height 0.4s ease-in-out',
                    }}
                  >
                    <li><a onClick={() => handleSubMenuClick('Inscripcion')}>Inscripción</a></li>
                  </ul>
                )}
                
                </li>
                <li className={'liButton'}>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuItemClick('Descargar pensum');
                    }}
                  >
                    <FontAwesomeIcon icon={faDownload} />D.Pensum
                  </a>

                </li>
                <li className={'liButton'}>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuItemClick('Descargar horario');
                    }}
                  >
                    <FontAwesomeIcon icon={faFileAlt} />D.Horario 
                  </a>

                </li>                
                <li className={'liButton'}>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuItemClick('Planilla de inscripción');
                    }}
                  >
                    <FontAwesomeIcon icon={faFileAlt} />P.Inscripción
                  </a>

                </li>                
                <li className={'liButton'}>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuItemClick('Constancia de Estudios');
                    }}
                  >
                    <FontAwesomeIcon icon={faFileAlt} />C.Estudios 
                  </a>

                </li>                
                <li className={'liButton'}>
                  <a
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuItemClick('Record Academico');
                    }}
                  >
                    <FontAwesomeIcon icon={faFileAlt} />R.Academico 
                  </a>

                </li>
                
              </>
            )}
            {userRole === 'Admin' && (
              <>
                {/* Menú Admin */}

                <li className={openMenus['Reportes'] ? 'active' : ''}>
                  <a
                    href="#reportes"
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuItemClick('Reportes');
                    }}
                  >
                    <FontAwesomeIcon icon={faChartBar} />Reportes <span className="arrow">▶</span>
                  </a>
                  {openMenus['Reportes'] && (
                  <ul
                    ref={(el) => {
                        if (el && window.innerWidth >= 767) {
                          el.style.height = openMenus['Reportes'] ? `${el.scrollHeight}px` : '0';
                      }
                    }}
                    className="submenu"
                    style={{
                      overflow: 'hidden',
                      transition: 'height 0.4s ease-in-out',
                    }}
                  >
                    <li><a href="#">Reporte de inscripciones</a></li>
                    <li><a href="#">Listado de estudiantes por secciones</a></li>
                  </ul>
                )}
                </li>

              </>
            )}
            {userRole === 'Operador' && (
              <>
                {/* Menú Operador */}
                
                <li className={openMenus['Reportes'] ? 'active' : ''}>
                  <a
                    href="#reportes"
                    onClick={(e) => {
                      e.preventDefault();
                      handleMenuItemClick('Reportes');
                    }}
                  >
                    <FontAwesomeIcon icon={faChartBar} />Reportes <span className="arrow">▶</span>
                  </a>
                  {openMenus['Reportes'] && (
                  <ul
                    ref={(el) => {
                        if (el && window.innerWidth >= 767) {
                          el.style.height = openMenus['Reportes'] ? `${el.scrollHeight}px` : '0';
                      }
                    }}
                    className="submenu"
                    style={{
                      overflow: 'hidden',
                      transition: 'height 0.4s ease-in-out',
                    }}
                  >
                    <li><a href="#">Reporte de inscripciones</a></li>
                    <li><a href="#">Listado de estudiantes por secciones</a></li>
                  </ul>
                )}
                </li>

              </>
            )}
          </ul>

          {/* Perfil del Usuario */}



        </nav>
      </div>
    </header>
  );
};

export default Navbar;
