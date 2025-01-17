import React, { useState } from 'react';
import styles from './crearNotificacion.module.css';

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
            <h2>Crear Notificación</h2>
                <label>Título</label>
                <input
                    type="text"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)} // Actualiza el estado
                    required
                />
                <label>Mensaje</label>
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMensaje(e.target.value)} // Actualiza el estado
                    required
                />
                <label>Grupo de Usuario</label>
                <input
                    type="text"
                    value={grupoUsuario}
                    onChange={(e) => setGrupoUsuario(e.target.value)} // Actualiza el estado
                    required
                />
                <label>Prioridad</label>
                <select
                    value={prioridad}
                    onChange={(e) => setPrioridad(e.target.value)} // Actualiza el estado
                >
                    <option value="Alta">Alta</option>
                    <option value="Media">Media</option>
                    <option value="Baja">Baja</option>
                </select>
                <button type="submit">Crear notificación</button>
            </form>
        </>
    );
};

export default CrearNotificacionForm;