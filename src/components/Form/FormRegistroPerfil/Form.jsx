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
        <h1 className={Style.h1}>Información del estudiante</h1>

        <div className={Style.dateContainer}>

          <div className={Style.halfContainer} >

          <InputBox infoLabel="Primer apellido" id="Codigo Opsu"  placeholder="moreno" type="text"  clase={faUser} />            
          </div>
          <div className={Style.halfContainer} >

          <InputBox infoLabel="Segundo apellido" id="Nombre" type="text" placeholder="Ricardo" clase={faUser} />
          </div>

        </div>

        <div className={Style.dateContainer}>

          <div className={Style.halfContainer} >
          <InputBox infoLabel="Primer nombre" id="Descripcion" placeholder=" ejemplo " type="text" clase={faUser} />
          </div>
          <div className={Style.halfContainer} >
          <InputBox infoLabel="Segundo nombre" id="Direccion" placeholder="castrero" type="text" clase={faUser} />
          </div>

        </div>

        <div className={Style.dateContainer} >
          <div className={Style.halfContainer}>
        <InputBox infoLabel="Fecha de nacimiento" id="Fecha"  type="date" />
          </div>
          <div className={Style.halfContainer}>
        <InputBox infoLabel="Dirección" id="Telefono" placeholder="elmoreno1199@gmail.com" type="email" clase={faMapLocationDot} />
          </div>
        </div>

        <div className={Style.dateContainer} >
          <div className={Style.halfContainer}>
        <InputBox infoLabel="Télefono" id="Telefono" placeholder="04242556184" type="tel" clase={faPhone} />            
          </div>
          <div className={Style.halfContainer}>
        <InputBox infoLabel="Género" id="Telefono" placeholder="Hombre" type="text" clase={faUser} />
          </div>
        </div>

        <div className={Style.dateContainer} >
          <div className={Style.halfContainer}>
        <InputBox infoLabel="Parroquía" id="Telefono" placeholder="Hombre" type="text" clase={faMapLocationDot} />            
          </div>
          <div className={Style.halfContainer}>
        <InputBox infoLabel="Etnía" id="Telefono" placeholder="Hombre" type="text" clase={faUser} />
          </div>
        </div>

        <Submit/>
      </form>
    </section>
  );
};
