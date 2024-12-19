import React from 'react';
import './styles/table.css';
import './styles/responsiveTable.css';
// Iconos de Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync, faArrowCircleRight,faBook} from '@fortawesome/free-solid-svg-icons';
// Importar partículas
import Registro from '../particulas/registro/registro.jsx';
import Filtro from '../particulas/filtro/filtro.jsx';

const OfertaA = ({ name, icono , info}) => {
    const materias = [];
    
    // Generar las filas de materias
    for (let x = 0; x < 10; x++) {
        materias.push(
            <tr key={x}>
                <td>1</td>
                <td>731</td>
                <td>Fundamentos de la informática</td>
                <td>0</td>
                <td>2</td>
                <td>2</td>
                <td>3</td>
                <td>45</td>
            </tr>
        );
    }

    // Retornar el JSX del componente
    return (
        <>
            <div className='containerTituloBotones'>
                <div className='containerBotones'>
                    <Registro />
                    <Filtro textoDefiltro='Materia'/>
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
                            <th>Semestre</th>
                            <th>Codigo</th>
                            <th>Nombre Materia</th>
                            <th>Horas T</th>
                            <th>Horas P</th>
                            <th>Horas S</th>
                            <th>U.C</th>
                            <th>Total de estudiantes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {materias}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default OfertaA;