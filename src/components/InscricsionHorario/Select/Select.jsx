
import { Option } from '../Option/Option';

export const Select = ({ data, value, OnBoton }) => {
  return (
	    <select className="SelectMateria" value={value} onChange={OnBoton}>
	    	<Option value="vacio" materia="Seleccione Una Materia"/>
	      {data.map((element, index) => (
	        <Option key={index} value={index} materia={element.Nombre} />
	      ))}
	    </select>
  );
};