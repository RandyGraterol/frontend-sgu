import React from 'react';
import './botonera.css';
import { Link } from 'react-router-dom';

const Botonera = ({ onNavClick }) => {
    return (
        <div className='menu'>
        
            <ul className='listaDesordenada'>
                <li>
                    <button className='enlace' onClick={() => onNavClick('SuperAdmin')}>SuperAdmin</button>
                </li>
                <li>
                    <button className='enlace' onClick={() => onNavClick('Admin')}>Admin</button>
                </li>
                <li>
                    <button className='enlace' onClick={() => onNavClick('Operador')}>Operador</button>
                </li>
                <li>
                    <button className='enlace' onClick={() => onNavClick('Estudiante')}>Estudiante</button>
                </li>
                <li>
                    <button className='enlace' onClick={() => onNavClick('Pensum')}>Pensum</button>
                </li>
                <li>
                    <button className='enlace' onClick={() => onNavClick('OfertaA')}>Oferta A</button>
                </li>
                 <li>
                    <button className='enlace' onClick={() => onNavClick('crearGrupoUsuario')}>Crear G.U</button>
                </li>
                 <li>
                    <button className='enlace' onClick={() => onNavClick('administrarGrupoDeUsuario')}>Administrar G.U</button>
                </li>
            </ul>
            
        </div>
    );
};

export default Botonera;