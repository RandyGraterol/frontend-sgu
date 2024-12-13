import { InputBox } from "./ImputBox/InputBox";
import { ButtomBox } from "./ButtomBox/ButtomBox";
import "./form.css";
import './contenedorInstituto.css'
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
    <div className="ContenedorInstituto">
      <form className="FromInstituto" method={method}>
        <h1>Instituto</h1>
        <InputBox infoLabel="Codigo Opsu" type="number" clase={faLaptopCode} />
        <InputBox infoLabel="Nombre" type="text" clase={faLaptopFile} />
        <InputBox infoLabel="Descripcion" type="text" clase={faClipboard} />
        <InputBox infoLabel="Direccion" type="text" clase={faMapLocationDot} />
        <InputBox infoLabel="Telefono" type="tel" clase={faPhone} />
        <InputBox infoLabel="Correo" type="email" clase={faEnvelope} />
        <ButtomBox valor1="Enviar" valor2="volver" />
      </form>
    </div>
  );
};
