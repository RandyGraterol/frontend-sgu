import {Option} from '../Option/Options'

import Style from "../../../../../public/estilosGenerales/formularios.module.css";

export const Select = ({namess,campo, id})=>{
	return (
		<select className={Style.input} id={id} name={namess}  >
			<Option campo={campo} value={campo} defaul/>
			<Option value="Valor 1" />
		</select>
	);
}