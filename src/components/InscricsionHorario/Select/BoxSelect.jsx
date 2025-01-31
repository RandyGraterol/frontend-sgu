import { Select } from './Select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import './boxSelect.css'

export const BoxSelect = ({materias, filtro, botonCambio, busqueda}) =>{
	return(
		<div className="BoxSelect">
	      <Select value={filtro} data={materias} OnBoton={botonCambio}/>
	      <FontAwesomeIcon onClick={busqueda} className="buscar" icon={faMagnifyingGlass} />
		</div>
	)
}