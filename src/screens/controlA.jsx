import React from 'react';
// Iconos de Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEllipsisH,faUserLock} from '@fortawesome/free-solid-svg-icons';
// Importar partículas
import Registro from '../particulas/registro/registro.jsx';
import Filtro from '../particulas/filtro/filtro.jsx';

import Style from '../styles/stylesGenerales.module.css';

const ControlAcceso = ({icono,name,info})=>{
	  const lista = [];
    
    // Generar las filas de materias
    for (let x = 0; x < 10; x++) {
        lista.push(
            <tr className={Style.tr} key={x}>
                <td className={Style.td}>elrandygraterol@gmail.com</td>
                <td className={Style.td}>Admin</td>
                <td className={Style.td}>AIS</td>
                <td className={Style.td}>28/09/24</td>
                <td className={Style.td}>
                    <FontAwesomeIcon className='icon' title='Ver' icon={faEllipsisH} size="2x" color="blue" />
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