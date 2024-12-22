import {Option} from './micro-particulas/Options'
import '../../../style/select.css'

export const Select = ({namess,placeholder,campo})=>{
	return (
		<select name={namess}  >
			<Option campo={campo} value={campo} defaul/>
			<Option value="Trimestral" />
			<Option value="Semestre" />
			<Option value="Anual" />
		</select>
	);
}