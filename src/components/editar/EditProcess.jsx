import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck, faCalendarDays, faListOl, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import Submit from '../../particulas/SubmitButtons/Submit';

import Style from './editar.module.css'

const EditProces = () => {
    const [state, changeState] = useState('2025-I');
    const [fechaInicio, setFechaInicio] = useState('2004-06-01');
    const [fechaCierre, setFechaCierre] = useState('2004-06-06');
    const [error, setError] = useState('');

    const handleModalidadChange = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue === "Anual") {
            changeState('2025-I');
        } else if (selectedValue === "semestral" || selectedValue === "trimestral") {
            changeState('2025-II');
        }
    };

    useEffect(() => {
        const inicio = new Date(fechaInicio);
        const cierre = new Date(fechaCierre);

        if (inicio > cierre) {
            setError("La fecha de inicio no puede ser mayor que la fecha de cierre.");
        } else {
            setError(""); 
        }
    }, [fechaInicio, fechaCierre]); 

    const handleSubmit = (event) => {
        event.preventDefault(); 

        if (error) {
            return;
        }

    };

    return (
        <form className={Style.form} onSubmit={handleSubmit}>
            <h1 className={Style.h1} >Editar Procesos</h1>

            {error && <p style={{ color: 'red' }}>{error}</p>} 

            <label className={Style.label} >
                <FontAwesomeIcon icon={faListOl} size='lg' style={{ color: "#5271ff" }} />
                <strong className={Style.strong} >Periodo Académico</strong>
                <input type="text" readOnly name='periodo' className={Style.input} value={state} />
            </label>

            <label htmlFor="modalidad" className={Style.label}>
                <strong className={Style.strong} >Modalidad</strong>
                <select name="modalidad" required className={Style.input} id="modalidad" onChange={handleModalidadChange}>
                    <option selected value="">Modalidad seleccionada previamente</option>
                    <option value="Anual">Anual / 2025-I</option>
                    <option value="semestral">Semestral / 2025-II</option>
                    <option value="trimestral">Trimestral / 2025-II</option>
                </select>
            </label>

            <label htmlFor="carrera" className={Style.label} >
                <FontAwesomeIcon icon={faGraduationCap} size='lg' style={{ color: "#5271ff" }} />
                <strong className={Style.strong} >Carrera - Institucion</strong>
                <select name="carrera" required className={Style.input} id="carrera">
                    <option selected value="">Carrera seleccionada previamente</option>
                    <option value="">Ing. Informática - San Juan de los Morros</option>
                    <option value="">Ing. Informática - Calabozo</option>
                    <option value="">Medicina - San Juan de los Morros</option>
                </select>
            </label>

            <label className={Style.input} htmlFor="nombre">
                <FontAwesomeIcon icon={faListCheck} size='lg' style={{ color: "#5271ff" }} />
                <strong className={Style.strong} >Nombre Proceso</strong>
                <input type="text" name='proceso' value={'Nombre del proceso'} id='nombre' required className={Style.input} />
            </label>

            <label htmlFor="fInicio" className={Style.label} >
                <FontAwesomeIcon icon={faCalendarDays} size='lg' style={{ color: "#5271ff" }} />
                <strong className={Style.strong} >Fecha de inicio</strong>
                <input type="date" name='fInicio' id='fInicio' className={Style.input} required value={fechaInicio} onChange={(e) => setFechaInicio(e.target.value)} />
            </label>

            <label htmlFor="fCierre" className={Style.label} >
                <FontAwesomeIcon icon={faCalendarDays} size='lg' style={{ color: "#5271ff" }} />
                <strong className={Style.strong} >Fecha de Cierre</strong>
                <input type="date" name='fCierre' id='fCierre' className={Style.input} required value={fechaCierre} onChange={(e) => setFechaCierre(e.target.value)} />
            </label>

            <Submit /> 
        </form>
    );
}

export default EditProces;