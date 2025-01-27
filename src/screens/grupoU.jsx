import React from 'react';
//importar particulas  registro y filtro
import Registro from '../particulas/registro/registro.jsx';
import Filtro from '../particulas/filtro/filtro.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync,faUserLock,faSignInAlt,faEdit,faPlus,faUsers} from '@fortawesome/free-solid-svg-icons';

import Style from '../styles/stylesGenerales.module.css';


const GrupoU = ({name,onRegisterClick,onAsignarGU})=>{
	const usuarios = [];
for(let x = 0; x < 10 ;x++){
usuarios.push( 
        <tr className={Style.tr} key={x}>
          <td className={Style.td}>
            <input type="checkbox" id="miCheckbox" name="miCheckbox" className='checkbox-grande'/>
          </td>
          <td className={Style.td}>AdminUserpath</td>
          <td className={Style.td}>Calabozo</td>
          <td className={Style.td}>Ingenieria en informatica</td>
          <td className={Style.td}>Activo</td>
          <td className={Style.td}>Super Admin</td>
          <td className={Style.td}>
            <FontAwesomeIcon onClick={onAsignarGU} title='Asignar Grupo' icon={faPlus} size='2x' color='green' className='iconoAsignarGU'/>
          </td>
        </tr>
        );
}
	return(
		<div className={Style.tablaContainerA}>
		  <div className={Style.tituloHeader}>
        <div className={Style.register}>
          {/*<Registro onRegisterClick={onRegisterClick}/>*/}
          <button className={Style.periodoButton}>Registro</button>
          <Filtro textoDefiltro='Grupo usuario, sede , carrera'/>
        </div>
        {/*<div className='titulo'>
          <FontAwesomeIcon icon={faUsers} size="4x" color="blue" /> 
          <h1 className='tituloH1'>{name}</h1> 
        </div>*/}
      </div>
        
          <table className={Style.styledTable}>
            <thead >
              <tr className={Style.tr}>
                <th></th>
                <th>Usuario</th>
                <th>Cede</th>
                <th>Carrera</th>
                <th>Status</th>
                <th>Grupo Usuario</th>
                <th></th>
              </tr>
            </thead>
           <tbody className={Style.tbody}>
      
            {usuarios}

           </tbody>
          
            </table>
		</div>
		);
}
export default GrupoU;