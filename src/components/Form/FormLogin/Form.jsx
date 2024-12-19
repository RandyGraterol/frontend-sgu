import { InputBox } from './ImputBox/InputBox';
import {ButtomBox} from './ButtomBox/ButtomBox'
import './form.css'
import {faLock,faUser	} from '@fortawesome/free-solid-svg-icons'

export const Form = ({action,method})=>{

	return (
		<form  method={method} >
			<InputBox type= "text" clase={faUser} placeholderr="Usuario" />
			<InputBox type= "password" clase={faLock} placeholderr="Clave"/>
			<ButtomBox valor1="Enviar" valor2="volver"/>
		</form>
	);
}
