import React from 'react';
import './styles/table.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';


const AsignarGU = ({name})=>{
	return(
        <>
         <section className='tituloInput'>
          <input type='text' placeholder='  Ingrese Nombre' required className='inputNombre'/>
          <h1 className='titulo'>{name}</h1>
         </section>
         
        <section className='privilegios'>

        <div className='permisos'>
        <ul className='menuU'>
        <li>Registrar estudiantes</li>
        <li>Actualizar Status</li>
        <li>Asignar grupo de usuarios</li>
        <li>Descargar documentos</li>
        <li>Seguimiento de usuarios</li>
        <li>Asignar grupo de usuarios</li>
        <li>Adicion y retiro</li>
        <li>Cambio de carrera</li>
        <li>Asignacion de roles</li>
        </ul>
        </div>

        <div className='flechas'>
        <FontAwesomeIcon icon={faArrowRight} size='2x' color='black'/>
        <FontAwesomeIcon icon={faArrowLeft} size='2x' color='black'/>
        </div>

        <div className='asignarPermisos'>
         <ul className='menuU'>
        <li>Asignar grupo de usuarios</li>
        </ul>
        </div>

         </section>

         <section className='sectionButtonCrear'>
           <input type='button' value='Crear' className='buttonCrear' title='Crear'/>
         </section>

        </>
		)
}

export default AsignarGU;