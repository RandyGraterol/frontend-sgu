import '../../style/tablaCarrerasAgg.css'
import '../../style/cajaTable.css'
import {faTrashCan,faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export const TablaCarrerasAgg = ({boton,onBotton}) => {
  if (boton) {
    return (
    <div className='cajaTable'>
      <table className="table">
      <tr>
        <FontAwesomeIcon onClick={onBotton} className="salir" icon={faCircleXmark} />
      </tr>
        <thead>
          <tr>
            <th>Carrera</th>
            <th>Accion</th>
          </tr>
        </thead>
         <tbody>
          <tr>
            <td className="carreras">Agronomia</td>
            <td className="action" >
                <a href="google.com" >
                  <FontAwesomeIcon icon={faTrashCan} />
                </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
  }
};
