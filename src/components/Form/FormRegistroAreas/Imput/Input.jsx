import Style from "../../../../../public/estilosGenerales/formularios.module.css"
export const Input = ({type,placeholderr}) =>{
	return (
		<input type={type} placeholder={placeholderr} className={Style.input} required/>
	);
}