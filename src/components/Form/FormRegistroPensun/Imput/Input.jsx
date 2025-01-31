import Style from "../../../../../public/estilosGenerales/formularios.module.css";


export const Input = ({type,placeholder, id}) =>{
	return (
		<input className={Style.input} id={id}  type={type} placeholder={placeholder} required/>
	);
}