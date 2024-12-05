import Botonera from '../botonera/botonera.jsx';
// Hook para el cambio de estado
import React, { useState } from 'react';

// Componentes a renderizar 
import SuperAdmin from '../../screens/superAdmin';
import Admin from '../../screens/Admin';
import Operador from '../../screens/Operador';
import Estudiante from '../../screens/Estudiante';
import Pensum from '../../screens/Pensum';
import OfertaA from '../../screens/OfertaA';
import ControlAcceso from '../../screens/controlA.jsx';

//importar componente registro de reactBoy (registro de usuarios)
import RegistroUsuario from '../registroUsuariosForm/registroUsuariosForm.jsx';

//iconos awesome font
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync,faUser,faUserTimes,faArrowCircleRight,faUserCheck,faUserSecret,faUserShield,faUserCog,faUserTie,faUserGraduate,faClipboardList,faBook,faEllipsisH,faUserLock} from '@fortawesome/free-solid-svg-icons';


const UsuariosComponent = () => {
    const [activeComponent, setActiveComponent] = useState(null);

    const handleButtonClick = (componentName) => {
        setActiveComponent(componentName);
    };
    //funciones que determinan que componente sera renderizado mediante el caso multiple
     const handdleRegisterUsuarioClick = () => {setActiveComponent('Registro de usuario'); };

    const renderActiveComponent = () => {
        if (!activeComponent) {
            return <p className='textoInformativo'>"Inicio de panel usuarios."</p>; // Texto informativo
        }

        switch (activeComponent) {
            case 'SuperAdmin':
                return <SuperAdmin 
                    name={activeComponent} 
                    icono={faUserShield}
                    onControlAccesoClick={() => setActiveComponent('Control de Acceso')} onClickRegisterUsuarios={handdleRegisterUsuarioClick} 
                />;
            case 'Admin':
                return <Admin 
                    name={activeComponent} 
                    icono={faUserCog} 
                    onControlAccesoClick={() => setActiveComponent('Control de Acceso')}
                    onClickRegisterUsuarios={handdleRegisterUsuarioClick}
                />;
            case 'Operador':
                return <Operador 
                    name={activeComponent} 
                    icono={faUserTie} 
                    onControlAccesoClick={() => setActiveComponent('Control de Acceso')}
                    onClickRegisterUsuarios={handdleRegisterUsuarioClick}
                />;
            case 'Estudiante':
                return <Estudiante 
                    name={activeComponent} 
                    icono={faUserGraduate} 
                    onControlAccesoClick={() => setActiveComponent('Control de Acceso')} 
                    onClickRegisterUsuarios={handdleRegisterUsuarioClick}
                />;
            case 'Pensum':
                return <Pensum name={activeComponent} icono={faClipboardList} info="de estudios" />;
            case 'OfertaA':
                return <OfertaA name='Oferta' icono={faBook} info="académica de inscripción" />;
            case 'Control de Acceso':
                return <ControlAcceso name={activeComponent} icono={faUserLock} info="" />;
            case 'Registro de usuario':
                return <RegistroUsuario name={activeComponent}/>
            default:
                return null;
        } // fin de caso múltiple
    }; // fin de función renderActiveComponent

    return (
        <>
            <Botonera onNavClick={handleButtonClick} />
            <div className="content">
                {renderActiveComponent()}
            </div>
        </>
    );
}

export default UsuariosComponent;