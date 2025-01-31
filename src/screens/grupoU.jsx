import React from 'react';
//importar particulas  registro y filtro
import Registro from '../particulas/registro/registro.jsx';
import Filtro from '../particulas/filtro/filtro.jsx';
import {useState} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync,faUserLock,faSignInAlt,faEdit,faPlus,faUsers} from '@fortawesome/free-solid-svg-icons';

import Style from '../styles/stylesGenerales.module.css';


const GrupoU = ({name,onRegisterClick,onAsignarGU})=>{
  const [estadoRow, setEstadoRow] = useState(null);

  const handleRowClick = (index) => {
    setEstadoRow(index); // Actualiza el estado con el índice del <tr> clicado
  };
	const usuarios = [];
for(let x = 0; x < 10 ;x++){
usuarios.push( 
        <tr className={`${Style.tr} ${estadoRow === x ? Style.trActivo : ''}`}
            key={x}
            onClick={() => handleRowClick(x)}>
          <td data-titulo="Selector de Accion" className={Style.td}>
            <p className={Style.p}><input type="checkbox" id="miCheckbox" name="miCheckbox" className='checkbox-grande'/></p>
          </td>
          <td data-titulo="Usuario" className={Style.td}><p className={Style.p}>AdminUserpath</p></td>
          <td data-titulo="Cede" className={Style.td}><p className={Style.p}>Calabozo</p></td>
          <td data-titulo="Carrera" className={Style.td}><p className={Style.p}>Ingenieria en informatica</p></td>
          <td data-titulo="Status" className={Style.td}><p className={Style.p}>Activo</p></td>
          <td data-titulo="Grupo Usuario" className={Style.td}><p className={Style.p}>Super Admin</p> </td>
          <td data-titulo="Accion" className={Style.td}>
            <p className={Style.p}>
              <FontAwesomeIcon onClick={onAsignarGU} title='Asignar Grupo' icon={faPlus} size='2x' color='green' className='iconoAsignarGU'/>
            </p>
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
