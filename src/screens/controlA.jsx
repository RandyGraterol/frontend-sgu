import React, { useState } from "react";
// Iconos de Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEllipsisH,faUserLock} from '@fortawesome/free-solid-svg-icons';
// Importar partículas
import Registro from '../particulas/registro/registro.jsx';
import Filtro from '../particulas/filtro/filtro.jsx';

import Style from '../styles/stylesGenerales.module.css';

const ControlAcceso = ({icono,name,info})=>{
	const [estadoRow, setEstadoRow] = useState(null);

	const handleRowClick = (index) => {
		setEstadoRow(index); // Actualiza el estado con el índice del <tr> clicado
	};
	  const lista = [];
    
    // Generar las filas de materias
    for (let x = 0; x < 10; x++) {
        lista.push(
            <tr className={`${Style.tr} ${estadoRow === x ? Style.trActivo : ''}`}
            key={x}
            onClick={() => handleRowClick(x)}>
                <td data-titulo="Usuario" className={Style.td}><p className={Style.p}>elrandygraterol@gmail.com</p></td>
                <td data-titulo="Grupo" className={Style.td}><p className={Style.p}>Admin</p></td>
                <td data-titulo="Sede" className={Style.td}><p className={Style.p}>AIS</p></td>
                <td data-titulo="Frecha y Hora" className={Style.td}><p className={Style.p}>28/09/24</p></td>
                <td data-titulo="Accion" className={Style.td}>
                <p className={Style.p}>
                	<FontAwesomeIcon className='icon' title='Ver' icon={faEllipsisH} size="2x" color="blue" />
                </p>
                </td>
            </tr>
        );
    }
	return(
		<div className={Style.tablaContainerA}>

			<div className={Style.tituloHeader}>

				<div className={Style.register}>
					{/*<Registro />*/}
					<button className={Style.periodoButton}>Registro</button>
					<Filtro textoDefiltro='Sede , grupo de usuario'/>
				</div>
{/*				<div >
					<FontAwesomeIcon icon={icono} size="4x" color="blue" />
					<h1 className='tituloH1'>{name} {info}</h1>
				</div>*/}
			</div>

				<table className={Style.styledTable}>
					<thead>
						<tr className={Style.tr}>
							<th>Usuario</th>
							<th>grupo</th>
							<th>sede</th>
							<th>fecha y hora</th>
							<th>Acción</th>
						</tr>
					</thead>
					<tbody className={Style.tbody}>
							{lista}
					</tbody>
				</table>

		</div>
		)
}

export default ControlAcceso;
