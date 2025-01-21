import {Option} from '../Options/Options'

import Style from "../../../../../public/estilosGenerales/formularios.module.css";


export const Select = ({namess,placeholder,campo,id})=>{
	return (
		<select className={Style.input} id={id} name={namess}  >
			<Option campo={campo} value={campo} defaul/>
			<Option value="Trimestral" />
			<Option value="Semestre" />
			<Option value="Anual" />
		</select>
	);
}