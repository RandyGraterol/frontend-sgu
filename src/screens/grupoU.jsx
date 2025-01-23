import React from 'react';
import './styles/responsiveTable.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faPlus } from '@fortawesome/free-solid-svg-icons';
import Registro from '../particulas/registro/registro.jsx';
import Filtro from '../particulas/filtro/filtro.jsx';

const GrupoU = ({ name, onRegisterClick, onAsignarGU }) => {
    const usuarios = [];
    for (let x = 0; x < 10; x++) {
        usuarios.push(
            <tr key={x}>
                <td data-label="Usuario">AdminUserpath</td>
                <td data-label="Sede">Calabozo</td>
                <td data-label="Carrera">Ingenieria en informatica</td>
                <td data-label="Status">Activo</td>
                <td data-label="Grupo Usuario">Super Admin</td>
                <td data-label="Acciones">
                    <FontAwesomeIcon onClick={onAsignarGU} title='Asignar Grupo' icon={faPlus} size='2x' color='green' className='iconoAsignarGU' />
                </td>
            </tr>
        );
    }

    return (
        <>
            <div className="containerTituloBotones">
                <div className="titulo">
                    <FontAwesomeIcon icon={faUsers} size="4x" color="blue" />
                    <center>
                        <h1 className="tituloH1">{name}</h1>
                    </center>
                </div>
                <div className="containerBotones">
                    <Filtro textoDefiltro="Grupo usuario, sede , carrera" />
                </div>
                    <center>
                        <Registro onRegisterClick={onRegisterClick} />
                    </center>
            </div>
            <div className="containerTable">
                <table className="styledTable">
                    <thead>
                        <tr>
                            <th>Usuario</th>
                            <th>Sede</th>
                            <th>Carrera</th>
                            <th>Status</th>
                            <th>Grupo Usuario</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default GrupoU;