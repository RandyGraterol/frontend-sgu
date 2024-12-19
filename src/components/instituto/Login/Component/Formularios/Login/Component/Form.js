import { InputBox } from './moleculas/InputBox';
import {ButtomBox} from './moleculas/ButtomBox'
import {faLock,faUser	} from '@fortawesome/free-solid-svg-icons'
import '../style/form.css'

export const Form = ({action,method})=>{

	return (
		<form  method={method} >
			<InputBox type= "text" clase={faUser} placeholderr="Usuario" />
			<InputBox type= "password" clase={faLock} placeholderr="Clave"/>
			<ButtomBox valor1="Enviar" valor2="volver"/>
		</form>
	);
}
