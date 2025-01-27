import Style from "../../../../../public/estilosGenerales/formularios.module.css";

export const Input = ({type,id, placeholder}) =>{
	return (
		<input  className={Style.input} type={type} id={id} placeholder={placeholder} required/>
	);
}