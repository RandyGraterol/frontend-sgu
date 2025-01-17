import { InputBox } from "./ImputBox/InputBox";

import Submit from "../../../particulas/SubmitButtons/Submit";
import Style from "../../../../public/estilosGenerales/formularios.module.css";


import {
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
        <h1 className={Style.h1}>Instituto</h1>
        <InputBox infoLabel="Codigo Opsu" id="Codigo Opsu"  placeholder="0310" type="number"  clase={faLaptopCode} />
        <InputBox infoLabel="Nombre" id="Nombre" type="text" placeholder="Ricardo" clase={faLaptopFile} />
        <InputBox infoLabel="Descripcion" id="Descripcion" placeholder=" ejemplo " type="text" clase={faClipboard} />
        <InputBox infoLabel="Direccion" id="Direccion" placeholder="castrero" type="text" clase={faMapLocationDot} />
        <InputBox infoLabel="Telefono" id="Telefono" placeholder="04267456892" type="tel" clase={faPhone} />
        <InputBox infoLabel="Correo" id="Telefono" placeholder="elmoreno1199@gmail.com" type="email" clase={faEnvelope} />
        <Submit/>
      </form>
    </section>
  );
};
