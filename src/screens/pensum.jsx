import React from 'react';
import './styles/table.css';
import './styles/responsiveTable.css';
// Iconos de Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync, faArrowCircleRight,faEye,faEdit} from '@fortawesome/free-solid-svg-icons';
// Importar partículas
import Registro from '../particulas/registro/registro.jsx';
import Filtro from '../particulas/filtro/filtro.jsx';

const Pensum = ({ name, icono , info}) => {
    const pensums = [];
    
    // Generar las filas de materias
    for (let x = 0; x < 10; x++) {
        pensums.push(
            <tr key={x}>
                <td>283</td>
                <td> Ingenieria en sistemas {x}</td>
                <td>06/09/24</td>
                <td>
                    <div className='botoneraTable'>
                        <FontAwesomeIcon className='icon' title='Ver' icon={faEye} size="2x" color="blue" />
                        <FontAwesomeIcon className='icon' title='Actualizar' icon={faEdit} size="2x" color="blue" />
                    </div>
                </td>
            </tr>
        );
    }

    // Retornar el JSX del componente
    return (
        <>
            <div className='containerTituloBotones'>
                <div className='containerBotones'>
                    <Registro />
                    <Filtro textoDefiltro='Carrera'/>
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
                            <th>Codigo</th>
                            <th>Nombre de la carrera</th>
                            <th>fecha de actualizacación</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pensums}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Pensum;