import React from 'react';
import './styles/responsiveTable.css';

// Iconos de Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEllipsisH,faUserLock} from '@fortawesome/free-solid-svg-icons';
// Importar partículas
import Registro from '../particulas/registro/registro.jsx';
import Filtro from '../particulas/filtro/filtro.jsx';

const ControlAcceso = ({icono,name,info})=>{
	  const lista = [];
    
    // Generar las filas de materias
    for (let x = 0; x < 10; x++) {
        lista.push(
            <tr key={x}>
                <td>elrandygraterol@gmail.com</td>
                <td>Admin</td>
                <td>AIS</td>
                <td>28/09/24</td>
                <td>
                    <div className='botoneraTable'>
                        <FontAwesomeIcon className='icon' title='Ver' icon={faEllipsisH} size="2x" color="blue" />
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
		<Filtro textoDefiltro='Sede , grupo de usuario'/>
		</div>

		<div className='titulo'>
		<FontAwesomeIcon icon={icono} size="4x" color="blue" />
		<h1 className='tituloH1'>{name} {info}</h1>
		</div>
		</div>

		<div className='containerTable'>
		<table className='styled-table'>
		<thead>
		<tr>
		<th>Usuario</th>
		<th>grupo</th>
		<th>sede</th>
		<th>fecha y hora</th>
		<th>Acción</th>
		</tr>
		</thead>
		<tbody>
		{lista}
		</tbody>
		</table>
		</div>

		</>
		)
}

export default ControlAcceso;