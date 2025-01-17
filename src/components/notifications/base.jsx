import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import styles from './TuEstilo.module.css'; // Asegúrate de importar tus estilos

const Notificacion = () => {
    const pRef = useRef(null); // Crear una referencia para la etiqueta de prioridad
    const [colorFondo, setColorFondo] = useState('white'); // Estado para el color de fondo

    useEffect(() => {
        // Verificar si la referencia está disponible
        if (pRef.current) {
            const prioridadTexto = pRef.current.innerText; // Obtener el texto de la etiqueta <p>

            // Cambiar el color de fondo según el texto
            switch (prioridadTexto.toLowerCase()) {
                case 'baja':
                    setColorFondo('lightgreen');
                    break;
                case 'media':
                    setColorFondo('lightyellow');
                    break;
                case 'alta':
                    setColorFondo('lightcoral');
                    break;
                default:
                    setColorFondo('white'); // Color por defecto
            }
        }
    }, []); // Solo se ejecuta una vez al montar el componente

    // useEffect para observar cambios en el texto de prioridad
    useEffect(() => {
        const handleMutation = () => {
            if (pRef.current) {
                const prioridadTexto = pRef.current.innerText; // Obtener el texto actualizado
                switch (prioridadTexto.toLowerCase()) {
                    case 'baja':
                        setColorFondo('lightgreen');
                        break;
                    case 'media':
                        setColorFondo('lightyellow');
                        break;
                    case 'alta':
                        setColorFondo('lightcoral');
                        break;
                    default:
                        setColorFondo('white'); // Color por defecto
                }
            }
        };

        // Crear un observador de mutaciones
        const observer = new MutationObserver(handleMutation);
        if (pRef.current) {
            observer.observe(pRef.current, { childList: true, subtree: true });
        }

        // Limpiar el observador al desmontar
        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section>
            <div>
                <FontAwesomeIcon className={styles.iconMessage} icon={faEnvelope} />
            </div>

            <div>
                <h4>Identificador</h4>
                <p>1</p>
            </div>

            <div>
                <h4>Mensaje</h4>
                <div>
                    <p className={styles.parrafo}>Proceso de Inscripción de estudiantes regulares.</p>
                </div>
            </div>

            <div>
                <h4>Prioridad</h4>
                <p ref={pRef} className={styles.prioridad} style={{ backgroundColor: colorFondo }}>
                    Alta {/* Este texto puede cambiar manualmente */}
                </p>
            </div>

            <div>
                <h4>Grupo U.</h4>
                <p>Estudiante</p>
            </div>

            <div className={styles.iconosCrudContainer}>
                <FontAwesomeIcon icon={faEdit} className={styles.iconosCrud} />
                <FontAwesomeIcon icon={faTrash} className={styles.iconosCrud} />
            </div>
        </section>
    );
};

export default Notificacion;