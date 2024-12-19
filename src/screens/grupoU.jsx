import React from 'react';
import './styles/responsiveTable.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync,faUserLock,faSignInAlt,faEdit,faPlus,faUsers} from '@fortawesome/free-solid-svg-icons';

//importar particulas  registro y filtro
import Registro from '../particulas/registro/registro.jsx';
import Filtro from '../particulas/filtro/filtro.jsx';


const GrupoU = ({name,onRegisterClick,onAsignarGU})=>{
	const usuarios = [];
for(let x = 0; x < 10 ;x++){
usuarios.push( 
            <tr key={x}>
            <td>
            <input type="checkbox" id="miCheckbox" name="miCheckbox" className='checkbox-grande'/>
            </td>
            <td>AdminUserpath</td>
            <td>Calabozo</td>
            <td>Ingenieria en informatica</td>
            <td>Activo</td>
            <td>Super Admin</td>
            <td>
              <FontAwesomeIcon onClick={onAsignarGU} title='Asignar Grupo' icon={faPlus} size='2x' color='green' className='iconoAsignarGU'/>
            </td>
        </tr>
        );
}
	return(
		<>
		 <div className='containerTituloBotones'>
        <div className='containerBotones'>
        <Registro onRegisterClick={onRegisterClick}/>
        <Filtro textoDefiltro='Grupo usuario, sede , carrera'/>
        </div>
          
          <div className='titulo'>
          <FontAwesomeIcon icon={faUsers} size="4x" color="blue" /> 
         <h1 className='tituloH1'>{name}</h1> 

          </div>
        </div>
        
        <div className='containerTable'>
          <table className='styled-table'>
         <thead>
         <tr>
         <th></th>
          <th>Usuario</th>
          <th>Cede</th>
          <th>Carrera</th>
          <th>Status</th>
          <th>Grupo Usuario</th>
          <th></th>
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
export default GrupoU;