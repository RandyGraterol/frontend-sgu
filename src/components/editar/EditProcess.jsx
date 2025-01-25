import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListCheck, faCalendarDays, faListOl, faGraduationCap, faSliders, faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
import Submit from '../../particulas/SubmitButtons/Submit';

import Style from "../../../public/estilosGenerales/formularios.module.css";


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
        <div className={Style.ScreenContainer} >
        <form className={Style.form} onSubmit={handleSubmit}>
            <h1 className={Style.h1} >Editar Procesos</h1>

            {error && <p style={{ color: 'red' }}>{error}</p>} 

            <strong className={Style.strong} >Periodo Académico</strong>
            <label className={Style.label} >
                <FontAwesomeIcon icon={faListOl} size='lg' style={{ color: "#5271ff" }} />
                <input type="text" readOnly name='periodo' className={Style.input} value={state} />
            </label>

            <strong className={Style.strong} ><label htmlFor="modalidad">Modalidad</label></strong>
            <label htmlFor="modalidad" className={Style.label}>
            <FontAwesomeIcon icon={faSliders} size='lg' style={{ color: "#5271ff" }}/>
                <select name="modalidad" required className={Style.input} id="modalidad" onChange={handleModalidadChange}>
                    <option >Modalidad seleccionada previamente</option>
                    <option value="Anual">Anual / 2025-I</option>
                    <option value="semestral">Semestral / 2025-II</option>
                    <option value="trimestral">Trimestral / 2025-II</option>
                </select>
            </label>

            <div className={Style.dateContainer}>
                <div className={Style.halfContainer}>


                <strong className={Style.strong} ><label htmlFor="carrera">Carrera</label></strong>
            <label htmlFor="carrera" className={Style.label} >
                <FontAwesomeIcon icon={faGraduationCap} size='lg' style={{ color: "#5271ff" }} />
                <select name="carrera" required className={Style.input} id="carrera">
                    <option >Carrera seleccionada previamente</option>
                    <option value="">Ing. Informática </option>
                    <option value="">Ing. Informática </option>
                    <option value="">Medicina </option>
                </select>
            </label>


                </div>
                <div className={Style.halfContainer}>
                    <label htmlFor="institucion"> <strong className={Style.strong} > Institucion </strong> </label>
                    <label htmlFor="institucion" className={Style.label} >
                    <FontAwesomeIcon icon={faBuildingColumns} size='lg' style={{ color: "#5271ff" }}/>
                        <select className={Style.input} name="institucion" id="institucion">
                            <option value="">San juan de los morros</option>
                            <option value="">Calabozo</option>
                            <option value="">otro</option>

                        </select>
                    </label>

                </div>
            </div>
            
            <strong className={Style.strong} ><label htmlFor="nombre">Nombre Proceso</label></strong>
            <label className={Style.label} htmlFor="nombre">
                <FontAwesomeIcon icon={faListCheck} size='lg' style={{ color: "#5271ff" }} />
                <input type="text" name='proceso' value={'Nombre del proceso'} id='nombre' required className={Style.input} />
            </label>

            <div className={Style.dateContainer} >

            <div className={Style.halfContainer} >
            <strong className={Style.strong} ><label htmlFor="fInicio">Fecha de inicio</label></strong>
            <label htmlFor="fInicio" className={Style.label} >
                <FontAwesomeIcon icon={faCalendarDays} size='lg' style={{ color: "#5271ff" }} />
                <input type="date" name='fInicio' id='fInicio' className={Style.input} required value={fechaInicio} onChange={(e) => setFechaInicio(e.target.value)} />
            </label>
            </div>

            <div className={Style.halfContainer} >
            <label htmlFor="fCierre"><strong className={Style.strong} >Fecha de Cierre</strong></label>
            <label htmlFor="fCierre" className={Style.label} >
                <FontAwesomeIcon icon={faCalendarDays} size='lg' style={{ color: "#5271ff" }} />
                <input type="date" name='fCierre' id='fCierre' className={Style.input} required value={fechaCierre} onChange={(e) => setFechaCierre(e.target.value)} />
            </label>
            </div>

            </div>

            <Submit /> 
        </form>
        </div>
    );
}

export default EditProces;