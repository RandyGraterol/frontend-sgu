import { InputBox } from "./ImputBox/InputBox";
import Submit from "../../../particulas/SubmitButtons/Submit";
import Style from "../../../../public/estilosGenerales/formularios.module.css";


import {
  faUser,
  faLaptopFile,
  faLaptopCode,
  faClipboard,
  faPhone,
  faMapLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export const Form = ({ action, method }) => {
  return (
    <section className={Style.ScreenContainer}>
      <form className={Style.form} method={method}>
      <h1 className={Style.h1} style={{marginBottom : '7vh'}}>Información del estudiante</h1>

<div className={Style.dateContainer}>
  <div className={Style.halfContainer}>
    <div className={Style.infoBox}>
      <span className={Style.infoLabel} style={{ fontWeight: 'bold', color: '#555', fontSize: '1.1rem' }}>Primer apellido:</span>
      <p className={Style.infoText} style={{ margin: '5px 0', color: '#000' }}>Moreno</p>
    </div>
  </div>
  <div className={Style.halfContainer}>
    <div className={Style.infoBox}>
      <span className={Style.infoLabel} style={{ fontWeight: 'bold', color: '#555', fontSize: '1.1rem' }}>Segundo apellido:</span>
      <p className={Style.infoText} style={{ margin: '5px 0', color: '#000' }}>Ricardo</p>
    </div>
  </div>
</div>

<div className={Style.dateContainer}>
  <div className={Style.halfContainer}>
    <div className={Style.infoBox}>
      <span className={Style.infoLabel} style={{ fontWeight: 'bold', color: '#555', fontSize: '1.1rem' }}>Primer nombre:</span>
      <p className={Style.infoText} style={{ margin: '5px 0', color: '#000' }}>Ejemplo</p>
    </div>
  </div>
  <div className={Style.halfContainer}>
    <div className={Style.infoBox}>
      <span className={Style.infoLabel} style={{ fontWeight: 'bold', color: '#555', fontSize: '1.1rem' }}>Segundo nombre:</span>
      <p className={Style.infoText} style={{ margin: '5px 0', color: '#000' }}>Castrero</p>
    </div>
  </div>
</div>

<div className={Style.dateContainer}>
  <div className={Style.halfContainer}>
    <div className={Style.infoBox}>
      <span className={Style.infoLabel} style={{ fontWeight: 'bold', color: '#555', fontSize: '1.1rem' }}>Fecha de nacimiento:</span>
      <p className={Style.infoText} style={{ margin: '5px 0', color: '#000' }}>01/01/2000</p>
    </div>
  </div>
  <div className={Style.halfContainer}>
    <div className={Style.infoBox}>
      <span className={Style.infoLabel} style={{ fontWeight: 'bold', color: '#555', fontSize: '1.1rem' }}>Dirección:</span>
      <p className={Style.infoText} style={{ margin: '5px 0', color: '#000' }}>elmoreno1199@gmail.com</p>
    </div>
  </div>
</div>

<div className={Style.dateContainer}>
  <div className={Style.halfContainer}>
    <div className={Style.infoBox}>
      <span className={Style.infoLabel} style={{ fontWeight: 'bold', color: '#555', fontSize: '1.1rem' }}>Teléfono:</span>
      <p className={Style.infoText} style={{ margin: '5px 0', color: '#000' }}>04242556184</p>
    </div>
  </div>
  <div className={Style.halfContainer}>
    <div className={Style.infoBox}>
      <span className={Style.infoLabel} style={{ fontWeight: 'bold', color: '#555', fontSize: '1.1rem' }}>Género:</span>
      <p className={Style.infoText} style={{ margin: '5px 0', color: '#000' }}>Masculino</p>
    </div>
  </div>
</div>

<div className={Style.dateContainer}>
  <div className={Style.halfContainer}>
    <div className={Style.infoBox}>
      <span className={Style.infoLabel} style={{ fontWeight: 'bold', color: '#555', fontSize: '1.1rem' }}>Parroquia:</span>
      <p className={Style.infoText} style={{ margin: '5px 0', color: '#000' }}>Hombre</p>
    </div>
  </div>
  <div className={Style.halfContainer}>
    <div className={Style.infoBox}>
      <span className={Style.infoLabel} style={{ fontWeight: 'bold', color: '#555', fontSize: '1.1rem' }}>Etnía:</span>
      <p className={Style.infoText} style={{ margin: '5px 0', color: '#000' }}>Hombre</p>
    </div>
  </div>
</div>


      </form>
    </section>
  );
};
