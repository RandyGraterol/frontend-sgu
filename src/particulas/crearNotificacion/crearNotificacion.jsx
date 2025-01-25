import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import {faPeopleGroup,faScaleUnbalancedFlip,faMessage,faT} from '@fortawesome/free-solid-svg-icons';
import styles from './crearNotificacion.module.css';
import Submit from '../SubmitButtons/Submit'
import Style from "../../../public/estilosGenerales/formularios.module.css";

const CrearNotificacionForm = () => {

    // Estado para los campos del formulario
    const [titulo, setTitulo] = useState('');
    const [message, setMensaje] = useState('');
    const [grupoUsuario, setGrupoUsuario] = useState('');
    const [prioridad, setPrioridad] = useState('Alta'); // Valor por defecto

    // Función para manejar el envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita el comportamiento por defecto del formulario

        // Crea el objeto de notificación
        const notificacion = {
            titulo,
            message,
            grupoUsuario,
            prioridad,
        };

        try {
            const response = await fetch('http://localhost:3000/registerNotificacion', {
                method: 'POST', // Método de la solicitud
                headers: {
                    'Content-Type': 'application/json', // Tipo de contenido
                },
                body: JSON.stringify(notificacion), // Convierte el objeto a JSON
            });

            if (!response.ok) {
                throw new Error('Error al crear la notificación');
            }

            const data = await response.json(); // Obtiene la respuesta en formato JSON
            console.log('Notificación creada:', data);
            // Aquí puedes agregar lógica adicional, como limpiar el formulario o mostrar un mensaje de éxito
        } catch (error) {
            console.error('Error:', error);
            // Manejo de errores, como mostrar un mensaje al usuario
        }
    };

    return (
        <>
            <form className={styles.formulario} onSubmit={handleSubmit}>
            <h2 className={Style.h2}>Crear Notificación</h2>
                <label htmlFor='titulo'>Título</label>
                <label htmlFor="titulo" className={Style.label}>
                <FontAwesomeIcon icon={faT} size='lg' style={{ color: "#5271ff" }}  />
                <input
                className={Style.input}
                    id='titulo'
                    placeholder='Apertura del poceso de inscripcion'
                    type="text"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)} // Actualiza el estado
                    required
                />
                </label>

                <label htmlFor='mensaje' >Mensaje</label>
                <label htmlFor="mensaje" className={Style.label}>
                <FontAwesomeIcon icon={faMessage} size='lg' style={{ color: "#5271ff" }} />
                <input
                    className={Style.input}
                    placeholder='nueva notficacion'
                    id='mensaje'
                    type="text"
                    value={message}
                    onChange={(e) => setMensaje(e.target.value)} // Actualiza el estado
                    required
                />
                </label>
                
                <label htmlFor='gu' >Grupo de Usuario</label>
                <label htmlFor="gu" className={Style.label}>
                
                <FontAwesomeIcon icon={faPeopleGroup} size='lg' style={{ color: "#5271ff" }} />
                <input
                    type="text"
                    id='gu'
                    className={Style.input}
                    placeholder='estudiantes'
                    value={grupoUsuario}
                    onChange={(e) => setGrupoUsuario(e.target.value)} // Actualiza el estado
                    required
                />
                </label>
                <label>Prioridad</label>
                <label className={Style.label}>
                <FontAwesomeIcon icon={faScaleUnbalancedFlip} size='lg' style={{ color: "#5271ff" }} />
                <select
                    className={Style.input}
                    value={prioridad}
                    onChange={(e) => setPrioridad(e.target.value)} // Actualiza el estado
                >
                    <option value="Alta">Alta</option>
                    <option value="Media">Media</option>
                    <option value="Baja">Baja</option>
                </select>
                </label>
                <Submit/>
            </form>
        </>
    );
};

export default CrearNotificacionForm;