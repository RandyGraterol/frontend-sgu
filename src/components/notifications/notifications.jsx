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
   },
    { id: 8,
       mensaje: "Diseños de paginas web ventas electronicas",
       prioridad: "Media" ,
       checked:false
   },
    { id: 9,
       mensaje: "Autorizacion de token y revision de permisos",
       prioridad: "Media" ,
       checked:false
   },
    { id: 10,
       mensaje: "Automatizacion de compras realizadas por los usuarios",
       prioridad: "Alta" ,
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
            
            

            <section className={styles.sectionPrincipal}>

            <div className={`${styles.barraNavegacion} ${styles.divSectionPrincipal}`}>

            <div className={styles.inputIconSearchContainer}>
            <FontAwesomeIcon icon={faSearch} className={styles.iconSearch} />
            <input type="search" placeholder='Buscar notificación' className={styles.inputSearch} />
            </div>

            <button onClick={handleCrear} className={styles.buttonBarra}>Crear</button>
            <button className={styles.buttonBarra}>Seleccionar</button>
            <button className={styles.buttonBarra}>Eliminar todo</button>

            </div>

            <div className={`${styles.notificaciones} ${styles.divSectionPrincipal}`}>
             <ul className={styles.menuNotification}>
                 <li>C</li>
                 <li>D</li>
                 <li>ID</li>
                 <li>mensaje</li>
                 <li>Prioridad</li>
                 <li>Grupo usuario</li>
                 <li>Opciones</li>
             </ul>
            {notificaciones.map((notificacion) => (
                <section key={notificacion.id}>

                <div className={styles.divSectionNotifications}>

                 <Checkbox
                key={notificacion.id}
                checked={notificacion.checked}
                onChange={() => manejarCambioCheckbox(notificacion.id)}
            />
                </div>

                <div className={styles.divSectionNotifications}>
                <FontAwesomeIcon className={styles.iconMessage} icon={faEye} />
                </div>

                <div className={styles.divSectionNotifications}>
                <p>{notificacion.id}</p>
                </div>

                <div className={styles.divSectionNotifications}>

                <div className={styles.ocultarBarraDesplazamiento}>
                <p className={styles.parrafo}>{notificacion.mensaje}</p>
                </div>

                </div>


                <div className={styles.divSectionNotifications}>
                <p className={`${styles.prioridad} ${getColorFondo(notificacion.prioridad)}`}>
                {notificacion.prioridad}
                </p>
                </div>

                <div className={styles.divSectionNotifications}>
                <p>Estudiante</p>
                </div>

                <div className={`${styles.divSectionNotifications} ${styles.iconosCrudContainer}`}>
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