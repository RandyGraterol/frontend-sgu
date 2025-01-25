import { faTrashCan, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./tablaCarrerasAgg.module.css";

export const TablaCarrerasAgg = ({ boton, onBotton }) => {
  if (boton) {
    return (
      <div className={style.cajaTable}>
        <table className={style.tablassss}>
          <thead className={style.thead}>
            <tr>
              <th>Carrera</th>
              <th>
                Accion
                <FontAwesomeIcon
                  onClick={onBotton}
                  className={style.salir}
                  icon={faCircleXmark}
                />
              </th>
            </tr>
          </thead>
          <tbody className={style.tbody}>
            <tr>
              <td className={style.carreras}>Agronomia</td>
              <td className={style.action}>
                <a href="google.com">
                  <FontAwesomeIcon icon={faTrashCan} />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
  return null;
};
