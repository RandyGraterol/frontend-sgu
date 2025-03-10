import React,{useState,useEffect,useContext} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Submit from "../../../particulas/SubmitButtons/Submit";
import Style from "/public/estilosGenerales/formularios.module.css";
import styles from "./form.module.css";
//importar context
import {userContext} from '@components/../App.jsx';

import {
  faUser,
  faPhone,
  faCamera,
  faEnvelope,
  faClipboard,
  faLaptopFile,
  faLaptopCode,
  faLocationDot,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";

export const Form = ({action, method}) => {
  const user = useContext(userContext);
  return (
    <>
      <section className={styles.contains}>
        <div className={styles.header}>
          <div className={styles.boxImg}>
            <img src="/userPerfil.jpg" alt=""/>
          </div>
          <div className={styles.tituloPerfil}>
            <h1 className={styles.h1}>{user && `${user.data.usuario.primerNombre} ${user.data.usuario.primerApellido}`}</h1>
            <span className={styles.span}>Estudiante - Operador</span>
          </div>
        </div>
        <div className={styles.main}>

          <aside className={styles.aside}>

            <div className={styles.contactos}>
              <h2 className={styles.h2}>Contactos</h2>
              <p className={styles.p}><FontAwesomeIcon icon={faPhone} />{user && user?.data?.usuario?.telf?.length === 0 ? 'Sin telefono' : user?.data?.usuario?.telf}</p>
              <p className={styles.p}><FontAwesomeIcon icon={faEnvelope } />{user && user.data.usuario.email}</p>
              <p className={styles.p}><FontAwesomeIcon icon={faLocationDot} />{user && user.data.usuario.direccion}</p>
            </div>

            <div className={styles.informacion}>
              <h2 className={styles.h2}>Informacion</h2>
              <p className={styles.p}>Segundo Nombre:<span>{user && user.data.usuario.segundoNombre}</span></p>
              <p className={styles.p}>Segundo Apellido:<span>{user && user.data.usuario.segundoApellido}</span></p>
              <p className={styles.p}>Cedula:<span>{user && user.data.usuario.numIdentificacion}</span></p>
              <p className={styles.p}>Nacimiento:<span>{user && user.data.usuario.fechaNacimiento.split('T')[0]}</span></p>
            </div>

          </aside>

          <aside className={styles.aside1}>
            <div className={styles.informacionPersonal}>
              <h2 className={styles.h2}>Info. del estudiante</h2>
              <p className={styles.p}>. Estatus:<span>Actico</span></p>
              <p className={styles.p}>. Periodo:<span>II</span></p>
              <p className={styles.p}>. Corte:<span>2014-1</span></p>
              <p className={styles.p}>. Semestre:<span>"4-5-7"</span></p>
              <p className={styles.p}>. Etnia:<span>Indio</span></p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};
