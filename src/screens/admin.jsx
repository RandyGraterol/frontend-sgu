import React from 'react';
import './styles/table.css';
import './styles/responsiveTable.css';
//iconos de awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSync,faUser,faUserTimes,faArrowCircleRight,faUserCheck,faUserSecret,faUserShield,faUserCog,faUserTie,faUserGraduate,faLock,faEdit} from '@fortawesome/free-solid-svg-icons';
//importar particula de reactBoy equipo B
import RegistroUsuario from '../particulas/registroUsuario/registroUsuario.jsx';

import Filtro from '../particulas/filtro/filtro.jsx';

const Admin = ({name,icono,onControlAccesoClick,onClickRegisterUsuarios})=>{
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
                <FontAwesomeIcon className='icon' title='Actualizar' icon={faEdit} size="2x" color="blue" /> 
                <FontAwesomeIcon className='icon' title='Cambiar Status' icon={faSync} size="2x" color="blue" />
                <FontAwesomeIcon onClick={onControlAccesoClick} className='icon' title='Control de acceso' icon={faLock } size="2x" color='blue' />  
               </div>
            </td>
        </tr>
        );
}
return(
     <>
      <div className='containerTituloBotones'>

        <div className='containerBotones'>
        <RegistroUsuario onClickRegisterUsuarios={onClickRegisterUsuarios}/>
        <Filtro textoDefiltro='Cedula , grupo usuario'/>
        </div>
          
          <div className='titulo'>
          <FontAwesomeIcon icon={icono} size="4x" color="blue" /> 
         <h1 className='tituloH1'>Usuarios {name}</h1> 
        
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

export default Admin;