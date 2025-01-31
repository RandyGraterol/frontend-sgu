import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Submit from "../../../particulas/SubmitButtons/Submit";
import Style from "/public/estilosGenerales/formularios.module.css";
import styles from "./form.module.css";

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

export const Form = ({ action, method }) => {
  return (
    <>
      <section className={styles.contains}>
        <div className={styles.header}>
          <div className={styles.boxImg}>
            <img src="https://www.4x4.ec/overlandecuador/wp-content/uploads/2017/06/default-user-icon-8.jpg" alt=""/>
          </div>
          <div className={styles.tituloPerfil}>
            <h1 className={styles.h1}>Rafael Oliveros</h1>
            <span className={styles.span}>Estudiante - Operador</span>
          </div>
        </div>
        <div className={styles.main}>

          <aside className={styles.aside}>

            <div className={styles.contactos}>
              <h2 className={styles.h2}>Contactos</h2>
              <p className={styles.p}><FontAwesomeIcon icon={faPhone} />58- 426-1425358</p>
              <p className={styles.p}><FontAwesomeIcon icon={faEnvelope } />rafaeloliveros@gmail.com</p>
              <p className={styles.p}><FontAwesomeIcon icon={faLocationDot} />Pueblo Nuevo/Calle Uruguay</p>
            </div>

            <div className={styles.informacion}>
              <h2 className={styles.h2}>Informacion</h2>
              <p className={styles.p}>Nombre:<span>Rafael Ernesto</span></p>
              <p className={styles.p}>Apellido:<span>Oliveros Aguilera</span></p>
              <p className={styles.p}>Edad:<span>39 Años</span></p>
              <p className={styles.p}>Cedula:<span>28.888.111</span></p>
              <p className={styles.p}>Nacimiento:<span>28/11/1999</span></p>
            </div>

          </aside>

          <aside className={styles.aside1}>
            <div className={styles.informacionPersonal}>
              <h2 className={styles.h2}>Info. del estudiante</h2>
              <p className={styles.p}>. Estatus:<span>Actico</span></p>
              <p className={styles.p}>. Periodo:<span>II</span></p>
              <p className={styles.p}>. Corte:<span>2014-1</span></p>
              <p className={styles.p}>. Semestre:<span>"4-5-7"</span></p>
              <p className={styles.p}>. Ednia:<span>Indio</span></p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
};
