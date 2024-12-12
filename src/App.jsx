import './App.css'
import React, { useState } from 'react';

import Nav from './components/navBar/navbar.jsx';
import {BrowserRouter as Router} from 'react-router-dom';
import AppRoutes from './router/appRoutes.jsx';
//import Table from './components/table/table.jsx';
import Footer from './components/footer/footer.jsx';
//importando componente de usuarios (Randy) equipo B
import Usuarios from './components/usuarios/usuarios.jsx';
//importar grupo de usuarios (randy) equipo B
import GrupoU from './screens/grupoU.jsx';
//importa particula de registro de grupo de usuario
import RgrupoUsuario from './particulas/rGrupoUsuario/rGrupoUsuario.jsx';
//importar particula crear Grupo de usuario
import CrearGU from './particulas/crearGU/crearGU.jsx';
//importando componente (luis) equipo A 
import RegistroPeriodo from './components/registroPeriodo/RegistroPeriodo.jsx';
import RegistroTipoAutoridad from './components/tipoAutoridad/TipoDeAutoridad.jsx/';
//importar componente asignarGU (randis graterol) equipo B 
import AsignarGU from './screens/asignarGU.jsx';
//importar componente formulario registro de carrera RICARDO equipo (B)
import {Form as RegistroCarreras} from './components/Form/FromRegistroCarreras/Form.jsx';
import {Form as RegistrarPensum} from './components/Form/FormRegistroPensun/Form.jsx';
import {Form as RegistroInstituto} from './components/Form/FormRegistroInstituto/Form.jsx';
//importar  formulario de registro de usuarios 
import RegistroUsuario from './components/registroUsuariosForm/registroUsuariosForm.jsx';

//iconos awesome font
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync,faUser,faUserTimes,faArrowCircleRight,faUserCheck,faUserSecret,faUserShield,faUserCog,faUserTie,faUserGraduate,faClipboardList,faBook,faEllipsisH,faUserLock} from '@fortawesome/free-solid-svg-icons';

function App() {

 const [selectedComponent, setSelectedComponent] = useState(null);

    const handleNavClick = (componentName) => {
        setSelectedComponent(componentName);
    };
    const handleRegisterClick = () => { setSelectedComponent('Registrar Grupo de Usuario'); };
    const handdleRegisterClick = () => {setSelectedComponent('Crear Grupo de Usuarios'); };
    const asignarGrupoUsuario = ()=> {setSelectedComponent('Asignar grupo de usuario');};

    const renderComponent = () => {

     if (!selectedComponent) {
            return < Usuarios/>// Texto informativo
        }

       switch (selectedComponent) {
    case 'Registro Periodo':
        return <RegistroPeriodo />;
    case 'Administración de usuarios':
        return <Usuarios />;
    case 'Registro Tipo de Autoridad':
        return <RegistroTipoAutoridad />;
    case 'Grupos de usuarios':
        return <GrupoU name={selectedComponent} onRegisterClick={handleRegisterClick} onAsignarGU={asignarGrupoUsuario}/>
    case 'Registrar Grupo de Usuario':
        return <RgrupoUsuario name={selectedComponent} onRegisterClick={handdleRegisterClick}/>
    case 'Crear Grupo de Usuarios':
        return <CrearGU name='Asignar Privilegios/Crear Grupo Usuario'/>
    case 'Asignar grupo de usuario':
        return <AsignarGU name={selectedComponent} />
    case 'Registrar carreras':
        return <RegistroCarreras/>
    case 'Pensum':
        return <RegistrarPensum/>
    case 'Registrar usuario':
        return <RegistroUsuario/>
    case 'Registro Instituto':
        return <RegistroInstituto/>
    default:
        return null;
}//fin de caso multiple

    };//fin de funcion renderComponent

  return (
    <div>
     <Router>
       <Nav onNavClick={handleNavClick}/>

       <div className="content">
        {renderComponent()}
       </div>
       {/*<Table />*/}
       {/*<AppRoutes />{/*Rutas del sistema*/}
       <Footer />
     </Router>
    </div>
  )
}

export default App;
