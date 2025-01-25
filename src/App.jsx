import './App.css'
import React, { useState } from 'react';
import Nav from './components/navBar/navbar.jsx';
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
//import {Form as RegistrarAreas} from './components/Form/FormRegistroAreas/Form.jsx';
//importar  formulario de registro de usuarios 
import RegistroUsuario from './components/registroUsuariosForm/registroUsuariosForm.jsx';
import PeriodoAcademico from './components/listaPeriodo/ListaPeriodoAcademico.jsx';
//Import Inscripción Estudiantiles
import Inscripcion from './components/InscricsionHorario/Inscripcion'


// componentes de julian equipo (A)
import Autoridades from './screens/Autoridades.jsx';
import SedeCarrera from './screens/SedeCarrera.jsx';
import Procesos from './screens/procesos.jsx';
import ListadoAu from './screens/ListadoAut.jsx';
import EditAut from './screens/EditAut.jsx';
import EditProcess from './screens/EditP.jsx';
import LPro from './screens/ListadoProcess.jsx';

//importar modulo de notificaciones
import NotificationsAdmin from './components/notifications/notifications.jsx';


//IMPORTAR CONTROL DE ACCESO (EQUIPO B)
import ControlAcceso from './screens/controlA.jsx';

//import componente de jesus velazques
import Dashboar from './components/dashboar/dashboar.jsx';


//iconos awesome font
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync,faUser,faUserTimes,faArrowCircleRight,faUserCheck,faUserSecret,faUserShield,faUserCog,faUserTie,faUserGraduate,faClipboardList,faBook,faEllipsisH,faUserLock} from '@fortawesome/free-solid-svg-icons';

function App(){

   const [selectedComponent, setSelectedComponent] = useState(null);

   const handleNavClick = (componentName) => {
    setSelectedComponent(componentName);
};
const handleRegisterClick = () => { setSelectedComponent('Registrar Grupo de Usuario'); };
const handdleRegisterClick = () => {setSelectedComponent('Crear Grupo de Usuarios'); };
const asignarGrupoUsuario = ()=> {setSelectedComponent('Asignar grupo de usuario');};
const handleClick = (identificador)=>{setSelectedComponent(identificador)}
// julian functions
const handleEditProcess = ()=>{ setSelectedComponent('Editar Proceso')};
const handleAddType = ()=>{setSelectedComponent('Registro Tipo de Autoridad')};
const handleGetAutList =()=>{setSelectedComponent('Listado de Autoridades')};
const handleEditAut = ()=>{setSelectedComponent('Editar Autoridad')}

const renderComponent = () => {

   if (!selectedComponent) {
            return < NotificationsAdmin/>// 
        }
        switch (selectedComponent) {
        case 'Registro periodo':
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
            return <RegistroCarreras />
        case 'Pensum':
            return <RegistrarPensum />
        case 'Registrar Usuario':
            return <RegistroUsuario/>
        case 'Registro Instituto':
            return <RegistroInstituto/>
        case 'Periodo Academico':
            return <PeriodoAcademico navegacion={handleClick}/>
        case 'Asignar sede-carrera' :
            return <SedeCarrera/>
        case 'Registrar autoridades':
            return <Autoridades onhandleAddType={handleAddType} onhandleGetAutList={handleGetAutList} />;
        case 'Registrar Procesos':
            return <Procesos/>;
        case 'Administrar procesos':
            return <LPro onHandleEditProcess={handleEditProcess} />;
        case 'Editar Proceso':
            return <EditProcess/> 
        case 'Listado de Autoridades':
            return <ListadoAu onhandleEditAut={handleEditAut} />
        case 'Editar Autoridad':
            return <EditAut onhandleAddType={handleAddType}/>
        case 'Control de Acceso':
            return <ControlAcceso />
        case 'Registrar áreas':
            return <h2>En proceso <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> hols </h2>
        case 'Inscripcion':
            return <Inscripcion />
        default:
            return null;
}//fin de caso multiple

    };//fin de funcion renderComponent

    return (
        <div className='containerComponentPrincipal'>
        <Nav onNavClick={handleNavClick}/>

        <div className="content">
        {renderComponent()}
        </div>
       {/*<Table />*/}
       {/*<AppRoutes />{/*Rutas del sistema*/}
        <Footer />
        </div>
        )
}

export default App;
