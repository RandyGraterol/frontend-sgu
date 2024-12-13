import {Option} from '../Option/Options'
import './select.css'

export const Select = ({namess,placeholder,campo})=>{
	return (
		<select className="SelectPensum" name={namess}  >
			<Option campo={campo} value={campo} defaul/>
			<Option value="Valor 1" />
		</select>
	);
}