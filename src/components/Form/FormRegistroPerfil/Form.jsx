import { InputBox } from "./ImputBox/InputBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Submit from "../../../particulas/SubmitButtons/Submit";
import Style from "../../../../public/estilosGenerales/formularios.module.css";

import {
  faCamera,
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
    <>
      <section className={Style.ScreenContainer}>
        <form className={Style.Form} method={method}>
          <div className={Style.Global}>
            <div className={Style.Main}>
              <h3 className={Style.Main_Title}>Información del usuario</h3>
              <h3 className={Style.Main_Title}>Datos Personales:</h3>
              <div className={Style.Paragraph_Group}>
                <p className={Style.Paragraph}>Dirección: </p>
                <p className={Style.Paragraph_Text}>Castrero</p>
                <p className={Style.Paragraph}>Fecha de Nacimiento:</p>
                <p className={Style.Paragraph_Text}>22/03/2025</p>
              </div>
              <h3 className={Style.Main_Title}>Otros:</h3>
              <div className={Style.Paragraph_Group}>
                <p className={Style.Paragraph}>Género:</p>
                <p className={Style.Paragraph_Text}>Masculino</p>
                <p className={Style.Paragraph}>Etnía:</p>
                <p className={Style.Paragraph_Text}>Genghis Khan</p>
              </div>
            </div>
            <div className={Style.Names}>
              <div className={Style.Icon}>
                <FontAwesomeIcon icon={faUser} className={Style.Icon_User} />
                <FontAwesomeIcon icon={faCamera} className={Style.Icon_Cam} />
              </div>
              <h3 className={Style.Names_Title}>Nombre Completo:</h3>
              <div className={Style.PGroup}>
                <p className={Style.PGroup_Paragraph}>Tom</p>
                <p className={Style.PGroup_Paragraph}>Clancys</p>
                <p className={Style.PGroup_Paragraph}>Rainbow</p>
                <p className={Style.PGroup_Paragraph}>Six</p>
              </div>
              <h3 className={Style.Names_Title}>Contacto:</h3>
              <div className={Style.PGroup}>
                <FontAwesomeIcon icon={faPhone} className={Style.Pgroup_Icon} />
                <p className={Style.PGroup_Paragraph}>04242525994</p>
              </div>
              <div className={Style.PGroup}>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className={Style.Pgroup_Icon}
                />
                <p className={Style.PGroup_Paragraph}>pepe@gmail.com</p>
              </div>
              <h3 className={Style.Names_Title}>Parroquía:</h3>
              <div className={Style.PGroup}>
                <p className={Style.PGroup_Paragraph}>Guárico</p>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};
