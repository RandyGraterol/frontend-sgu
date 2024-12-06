import { InputBox } from './moleculas/InputBox';
import {ButtomBox} from './moleculas/ButtomBox'
import '../style/form.css'
import {faLaptopFile,faLaptopCode,faClipboard,faPhone,faMapLocationDot,faEnvelope} from '@fortawesome/free-solid-svg-icons'
export const Form = ({action,method})=>{
	return (
		<form  method={method} >
			<InputBox type= "number" clase={faLaptopCode} placeholderr="Codigo Opsu" />
			<InputBox type= "text" clase={faLaptopFile} placeholderr="Nombre"/>
			<InputBox type= "text" clase={faClipboard} placeholderr="Descripcion"/>
			<InputBox type= "text" clase={faMapLocationDot} placeholderr="Direccion"/>
			<InputBox type= "tel" clase={faPhone} placeholderr="Telefono"/>
			<InputBox type= "email" clase={faEnvelope} placeholderr="Correo"/>
			<ButtomBox valor1="Enviar" valor2="volver"/>
		</form>
	);
}
