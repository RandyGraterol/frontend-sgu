
import Style from "../../../../../public/estilosGenerales/formularios.module.css";


export const Input = ({id,type,placeholder}) =>{
	return (
		<input id={id} className={Style.input} type={type} placeholder={placeholder} required/>
	);
}