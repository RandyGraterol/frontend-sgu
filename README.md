# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



modificaciones del archivo app.jsx 

importaciones:

// componentes de julian equipo (A)
import Autoridades from './screens/Autoridades.jsx';
import SedeCarrera from './screens/sedeCarrera.jsx';
import Procesos from './screens/procesos.jsx';
import ListadoAu from './screens/ListadoAut.jsx';
import EditAut from './screens/EditAut.jsx';
import EditProcess from './screens/EditP.jsx';
import LPro from './screens/ListadoProcess.jsx';


actualizacion de encaso:



        case 'Registrar carreras':
            return <RegistroCarreras/>
        case 'Pensum':
            return <RegistrarPensum/>
        case 'Registrar usuario':
            return <RegistroUsuario/>
        case 'Registro Instituto':
            return <RegistroInstituto/>
        case 'Periodo Academico':
            return <PeriodoAcademico navegacion={handleClick}/>
        case 'Asignar sede-carrera' :
            return <SedeCarrera/>
        case 'Registrar autoridades':
            return <Autoridades/>;
        case 'Registrar Procesos':
            return <Procesos/>;
        case 'Administrar procesos':
            return <LPro/>;
        case 'Editar Proceso':
            return <EditAut/> 

            modificaciones de navbar:


            agregado de evento onClick a 


            Autoridades
            asignar SedeCarrera
            registro de Procesos
            Listado de Autoridades
            administrar procesos