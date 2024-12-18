# React + Vite

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

creacion de las funciones

const handleEditProcess = ()=>{ setSelectedComponent('Editar Proceso')};
const handleAddType = ()=>{setSelectedComponent('Registro Tipo de Autoridad')};
const handleGetAutList =()=>{setSelectedComponent('Listado de Autoridades')};
const handleEditAut = ()=>{setSelectedComponent('Editar Autoridad')}


actualizacion de encaso:

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

            modificaciones de navbar:


            agregado de evento onClick a 


            Autoridades
            asignar SedeCarrera
            registro de Procesos
            Listado de Autoridades
            administrar procesos

            el resto de modificaciones han sido en archivos creados por mi, asi que no deberia haber conflicto de versiones

            archivos modificados en componentes: 
            
            todo carpeta editar
            
            todo en carpeta listadoAu
            
            LP.jsx de la carpeta listadoProcesos
            
            todo en carpeta registroAut

            SedeCarrera.module.css en carpeta sede-Carrera
            
            archivos modificados en screens:

            autoridades
            EditAut
            ListadoAut
            ListadoProcess
            ---> solo paso de props