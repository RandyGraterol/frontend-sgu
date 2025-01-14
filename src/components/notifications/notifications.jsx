import styles from './notifications.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faSearch, faEnvelope, faTrash, faEdit ,faEye} from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import {useModal} from '../../hooks/modalWindow.jsx';

import CrearNotificacionForm from '../../particulas/crearNotificacion/crearNotificacion.jsx';

import Checkbox from '../../particulas/checkbox/checkbox.jsx';

const Notifications = () => {
    const [notificaciones, setNotificaciones] = useState([
        { 
            id: 1, 
            mensaje: "Proceso de Inscripción de estudiantes regulares asdasd asdasd asdasd asdasd asdasd asdasd asdasd asdasd asd.",
            prioridad: "Alta",
            checked:false
        },
        { 
            id: 2,
            mensaje: "Adición y retiro de estudiantes regulares.",
            prioridad: "Media" ,
            checked:false
        },
        { 
            id: 3, 
            mensaje: "Urgente: Revisión de documentos.",
            prioridad: "Baja" ,
            checked:false
        },
        { id: 4,
           mensaje: "Crear usuarios operadores nuevos.", 
           prioridad: "Alta" ,
           checked:false
       },
       { 
        id: 5,
        mensaje: "Revisar sistema en busca de posible malware.",
        prioridad: "Media" ,
        checked:false
    },
    { id: 6, 
        mensaje: "Centro de estudiantes , votaciones unerg (posible fraude)", 
        prioridad: "Baja" ,
        checked:false
    },
    { id: 7,
       mensaje: "Certificado de tesis y maestrias , periodo academico 2025",
       prioridad: "Baja" ,
       checked:false
   }
]);
    const [crearNotificacion,setCrearNotificacion]= useState(false);

    const {openModal,VentanaModal} = useModal();

    const handleCrear = ()=>{
        setCrearNotificacion(!crearNotificacion);
        openModal(crearNotificacion,<CrearNotificacionForm/>);
    }

    // Estado para las notificaciones seleccionadas
    const [notificacionesSeleccionadas, setNotificacionesSeleccionadas] = useState([]);

const manejarCambioCheckbox = (id) => {
    const notificacionesActualizadas = notificaciones.map(notificacion => {
        if (notificacion.id === id) {
            return { ...notificacion, checked: !notificacion.checked };
        }
        return notificacion;
    });
    setNotificaciones(notificacionesActualizadas);
};
    

    const getColorFondo = (prioridad) => {
        switch (prioridad.toLowerCase()) {
        case 'baja':
                return styles.baja; // Asegúrate de que estas clases estén definidas en tu CSS
            case 'media':
                return styles.media;
            case 'alta':
                return styles.alta;
            default:
                return styles.default; // Color por defecto
            }
        };



        return (
            <main className={styles.principal}>
            <VentanaModal />
            <aside className={styles.aside}>
            <div className={styles.divAside}>
            <FontAwesomeIcon className={styles.iconCampana} icon={faBell} />
            <h3>Notificaciones</h3>
            </div>
            <div className={styles.divAside}>
            <ul className={styles.menuDesordenadoAside}>
            <li>Super Admin</li>
            <li>Admin</li>
            <li>Operador</li>
            <li>Profesor</li>
            <li>Estudiante</li>
            </ul>
            </div>
            </aside>

            <section className={styles.sectionPrincipal}>
            <div className={`${styles.barraNavegacion} ${styles.divSectionPrincipal}`}>
            <div className={styles.inputIconSearchContainer}>
            <FontAwesomeIcon icon={faSearch} className={styles.iconSearch} />
            <input type="search" placeholder='Buscar notificación' className={styles.inputSearch} />
            </div>
            <button onClick={handleCrear} className={styles.buttonBarra}>Crear</button>
            <button className={styles.buttonBarra}>Modificar</button>
            <button className={styles.buttonBarra}>Eliminar</button>

            </div>

            <div className={`${styles.notificaciones} ${styles.divSectionPrincipal}`}>
            {notificaciones.map((notificacion) => (
                <section key={notificacion.id}>

                <div>
                 <Checkbox
                key={notificacion.id}
                checked={notificacion.checked}
                onChange={() => manejarCambioCheckbox(notificacion.id)}
            />
                </div>

                <div>
                <FontAwesomeIcon className={styles.iconMessage} icon={faEye} />
                </div>
                <div>
                <h4>Identificador</h4>
                <p>{notificacion.id}</p>
                </div>

                <div>
                <h4>Mensaje</h4>

                <div className={styles.ocultarBarraDesplazamiento}>
                <p className={styles.parrafo}>{notificacion.mensaje}</p>
                </div>

                </div>


                <div>
                <h4>Prioridad</h4>
                <p className={`${styles.prioridad} ${getColorFondo(notificacion.prioridad)}`}>
                {notificacion.prioridad}
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
                ))}
            </div>
            </section>
            </main>
            );
    };

    export default Notifications;