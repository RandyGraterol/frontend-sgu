import React from 'react';
import './table.css';
import './responsiveTable.css';
//iconos de awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync,faUser,faUserTimes,faArrowCircleRight,faUserCheck,faUserSecret,faUserShield} from '@fortawesome/free-solid-svg-icons';
//importar particulas
import Registro from '../../particulas/registro/registro.jsx';
import Filtro from '../../particulas/filtro/filtro.jsx';

const Table = ()=>{

const usuarios = [];

for(let x = 0; x < 10 ;x++){
usuarios.push( 
            <tr key={x}>
            <td>Barnie</td>
            <td>Y amigos</td>
            <td>28282828</td>
            <td>elgatoconbotas@gmail.com</td>
            <td>05/04/2000</td>
            <td>male</td>
            <td>indio</td>
            <td>ninguna</td>
            <td>+58424537965</td>
            <td>Activo</td>
            <td>12345PonySalvaje.#</td>
            <td>Estudiante</td>
            <td>
               <div className='botoneraTable'>
                <FontAwesomeIcon className='icon' title='Actualizar' icon={faArrowCircleRight} size="2x" color="blue" /> 
                <FontAwesomeIcon className='icon' title='Cambiar Status' icon={faSync} size="2x" color="blue" />   
               </div>
            </td>
        </tr>
        );
}

	return(
        <>
        <div className='containerTituloBotones'>

        <div className='containerBotones'>
        <Registro />
        <Filtro />
        </div>
          
          <div className='titulo'>
          <FontAwesomeIcon icon={faUserShield} size="4x" color="blue" /> 
         <h1 >Usuarios Estudiantes</h1> 

          </div>
        </div>
        
        <div className='containerTable'>
		<table className='styled-table'>
         <thead>
         <tr>
         	<th>Nombre</th>
         	<th>Apellido</th>
         	<th>cedula</th>
         	<th>Correo</th>
         	<th>Fecha/N</th>
         	<th>Sexo</th>
         	<th>Etnia</th>
         	<th>Discapacidad</th>
         	<th>Telefono</th>
         	<th>Status</th>
         	<th>Password</th>
         	<th>G.U</th>
         	<th>Acciones</th>

         </tr>
         </thead>
         <tbody>
    
          {usuarios}

         </tbody>
        
		</table>
        </div>
        </>
		)
}

export default Table;